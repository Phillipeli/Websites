import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import About from './pages/About';
import PriceCalculator from './components/PriceCalculator';
import AITransparency from './pages/AITransparency';
import FAQ from './pages/FAQ';
import Footer from './components/Footer';
import VoiceflowChat from './components/VoiceflowChat';
import CookieBanner from './components/CookieBanner';
import Privatlivspolitik from './pages/Privatlivspolitik';
import Handelsbetingelser from './pages/Handelsbetingelser';
import LocalSEO from './components/LocalSEO';
import { initializeTracking } from './lib/cookieUtils';

// Component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Initialize tracking and mark app as loaded
    initializeTracking();
    setIsLoaded(true);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gray-950">
        <LocalSEO />
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/prisberegner" element={<PriceCalculator />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/om-os" element={<About />} />
          <Route path="/privatlivspolitik" element={<Privatlivspolitik />} />
          <Route path="/handelsbetingelser" element={<Handelsbetingelser />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/ai-transparens" element={<AITransparency />} />
        </Routes>
        <Footer />
        <VoiceflowChat />
        {isLoaded && <CookieBanner />}
      </div>
    </Router>
  );
}

export default App;