import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Calendar, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname === '/') {
      // Vi er allerede på forsiden, scroll direkte
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Vi er på en anden side, naviger til forsiden først
      navigate('/');
      // Vent lidt for at lade siden loade, derefter scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    setIsMenuOpen(false);
    setIsServiceDropdownOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm shadow-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-200">
            <Calendar className="h-8 w-8 text-emerald-500" />
            <span className="text-xl font-bold text-gray-900 drop-shadow-sm">Lai Solutions</span>
          </Link>

          {/* Language Switcher - Desktop */}
          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {/* Service Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setIsServiceDropdownOpen(!isServiceDropdownOpen)}
                className="flex items-center text-gray-800 hover:text-emerald-600 transition-colors duration-200 font-medium px-3 py-2 rounded-lg hover:bg-emerald-50"
              >
                {t('header.service')}
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                  isServiceDropdownOpen ? 'rotate-180' : ''
                }`} />
              </button>
              
              {isServiceDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50 backdrop-blur-sm">
                  <Link
                    to="/ai-agenter"
                    onClick={() => setIsServiceDropdownOpen(false)}
                    className="block w-full text-left px-4 py-3 hover:bg-emerald-50 hover:text-emerald-700 transition-colors duration-200 border-b border-gray-100 last:border-b-0 no-underline"
                  >
                    <div className="font-semibold text-gray-900 leading-tight">{t('header.aiAgents')}</div>
                    <div className="text-sm text-gray-600 mt-1 leading-tight">{t('header.aiAgentsDesc')}</div>
                  </Link>
                  <Link
                    to="/automatiseret-leadgenerering"
                    onClick={() => setIsServiceDropdownOpen(false)}
                    className="block w-full text-left px-4 py-3 hover:bg-emerald-50 hover:text-emerald-700 transition-colors duration-200 border-b border-gray-100 last:border-b-0 no-underline"
                  >
                    <div className="font-semibold text-gray-900 leading-tight">{t('header.leadGeneration')}</div>
                    <div className="text-sm text-gray-600 mt-1 leading-tight">{t('header.leadGenerationDesc')}</div>
                  </Link>
                </div>
              )}
            </div>

            <Link 
              to="/"
              className="text-gray-800 hover:text-emerald-600 transition-colors duration-200 font-medium px-3 py-2 rounded-lg hover:bg-emerald-50"
            >
              {t('header.home')}
            </Link>
            <button 
              onClick={() => {
                scrollToSection('results');
              }}
              className="text-gray-800 hover:text-emerald-600 transition-colors duration-200 font-medium px-3 py-2 rounded-lg hover:bg-emerald-50"
            >
              {t('header.cases')}
            </button>
            <Link 
              to="/om-os"
              className="text-gray-800 hover:text-emerald-600 transition-colors duration-200 font-medium px-3 py-2 rounded-lg hover:bg-emerald-50"
            >
              {t('header.about')}
            </Link>
            <button 
              onClick={() => {
                scrollToSection('testimonials');
              }}
              className="text-gray-800 hover:text-emerald-600 transition-colors duration-200 font-medium px-3 py-2 rounded-lg hover:bg-emerald-50"
            >
              {t('header.reviews')}
            </button>
            <button 
              onClick={() => {
                scrollToSection('contact');
              }}
              className="bg-emerald-500 text-white px-6 py-3 rounded-lg hover:bg-emerald-600 transition-all duration-200 font-semibold shadow-md hover:shadow-lg transform hover:scale-105 hover-shimmer hover-glow"
            >
              {t('header.contact')}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-800 hover:bg-emerald-50 rounded-lg transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200 py-4 shadow-lg relative z-50">
            {/* Language Switcher - Mobile */}
            <div className="flex justify-center mb-4">
              <LanguageSwitcher />
            </div>
            
            <nav className="flex flex-col space-y-4">
              <div className="px-4">
                <div className="text-gray-800 font-semibold mb-3 text-lg">{t('header.service')}</div>
                <div className="ml-4 space-y-2">
                  <Link
                    to="/ai-agenter"
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-left text-gray-700 hover:text-emerald-600 transition-colors duration-200 font-medium py-2 px-3 rounded-lg hover:bg-emerald-50"
                  >
                    {t('header.aiAgents')}
                  </Link>
                  <Link
                    to="/automatiseret-leadgenerering"
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-left text-gray-700 hover:text-emerald-600 transition-colors duration-200 font-medium py-2 px-3 rounded-lg hover:bg-emerald-50"
                  >
                    {t('header.leadGeneration')}
                  </Link>
                </div>
              </div>
              
              <Link 
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-left text-gray-800 hover:text-emerald-600 transition-colors duration-200 px-4 py-3 block font-medium rounded-lg mx-4 hover:bg-emerald-50"
              >
                {t('header.home')}
              </Link>
              <button 
                onClick={() => {
                  scrollToSection('results');
                }}
                className="text-left text-gray-800 hover:text-emerald-600 transition-colors duration-200 px-4 py-3 font-medium rounded-lg mx-4 hover:bg-emerald-50"
              >
                {t('header.cases')}
              </button>
              <Link 
                to="/om-os"
                onClick={() => setIsMenuOpen(false)}
                className="text-left text-gray-800 hover:text-emerald-600 transition-colors duration-200 px-4 py-3 block font-medium rounded-lg mx-4 hover:bg-emerald-50"
              >
                {t('header.about')}
              </Link>
              <button 
                onClick={() => {
                  scrollToSection('testimonials');
                }}
                className="text-left text-gray-800 hover:text-emerald-600 transition-colors duration-200 px-4 py-3 font-medium rounded-lg mx-4 hover:bg-emerald-50"
              >
                {t('header.reviews')}
              </button>
              <button 
                onClick={() => {
                  scrollToSection('contact');
                }}
                className="bg-emerald-500 text-white px-6 py-3 rounded-lg hover:bg-emerald-600 transition-all duration-200 font-semibold mx-4 shadow-md hover:shadow-lg transform hover:scale-105 hover-shimmer hover-glow"
              >
                {t('header.contact')}
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;