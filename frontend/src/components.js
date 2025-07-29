import React from 'react';

export const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <div className="bg-white rounded-full px-8 py-3 flex items-center">
            <span className="text-black font-bold text-xl">ТЕХНОПАРК ВАС</span>
          </div>
        </div>
        
        <div className="border-2 border-white rounded-xl px-6 py-4 ml-auto">
          <div className="text-white text-sm font-bold leading-tight text-center">
            <div>ВОЕННАЯ</div>
            <div>АКАДЕМИЯ</div>
            <div>СВЯЗИ</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      <div className="absolute inset-0 bg-black">
        <div className="absolute top-32 left-20 w-6 h-6 bg-green-400 rounded-full opacity-80 blur-sm"></div>
        <div className="absolute top-48 left-40 w-4 h-4 bg-green-300 rounded-full opacity-70"></div>
        <div className="absolute top-80 left-60 w-5 h-5 bg-green-500 rounded-full opacity-60"></div>
        <div className="absolute top-96 left-80 w-3 h-3 bg-green-400 rounded-full opacity-80"></div>
        <div className="absolute bottom-40 left-32 w-4 h-4 bg-green-300 rounded-full opacity-70"></div>
        <div className="absolute bottom-60 left-56 w-6 h-6 bg-green-500 rounded-full opacity-60 blur-sm"></div>
        
        <div className="absolute top-40 right-80 w-5 h-5 bg-pink-400 rounded-full opacity-75"></div>
        <div className="absolute top-72 right-60 w-4 h-4 bg-pink-300 rounded-full opacity-80"></div>
        <div className="absolute bottom-32 right-40 w-6 h-6 bg-pink-500 rounded-full opacity-70 blur-sm"></div>
        <div className="absolute bottom-80 right-72 w-3 h-3 bg-pink-400 rounded-full opacity-85"></div>
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-pink-500 to-green-300 rounded-3xl transform rotate-12 opacity-90" 
               style={{
                 background: 'linear-gradient(135deg, #4ade80 0%, #ec4899 30%, #22c55e 60%, #f97316 100%)',
                 borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                 filter: 'blur(1px)'
               }}>
          </div>
          <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full opacity-80 transform rotate-45"
               style={{borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%'}}>
          </div>
          <div className="absolute bottom-8 left-8 w-24 h-24 bg-gradient-to-br from-green-300 to-cyan-400 opacity-75 transform -rotate-12"
               style={{borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%'}}>
          </div>
        </div>
      </div>

      <div className="absolute bottom-32 left-16">
        <h1 className="text-7xl font-black leading-none text-white mb-4">
          ТЕХНОЛОГИИ
            

          СВЯЗЬ
            

          ПОБЕДА
        </h1>
      </div>

      <div className="absolute top-1/2 right-16 w-80 transform -translate-y-1/2">
        <p className="text-lg text-white leading-relaxed">
          Технопарк Военной академии связи – это инновационная площадка, где сливаются воедино наука, технологии и творчество. Это пространство возможностей для талантливых курсантов, кадетов и операторов научной роты ВАС, где они осваивают новые компетенции, создают прорывные проекты и воплощают идеи в реальные продукты.
        </p>
      </div>
    </section>
  );
};

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
      
      <div className="absolute bottom-0 right-16 w-40 h-40 bg-gradient-to-br from-blue-500 to-purple-600 opacity-60 rounded-full transform rotate-45"
           style={{borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%'}}>
      </div>
    </section>
  );
};

export const AboutSection = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="overflow-hidden mb-20">
          <div className="animate-scroll whitespace-nowrap text-8xl font-black text-white/10">
            ТЕХНОПАРК - ЭТО ЛЮДИ &nbsp;&nbsp;&nbsp; ТЕХНОПАРК - ЭТО ЛЮДИ &nbsp;&nbsp;&nbsp; ТЕХНОПАРК - ЭТО ЛЮДИ
          </div>
        </div>
        
        <div className="flex items-center justify-between">
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

export const TeamSection = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="overflow-hidden mb-20">
          <div className="animate-scroll whitespace-nowrap text-8xl font-black text-white/10">
            ТЕХНОПАРК - ЭТО ЛЮДИ &nbsp;&nbsp;&nbsp; ТЕХНОПАРК - ЭТО ЛЮДИ &nbsp;&nbsp;&nbsp; ТЕХНОПАРК - ЭТО ЛЮДИ
          </div>
        </div>
        
        <div className="flex items-center justify-between mb-32">
          <div className="w-1/2 relative">
            <div className="relative w-80 h-96 mx-auto">
              <img 
                src="https://citaty.info/files/portraits/maior-benson-uinifred-pein.jpg" 
                alt="Лаута Олег Сергеевич"
                className="w-full h-full object-cover rounded-3xl"
              />
              <div className="absolute -top-8 -left-8 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-80"></div>
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-to-br from-pink-400 to-blue-500 opacity-70 rounded-full"></div>
              <div className="absolute top-8 -right-4 w-8 h-8 bg-cyan-400 rounded-full opacity-90"></div>
              <div className="absolute bottom-20 -left-6 w-12 h-12 bg-gradient-to-br from-green-400 to-blue-400 opacity-75 rounded-full"></div>
            </div>
          </div>
          
          <div className="w-1/2 pl-16">
            <h3 className="text-6xl font-black mb-6 text-white">
              ЛАУТА <span className="text-blue-400">Олег</span>
                

              <span className="text-blue-400">Сергеевич</span>
            </h3>
            <div className="w-40 h-1 bg-white mb-6"></div>
            <p className="text-2xl text-gray-300">
              Руководитель Технопарка
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="w-1/2 pr-16 text-right">
            <h3 className="text-6xl font-black mb-6 text-white">
              ВАСИЛЬЕВ <span className="text-blue-400">Никита</span>
                

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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRMOrZVl0fmZhyBhYV5Ju4zZMGM22V5i8FKw&s" 
                alt="Васильев Никита Алексеевич"
                className="w-full h-full object-cover rounded-3xl"
              />
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

export const PartnersSection = () => {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-6xl font-black mb-20 text-center text-white">
          СОТРУДНИЧЕСТВО
        </h2>
        
        <div className="grid grid-cols-4 gap-8 mb-16">
          <div className="text-center p-8 bg-gray-900/20 rounded-2xl border border-gray-800">
            <div className="w-20 h-20 mx-auto mb-4 bg-gray-700 rounded-xl flex items-center justify-center">
              <div className="w-16 h-16 bg-gray-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">МО РФ</span>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-tight">
              Министерство обороны  
Российской Федерации
            </p>
          </div>

          <div className="text-center p-8 bg-gray-900/20 rounded-2xl border border-gray-800">
            <div className="w-20 h-20 mx-auto mb-4 bg-gray-700 rounded-xl flex items-center justify-center">
              <div className="w-16 h-16 bg-gray-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">ФСБ</span>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-tight">
              Федеральная служба безопасности  
Российской Федерации
            </p>
          </div>

          <div className="text-center p-8 bg-gray-900/20 rounded-2xl border border-gray-800">
            <div className="w-20 h-20 mx-auto mb-4 bg-gray-700 rounded-xl flex items-center justify-center">
              <div className="w-16 h-16 bg-gray-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">ФСО</span>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-tight">
              Федеральная служба охраны  
Российской Федерации
            </p>
          </div>

          <div className="text-center p-8 bg-gray-900/20 rounded-2xl border border-gray-800">
            <div className="w-20 h-20 mx-auto mb-4 bg-gray-700 rounded-xl flex items-center justify-center">
              <div className="w-16 h-16 bg-gray-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">ССО</span>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-tight">
              Силы специальных операций  
Российской Федерации
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 mb-16 justify-center">
          <div className="text-center p-8 bg-gray-900/20 rounded-2xl border border-gray-800">
            <div className="w-20 h-20 mx-auto mb-4 bg-gray-700 rounded-xl flex items-center justify-center">
              <div className="w-16 h-16 bg-gray-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">СВР</span>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-tight">
              Служба внешней разведки  
Российской Федерации
            </p>
          </div>

          <div className="text-center p-8 bg-gray-900/20 rounded-2xl border border-gray-800">
            <div className="w-20 h-20 mx-auto mb-4 bg-gray-700 rounded-xl flex items-center justify-center">
              <div className="w-16 h-16 bg-gray-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">ФСВНГ РФ</span>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-tight">
              Федеральная служба войск национальной
  гвардии Российской Федерации
            </p>
          </div>

          <div className="text-center p-8 bg-gray-900/20 rounded-2xl border border-gray-800">
            <div className="w-20 h-20 mx-auto mb-4 bg-gray-700 rounded-xl flex items-center justify-center">
              <div className="w-16 h-16 bg-gray-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">ГУСВС РФ</span>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-tight">
              Главное управление связи 
  Вооруженных сил Российской Федерации
            </p>
          </div>
        </div>

        
export const FooterSection = () => {
  return (
    <footer className="bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-8 text-center text-gray-400">
        <p>&copy; 2025 Технопарк ВАС</p>
      </div>
    </footer>
  );
};

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
