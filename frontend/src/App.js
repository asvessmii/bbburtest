import React, { useState, useEffect } from 'react';
import './App.css';
import { Header, HeroSection, TechnologiesGrid, AboutSection, TeamSection, PartnersSection, FooterSection, CookieNotice } from './components';

function App() {
  const [showCookieNotice, setShowCookieNotice] = useState(true);

  return (
    <div className="App bg-black text-white overflow-x-hidden">
      <Header />
      <HeroSection />
      <TechnologiesGrid />
      <AboutSection />
      <TeamSection />
      <PartnersSection />
      <FooterSection />
      {showCookieNotice && (
        <CookieNotice onAccept={() => setShowCookieNotice(false)} />
      )}
    </div>
  );
}

export default App;
