import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-950/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          <div 
            className="flex items-center space-x-3 group cursor-pointer"
            onClick={() => navigate('/')}
          >
            <div className="relative w-10 h-10 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-blue-500/30 transition-all duration-300 group-hover:scale-105 overflow-hidden">
              <img 
                src="/leadstrom-logo-dark.png" 
                alt="Leadstrøm Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Leadstrøm
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => navigate('/')}
              className={`relative font-medium transition-all duration-300 group ${
                location.pathname === '/' ? 'text-blue-400' : 'text-gray-300 hover:text-blue-400'
              }`}
            >
              Hjem
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => navigate('/services')}
              className={`relative font-medium transition-all duration-300 group ${
                location.pathname === '/services' ? 'text-blue-400' : 'text-gray-300 hover:text-blue-400'
              }`}
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => navigate('/prisberegner')}
              className={`relative font-medium transition-all duration-300 group ${
                location.pathname === '/prisberegner' ? 'text-blue-400' : 'text-gray-300 hover:text-blue-400'
              }`}
            >
              Prisberegner
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => navigate('/om-os')}
              className={`relative font-medium transition-all duration-300 group ${
                location.pathname === '/om-os' ? 'text-blue-400' : 'text-gray-300 hover:text-blue-400'
              }`}
            >
              Om Os
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => navigate('/faq')}
              className={`relative font-medium transition-all duration-300 group ${
                location.pathname === '/faq' ? 'text-blue-400' : 'text-gray-300 hover:text-blue-400'
              }`}
            >
              FAQ
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => navigate('/kontakt')}
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2.5 rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 font-medium"
            >
              Kontakt
            </button>
          </nav>

          <button
            className="md:hidden text-gray-300 hover:text-blue-400 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-950/95 backdrop-blur-lg border-t border-gray-700 rounded-b-2xl shadow-lg">
            <nav className="flex flex-col py-6 space-y-4 px-6">
              <button 
                onClick={() => handleNavigation('/')}
                className="text-gray-300 hover:text-blue-400 transition-colors font-medium text-left text-lg py-2"
              >
                Hjem
              </button>
              <button 
                onClick={() => handleNavigation('/services')}
                className="text-gray-300 hover:text-blue-400 transition-colors font-medium text-left text-lg py-2"
              >
                Services
              </button>
              <button 
                onClick={() => handleNavigation('/prisberegner')}
                className="text-gray-300 hover:text-blue-400 transition-colors font-medium text-left text-lg py-2"
              >
                Prisberegner
              </button>
              <button 
                onClick={() => handleNavigation('/om-os')}
                className="text-gray-300 hover:text-blue-400 transition-colors font-medium text-left text-lg py-2"
              >
                Om Os
              </button>
              <button 
                onClick={() => handleNavigation('/faq')}
                className="text-gray-300 hover:text-blue-400 transition-colors font-medium text-left text-lg py-2"
              >
                FAQ
              </button>
              <button 
                onClick={() => handleNavigation('/kontakt')}
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 font-medium text-left mt-4"
              >
                Kontakt
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;