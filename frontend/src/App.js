import React, { useState, useEffect } from 'react';
import './App.css';
import { Header, HeroSection, TechnologiesGrid, AboutSection, PartnersSection, FooterSection, CookieNotice } from './components';

function App() {
  const [showCookieNotice, setShowCookieNotice] = useState(true);

  return (
    <div className="App bg-black text-white overflow-x-hidden">
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Technologies Grid */}
      <TechnologiesGrid />
      
      {/* About Section */}
      <AboutSection />
      
      {/* Partners Section */}
      <PartnersSection />
      
      {/* Footer */}
      <FooterSection />
      
      {/* Cookie Notice */}
      {showCookieNotice && (
        <CookieNotice onAccept={() => setShowCookieNotice(false)} />
      )}
    </div>
  );
}

export default App;