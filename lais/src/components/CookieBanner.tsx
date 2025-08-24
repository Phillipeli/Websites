import React, { useState, useEffect } from 'react';
import { X, Settings, Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useConsent, CookiePreferences } from '@/contexts/ConsentContext';

interface CookieBannerProps {
  forceShowSettings?: boolean;
  onSettingsClosed?: () => void;
}

const CookieBanner: React.FC<CookieBannerProps> = ({ forceShowSettings = false, onSettingsClosed }) => {
  const { t } = useLanguage();
  const { preferences, hasConsented, updatePreferences, acceptAll, acceptNecessaryOnly } = useConsent();
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [localPreferences, setLocalPreferences] = useState<CookiePreferences>(preferences);

  useEffect(() => {
    if (forceShowSettings) {
      setShowSettings(true);
      return;
    }

    // Show banner if user hasn't consented yet
    if (!hasConsented) {
      setShowBanner(true);
    }
  }, [forceShowSettings]);

  // Update local preferences when global preferences change
  useEffect(() => {
    setLocalPreferences(preferences);
  }, [preferences]);

  const handleSavePreferences = () => {
    updatePreferences(localPreferences);
    setShowBanner(false);
    setShowSettings(false);
    
    // Call callback if provided (for when opened from footer)
    if (onSettingsClosed) {
      onSettingsClosed();
    }
  };

  const handleAcceptAll = () => {
    acceptAll();
    setShowBanner(false);
    setShowSettings(false);
    if (onSettingsClosed) onSettingsClosed();
  };

  const handleAcceptNecessaryOnly = () => {
    acceptNecessaryOnly();
    setShowBanner(false);
    setShowSettings(false);
    if (onSettingsClosed) onSettingsClosed();
  };

  // Show settings modal even if banner is not shown (for footer link)
  if (!showBanner && !showSettings) return null;

  return (
    <>
      {/* Cookie Banner */}
      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-[60] p-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-4 lg:space-y-0">
            <div className="flex-1 pr-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {t('cookies.bannerTitle')}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 sm:mb-0">
                {t('cookies.bannerDescription')}
                <a href="/cookies" className="text-emerald-600 hover:text-emerald-700 underline ml-1">
                  {t('cookies.learnMore')}
                </a>
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 w-full sm:w-auto">
              <button
                onClick={() => setShowSettings(true)}
                className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium flex items-center justify-center"
              >
                <Settings className="h-4 w-4 mr-2" />
                {t('cookies.settings')}
              </button>
              <button
                onClick={acceptNecessaryOnly}
                onClick={handleAcceptNecessaryOnly}
                className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium text-center"
              >
                {t('cookies.acceptNecessary')}
              </button>
              <button
                onClick={acceptAll}
                onClick={handleAcceptAll}
                className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors text-sm font-medium text-center"
              >
                {t('cookies.acceptAll')}
              </button>
            </div>
          </div>
        </div>
        </div>
      )}

      {/* Cookie Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-[70] flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  {t('cookies.settingsTitle')}
                </h2>
                <button
                  onClick={() => {
                    setShowSettings(false);
                    if (onSettingsClosed) {
                      onSettingsClosed();
                    }
                  }}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="space-y-6">
                {/* Necessary Cookies */}
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {t('cookies.necessary')}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {t('cookies.necessaryDescription')}
                      </p>
                    </div>
                    <div className="ml-4">
                      <div className="bg-gray-100 rounded-full p-2">
                        <Check className="h-4 w-4 text-gray-600" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {t('cookies.analytics')}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {t('cookies.analyticsDescription')}
                      </p>
                    </div>
                    <div className="ml-4">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={localPreferences.analytics}
                          onChange={(e) => setLocalPreferences({
                            ...localPreferences,
                            analytics: e.target.checked
                          })}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Functional Cookies */}
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {t('cookies.functional')}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {t('cookies.functionalDescription')}
                      </p>
                    </div>
                    <div className="ml-4">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={localPreferences.functional}
                          onChange={(e) => setLocalPreferences({
                            ...localPreferences,
                            functional: e.target.checked
                          })}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="pb-4">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {t('cookies.marketing')}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {t('cookies.marketingDescription')}
                      </p>
                    </div>
                    <div className="ml-4">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={localPreferences.marketing}
                          onChange={(e) => setLocalPreferences({
                            ...localPreferences,
                            marketing: e.target.checked
                          })}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 mt-8">
                <button
                  onClick={handleAcceptNecessaryOnly}
                  className="flex-1 px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  {t('cookies.acceptNecessary')}
                </button>
                <button
                  onClick={handleSavePreferences}
                  className="flex-1 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium"
                >
                  {t('cookies.savePreferences')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieBanner;