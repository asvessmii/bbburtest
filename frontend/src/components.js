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
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1604011237320-8e0506614fdf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwYmFja2dyb3VuZHxlbnwwfHx8Ymx1ZXwxNzUzNzg4NjQ1fDA&ixlib=rb-4.1.0&q=85')`
        }}
      />

      {/* Floating Abstract Shape */}
      <div className="absolute top-1/2 right-20 transform -translate-y-1/2">
        <img 
          src="https://images.unsplash.com/photo-1620121478247-ec786b9be2fa?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwyfHxkaWdpdGFsJTIwcGFydGljbGVzfGVufDB8fHxibHVlfDE3NTM3ODg2NTF8MA&ixlib=rb-4.1.0&q=85"
          alt="3D Shape"
          className="w-64 h-64 object-cover rounded-3xl opacity-60"
        />
      </div>

      {/* Loading Animation */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            ТЕХНОЛОГИИ
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              БУДУЩЕГО
            </span>
          </h1>
        </div>
        
        <div className="max-w-3xl mx-auto text-right">
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Технопарк Военной академии связи – 
            это инновационная площадка, где сливаются 
            воедино наука, технологии
            и творчество. Это пространство возможностей 
            для талантливых курсантов, кадетов и 
            операторов научной роты ВАС.
          </p>
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
      gradient: 'from-blue-500 to-purple-600',
      image: 'https://images.unsplash.com/photo-1524169220946-12efd782aab4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwzfHx0ZWNobm9sb2d5JTIwYmFja2dyb3VuZHxlbnwwfHx8Ymx1ZXwxNzUzNzg4NjQ1fDA&ixlib=rb-4.1.0&q=85'
    },
    { 
      title: 'GameDev', 
      gradient: 'from-purple-500 to-pink-600',
      image: 'https://images.unsplash.com/photo-1579547621113-e4bb2a19bdd6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHw0fHx0ZWNobm9sb2d5JTIwYmFja2dyb3VuZHxlbnwwfHx8Ymx1ZXwxNzUzNzg4NjQ1fDA&ixlib=rb-4.1.0&q=85'
    },
    { 
      title: 'Квантовые\nтехнологии', 
      gradient: 'from-blue-400 to-cyan-500',
      image: 'https://images.unsplash.com/photo-1653417335247-1855d21f45d3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwzfHxkaWdpdGFsJTIwcGFydGljbGVzfGVufDB8fHxibHVlfDE3NTM3ODg2NTF8MA&ixlib=rb-4.1.0&q=85'
    },
    { 
      title: 'Системы\nрадиосвязи', 
      gradient: 'from-purple-600 to-blue-500',
      image: 'https://images.unsplash.com/photo-1620121478247-ec786b9be2fa?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwyfHxkaWdpdGFsJTIwcGFydGljbGVzfGVufDB8fHxibHVlfDE3NTM3ODg2NTF8MA&ixlib=rb-4.1.0&q=85'
    },
    { 
      title: 'Технологии\nискусственного\nинтеллекта', 
      gradient: 'from-cyan-500 to-blue-600',
      image: 'https://images.unsplash.com/photo-1604011237320-8e0506614fdf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwYmFja2dyb3VuZHxlbnwwfHx8Ymx1ZXwxNzUzNzg4NjQ1fDA&ixlib=rb-4.1.0&q=85'
    },
    { 
      title: 'Компьютерная\nграфика\nи графический\nдизайн', 
      gradient: 'from-pink-500 to-purple-600',
      image: 'https://images.unsplash.com/photo-1524169220946-12efd782aab4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwzfHx0ZWNobm9sb2d5JTIwYmFja2dyb3VuZHxlbnwwfHx8Ymx1ZXwxNzUzNzg4NjQ1fDA&ixlib=rb-4.1.0&q=85'
    },
    { 
      title: 'Разработка\nпрограммного\nобеспечения', 
      gradient: 'from-blue-600 to-indigo-600',
      image: 'https://images.unsplash.com/photo-1579547621113-e4bb2a19bdd6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHw0fHx0ZWNobm9sb2d5JTIwYmFja2dyb3VuZHxlbnwwfHx8Ymx1ZXwxNzUzNzg4NjQ1fDA&ixlib=rb-4.1.0&q=85'
    },
    { 
      title: 'Reverse\nengineering', 
      gradient: 'from-purple-500 to-indigo-600',
      image: 'https://images.unsplash.com/photo-1653417335247-1855d21f45d3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwzfHxkaWdpdGFsJTIwcGFydGljbGVzfGVufDB8fHxibHVlfDE3NTM3ODg2NTF8MA&ixlib=rb-4.1.0&q=85'
    },
    { 
      title: 'Технологии\nвиртуальной\nи дополненной\nреальности', 
      gradient: 'from-cyan-400 to-blue-500',
      image: 'https://images.unsplash.com/photo-1620121478247-ec786b9be2fa?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwyfHxkaWdpdGFsJTIwcGFydGljbGVzfGVufDB8fHxibHVlfDE3NTM3ODg2NTF8MA&ixlib=rb-4.1.0&q=85'
    },
    { 
      title: 'WEB-разработка', 
      gradient: 'from-indigo-500 to-purple-600',
      image: 'https://images.unsplash.com/photo-1604011237320-8e0506614fdf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwYmFja2dyb3VuZHxlbnwwfHx8Ymx1ZXwxNzUzNzg4NjQ1fDA&ixlib=rb-4.1.0&q=85'
    },
    { 
      title: 'Аддитивные\nтехнологии', 
      gradient: 'from-blue-500 to-cyan-500',
      image: 'https://images.unsplash.com/photo-1524169220946-12efd782aab4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwzfHx0ZWNobm9sb2d5JTIwYmFja2dyb3VuZHxlbnwwfHx8Ymx1ZXwxNzUzNzg4NjQ1fDA&ixlib=rb-4.1.0&q=85'
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
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-50 transition-opacity duration-300"
                    style={{ backgroundImage: `url('${tech.image}')` }}
                  />
                  
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
        <img 
          src="https://images.unsplash.com/photo-1653417335247-1855d21f45d3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwzfHxkaWdpdGFsJTIwcGFydGljbGVzfGVufDB8fHxibHVlfDE3NTM3ODg2NTF8MA&ixlib=rb-4.1.0&q=85"
          alt="3D Element"
          className="w-40 h-40 object-cover"
        />
      </div>
    </section>
  );
};

// About Section Component
export const AboutSection = () => {
  return (
    <section className="py-20 bg-black relative">
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
            <div className="text-8xl font-bold mb-4">1000+</div>
            <p className="text-lg text-gray-300">
              человек кадетов, курсантов, операторов научной роты, 
              офицеров, преподавателей, ученых, профессоров
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

// Partners Section Component
export const PartnersSection = () => {
  const partners = [
    'Министерство обороны Российской Федерации',
    'Служба внешней разведки Российской Федерации',
    'Федеральная служба войск национальной гвардии Российской Федерации',
    'Главное управление связи Вооруженных сил Российской Федерации',
    'Силы специальных операций Российской Федерации',
    'Федеральная служба охраны Российской Федерации',
    'Федеральная служба безопасности Российской Федерации'
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center">
          СОТРУДНИЧЕСТВО
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="p-6 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-colors duration-300"
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                {partner}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer Section Component
export const FooterSection = () => {
  const socialLinks = [
    { name: 'Facebook', url: 'https://vas.spb.ru/2' },
    { name: 'Twitter', url: 'https://vas.spb.ru/2' },
    { name: 'Behance', url: 'https://vas.spb.ru/2' },
    { name: 'Instagram', url: 'https://vas.spb.ru/3' },
    { name: 'YouTube', url: 'https://vas.spb.ru/5' }
  ];

  return (
    <footer className="py-16 bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="mb-8 md:mb-0">
            <div className="bg-white rounded-full px-6 py-2 flex items-center space-x-2">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">⚡</span>
              </div>
              <span className="text-black font-bold text-lg">ТЕХНОПАРК ВАС</span>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="text-gray-400 hover:text-white transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>&copy; 2024 Технопарк ВАС. Все права защищены.</p>
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