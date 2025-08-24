import React, { useEffect } from 'react';
import { useConsent } from '@/contexts/ConsentContext';
import { useLanguage } from '@/contexts/LanguageContext';

interface CalendlyWidgetProps {
  className?: string;
}

const CalendlyWidget: React.FC<CalendlyWidgetProps> = ({ className = "" }) => {
  const { preferences } = useConsent();
  const { t } = useLanguage();

  useEffect(() => {
    // Load Calendly script if functional cookies are accepted and script not already loaded
    if (preferences.functional) {
      // Check if script is already loaded
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      
      if (!existingScript) {
        // Load Calendly script
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.body.appendChild(script);
        
        script.onload = () => {
          initializeCalendlyWidget();
        };
      } else {
        // Script already loaded, just initialize widget
        initializeCalendlyWidget();
      }
    }
  }, [preferences.functional]);

  const initializeCalendlyWidget = () => {
    if (window.Calendly) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
      
      // Initialize Calendly widget after script loads
      script.onload = () => {
        // Force re-render of Calendly widget
        if (window.Calendly) {
          window.Calendly.initInlineWidget({
            url: 'https://calendly.com/bastian-laisolutions/automatisering',
            parentElement: document.querySelector('.calendly-inline-widget'),
            prefill: {},
            utm: {}
          });
        }
      };
      // Try to initialize widget if Calendly is already available
      const widgetElement = document.querySelector('.calendly-inline-widget');
      if (widgetElement && !widgetElement.innerHTML.trim()) {
        window.Calendly.initInlineWidget({
          url: 'https://calendly.com/bastian-laisolutions/automatisering',
          parentElement: widgetElement,
          prefill: {},
          utm: {}
        });
      }
    }
  };

  // Check if functional cookies are accepted
  if (!preferences.functional) {
    return (
      <div className={`calendly-widget-container ${className}`}>
        <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg">
          <div className="text-center p-8">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              {t('cookies.consentRequired')}
            </h3>
            <p className="text-gray-600 mb-4">
              {t('cookies.functionalRequired')}
            </p>
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('openCookieSettings'))}
              className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
            >
              {t('cookies.openSettings')}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`calendly-widget-container ${className}`}>
      <div 
        className="calendly-inline-widget" 
        data-url="https://calendly.com/bastian-laisolutions/automatisering"
        style={{ minWidth: '320px', height: '700px' }}
      />
    </div>
  );
};

// Extend Window interface for Calendly
declare global {
  interface Window {
    Calendly: any;
  }
}
export default CalendlyWidget;