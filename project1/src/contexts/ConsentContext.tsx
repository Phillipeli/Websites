import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  functional: boolean;
  marketing: boolean;
}

interface ConsentContextType {
  preferences: CookiePreferences;
  hasConsented: boolean;
  updatePreferences: (prefs: CookiePreferences) => void;
  acceptAll: () => void;
  acceptNecessaryOnly: () => void;
  revokeConsent: () => void;
}

const ConsentContext = createContext<ConsentContextType | undefined>(undefined);

const defaultPreferences: CookiePreferences = {
  necessary: true, // Always true, cannot be disabled
  analytics: false,
  functional: false,
  marketing: false
};

interface ConsentProviderProps {
  children: ReactNode;
}

export const ConsentProvider: React.FC<ConsentProviderProps> = ({ children }) => {
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);
  const [hasConsented, setHasConsented] = useState(false);

  // Load saved preferences on mount
  useEffect(() => {
    const savedConsent = localStorage.getItem('cookie_consent');
    if (savedConsent) {
      try {
        const savedPreferences = JSON.parse(savedConsent);
        setPreferences(savedPreferences);
        setHasConsented(true);
        
        // Initialize services based on saved preferences
        initializeServices(savedPreferences);
      } catch (error) {
        console.error('Error parsing saved cookie preferences:', error);
      }
    }
  }, []);

  const initializeServices = (prefs: CookiePreferences) => {
    // Initialize Google Analytics if analytics cookies are accepted
    if (prefs.analytics && !window.gtag) {
      initializeGoogleAnalytics();
    }

    // Initialize other marketing services if marketing cookies are accepted
    if (prefs.marketing) {
      initializeMarketingServices();
    }
  };

  const initializeGoogleAnalytics = () => {
    if (typeof window !== 'undefined' && !window.gtag) {
      // Create script element for Google Analytics
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
      document.head.appendChild(script);

      // Initialize gtag
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', 'GA_MEASUREMENT_ID', {
        anonymize_ip: true,
        cookie_flags: 'SameSite=None;Secure'
      });
    }
  };

  const initializeMarketingServices = () => {
    // Initialize Facebook Pixel if needed
    // Initialize LinkedIn Insight if needed
    // This is where you would add other marketing scripts
  };

  const updatePreferences = (newPreferences: CookiePreferences) => {
    // Ensure necessary cookies are always true
    const updatedPreferences = {
      ...newPreferences,
      necessary: true
    };

    setPreferences(updatedPreferences);
    setHasConsented(true);
    
    // Save to localStorage
    localStorage.setItem('cookie_consent', JSON.stringify(updatedPreferences));
    localStorage.setItem('cookie_consent_date', new Date().toISOString());
    
    // Initialize services based on new preferences
    initializeServices(updatedPreferences);
  };

  const acceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      analytics: true,
      functional: true,
      marketing: true
    };
    updatePreferences(allAccepted);
  };

  const acceptNecessaryOnly = () => {
    const necessaryOnly: CookiePreferences = {
      necessary: true,
      analytics: false,
      functional: false,
      marketing: false
    };
    updatePreferences(necessaryOnly);
  };

  const revokeConsent = () => {
    setPreferences(defaultPreferences);
    setHasConsented(false);
    localStorage.removeItem('cookie_consent');
    localStorage.removeItem('cookie_consent_date');
    
    // Optionally reload page to clear existing cookies/scripts
    window.location.reload();
  };

  return (
    <ConsentContext.Provider value={{
      preferences,
      hasConsented,
      updatePreferences,
      acceptAll,
      acceptNecessaryOnly,
      revokeConsent
    }}>
      {children}
    </ConsentContext.Provider>
  );
};

export const useConsent = (): ConsentContextType => {
  const context = useContext(ConsentContext);
  if (!context) {
    throw new Error('useConsent must be used within a ConsentProvider');
  }
  return context;
};

// Extend Window interface for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}