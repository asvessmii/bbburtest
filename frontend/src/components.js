import React from 'react';

// Header Component
export const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <div className="bg-white rounded-full px-6 py-2 flex items-center space-x-2">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">⚡</span>
            </div>
            <span className="text-black font-bold text-lg">ТЕХНОПАРК ВАС</span>
          </div>
        </div>
        
        {/* Right Logo */}
        <div className="border border-white rounded-lg px-4 py-2">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
              <span className="text-black text-xs font-bold">❄</span>
            </div>
            <div className="text-white text-sm">
              <div className="font-bold">ВОЕННАЯ</div>
              <div className="font-bold">АКАДЕМИЯ</div>
              <div className="font-bold">СВЯЗИ</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

// Hero Section Component
export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background with tech pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Scattered particles */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-green-400 rounded-full opacity-60"></div>
        <div className="absolute top-40 left-40 w-2 h-2 bg-pink-400 rounded-full opacity-80"></div>
        <div className="absolute top-60 right-60 w-3 h-3 bg-green-300 rounded-full opacity-70"></div>
        <div className="absolute bottom-40 left-60 w-2 h-2 bg-pink-300 rounded-full opacity-60"></div>
        <div className="absolute bottom-60 right-40 w-4 h-4 bg-green-500 rounded-full opacity-50"></div>
      </div>

      {/* Large 3D Shape on the right */}
      <div className="absolute top-1/2 right-20 transform -translate-y-1/2">
        <img 
          src="https://images.unsplash.com/photo-1579547621113-e4bb2a19bdd6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHw0fHx0ZWNobm9sb2d5JTIwYmFja2dyb3VuZHxlbnwwfHx8Ymx1ZXwxNzUzNzg4NjQ1fDA&ixlib=rb-4.1.0&q=85"
          alt="3D Tech Shape"
          className="w-80 h-80 object-cover rounded-3xl opacity-80"
          style={{filter: 'hue-rotate(120deg) saturate(1.5)'}}
        />
      </div>

      {/* Left side logo */}
      <div className="absolute left-20 top-1/2 transform -translate-y-1/2">
        <div className="w-24 h-24 border-2 border-white rounded-lg flex items-center justify-center">
          <span className="text-white text-2xl font-bold">❄</span>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Left Content */}
          <div className="w-1/2">
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              ТЕХНОЛОГИИ
              <br />
              СВЯЗЬ
              <br />
              ПОБЕД
            </h1>
          </div>
          
          {/* Right Content */}
          <div className="w-1/2 text-right pr-20">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Технопарк Военной академии связи – 
              это инновационная площадка, где сливаются 
              воедино наука, технологии
              и творчество. Это пространство возможностей 
              для талантливых курсантов, кадетов и 
              операторов научной роты ВАС,
              где они осваивают новые компетенции,
              создают прорывные проекты и воплощают
              идеи в реальные продукты.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Technologies Grid Component
export const TechnologiesGrid = () => {
  const technologies = [
    { 
      title: 'Информационная\nбезопасность', 
      gradient: 'from-blue-500 to-purple-600'
    },
    { 
      title: 'GameDev', 
      gradient: 'from-purple-500 to-pink-600'
    },
    { 
      title: 'Квантовые\nтехнологии', 
      gradient: 'from-blue-400 to-cyan-500'
    },
    { 
      title: 'Системы\nрадиосвязи', 
      gradient: 'from-purple-600 to-blue-500'
    },
    { 
      title: 'Технологии\nискусственного\nинтеллекта', 
      gradient: 'from-cyan-500 to-blue-600'
    },
    { 
      title: 'Компьютерная\nграфика\nи графический\nдизайн', 
      gradient: 'from-pink-500 to-purple-600'
    },
    { 
      title: 'Разработка\nпрограммного\nобеспечения', 
      gradient: 'from-blue-600 to-indigo-600'
    },
    { 
      title: 'Reverse\nengineering', 
      gradient: 'from-purple-500 to-indigo-600'
    },
    { 
      title: 'Технологии\nвиртуальной\nи дополненной\nреальности', 
      gradient: 'from-cyan-400 to-blue-500'
    },
    { 
      title: 'WEB-разработка', 
      gradient: 'from-indigo-500 to-purple-600'
    },
    { 
      title: 'Аддитивные\nтехнологии', 
      gradient: 'from-blue-500 to-cyan-500'
    }
  ];

  return (
    <section className="py-20 bg-black relative">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center">
          Направления деятельности
        </h2>
        
        {/* Technologies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="relative group cursor-pointer transform transition-all duration-300 hover:scale-105"
            >
              <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${tech.gradient} p-1`}>
                <div className="relative overflow-hidden rounded-xl bg-black/50 backdrop-blur-sm h-48 flex items-end">
                  {/* Content */}
                  <div className="relative z-10 p-6 w-full">
                    <h3 className="text-lg font-bold text-white leading-tight whitespace-pre-line">
                      {tech.title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Floating 3D Element */}
      <div className="absolute bottom-0 right-0 opacity-30">
        <div className="w-40 h-40 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-xl"></div>
      </div>
    </section>
  );
};

// About Section Component
export const AboutSection = () => {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Scrolling Text */}
        <div className="overflow-hidden mb-16">
          <div className="animate-scroll whitespace-nowrap text-6xl md:text-8xl font-bold text-white/10">
            ТЕХНОПАРК - ЭТО ЛЮДИ ТЕХНОПАРК - ЭТО ЛЮДИ ТЕХНОПАРК - ЭТО ЛЮДИ
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2">
            <div className="mb-8">
              <div className="text-sm text-gray-400 mb-2">ОСНОВАН В</div>
              <div className="text-8xl font-bold mb-4">2024</div>
              <div className="w-32 h-px bg-white mb-6"></div>
            </div>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              Технопарк соединил курсантские научно-исследовательские 
              лаборатории кафедр и научно-исследовательского центра, 
              научную роту и другие научно-производственные объединения.
            </p>
          </div>
          
          {/* Right Content - People Counter */}
          <div className="lg:w-1/2 text-center">
            <div className="text-8xl font-bold mb-4">200</div>
            <div className="text-lg text-gray-400 mb-2">человек</div>
            <p className="text-lg text-gray-300">
              кадетов, курсантов, операторов научной роты, офицеров,
              преподавателей, ученых, профессоров
            </p>
          </div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/4 right-0 w-40 h-40 bg-purple-500/20 rounded-full blur-xl"></div>
      </div>
    </section>
  );
};

// Team Section Component
export const TeamSection = () => {
  const teamMembers = [
    {
      name: 'ЛАУТА',
      firstName: 'Олег',
      lastName: 'Сергеевич',
      position: 'Руководитель Технопарка',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'ВАСИЛЬЕВ',
      firstName: 'Никита',
      lastName: 'Алексеевич',
      position: 'Директор Технопарка ВАС',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face'
    }
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Scrolling Text */}
        <div className="overflow-hidden mb-16">
          <div className="animate-scroll whitespace-nowrap text-6xl md:text-8xl font-bold text-white/10">
            ТЕХНОПАРК - ЭТО ЛЮДИ ТЕХНОПАРК - ЭТО ЛЮДИ ТЕХНОПАРК - ЭТО ЛЮДИ
          </div>
        </div>
        
        <div className="space-y-20">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* Person Image */}
              <div className="lg:w-1/2 flex justify-center">
                <div className="relative">
                  <img 
                    src={member.image}
                    alt={`${member.firstName} ${member.lastName}`}
                    className="w-64 h-80 object-cover rounded-2xl"
                  />
                  {/* 3D Elements around the image */}
                  <div className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-60"></div>
                  <div className="absolute -bottom-10 -right-10 w-16 h-16 bg-gradient-to-br from-pink-500 to-blue-500 rounded-full opacity-60"></div>
                  <div className="absolute top-10 -right-5 w-8 h-8 bg-cyan-400 rounded-full opacity-80"></div>
                </div>
              </div>
              
              {/* Person Info */}
              <div className="lg:w-1/2 text-center lg:text-left">
                <h3 className="text-4xl md:text-6xl font-bold mb-4">
                  {member.name} <span className="text-blue-400">{member.firstName}</span>
                  <br />
                  <span className="text-blue-400">{member.lastName}</span>
                </h3>
                <div className="w-32 h-px bg-white mb-6 mx-auto lg:mx-0"></div>
                <p className="text-xl text-gray-300">
                  {member.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background floating elements */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-xl"></div>
    </section>
  );
};

// Partners Section Component
export const PartnersSection = () => {
  const governmentPartners = [
    { name: 'Министерство обороны\nРоссийской Федерации', logo: '🏛️' },
    { name: 'Федеральная служба безопасности\nРоссийской Федерации', logo: '🛡️' },
    { name: 'Федеральная служба охраны\nРоссийской Федерации', logo: '🔒' },
    { name: 'Силы специальных операций\nРоссийской Федерации', logo: '⚡' },
    { name: 'Служба внешней разведки\nРоссийской Федерации', logo: '🎯' },
    { name: 'Федеральная служба войск\nнациональной гвардии\nРоссийской Федерации', logo: '🏴' },
    { name: 'Главное управление связи\nВооруженных сил\nРоссийской Федерации', logo: '📡' }
  ];

  const businessPartners = [
    { name: '🔐 СБЕР', logo: '🔐' },
    { name: '📱 ОТКРЫТАЯ\nМОБИЛЬНАЯ\nПЛАТФОРМА', logo: '📱' },
    { name: '🔬 масштаб', logo: '🔬' },
    { name: '⭐ Folus', logo: '⭐' },
    { name: '🏦 ГАЗПРОМБАНК', logo: '🏦' },
    { name: '🎓 МИНОБРНАУКИ\nРОССИИ', logo: '🎓' }
  ];

  const universities = [
    { name: '🏛️ УНИВЕРСИТЕТ\nИННОПОЛИС', logo: '🏛️' },
    { name: '🎓 Санкт-Петербургский\nгосударственный\nуниверситет', logo: '🎓' },
    { name: '🏗️ ПОЛИТЕХ', logo: '🏗️' },
    { name: '🌍 МОСКОВСКИЙ\nПОЛИТЕХ', logo: '🌍' },
    { name: '🔬 ТОМСКИЙ\nПОЛИТЕХ', logo: '🔬' },
    { name: '⚡ НЭТИ', logo: '⚡' }
  ];

  const additionalPartners = [
    { name: '🎯 СПбГУТ', logo: '🎯' },
    { name: '🔬 СПбГЭТУ «ЛЭТИ»', logo: '🔬' },
    { name: '🏛️ МОИ', logo: '🏛️' },
    { name: '💎 РУБИН', logo: '💎' },
    { name: '🔧 СПЕЦИАЛЬНЫЙ\nТЕХНОЛОГИЧЕСКИЙ\nЦЕНТР', logo: '🔧' }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center">
          СОТРУДНИЧЕСТВО
        </h2>
        
        {/* Government Partners */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
            {governmentPartners.map((partner, index) => (
              <div 
                key={index}
                className="flex flex-col items-center text-center p-6 bg-gray-900/30 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-colors duration-300"
              >
                <div className="text-4xl mb-4">{partner.logo}</div>
                <p className="text-sm text-gray-300 leading-relaxed whitespace-pre-line">
                  {partner.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Business Partners */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {businessPartners.map((partner, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center p-4 bg-gray-900/30 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-colors duration-300"
            >
              <div className="text-2xl mb-2">{partner.logo}</div>
              <p className="text-xs text-gray-300 whitespace-pre-line">{partner.name}</p>
            </div>
          ))}
        </div>

        {/* Universities */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {universities.map((partner, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center p-4 bg-gray-900/30 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-colors duration-300"
            >
              <div className="text-2xl mb-2">{partner.logo}</div>
              <p className="text-xs text-gray-300 whitespace-pre-line">{partner.name}</p>
            </div>
          ))}
        </div>

        {/* Additional Partners */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {additionalPartners.map((partner, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center p-4 bg-gray-900/30 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-colors duration-300"
            >
              <div className="text-2xl mb-2">{partner.logo}</div>
              <p className="text-xs text-gray-300 whitespace-pre-line">{partner.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer Section Component
export const FooterSection = () => {
  return (
    <footer className="py-16 bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="mb-8">
            <div className="w-24 h-24 border-2 border-white rounded-lg flex items-center justify-center mb-4">
              <span className="text-white text-2xl font-bold">⚡</span>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-800 text-center text-gray-500 w-full">
            <p>&copy; 2025 Технопарк ВАС</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Cookie Notice Component
export const CookieNotice = ({ onAccept }) => {
  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-sm">
      <div className="bg-white rounded-xl p-4 shadow-2xl">
        <div className="flex justify-between items-start mb-3">
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
          className="bg-green-500 text-black font-bold px-4 py-2 rounded text-sm hover:bg-green-400 transition-colors duration-300"
        >
          СОГЛАСЕН
        </button>
      </div>
    </div>
  );
};