#!/usr/bin/env python3
"""
BBBurgers Telegram Bot
Простой чат-бот с разделением функционала для пользователей и админов
"""

import os
import logging
import asyncio
from datetime import datetime, timedelta
from typing import Optional, Dict, Any
import uuid
from pathlib import Path

from telegram import Bot, Update, InlineKeyboardButton, InlineKeyboardMarkup, ReplyKeyboardMarkup, KeyboardButton
from telegram.ext import Application, CommandHandler, MessageHandler, CallbackQueryHandler, filters
from telegram.constants import ParseMode
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel, Field
from dotenv import load_dotenv

# Загрузка переменных окружения
ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Настройка логирования
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Конфигурация
TELEGRAM_TOKEN = os.getenv('TELEGRAM_TOKEN')
ADMIN_ID = int(os.getenv('ADMIN_ID', '0'))
MONGO_URL = os.getenv('MONGO_URL', 'mongodb://localhost:27017')
DB_NAME = os.getenv('DB_NAME', 'bbburgers')

if not TELEGRAM_TOKEN:
    raise ValueError("TELEGRAM_TOKEN не найден в переменных окружения")

if not ADMIN_ID:
    raise ValueError("ADMIN_ID не найден в переменных окружения")

# MongoDB подключение
client = AsyncIOMotorClient(MONGO_URL)
db = client[DB_NAME]

# Модели данных
class User(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    telegram_id: int
    username: Optional[str] = None
    name: Optional[str] = None
    birthday: Optional[str] = None
    favorite_burger: Optional[str] = None
    referral_code: Optional[str] = None
    referred_by: Optional[str] = None
    rank: str = "guest"
    story_mentions: int = 0
    visits: int = 0
    referrals: int = 0
    bonuses: int = 0
    registration_date: datetime = Field(default_factory=datetime.utcnow)
    last_activity: datetime = Field(default_factory=datetime.utcnow)
    is_registered: bool = False

# Сообщения
MESSAGES = {
    "welcome": """Привет! 👋 Добро пожаловать в клуб BBРезидентов.
Это секретное общество тех, кто знает толк в бургерах 😎

Сейчас оформим твою анкету и ты получишь первый подарок 🍔""",
    
    "already_registered": """🍔 Вы уже зарегистрированы в клубе BBРезидентов!

Используйте меню ниже для навигации или команды:
• /menu - Главное меню
• /admin - Панель администратора (только для админов)""",
    
    "enter_name": "Как тебя зовут?",
    "enter_birthday": "Введи дату рождения (например: 15.03.1995):",
    "choose_burger": "Выбери любимый бургер:",
    "enter_referral": "Есть реферальный код от друга? (или отправь 'нет')",
    
    "registration_complete": """✅ Добро пожаловать в клуб BBРезидентов!

Твой первый подарок: 🥤 Лимонад в подарок!
Просто покажи это сообщение на кассе.

Вижу, ты с нами. Значит, ты умеешь выбирать 😎""",
    
    "main_menu": "Главное меню BBРезидентов:",
    "admin_menu": "Панель администратора:",
    
    "not_registered": "Для начала нужно зарегистрироваться! Отправь /start",
    "admin_only": "Эта функция доступна только администраторам."
}

# Варианты бургеров
BURGER_OPTIONS = [
    "BBClassic", "BBCheeseburger", "BBBacon", "BBChicken", 
    "BBVeggie", "BBSpecial", "Свой вариант"
]

# Ранги
RANKS = {
    "guest": "🧑 Гость",
    "resident": "👤 BBРезидент", 
    "super_resident": "🦸 СуперРезидент",
    "ambassador": "👑 Амбассадор"
}

# Состояния пользователей
user_states: Dict[int, Dict[str, Any]] = {}

# Функции для работы с базой данных
async def get_user(telegram_id: int) -> Optional[User]:
    """Получить пользователя из базы данных"""
    try:
        user_data = await db.users.find_one({"telegram_id": telegram_id})
        if user_data:
            return User(**user_data)
        return None
    except Exception as e:
        logger.error(f"Ошибка получения пользователя {telegram_id}: {e}")
        return None

async def save_user(user: User):
    """Сохранить пользователя в базу данных"""
    try:
        await db.users.replace_one(
            {"telegram_id": user.telegram_id}, 
            user.dict(), 
            upsert=True
        )
    except Exception as e:
        logger.error(f"Ошибка сохранения пользователя {user.telegram_id}: {e}")

# Клавиатуры
def get_user_keyboard():
    """Клавиатура для обычных пользователей"""
    keyboard = [
        [KeyboardButton("🎁 Оффер месяца"), KeyboardButton("📊 Мой статус")],
        [KeyboardButton("🍔 Тайное меню"), KeyboardButton("💬 Пригласить друга")],
        [KeyboardButton("📸 Отметить в сторис"), KeyboardButton("🎂 День рождения")]
    ]
    return ReplyKeyboardMarkup(keyboard, resize_keyboard=True, persistent=True)

def get_admin_keyboard():
    """Клавиатура для администратора"""
    keyboard = [
        [KeyboardButton("👥 Пользователи"), KeyboardButton("📢 Рассылка")],
        [KeyboardButton("📈 Статистика"), KeyboardButton("⚙️ Настройки")],
        [KeyboardButton("🔙 Пользовательское меню")]
    ]
    return ReplyKeyboardMarkup(keyboard, resize_keyboard=True, persistent=True)

def get_burger_keyboard():
    """Клавиатура для выбора бургера"""
    keyboard = []
    for i in range(0, len(BURGER_OPTIONS), 2):
        row = [InlineKeyboardButton(BURGER_OPTIONS[i], callback_data=f"burger_{i}")]
        if i + 1 < len(BURGER_OPTIONS):
            row.append(InlineKeyboardButton(BURGER_OPTIONS[i + 1], callback_data=f"burger_{i + 1}"))
        keyboard.append(row)
    return InlineKeyboardMarkup(keyboard)

# Обработчики команд
async def start_command(update: Update, context):
    """Обработчик команды /start"""
    telegram_id = update.effective_user.id
    username = update.effective_user.username
    
    user = await get_user(telegram_id)
    
    if user and user.is_registered:
        # Пользователь уже зарегистрирован
        if telegram_id == ADMIN_ID:
            await update.message.reply_text(
                MESSAGES["already_registered"], 
                reply_markup=get_admin_keyboard()
            )
        else:
            await update.message.reply_text(
                MESSAGES["already_registered"], 
                reply_markup=get_user_keyboard()
            )
        return

    # Начать регистрацию
    if not user:
        user = User(telegram_id=telegram_id, username=username)
        await save_user(user)
    
    await update.message.reply_text(MESSAGES["welcome"])
    await update.message.reply_text(MESSAGES["enter_name"])
    
    # Установить состояние регистрации
    user_states[telegram_id] = {"step": "name", "data": {}}

async def admin_command(update: Update, context):
    """Обработчик команды /admin"""
    telegram_id = update.effective_user.id
    
    if telegram_id != ADMIN_ID:
        await update.message.reply_text(MESSAGES["admin_only"])
        return
    
    user = await get_user(telegram_id)
    if not user or not user.is_registered:
        await update.message.reply_text(MESSAGES["not_registered"])
        return
    
    await update.message.reply_text(
        MESSAGES["admin_menu"], 
        reply_markup=get_admin_keyboard()
    )
    # Проверить, находится ли пользователь в процессе регистрации
    if telegram_id in user_states:
        await handle_registration_step(update, context, text)
        return
    
    # Проверить регистрацию пользователя
    user = await get_user(telegram_id)
    if not user or not user.is_registered:
        await update.message.reply_text(MESSAGES["not_registered"])
        return
    
    # Обработка кнопок меню
    await handle_menu_buttons(update, context, text)

async def handle_registration_step(update: Update, context, text: str):
    """Обработка шагов регистрации"""
    telegram_id = update.effective_user.id
    state = user_states[telegram_id]
    
    # Обработка рассылки для админа
    if state["step"] == "broadcast" and telegram_id == ADMIN_ID:
        users = await db.users.find({"is_registered": True}).to_list(1000)
        success_count = 0
        
        for user_data in users:
            try:
                await context.bot.send_message(
                    chat_id=user_data["telegram_id"], 
                    text=f"📢 Сообщение от BB&Burgers:\n\n{text}"
                )
                success_count += 1
            except Exception as e:
                logger.error(f"Не удалось отправить сообщение пользователю {user_data['telegram_id']}: {e}")
        
        await update.message.reply_text(
            f"✅ Рассылка завершена!\nОтправлено: {success_count}/{len(users)} пользователям"
        )
        del user_states[telegram_id]
        return
    
    # Обычная регистрация
    if state["step"] == "name":
        state["data"]["name"] = text
        state["step"] = "birthday"
        await update.message.reply_text(MESSAGES["enter_birthday"])
        
    elif state["step"] == "birthday":
        state["data"]["birthday"] = text
        state["step"] = "burger"
        await update.message.reply_text(
            MESSAGES["choose_burger"], 
            reply_markup=get_burger_keyboard()
        )
        
    elif state["step"] == "referral":
        if text.lower() != "нет":
            # Проверить реферальный код
            referring_user = await db.users.find_one({"referral_code": text})
            if referring_user:
                state["data"]["referred_by"] = text
                # Увеличить счетчик рефералов
                await db.users.update_one(
                    {"referral_code": text},
                    {"$inc": {"referrals": 1}}
                )
        
        # Завершить регистрацию
        await complete_registration(update, context)

async def complete_registration(update: Update, context):
    """Завершение регистрации пользователя"""
    telegram_id = update.effective_user.id
    state = user_states[telegram_id]
    
    user = await get_user(telegram_id)
    if not user:
        await update.message.reply_text("Ошибка регистрации. Попробуйте /start снова.")
        return
    
    # Обновить данные пользователя
    user.name = state["data"]["name"]
    user.birthday = state["data"]["birthday"]
    user.favorite_burger = state["data"]["favorite_burger"]
    user.referred_by = state["data"].get("referred_by")
    user.is_registered = True
    user.rank = "resident"
    user.referral_code = f"BB{telegram_id}"
    
    await save_user(user)
    
    # Очистить состояние
    del user_states[telegram_id]
    
    await update.message.reply_text(
        MESSAGES["registration_complete"],
        reply_markup=get_user_keyboard()
    )
    
    # Показать соответствующее меню
    if telegram_id == ADMIN_ID:
        await update.message.reply_text(
            MESSAGES["admin_menu"], 
            reply_markup=get_admin_keyboard()
        )
    else:
        await update.message.reply_text(
            MESSAGES["main_menu"], 
            reply_markup=get_user_keyboard()
        )

async def handle_menu_buttons(update: Update, context, text: str):
    """Обработка нажатий кнопок меню"""
    telegram_id = update.effective_user.id
    user = await get_user(telegram_id)
    
    # Пользовательские кнопки
    if text == "🎁 Оффер месяца":
        offer_text = "🎁 Твой оффер месяца:\n\n🍟 Картофель фри в подарок!\nПросто покажи это сообщение на кассе."
        await update.message.reply_text(offer_text)
        
    elif text == "📊 Мой статус":
        status_text = f"""📊 Твой статус в клубе:

{RANKS[user.rank]} | Ранг: {user.rank.title()}

📈 Активность:
• Отметки в сторис: {user.story_mentions}
• Визиты: {user.visits}  
• Приглашённые друзья: {user.referrals}
• Бонусы: {user.bonuses}"""
        await update.message.reply_text(status_text)
        
    elif text == "🍔 Тайное меню":
        if user.rank in ["super_resident", "ambassador"]:
            secret_text = """🍔 Тайное меню доступно!

🔥 BB Secret Burger - 590₽
🌶️ BB Spicy Special - 650₽
🥩 BB Premium Beef - 790₽

Эти позиции доступны только СуперРезидентам и Амбассадорам!"""
            await update.message.reply_text(secret_text)
        else:
            await update.message.reply_text("Тайное меню доступно только СуперРезидентам и выше! Набери больше активности 😎")
            
    elif text == "💬 Пригласить друга":
        invite_text = f"""💬 Приглашай друзей в клуб!

Твой реферальный код: <code>{user.referral_code}</code>

👥 Приглашено друзей: {user.referrals}
🎯 До звания Амбассадор: {max(0, 3 - user.referrals)} друзей

Когда друг использует твой код - вы оба получаете бонусы!"""
        await update.message.reply_text(invite_text, parse_mode=ParseMode.HTML)
        
    elif text == "📸 Отметить в сторис":
        stories_text = """📸 Как отметить нас в сторис:

1. Сделай фото с нашими бургерами
2. Отметь @bbburgers в своих историях
3. Пришли сюда скриншот или ссылку
4. Получи бонусы за активность!

После 3 отметок ты станешь СуперРезидентом!"""
        await update.message.reply_text(stories_text)
        
    elif text == "🎂 День рождения":
        birthday_text = f"""🎂 День рождения: {user.birthday or 'Не указан'}

В твой день рождения тебя ждёт особенный подарок! 🎁

За 3 дня до дня рождения мы пришлём тебе сюрприз."""
        await update.message.reply_text(birthday_text)
    
    # Админские кнопки
    elif telegram_id == ADMIN_ID:
        if text == "👥 Пользователи":
            total_users = await db.users.count_documents({"is_registered": True})
            residents = await db.users.count_documents({"rank": "resident"})
            super_residents = await db.users.count_documents({"rank": "super_resident"})
            ambassadors = await db.users.count_documents({"rank": "ambassador"})
            
            stats_text = f"""👥 Статистика пользователей:

📊 Всего участников: {total_users}

По рангам:
• BBРезиденты: {residents}
• СуперРезиденты: {super_residents}  
• Амбассадоры: {ambassadors}"""
            await update.message.reply_text(stats_text)
            
        elif text == "📢 Рассылка":
            broadcast_text = """📢 Режим рассылки активирован!

Отправьте следующее сообщение, и оно будет разослано всем пользователям.

Для отмены напишите: /cancel"""
            await update.message.reply_text(broadcast_text)
            user_states[telegram_id] = {"step": "broadcast", "data": {}}
            
        elif text == "📈 Статистика":
            total_users = await db.users.count_documents({})
            registered_users = await db.users.count_documents({"is_registered": True})
            today_active = await db.users.count_documents({
                "last_activity": {"$gte": datetime.utcnow() - timedelta(days=1)}
            })
            
            stats_text = f"""📈 Общая статистика:

👥 Всего пользователей: {total_users}
✅ Зарегистрированных: {registered_users}
📱 Активных за сутки: {today_active}"""
            await update.message.reply_text(stats_text)
            
        elif text == "⚙️ Настройки":
            settings_text = """⚙️ Настройки системы:

🔧 Доступные настройки:
• Управление рангами
• Настройка автоматических уведомлений  
• Конфигурация офферов
• Параметры реферальной системы"""
            await update.message.reply_text(settings_text)
            
        elif text == "🔙 Пользовательское меню":
            await update.message.reply_text(
                MESSAGES["main_menu"],
                reply_markup=get_user_keyboard()
            )

# Обработчик callback запросов (inline кнопки)
async def handle_callback_query(update: Update, context):
    """Обработчик callback запросов от inline кнопок"""
    query = update.callback_query
    await query.answer()
    
    telegram_id = query.from_user.id
    callback_data = query.data
    
    # Обработка выбора бургера во время регистрации
    if callback_data.startswith("burger_"):
        if telegram_id in user_states and user_states[telegram_id]["step"] == "burger":
            burger_index = int(callback_data.split("_")[1])
            user_states[telegram_id]["data"]["favorite_burger"] = BURGER_OPTIONS[burger_index]
            user_states[telegram_id]["step"] = "referral"
            
            await query.edit_message_text(
                f"Выбран: {BURGER_OPTIONS[burger_index]}\n\n{MESSAGES['enter_referral']}"
            )

async def cancel_command(update: Update, context):
    """Обработчик команды /cancel"""
    telegram_id = update.effective_user.id
    
    if telegram_id in user_states:
        action = user_states[telegram_id].get("step", "действие")
        del user_states[telegram_id]
        
        if action == "broadcast":
            await update.message.reply_text("Рассылка отменена.")
        else:
            await update.message.reply_text("Регистрация отменена. Для начала отправьте /start")
    else:
        await update.message.reply_text("Нет активных действий для отмены.")

async def menu_command(update: Update, context):
    """Обработчик команды /menu"""
    telegram_id = update.effective_user.id
    user = await get_user(telegram_id)
    
    if not user or not user.is_registered:
        await update.message.reply_text(MESSAGES["not_registered"])
        return
    
    if telegram_id == ADMIN_ID:
        await update.message.reply_text(
            MESSAGES["admin_menu"], 
            reply_markup=get_admin_keyboard()
        )
    else:
        await update.message.reply_text(
            MESSAGES["main_menu"], 
            reply_markup=get_user_keyboard()
        )

async def menu_command(update: Update, context):
    """Обработчик команды /menu"""
    telegram_id = update.effective_user.id
    user = await get_user(telegram_id)
    
    if not user or not user.is_registered:
        await update.message.reply_text(MESSAGES["not_registered"])
        return
    
    if telegram_id == ADMIN_ID:
        await update.message.reply_text(
            MESSAGES["admin_menu"], 
            reply_markup=get_admin_keyboard()
        )
    else:
        await update.message.reply_text(
            MESSAGES["main_menu"], 
            reply_markup=get_user_keyboard()
        )

def main():
    """Основная функция запуска бота"""
    # Создание приложения
    application = Application.builder().token(TELEGRAM_TOKEN).build()
    
    # Добавление обработчиков
    application.add_handler(CommandHandler("start", start_command))
    application.add_handler(CommandHandler("admin", admin_command))
    application.add_handler(CommandHandler("menu", menu_command))
    application.add_handler(CommandHandler("cancel", cancel_command))
    application.add_handler(CallbackQueryHandler(handle_callback_query))
    application.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, handle_message))
    
    # Запуск бота
    logger.info("Запуск BBBurgers бота...")
    application.run_polling(allowed_updates=Update.ALL_TYPES)

if __name__ == "__main__":
    main()



async def handle_message(update: Update, context):
    """Обработчик текстовых сообщений"""
    telegram_id = update.effective_user.id
    text = update.message.text

    # Проверить, находится ли пользователь в процессе регистрации
    if telegram_id in user_states:
        await handle_registration_step(update, context, text)
        return

    # Проверить регистрацию пользователя
    user = await get_user(telegram_id)
    if not user or not user.is_registered:
        await update.message.reply_text(MESSAGES["not_registered"])
        return

    # Обработка кнопок меню
    await handle_menu_buttons(update, context, text)


