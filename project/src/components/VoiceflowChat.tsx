import React, { useEffect, useState } from 'react';
import { hasConsent, hasCookieConsent, initializeTracking } from '../lib/cookieUtils';

declare global {
  interface Window {
    voiceflow?: {
      chat: {
        load: (config: any) => void;
        destroy: () => void;
        open: () => void;
        close: () => void;
      };
    };
  }
}

const VoiceflowChat: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasUserConsent, setHasUserConsent] = useState(false);

  useEffect(() => {
    // Check if user has given consent and if they have consented to functional cookies
    const checkConsent = () => {
      const userHasConsent = hasCookieConsent() && hasConsent('functional');
      setHasUserConsent(userHasConsent);
    };

    // Initial check
    checkConsent();
    
    // Listen for storage changes (when user updates cookie preferences)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'cookiePreferences' || e.key === 'cookieConsent') {
        checkConsent();
      }
    };

    window.addEventListener('storage', handleStorageChange);

    // Also listen for custom events (for same-tab updates)
    const handleConsentChange = () => {
      checkConsent();
    };

    window.addEventListener('cookieConsentChanged', handleConsentChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('cookieConsentChanged', handleConsentChange);
    };
  }, []);

  useEffect(() => {
    if (hasUserConsent && !isLoaded) {
      loadVoiceflowScript();
    } else if (!hasUserConsent && isLoaded) {
      // If consent is withdrawn, destroy the chat
      destroyVoiceflow();
    }
  }, [hasUserConsent, isLoaded]);

  const loadVoiceflowScript = () => {
    // Check if script is already loaded
    if (document.querySelector('script[src*="voiceflow.com"]')) {
      setIsLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://cdn.voiceflow.com/widget-next/bundle.mjs';
    
    script.onload = () => {
      if (window.voiceflow) {
        window.voiceflow.chat.load({
          verify: { projectID: '685d50de688b7262e087db06' },
          url: 'https://general-runtime.voiceflow.com',
          versionID: 'production',
          assistant: {
            title: 'Leadstrøm Agent',
            description: 'Spørg om hvad som helst'
          },
          voice: {
            url: "https://runtime-api.voiceflow.com"
          }
        });
        setIsLoaded(true);
      }
    };

    script.onerror = () => {
      console.error('Failed to load Voiceflow script');
    };

    document.head.appendChild(script);
  };

  const destroyVoiceflow = () => {
    if (window.voiceflow && window.voiceflow.chat) {
      try {
        window.voiceflow.chat.destroy();
      } catch (error) {
        console.warn('Error destroying Voiceflow chat:', error);
      }
    }

    // Remove the script
    const script = document.querySelector('script[src*="voiceflow.com"]');
    if (script) {
      script.remove();
    }

    setIsLoaded(false);
  };

  // Cleanup on component unmount
  useEffect(() => {
    return () => {
      if (isLoaded) {
        destroyVoiceflow();
      }
    };
  }, [isLoaded]);

  // Don't render anything - Voiceflow handles its own UI
  return null;
};

export default VoiceflowChat;