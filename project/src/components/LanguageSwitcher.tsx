import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => setLanguage('da')}
        className={`w-8 h-6 rounded-sm overflow-hidden border-2 transition-all duration-200 ${
          language === 'da' 
            ? 'border-emerald-500 shadow-md scale-110' 
            : 'border-gray-300 hover:border-gray-400 opacity-70 hover:opacity-100'
        }`}
        title="Dansk"
      >
        <img 
          src="https://flagcdn.com/w40/dk.png" 
          alt="Danish flag"
          className="w-full h-full object-cover"
        />
      </button>
      
      <button
        onClick={() => setLanguage('en')}
        className={`w-8 h-6 rounded-sm overflow-hidden border-2 transition-all duration-200 ${
          language === 'en' 
            ? 'border-emerald-500 shadow-md scale-110' 
            : 'border-gray-300 hover:border-gray-400 opacity-70 hover:opacity-100'
        }`}
        title="English"
      >
        <img 
          src="https://flagcdn.com/w40/gb.png" 
          alt="English flag"
          className="w-full h-full object-cover"
        />
      </button>
    </div>
  );
};

export default LanguageSwitcher;