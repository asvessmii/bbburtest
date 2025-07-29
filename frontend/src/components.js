import React from 'react';

// Header Component - точная копия оригинала
export const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
        {/* Logo Left - точно как в оригинале */}
        <div className="bg-white rounded-full px-8 py-3 flex items-center space-x-3">
          <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M13 3L4 14h7v7l9-11h-7V3z"/>
            </svg>
          </div>
          <span className="text-black font-bold text-xl">ТЕХНОПАРК ВАС</span>
        </div>
        
        {/* Logo Right - точно как в оригинале */}
        <div className="border-2 border-white rounded-xl px-6 py-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="black">
                <path d="M12 2L8 8h8l-4-6zm0 20l4-6H8l4 6zm10-10l-6-4v8l6-4zM2 12l6 4V8l-6 4z"/>
              </svg>
            </div>
            <div className="text-white text-sm font-bold leading-tight">
              <div>ВОЕННАЯ</div>
              <div>АКАДЕМИЯ</div>
              <div>СВЯЗИ</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

// Hero Section - точная копия оригинала
export const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Фон с частицами - точно как в оригинале */}
      <div className="absolute inset-0 bg-black">
        {/* Зеленые частицы */}
        <div className="absolute top-32 left-20 w-6 h-6 bg-green-400 rounded-full opacity-80 blur-sm"></div>
        <div className="absolute top-48 left-40 w-4 h-4 bg-green-300 rounded-full opacity-70"></div>
        <div className="absolute top-80 left-60 w-5 h-5 bg-green-500 rounded-full opacity-60"></div>
        <div className="absolute top-96 left-80 w-3 h-3 bg-green-400 rounded-full opacity-80"></div>
        <div className="absolute bottom-40 left-32 w-4 h-4 bg-green-300 rounded-full opacity-70"></div>
        <div className="absolute bottom-60 left-56 w-6 h-6 bg-green-500 rounded-full opacity-60 blur-sm"></div>
        
        {/* Розовые частицы */}
        <div className="absolute top-40 right-80 w-5 h-5 bg-pink-400 rounded-full opacity-75"></div>
        <div className="absolute top-72 right-60 w-4 h-4 bg-pink-300 rounded-full opacity-80"></div>
        <div className="absolute bottom-32 right-40 w-6 h-6 bg-pink-500 rounded-full opacity-70 blur-sm"></div>
        <div className="absolute bottom-80 right-72 w-3 h-3 bg-pink-400 rounded-full opacity-85"></div>
      </div>

      {/* Центральная 3D фигура - точно как в оригинале */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96">
        <div className="relative w-full h-full">
          {/* Основная 3D форма */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-pink-500 to-green-300 rounded-3xl transform rotate-12 opacity-90" 
               style={{
                 background: 'linear-gradient(135deg, #4ade80 0%, #ec4899 30%, #22c55e 60%, #f97316 100%)',
                 borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                 filter: 'blur(1px)'
               }}>
          </div>
          {/* Дополнительные 3D элементы */}
          <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full opacity-80 transform rotate-45"
               style={{borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%'}}>
          </div>
          <div className="absolute bottom-8 left-8 w-24 h-24 bg-gradient-to-br from-green-300 to-cyan-400 opacity-75 transform -rotate-12"
               style={{borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%'}}>
          </div>
        </div>
      </div>

      {/* Логотип ВАС слева внизу - точно как в оригинале */}
      <div className="absolute bottom-32 left-16">
        <div className="w-32 h-32 border-4 border-white rounded-2xl flex items-center justify-center bg-black/20 backdrop-blur-sm">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="white">
            <path d="M12 2L8 8h8l-4-6zm0 20l4-6H8l4 6zm10-10l-6-4v8l6-4zM2 12l6 4V8l-6 4z"/>
          </svg>
        </div>
      </div>

      {/* Текст слева внизу - точно как в оригинале */}
      <div className="absolute bottom-32 left-56">
        <h1 className="text-7xl font-black leading-none text-white mb-4">
          ТЕХНОЛОГИИ
          <br />
          СВЯЗЬ
          <br />
          ПОБЕД
        </h1>
      </div>

      {/* Текст справа - точно как в оригинале */}
      <div className="absolute top-1/2 right-16 w-80 transform -translate-y-1/2">
        <p className="text-lg text-white leading-relaxed">
          Технопарк Военной академии связи – это инновационная площадка, где сливаются воедино наука, технологии и творчество. Это пространство возможностей для талантливых курсантов, кадетов и операторов научной роты ВАС, где они осваивают новые компетенции, создают прорывные проекты и воплощают идеи в реальные продукты.
        </p>
      </div>
    </section>
  );
};

// Technologies Grid - точная копия оригинала
export const TechnologiesGrid = () => {
  const technologies = [
    { title: 'Информационная\nбезопасность', gradient: 'from-blue-500 via-purple-600 to-blue-700' },
    { title: 'GameDev', gradient: 'from-purple-500 via-pink-600 to-purple-700' },
    { title: 'Квантовые\nтехнологии', gradient: 'from-cyan-400 via-blue-500 to-cyan-600' },
    { title: 'Системы\nрадиосвязи', gradient: 'from-purple-600 via-blue-500 to-purple-700' },
    { title: 'Технологии\nискусственного\nинтеллекта', gradient: 'from-cyan-500 via-blue-600 to-teal-600' },
    { title: 'Компьютерная\nграфика\nи графический\nдизайн', gradient: 'from-pink-500 via-purple-600 to-pink-700' },
    { title: 'Разработка\nпрограммного\nобеспечения', gradient: 'from-blue-600 via-indigo-600 to-blue-800' },
    { title: 'Reverse\nengineering', gradient: 'from-purple-500 via-indigo-600 to-purple-700' },
    { title: 'Технологии\nвиртуальной\nи дополненной\nреальности', gradient: 'from-cyan-400 via-blue-500 to-cyan-600' },
    { title: 'WEB-разработка', gradient: 'from-indigo-500 via-purple-600 to-indigo-700' },
    { title: 'Аддитивные\nтехнологии', gradient: 'from-blue-500 via-cyan-500 to-blue-600' }
  ];

  return (
    <section className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-6xl font-black mb-20 text-center text-white">
          Направления деятельности
        </h2>
        
        <div className="grid grid-cols-4 gap-6 mb-8">
          {technologies.slice(0, 8).map((tech, index) => (
            <div key={index} className="group cursor-pointer">
              <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${tech.gradient} p-1 h-48`}>
                <div className="relative overflow-hidden rounded-[22px] bg-black/40 backdrop-blur-sm h-full flex items-end p-6">
                  <h3 className="text-xl font-bold text-white leading-tight whitespace-pre-line">
                    {tech.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-6 justify-center">
          {technologies.slice(8).map((tech, index) => (
            <div key={index + 8} className="group cursor-pointer">
              <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${tech.gradient} p-1 h-48`}>
                <div className="relative overflow-hidden rounded-[22px] bg-black/40 backdrop-blur-sm h-full flex items-end p-6">
                  <h3 className="text-xl font-bold text-white leading-tight whitespace-pre-line">
                    {tech.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* 3D элемент справа */}
      <div className="absolute bottom-0 right-16 w-40 h-40 bg-gradient-to-br from-blue-500 to-purple-600 opacity-60 rounded-full transform rotate-45"
           style={{borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%'}}>
      </div>
    </section>
  );
};

// About Section - точная копия оригинала
export const AboutSection = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        {/* Прокручивающийся текст */}
        <div className="overflow-hidden mb-20">
          <div className="animate-scroll whitespace-nowrap text-8xl font-black text-white/10">
            ТЕХНОПАРК - ЭТО ЛЮДИ &nbsp;&nbsp;&nbsp; ТЕХНОПАРК - ЭТО ЛЮДИ &nbsp;&nbsp;&nbsp; ТЕХНОПАРК - ЭТО ЛЮДИ
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          {/* Левая часть */}
          <div className="w-1/2">
            <div className="mb-8">
              <div className="text-sm text-gray-400 mb-4 font-medium tracking-wider">ОСНОВАН В</div>
              <div className="text-9xl font-black mb-6 text-white">2024</div>
              <div className="w-40 h-1 bg-white mb-8"></div>
            </div>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
              Технопарк соединил курсантские научно-исследовательские лаборатории кафедр и научно-исследовательского центра, научную роту и другие научно-производственные объединения.
            </p>
          </div>
          
          {/* Правая часть */}
          <div className="w-1/2 text-center">
            <div className="text-9xl font-black mb-4 text-white">200</div>
            <div className="text-xl text-gray-400 mb-4 font-medium">человек</div>
            <p className="text-xl text-gray-300 leading-relaxed max-w-lg mx-auto">
              кадетов, курсантов, операторов научной роты, офицеров, преподавателей, ученых, профессоров
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Team Section - точная копия оригинала
export const TeamSection = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        {/* Прокручивающийся текст */}
        <div className="overflow-hidden mb-20">
          <div className="animate-scroll whitespace-nowrap text-8xl font-black text-white/10">
            ТЕХНОПАРК - ЭТО ЛЮДИ &nbsp;&nbsp;&nbsp; ТЕХНОПАРК - ЭТО ЛЮДИ &nbsp;&nbsp;&nbsp; ТЕХНОПАРК - ЭТО ЛЮДИ
          </div>
        </div>
        
        {/* Первый член команды */}
        <div className="flex items-center justify-between mb-32">
          <div className="w-1/2 relative">
            <div className="relative w-80 h-96 mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=face"
                alt="Лаута Олег Сергеевич"
                className="w-full h-full object-cover rounded-3xl"
              />
              {/* 3D элементы вокруг */}
              <div className="absolute -top-8 -left-8 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-80"></div>
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-to-br from-pink-400 to-blue-500 opacity-70 rounded-full"></div>
              <div className="absolute top-8 -right-4 w-8 h-8 bg-cyan-400 rounded-full opacity-90"></div>
              <div className="absolute bottom-20 -left-6 w-12 h-12 bg-gradient-to-br from-green-400 to-blue-400 opacity-75 rounded-full"></div>
            </div>
          </div>
          
          <div className="w-1/2 pl-16">
            <h3 className="text-6xl font-black mb-6 text-white">
              ЛАУТА <span className="text-blue-400">Олег</span>
              <br />
              <span className="text-blue-400">Сергеевич</span>
            </h3>
            <div className="w-40 h-1 bg-white mb-6"></div>
            <p className="text-2xl text-gray-300">
              Руководитель Технопарка
            </p>
          </div>
        </div>

        {/* Второй член команды */}
        <div className="flex items-center justify-between">
          <div className="w-1/2 pr-16 text-right">
            <h3 className="text-6xl font-black mb-6 text-white">
              ВАСИЛЬЕВ <span className="text-blue-400">Никита</span>
              <br />
              <span className="text-blue-400">Алексеевич</span>
            </h3>
            <div className="w-40 h-1 bg-white mb-6 ml-auto"></div>
            <p className="text-2xl text-gray-300">
              Директор Технопарка ВАС
            </p>
          </div>
          
          <div className="w-1/2 relative">
            <div className="relative w-80 h-96 mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=600&fit=crop&crop=face"
                alt="Васильев Никита Алексеевич"
                className="w-full h-full object-cover rounded-3xl"
              />
              {/* 3D элементы вокруг */}
              <div className="absolute -top-6 -right-8 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-75"></div>
              <div className="absolute -bottom-8 -left-8 w-18 h-18 bg-gradient-to-br from-cyan-400 to-blue-500 opacity-80 rounded-full"></div>
              <div className="absolute top-12 -left-4 w-10 h-10 bg-pink-400 rounded-full opacity-85"></div>
              <div className="absolute bottom-16 -right-6 w-14 h-14 bg-gradient-to-br from-blue-400 to-purple-400 opacity-70 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Partners Section - точная копия оригинала
export const PartnersSection = () => {
  const governmentLogos = [
    { name: 'Министерство обороны\nРоссийской Федерации', icon: '🏛️' },
    { name: 'Федеральная служба безопасности\nРоссийской Федерации', icon: '🛡️' },
    { name: 'Федеральная служба охраны\nРоссийской Федерации', icon: '🔒' },
    { name: 'Силы специальных операций\nРоссийской Федерации', icon: '⚡' },
    { name: 'Служба внешней разведки\nРоссийской Федерации', icon: '🎯' },
    { name: 'Федеральная служба войск\nнациональной гвардии\nРоссийской Федерации', icon: '🏴' },
    { name: 'Главное управление связи\nВооруженных сил\nРоссийской Федерации', icon: '📡' }
  ];

  const corporateLogos = [
    'СБЕР', 'ОТКРЫТАЯ\nМОБИЛЬНАЯ\nПЛАТФОРМА', 'масштаб', 'Folus', 'ГАЗПРОМБАНК', 'МИНОБРНАУКИ\nРОССИИ'
  ];

  const universityLogos = [
    'УНИВЕРСИТЕТ\nИННОПОЛИС', 'Санкт-Петербургский\nгосударственный\nуниверситет', 'ПОЛИТЕХ', 
    'МОСКОВСКИЙ\nПОЛИТЕХ', 'ТОМСКИЙ\nПОЛИТЕХ', 'НЭТИ'
  ];

  const additionalLogos = [
    'СПбГУТ', 'СПбГЭТУ «ЛЭТИ»', 'МОИ', 'РУБИН', 'СПЕЦИАЛЬНЫЙ\nТЕХНОЛОГИЧЕСКИЙ\nЦЕНТР'
  ];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-6xl font-black mb-20 text-center text-white">
          СОТРУДНИЧЕСТВО
        </h2>
        
        {/* Государственные структуры */}
        <div className="grid grid-cols-4 gap-8 mb-16">
          {governmentLogos.map((org, index) => (
            <div key={index} className="text-center p-6 bg-gray-900/20 rounded-2xl border border-gray-800">
              <div className="text-6xl mb-4">{org.icon}</div>
              <p className="text-sm text-gray-300 whitespace-pre-line leading-tight">
                {org.name}
              </p>
            </div>
          ))}
        </div>

        {/* Корпоративные партнеры */}
        <div className="grid grid-cols-6 gap-6 mb-16">
          {corporateLogos.map((logo, index) => (
            <div key={index} className="text-center p-4 bg-gray-900/20 rounded-xl border border-gray-800">
              <p className="text-sm font-bold text-white whitespace-pre-line">
                {logo}
              </p>
            </div>
          ))}
        </div>

        {/* Университеты */}
        <div className="grid grid-cols-6 gap-6 mb-16">
          {universityLogos.map((logo, index) => (
            <div key={index} className="text-center p-4 bg-gray-900/20 rounded-xl border border-gray-800">
              <p className="text-sm font-bold text-white whitespace-pre-line">
                {logo}
              </p>
            </div>
          ))}
        </div>

        {/* Дополнительные партнеры */}
        <div className="grid grid-cols-5 gap-6">
          {additionalLogos.map((logo, index) => (
            <div key={index} className="text-center p-4 bg-gray-900/20 rounded-xl border border-gray-800">
              <p className="text-sm font-bold text-white">
                {logo}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer - точная копия оригинала
export const FooterSection = () => {
  return (
    <footer className="py-16 bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center">
          <div className="w-24 h-24 border-4 border-white rounded-2xl flex items-center justify-center mx-auto mb-8 bg-black">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
              <path d="M13 3L4 14h7v7l9-11h-7V3z"/>
            </svg>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400">&copy; 2025 Технопарк ВАС</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Cookie Notice - точная копия оригинала
export const CookieNotice = ({ onAccept }) => {
  return (
    <div className="fixed bottom-6 left-6 z-50 max-w-sm">
      <div className="bg-white rounded-2xl p-6 shadow-2xl">
        <div className="flex justify-between items-start mb-4">
          <p className="text-black text-sm leading-relaxed pr-4">
            НАЖИМАЯ «СОГЛАСЕН», 
            Вы подтверждаете то, что Вы 
            проинформированы об использовании 
            cookies на нашем сайте.
          </p>
          <button 
            onClick={onAccept}
            className="text-black hover:text-gray-600 text-xl leading-none"
          >
            ×
          </button>
        </div>
        <button 
          onClick={onAccept}
          className="bg-green-500 text-black font-bold px-6 py-3 rounded-lg text-sm hover:bg-green-400 transition-colors duration-300"
        >
          СОГЛАСЕН
        </button>
      </div>
    </div>
  );
};