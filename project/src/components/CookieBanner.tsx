import React, { useState, useEffect } from 'react';
import { Cookie, Settings, X, Check, Shield, BarChart3, Target, Wrench } from 'lucide-react';
import { 
  hasCookieConsent, 
  acceptAllCookies, 
  rejectAllCookies, 
  setCookiePreferences, 
  getCookiePreferences,
  type CookiePreferences 
} from '../lib/cookieUtils';

const CookieBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(getCookiePreferences());

  useEffect(() => {
    // Show banner if no consent has been given
    if (!hasCookieConsent()) {
      // Delay showing banner slightly for better UX
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  // Prevent background scrolling when cookie banner is open
  useEffect(() => {
    if (showBanner) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showBanner]);

  const handleAcceptAll = () => {
    acceptAllCookies();
    setShowBanner(false);
    setShowSettings(false);
    // Dispatch custom event for same-tab updates
    window.dispatchEvent(new CustomEvent('cookieConsentChanged'));
  };

  const handleRejectAll = () => {
    rejectAllCookies();
    setShowBanner(false);
    setShowSettings(false);
    // Dispatch custom event for same-tab updates
    window.dispatchEvent(new CustomEvent('cookieConsentChanged'));
  };

  const handleSavePreferences = () => {
    setCookiePreferences(preferences);
    setShowBanner(false);
    setShowSettings(false);
    // Dispatch custom event for same-tab updates
    window.dispatchEvent(new CustomEvent('cookieConsentChanged'));
  };

  const handlePreferenceChange = (category: keyof CookiePreferences, value: boolean) => {
    if (category === 'necessary') return; // Cannot disable necessary cookies
    setPreferences(prev => ({
      ...prev,
      [category]: value
    }));
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" />
      
      {/* Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh]">
            
            {!showSettings ? (
              // Main Banner
              <div className="p-6 md:p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Cookie className="text-blue-400" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                      Vi respekterer dit privatliv 🍪
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">
                      Vi bruger cookies til at forbedre din oplevelse, analysere trafik og levere personaliseret indhold. 
                      Du kan vælge hvilke cookies du vil acceptere nedenfor.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Shield size={16} />
                      <span>GDPR-compliant • Dine data er sikre</span>
                    </div>
                  </div>
                </div>

                {/* Quick Cookie Info */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                  <div className="bg-gray-800 rounded-lg p-3 border border-gray-600">
                    <div className="flex items-center gap-2 mb-1">
                      <Shield className="text-green-500" size={16} />
                      <span className="text-sm font-medium text-white">Nødvendige</span>
                    </div>
                    <p className="text-xs text-gray-400">Altid aktive</p>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-3 border border-gray-600">
                    <div className="flex items-center gap-2 mb-1">
                      <BarChart3 className="text-blue-500" size={16} />
                      <span className="text-sm font-medium text-white">Statistik</span>
                    </div>
                    <p className="text-xs text-gray-400">Google Analytics</p>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-3 border border-gray-600">
                    <div className="flex items-center gap-2 mb-1">
                      <Target className="text-purple-500" size={16} />
                      <span className="text-sm font-medium text-white">Marketing</span>
                    </div>
                    <p className="text-xs text-gray-400">Facebook Pixel</p>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-3 border border-gray-600">
                    <div className="flex items-center gap-2 mb-1">
                      <Wrench className="text-orange-500" size={16} />
                      <span className="text-sm font-medium text-white">Funktionelle</span>
                    </div>
                    <p className="text-xs text-gray-400">Chatbot, booking</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleAcceptAll}
                    className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 font-medium flex items-center justify-center gap-2"
                  >
                    <Check size={18} />
                    Accepter alle cookies
                  </button>
                  <button
                    onClick={() => setShowSettings(true)}
                    className="flex-1 border-2 border-gray-600 text-gray-300 px-6 py-3 rounded-full hover:bg-gray-800 transition-all duration-300 font-medium flex items-center justify-center gap-2"
                  >
                    <Settings size={18} />
                    Tilpas indstillinger
                  </button>
                  <button
                    onClick={handleRejectAll}
                    className="sm:flex-initial px-6 py-3 text-gray-400 hover:text-gray-300 transition-colors duration-300 font-medium"
                  >
                    Afvis alle
                  </button>
                </div>

                {/* Privacy Policy Link */}
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <p className="text-xs text-gray-400 text-center">
                    Læs mere i vores{' '}
                    <button 
                      onClick={() => window.location.href = '/privatlivspolitik'}
                      className="text-blue-400 hover:text-blue-300 underline"
                    >
                      privatlivspolitik
                    </button>
                    {' '}og{' '}
                    <button 
                      onClick={() => window.location.href = '/handelsbetingelser'}
                      className="text-blue-400 hover:text-blue-300 underline"
                    >
                      handelsbetingelser
                    </button>
                  </p>
                </div>
              </div>
            ) : (
              // Settings Panel
              <div className="p-6 md:p-8 max-h-[90vh] overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl md:text-2xl font-bold text-white">Cookie-indstillinger</h3>
                  <button
                    onClick={() => setShowSettings(false)}
                    className="text-gray-400 hover:text-gray-300 transition-colors duration-300"
                  >
                    <X size={24} />
                  </button>
                </div>

                <p className="text-gray-300 text-sm mb-6">
                  Vælg hvilke typer cookies du vil tillade. Du kan ændre disse indstillinger når som helst.
                </p>

                {/* Cookie Categories */}
                <div className="space-y-4 mb-6">
                  {/* Necessary Cookies */}
                  <div className="bg-gray-800 rounded-lg p-4 border border-gray-600">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <Shield className="text-green-500" size={20} />
                        <h4 className="text-lg font-semibold text-white">Nødvendige cookies</h4>
                      </div>
                      <div className="bg-green-500 rounded-full px-3 py-1 text-xs font-medium text-white">
                        Altid aktive
                      </div>
                    </div>
                    <p className="text-sm text-gray-300 mb-2">
                      Disse cookies er nødvendige for at hjemmesiden kan fungere korrekt. De kan ikke deaktiveres.
                    </p>
                    <p className="text-xs text-gray-400">
                      Eksempler: Session-cookies, sikkerhedscookies, indstillinger
                    </p>
                  </div>

                  {/* Analytics Cookies */}
                  <div className="bg-gray-800 rounded-lg p-4 border border-gray-600">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <BarChart3 className="text-blue-500" size={20} />
                        <h4 className="text-lg font-semibold text-white">Statistik cookies</h4>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={preferences.analytics}
                          onChange={(e) => handlePreferenceChange('analytics', e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                      </label>
                    </div>
                    <p className="text-sm text-gray-300 mb-2">
                      Hjælper os med at forstå hvordan besøgende bruger hjemmesiden, så vi kan forbedre den.
                    </p>
                    <p className="text-xs text-gray-400">
                      Eksempler: Google Analytics, besøgsstatistikker, performance-målinger
                    </p>
                  </div>

                  {/* Marketing Cookies */}
                  <div className="bg-gray-800 rounded-lg p-4 border border-gray-600">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <Target className="text-purple-500" size={20} />
                        <h4 className="text-lg font-semibold text-white">Marketing cookies</h4>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={preferences.marketing}
                          onChange={(e) => handlePreferenceChange('marketing', e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-500"></div>
                      </label>
                    </div>
                    <p className="text-sm text-gray-300 mb-2">
                      Bruges til at vise dig relevante annoncer og måle effektiviteten af vores markedsføring.
                    </p>
                    <p className="text-xs text-gray-400">
                      Eksempler: Facebook Pixel, Google Ads, retargeting
                    </p>
                  </div>

                  {/* Functional Cookies */}
                  <div className="bg-gray-800 rounded-lg p-4 border border-gray-600">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <Wrench className="text-orange-500" size={20} />
                        <h4 className="text-lg font-semibold text-white">Funktionelle cookies</h4>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={preferences.functional}
                          onChange={(e) => handlePreferenceChange('functional', e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
                      </label>
                    </div>
                    <p className="text-sm text-gray-300 mb-2">
                      Forbedrer funktionaliteten og personaliseringen af hjemmesiden.
                    </p>
                    <p className="text-xs text-gray-400">
                      Eksempler: Chatbot, booking-system, brugerindstillinger
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleSavePreferences}
                    className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 font-medium"
                  >
                    Gem indstillinger
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="flex-1 border-2 border-gray-600 text-gray-300 px-6 py-3 rounded-full hover:bg-gray-800 transition-all duration-300 font-medium"
                  >
                    Accepter alle
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CookieBanner;