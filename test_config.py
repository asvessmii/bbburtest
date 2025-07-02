#!/usr/bin/env python3
"""
Тестовый скрипт для проверки конфигурации BBBurgers бота
"""

import os
import asyncio
from pathlib import Path
from dotenv import load_dotenv
from motor.motor_asyncio import AsyncIOMotorClient

# Загрузка переменных окружения
ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

async def test_configuration():
    """Тестирование конфигурации бота"""
    print("🔍 Проверка конфигурации BBBurgers бота...\n")
    
    # Проверка переменных окружения
    print("1. Проверка переменных окружения:")
    
    telegram_token = os.getenv('TELEGRAM_TOKEN')
    admin_id = os.getenv('ADMIN_ID')
    mongo_url = os.getenv('MONGO_URL', 'mongodb://localhost:27017')
    db_name = os.getenv('DB_NAME', 'bbburgers')
    
    if telegram_token:
        print(f"   ✅ TELEGRAM_TOKEN: {'*' * 20}{telegram_token[-10:]}")
    else:
        print("   ❌ TELEGRAM_TOKEN: Не найден!")
        return False
    
    if admin_id:
        print(f"   ✅ ADMIN_ID: {admin_id}")
    else:
        print("   ❌ ADMIN_ID: Не найден!")
        return False
    
    print(f"   ✅ MONGO_URL: {mongo_url}")
    print(f"   ✅ DB_NAME: {db_name}")
    
    # Проверка подключения к MongoDB
    print("\n2. Проверка подключения к MongoDB:")
    
    try:
        client = AsyncIOMotorClient(mongo_url)
        
        # Проверка подключения
        await client.admin.command('ping')
        print("   ✅ Подключение к MongoDB успешно!")
        
        # Проверка базы данных
        db = client[db_name]
        collections = await db.list_collection_names()
        print(f"   ✅ База данных '{db_name}' доступна")
        print(f"   📊 Коллекции: {collections if collections else 'Пусто (будут созданы автоматически)'}")
        
        # Проверка коллекции пользователей
        if 'users' in collections:
            user_count = await db.users.count_documents({})
            registered_count = await db.users.count_documents({"is_registered": True})
            print(f"   👥 Пользователей в базе: {user_count} (зарегистрированных: {registered_count})")
        
        client.close()
        
    except Exception as e:
        print(f"   ❌ Ошибка подключения к MongoDB: {e}")
        return False
    
    # Проверка файлов
    print("\n3. Проверка файлов проекта:")
    
    required_files = ['bot.py', 'requirements.txt', '.env']
    for file_name in required_files:
        file_path = ROOT_DIR / file_name
        if file_path.exists():
            print(f"   ✅ {file_name}: Найден")
        else:
            print(f"   ❌ {file_name}: Не найден!")
            if file_name == '.env':
                print("      💡 Скопируйте .env.example в .env и заполните настройки")
    
    print("\n✅ Конфигурация проверена успешно!")
    print("\n🚀 Для запуска бота выполните: python3 bot.py")
    return True

if __name__ == "__main__":
    asyncio.run(test_configuration())

