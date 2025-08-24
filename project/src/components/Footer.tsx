import React from 'react';
import { Zap } from 'lucide-react';
import NAP from './NAP';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden">
                <img 
                  src="/leadstrom-logo-dark.png" 
                  alt="Leadstrøm Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-2xl font-bold">Leadstrøm</span>
            </div>
            <div className="mb-4">
              <NAP variant="footer" showIcons={false} />
            </div>
            <p className="text-sm text-gray-500">
              © {currentYear} Leadstrøm. Alle rettigheder forbeholdes.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button 
                  onClick={() => window.location.href = '/services#websites'}
                  className="hover:text-white transition-colors duration-300"
                >
                  Hjemmesider
                </button>
              </li>
              <li>
                <button 
                  onClick={() => window.location.href = '/services#ai-agents'}
                  className="hover:text-white transition-colors duration-300"
                >
                  AI Chat-agenter
                </button>
              </li>
              <li>
                <button 
                  onClick={() => window.location.href = '/services#ai-voice-agents'}
                  className="hover:text-white transition-colors duration-300"
                >
                  AI Voice Agenter
                </button>
              </li>
              <li>
                <button 
                  onClick={() => window.location.href = '/services'}
                  className="hover:text-white transition-colors duration-300"
                >
                  Booking systemer
                </button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Virksomhed</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button 
                  onClick={() => window.location.href = '/om-os'}
                  className="hover:text-white transition-colors duration-300"
                >
                  Om os
                </button>
              </li>
              <li>
                <button 
                  onClick={() => window.location.href = '/faq'}
                  className="hover:text-white transition-colors duration-300"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button 
                  onClick={() => window.location.href = '/kontakt'}
                  className="hover:text-white transition-colors duration-300"
                >
                  Kontakt
                </button>
              </li>
              <li>
                <button 
                  onClick={() => window.location.href = '/privatlivspolitik'}
                  className="hover:text-white transition-colors duration-300"
                >
                  Privatlivspolitik
                </button>
              </li>
              <li>
                <button 
                  onClick={() => window.location.href = '/handelsbetingelser'}
                  className="hover:text-white transition-colors duration-300"
                >
                  Handelsbetingelser
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    localStorage.removeItem('cookieConsent');
                    localStorage.removeItem('cookiePreferences');
                    window.location.reload();
                  }}
                  className="hover:text-white transition-colors duration-300"
                >
                  Cookie-indstillinger
                </button>
              </li>
              <li>
                <button 
                  onClick={() => window.location.href = '/ai-transparens'}
                  className="hover:text-white transition-colors duration-300"
                >
                  AI Transparens
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            Lavet i Danmark
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;