import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { ConsentProvider } from '@/contexts/ConsentContext';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import AIAgenterPage from './pages/AIAgenterPage';
import AutomatiseretLeadgenereringPage from './pages/AutomatiseretLeadgenereringPage';
import AboutPage from './pages/AboutPage';
import HandelsbetingelserPage from './pages/HandelsbetingelserPage';
import PrivatlivspolitikPage from './pages/PrivatlivspolitikPage';
import CookiesPage from './pages/CookiesPage';

function App() {
  const [showCookieSettings, setShowCookieSettings] = useState(false);

  useEffect(() => {
    const handleOpenCookieSettings = () => {
      setShowCookieSettings(true);
    };

    window.addEventListener('openCookieSettings', handleOpenCookieSettings);

    return () => {
      window.removeEventListener('openCookieSettings', handleOpenCookieSettings);
    };
  }, []);

  return (
    <LanguageProvider>
      <ConsentProvider>
        <div className="min-h-screen bg-gray-900">
          <Header />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/ai-agenter" element={<AIAgenterPage />} />
            <Route path="/automatiseret-leadgenerering" element={<AutomatiseretLeadgenereringPage />} />
            <Route path="/om-os" element={<AboutPage />} />
            <Route path="/handelsbetingelser" element={<HandelsbetingelserPage />} />
            <Route path="/privatlivspolitik" element={<PrivatlivspolitikPage />} />
            <Route path="/cookies" element={<CookiesPage />} />
          </Routes>
          <Footer />
          <CookieBanner 
            forceShowSettings={showCookieSettings}
            onSettingsClosed={() => setShowCookieSettings(false)}
          />
        </div>
      </ConsentProvider>
    </LanguageProvider>
  );
}

export default App;