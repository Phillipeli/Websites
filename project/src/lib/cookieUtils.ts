// Cookie utilities for managing user consent
export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

const DEFAULT_PREFERENCES: CookiePreferences = {
  necessary: true, // Always true, cannot be disabled
  analytics: false,
  marketing: false,
  functional: false
};

// Initialize Google Analytics
const initializeGoogleAnalytics = () => {
  if (typeof window !== 'undefined' && hasConsent('analytics')) {
    // Add Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-YOUR-GA-ID';
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    gtag('js', new Date());
    gtag('config', 'G-YOUR-GA-ID', {
      anonymize_ip: true,
      cookie_flags: 'SameSite=None;Secure'
    });
  }
};

// Initialize Facebook Pixel
const initializeFacebookPixel = () => {
  if (typeof window !== 'undefined' && hasConsent('marketing')) {
    // Facebook Pixel Code
    !function(f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
      if (f.fbq) return;
      n = f.fbq = function() {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    
    window.fbq('init', 'YOUR-FACEBOOK-PIXEL-ID');
    window.fbq('track', 'PageView');
  }
};

// Initialize tracking based on consent
export const initializeTracking = (): void => {
  // Always try to initialize tracking - the individual functions will check consent
  try {
    initializeGoogleAnalytics();
    initializeFacebookPixel();
  } catch (error) {
    console.warn('Error initializing tracking:', error);
  }
};

export const getCookiePreferences = (): CookiePreferences => {
  try {
    if (typeof window === 'undefined') return DEFAULT_PREFERENCES;
    const saved = localStorage.getItem('cookiePreferences');
    if (saved) {
      const parsed = JSON.parse(saved);
      return { ...DEFAULT_PREFERENCES, ...parsed };
    }
  } catch (error) {
    console.warn('Error reading cookie preferences:', error);
  }
  return DEFAULT_PREFERENCES;
};

export const setCookiePreferences = (preferences: CookiePreferences): void => {
  try {
    if (typeof window === 'undefined') return;
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    localStorage.setItem('cookieConsent', 'customized');
    // Initialize tracking after preferences are set
    setTimeout(initializeTracking, 100);
  } catch (error) {
    console.error('Error saving cookie preferences:', error);
  }
};

export const hasConsent = (category: keyof CookiePreferences): boolean => {
  if (typeof window === 'undefined') return false;
  
  const consent = localStorage.getItem('cookieConsent');
  if (!consent) return false;
  
  const preferences = getCookiePreferences();
  return preferences[category];
};

export const hasCookieConsent = (): boolean => {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem('cookieConsent') !== null;
};

export const acceptAllCookies = (): void => {
  if (typeof window === 'undefined') return;
  
  const allAccepted: CookiePreferences = {
    necessary: true,
    analytics: true,
    marketing: true,
    functional: true
  };
  setCookiePreferences(allAccepted);
  localStorage.setItem('cookieConsent', 'accepted');
};

export const rejectAllCookies = (): void => {
  if (typeof window === 'undefined') return;
  setCookiePreferences(DEFAULT_PREFERENCES);
  localStorage.setItem('cookieConsent', 'rejected');
};

// Declare global types for tracking scripts
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    fbq: (...args: any[]) => void;
    _fbq: any;
  }
}