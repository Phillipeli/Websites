import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const openCookieSettings = () => {
    // Dispatch a custom event to open cookie settings
    window.dispatchEvent(new CustomEvent('openCookieSettings'));
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Calendar className="h-8 w-8 text-emerald-500" />
              <span className="text-xl font-bold text-white">Lai Solutions</span>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-2 text-emerald-400" />
                <a href="mailto:bastian@laisolutions.dk" className="hover:text-emerald-400 transition-colors">
                  bastian@laisolutions.dk
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-2 text-emerald-400" />
                <a href="tel:+4581731500" className="hover:text-emerald-400 transition-colors">
                  +45 81 73 15 00
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <Linkedin className="h-4 w-4 mr-2 text-emerald-400" />
                <a 
                  href="https://www.linkedin.com/in/bastian-hansen-b012a1241/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Bastian Hansen
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-4">{t('footer.services')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/ai-agenter" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  {t('header.aiAgents')}
                </Link>
              </li>
              <li>
                <Link to="/automatiseret-leadgenerering" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  {t('header.leadGeneration')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  {t('header.home')}
                </Link>
              </li>
              <li>
                <Link to="/om-os" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  {t('header.about')}
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-emerald-400 transition-colors text-left"
                >
                  {t('header.contact')}
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap justify-center md:justify-start space-x-6">
              <Link to="/handelsbetingelser" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                {t('footer.termsOfService')}
              </Link>
              <Link to="/privatlivspolitik" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                {t('footer.privacyPolicy')}
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                {t('footer.cookiePolicy')}
              </Link>
              <button 
                onClick={openCookieSettings}
                className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
              >
                {t('footer.cookieSettings')}
              </button>
            </div>
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Lai Solutions. {t('footer.allRightsReserved')}
            </div>
          </div>
        </div>

        {/* Company Details */}
        <div className="border-t border-gray-800 mt-4 pt-4">
          <div className="text-center text-gray-500 text-xs space-y-1">
            <p>Lai Solutions | Bastian Hansen</p>
            <p>
              Designet af{' '}
              <a 
                href="https://leadstrøm.dk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 transition-colors duration-200 underline"
              >
                Leadstrøm.dk
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;