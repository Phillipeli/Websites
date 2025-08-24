import React from 'react';
import { Settings, Cookie } from 'lucide-react';

interface CookieSettingsButtonProps {
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
}

const CookieSettingsButton: React.FC<CookieSettingsButtonProps> = ({ 
  className = '', 
  variant = 'outline' 
}) => {
  const handleOpenCookieSettings = () => {
    // Clear cookie consent to show banner again
    localStorage.removeItem('cookieConsent');
    localStorage.removeItem('cookiePreferences');
    
    // Dispatch custom event to trigger banner show
    window.dispatchEvent(new CustomEvent('cookieConsentChanged'));
    
    // Small delay to ensure state updates
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  const getButtonStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:shadow-lg hover:shadow-blue-500/30';
      case 'secondary':
        return 'bg-gray-700 text-gray-300 hover:bg-gray-600';
      case 'outline':
      default:
        return 'border-2 border-blue-500 text-blue-400 hover:bg-blue-500/10';
    }
  };

  return (
    <button
      onClick={handleOpenCookieSettings}
      className={`
        inline-flex items-center gap-2 px-4 py-2 rounded-full 
        transition-all duration-300 font-medium text-sm
        ${getButtonStyles()}
        ${className}
      `}
    >
      <Cookie size={16} />
      Cookie-indstillinger
      <Settings size={14} />
    </button>
  );
};

export default CookieSettingsButton;