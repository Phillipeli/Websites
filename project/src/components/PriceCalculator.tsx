import React, { useState, useEffect } from 'react';
import { Calculator, Globe, Bot, Mic, ShoppingCart, Calendar, FileText, Languages, Wrench, BarChart3, Phone, Palette, ArrowRight, CheckCircle, Users, Zap } from 'lucide-react';

const PriceCalculator = () => {
  // KRITISK: Alle funktioner er sat til TRUE fra start for at sikre prisankring
  const [selectedServices, setSelectedServices] = useState({
    website: true,        // Hjemmeside valgt fra start
    aiChat: true,         // AI Chat valgt fra start  
    aiVoice: true         // AI Voice valgt fra start
  });

  const [websitePages, setWebsitePages] = useState('1-5'); // Default til billigste option

  const [websiteFeatures, setWebsiteFeatures] = useState({
    multilingual: true,   // Flersproget valgt fra start
    advancedSeo: true,    // Avanceret SEO valgt fra start
    interactive: true,    // Interaktive værktøjer valgt fra start
    booking: true,        // Booking system valgt fra start
    socialMedia: true     // Sociale medier valgt fra start
  });

  const [aiChatFeatures, setAiChatFeatures] = useState({
    automaticBooking: true,    // Automatisk booking valgt fra start
    crmIntegration: true,      // CRM integration valgt fra start
    multilingualSupport: true, // Flersproget support valgt fra start
    personalBranding: true     // Personlig branding valgt fra start
  });

  const [voiceFeatures, setVoiceFeatures] = useState({
    personalBranding: true,    // Personlig branding valgt fra start
    advancedLanguage: true,    // Avanceret sprogforståelse valgt fra start
    multilingualSupport: true, // Flersproget support valgt fra start
    callAnalytics: true,       // Samtale-analytics valgt fra start
    crmIntegration: true,      // CRM integration valgt fra start
    customVoice: true          // Tilpasset stemme valgt fra start
  });

  const [supportPackage, setSupportPackage] = useState('none');
  const [selectedSupportPackages, setSelectedSupportPackages] = useState<string[]>([]);

  // Priser (i DKK)
  const websitePagePrices = {
    '1-5': 15000,
    '6-10': 25000,
    '11-20': 35000,
    '20+': 50000
  };

  const basePrices = {
    aiChat: 20000,
    aiVoice: 35000
  };

  const featurePrices = {
    website: {
      multilingual: 7000,
      advancedSeo: 12000,
      interactive: 10000,
      booking: 8000,
      socialMedia: 3000
    },
    aiChat: {
      automaticBooking: 5000,
      crmIntegration: 8000,
      multilingualSupport: 4000,
      personalBranding: 5000
    },
    voice: {
      personalBranding: 5000,
      advancedLanguage: 8000,
      multilingualSupport: 6000,
      callAnalytics: 5000,
      crmIntegration: 7000,
      customVoice: 12000
    }
  };

  const supportPackages = [
    {
      id: 'none',
      name: 'Ingen Support',
      price: 0,
      description: '30 dages gratis support inkluderet',
      features: [
        '30 dages gratis support',
        'Fejlrettelser inkluderet',
        'Support efter behov (timepris)',
        'Email support'
      ]
    },
    {
      id: 'basic',
      name: 'Basis Support',
      price: 1500,
      description: 'Grundlæggende månedlig support',
      features: [
        '1,5 timer support pr. måned',
        'Sikkerhedsopdateringer',
        'Backup og monitoring',
        'Email support',
        'Svar inden for 48 timer'
      ]
    },
    {
      id: 'standard',
      name: 'Standard Support',
      price: 3000,
      description: 'Udvidet support med prioritet',
      popular: true,
      features: [
        '4 timer support pr. måned',
        'Alt fra Basis pakken',
        'Indholdsvedligeholdelse',
        'Telefon support',
        'Svar inden for 24 timer',
        'Månedlige rapporter'
      ]
    },
    {
      id: 'premium',
      name: 'Premium Support',
      price: 5000,
      description: 'Dedikeret support og vedligeholdelse',
      features: [
        '8 timer support pr. måned',
        'Alt fra Standard pakken',
        'Dedikeret support manager',
        'Proaktiv vedligeholdelse',
        'Svar inden for 4 timer',
        'Kvartalsvise strategimøder'
      ]
    }
  ];

  const toggleSupportPackage = (packageId: string) => {
    setSelectedSupportPackages(prev => {
      if (prev.includes(packageId)) {
        return prev.filter(id => id !== packageId);
      } else {
        return [...prev, packageId];
      }
    });
  };

  // Beregn total pris
  const calculateTotal = () => {
    let total = 0;

    // Base services
    if (selectedServices.website) total += websitePagePrices[websitePages as keyof typeof websitePagePrices];
    if (selectedServices.aiChat) total += basePrices.aiChat;
    if (selectedServices.aiVoice) total += basePrices.aiVoice;

    // Website features (kun hvis website er valgt)
    if (selectedServices.website) {
      Object.entries(websiteFeatures).forEach(([feature, selected]) => {
        if (selected) total += featurePrices.website[feature as keyof typeof featurePrices.website];
      });
    }

    // AI Chat features (kun hvis aiChat er valgt)
    if (selectedServices.aiChat) {
      Object.entries(aiChatFeatures).forEach(([feature, selected]) => {
        if (selected) total += featurePrices.aiChat[feature as keyof typeof featurePrices.aiChat];
      });
    }

    // Voice features (kun hvis aiVoice er valgt)
    if (selectedServices.aiVoice) {
      Object.entries(voiceFeatures).forEach(([feature, selected]) => {
        if (selected) total += featurePrices.voice[feature as keyof typeof featurePrices.voice];
      });
    }

    return total;
  };

  // Generer dynamisk beskrivelse baseret på valgte services
  const generateServiceDescription = () => {
    const selectedServicesList = [];
    
    if (selectedServices.website) selectedServicesList.push('Hjemmeside');
    if (selectedServices.aiChat) selectedServicesList.push('AI Chat');
    if (selectedServices.aiVoice) selectedServicesList.push('AI Voice');
    
    if (selectedServicesList.length === 0) {
      return 'Vælg dine services nedenfor';
    }
    
    if (selectedServicesList.length === 1) {
      return `Inkluderer: ${selectedServicesList[0]}`;
    }
                     
    const hasAllFeatures = (selectedServices.aiVoice && Object.values(voiceFeatures).some(Boolean)) ||
                     supportPackage !== 'none';
    
    if (selectedServicesList.length === 2) {
      return `Inkluderer: ${selectedServicesList.join(' + ')}`;
    }
    
    // Alle tre services valgt
    const hasAllFeaturesComplete = (
      selectedServices.website && Object.values(websiteFeatures).some(f => f) ||
      selectedServices.aiChat && Object.values(aiChatFeatures).some(f => f) ||
      selectedServices.aiVoice && Object.values(voiceFeatures).some(f => f)
    );
    
    return `Inkluderer: ${selectedServicesList.join(' + ')}${hasAllFeaturesComplete ? ' + alle funktioner' : ''}`;
  };
  // Handler for service selection
  const handleServiceChange = (service: keyof typeof selectedServices) => {
    setSelectedServices(prev => ({
      ...prev,
      [service]: !prev[service]
    }));
  };

  // Handler for website features
  const handleWebsiteFeatureChange = (feature: keyof typeof websiteFeatures) => {
    setWebsiteFeatures(prev => ({
      ...prev,
      [feature]: !prev[feature]
    }));
  };

  // Handler for website pages
  const handleWebsitePagesChange = (pages: string) => {
    setWebsitePages(pages);
  };

  // Handler for AI chat features
  const handleAiChatFeatureChange = (feature: keyof typeof aiChatFeatures) => {
    setAiChatFeatures(prev => ({
      ...prev,
      [feature]: !prev[feature]
    }));
  };

  // Handler for voice features
  const handleVoiceFeatureChange = (feature: keyof typeof voiceFeatures) => {
    setVoiceFeatures(prev => ({
      ...prev,
      [feature]: !prev[feature]
    }));
  };

  // Format pris til dansk format
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('da-DK', {
      style: 'currency',
      currency: 'DKK',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-950 py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Calculator size={16} />
              Prisberegner
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Beregn prisen på{' '}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                dine digitale løsninger
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Få et øjeblikkeligt prisoverslag på hjemmesider, AI chat-agenter og voice agenter. 
              Tilpas funktionerne efter dine behov.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* TOTAL PRICE - FIRST THING CUSTOMER SEES */}
            <div className="lg:col-span-3 mb-8">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center shadow-2xl">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Din komplette digitale løsning
                </h2>
                <div className="text-6xl md:text-7xl font-bold text-white mb-4">
                  {formatPrice(calculateTotal())}
                </div>
                <p className="text-xl text-blue-200 mb-6">
                  {generateServiceDescription()}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => window.location.href = '/kontakt'}
                    className="bg-white text-blue-600 px-8 py-4 rounded-full hover:shadow-lg hover:shadow-white/20 transition-all duration-300 font-bold text-lg flex items-center justify-center gap-3 group"
                  >
                    Få dette tilbud nu
                    <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
                  </button>
                  <p className="text-blue-200 text-sm self-center">
                    ⬇️ Tilpas funktioner nedenfor
                  </p>
                </div>
              </div>
            </div>
            
            {/* Services Selection */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Hjemmesider */}
              <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                    <Globe className="text-blue-400" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-white">💻 Skræddersyede Hjemmesider</h3>
                        <p className="text-gray-400">Fra {formatPrice(websitePagePrices['1-5'])}</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedServices.website}
                          onChange={() => handleServiceChange('website')}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Website Features - ALTID SYNLIGE og AKTIVE */}
                <div className="space-y-4">
                  {/* Antal sider */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Antal sider:</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {Object.entries(websitePagePrices).map(([pages, price]) => (
                        <button
                          key={pages}
                          onClick={() => handleWebsitePagesChange(pages)}
                          disabled={!selectedServices.website}
                          className={`p-3 rounded-lg border text-center transition-all duration-300 ${
                            selectedServices.website
                              ? websitePages === pages
                                ? 'bg-blue-500 border-blue-400 text-white'
                                : 'bg-gray-900 border-gray-600 text-gray-300 hover:border-blue-400'
                              : 'bg-gray-900/50 border-gray-700 text-gray-500 cursor-not-allowed'
                          }`}
                        >
                          <div className="font-medium">{pages} sider</div>
                          <div className="text-sm">{formatPrice(price)}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <h4 className="text-lg font-semibold text-white">Tillægsfunktioner:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    
                    <div className={`p-4 rounded-lg border transition-all duration-300 ${
                      selectedServices.website 
                        ? 'bg-gray-900 border-gray-600' 
                        : 'bg-gray-900/50 border-gray-700'
                    }`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Languages className="text-orange-500" size={20} />
                          <div>
                            <p className="font-medium text-white">Flersproget</p>
                            <p className="text-sm text-gray-400">+{formatPrice(featurePrices.website.multilingual)}</p>
                          </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={websiteFeatures.multilingual}
                            onChange={() => handleWebsiteFeatureChange('multilingual')}
                            disabled={!selectedServices.website}
                            className="sr-only peer"
                          />
                          <div className={`w-11 h-6 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all ${
                            selectedServices.website
                              ? 'bg-gray-600 peer-focus:outline-none peer-checked:bg-orange-500'
                              : 'bg-gray-700 cursor-not-allowed'
                          }`}></div>
                        </label>
                      </div>
                    </div>

                    <div className={`p-4 rounded-lg border transition-all duration-300 ${
                      selectedServices.website 
                        ? 'bg-gray-900 border-gray-600' 
                        : 'bg-gray-900/50 border-gray-700'
                    }`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <BarChart3 className="text-green-500" size={20} />
                          <div>
                            <p className="font-medium text-white">Avanceret SEO pakke</p>
                            <p className="text-sm text-gray-400">+{formatPrice(featurePrices.website.advancedSeo)}</p>
                          </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={websiteFeatures.advancedSeo}
                            onChange={() => handleWebsiteFeatureChange('advancedSeo')}
                            disabled={!selectedServices.website}
                            className="sr-only peer"
                          />
                          <div className={`w-11 h-6 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all ${
                            selectedServices.website
                              ? 'bg-gray-600 peer-focus:outline-none peer-checked:bg-green-500'
                              : 'bg-gray-700 cursor-not-allowed'
                          }`}></div>
                        </label>
                      </div>
                    </div>

                    <div className={`p-4 rounded-lg border transition-all duration-300 ${
                      selectedServices.website 
                        ? 'bg-gray-900 border-gray-600' 
                        : 'bg-gray-900/50 border-gray-700'
                    }`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Wrench className="text-red-500" size={20} />
                          <div>
                            <p className="font-medium text-white">Interaktive værktøjer</p>
                            <p className="text-sm text-gray-400">+{formatPrice(featurePrices.website.interactive)}</p>
                          </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={websiteFeatures.interactive}
                            onChange={() => handleWebsiteFeatureChange('interactive')}
                            disabled={!selectedServices.website}
                            className="sr-only peer"
                          />
                          <div className={`w-11 h-6 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all ${
                            selectedServices.website
                              ? 'bg-gray-600 peer-focus:outline-none peer-checked:bg-red-500'
                              : 'bg-gray-700 cursor-not-allowed'
                          }`}></div>
                        </label>
                      </div>
                    </div>

                    <div className={`p-4 rounded-lg border transition-all duration-300 ${
                      selectedServices.website 
                        ? 'bg-gray-900 border-gray-600' 
                        : 'bg-gray-900/50 border-gray-700'
                    }`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Calendar className="text-purple-500" size={20} />
                          <div>
                            <p className="font-medium text-white">Booking system</p>
                            <p className="text-sm text-gray-400">+{formatPrice(featurePrices.website.booking)}</p>
                          </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={websiteFeatures.booking}
                            onChange={() => handleWebsiteFeatureChange('booking')}
                            disabled={!selectedServices.website}
                            className="sr-only peer"
                          />
                          <div className={`w-11 h-6 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all ${
                            selectedServices.website
                              ? 'bg-gray-600 peer-focus:outline-none peer-checked:bg-purple-500'
                              : 'bg-gray-700 cursor-not-allowed'
                          }`}></div>
                        </label>
                      </div>
                    </div>

                    <div className={`p-4 rounded-lg border transition-all duration-300 ${
                      selectedServices.website 
                        ? 'bg-gray-900 border-gray-600' 
                        : 'bg-gray-900/50 border-gray-700'
                    }`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Users className="text-blue-500" size={20} />
                          <div>
                            <p className="font-medium text-white">Sociale medier</p>
                            <p className="text-sm text-gray-400">+{formatPrice(featurePrices.website.socialMedia)}</p>
                          </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={websiteFeatures.socialMedia}
                            onChange={() => handleWebsiteFeatureChange('socialMedia')}
                            disabled={!selectedServices.website}
                            className="sr-only peer"
                          />
                          <div className={`w-11 h-6 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all ${
                            selectedServices.website
                              ? 'bg-gray-600 peer-focus:outline-none peer-checked:bg-blue-500'
                              : 'bg-gray-700 cursor-not-allowed'
                          }`}></div>
                        </label>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {/* AI Chat Agenter */}
              <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                    <Bot className="text-blue-400" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-white">🤖 AI Chat-agenter</h3>
                        <p className="text-gray-400">Fra {formatPrice(basePrices.aiChat)}</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedServices.aiChat}
                          onChange={() => handleServiceChange('aiChat')}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                      </label>
                    </div>
                  </div>
                </div>

                {/* AI Chat Features - ALTID SYNLIGE og AKTIVE */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white">Tillægsfunktioner:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    
                    <div className={`p-4 rounded-lg border transition-all duration-300 ${
                      selectedServices.aiChat 
                        ? 'bg-gray-900 border-gray-600' 
                        : 'bg-gray-900/50 border-gray-700'
                    }`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Calendar className="text-blue-500" size={20} />
                          <div>
                            <p className="font-medium text-white">Automatisk booking</p>
                            <p className="text-sm text-gray-400">+{formatPrice(featurePrices.aiChat.automaticBooking)}</p>
                          </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={aiChatFeatures.automaticBooking}
                            onChange={() => handleAiChatFeatureChange('automaticBooking')}
                            disabled={!selectedServices.aiChat}
                            className="sr-only peer"
                          />
                          <div className={`w-11 h-6 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all ${
                            selectedServices.aiChat
                              ? 'bg-gray-600 peer-focus:outline-none peer-checked:bg-blue-500'
                              : 'bg-gray-700 cursor-not-allowed'
                          }`}></div>
                        </label>
                      </div>
                    </div>

                    <div className={`p-4 rounded-lg border transition-all duration-300 ${
                      selectedServices.aiChat 
                        ? 'bg-gray-900 border-gray-600' 
                        : 'bg-gray-900/50 border-gray-700'
                    }`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <BarChart3 className="text-green-500" size={20} />
                          <div>
                            <p className="font-medium text-white">CRM integration</p>
                            <p className="text-sm text-gray-400">+{formatPrice(featurePrices.aiChat.crmIntegration)}</p>
                          </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={aiChatFeatures.crmIntegration}
                            onChange={() => handleAiChatFeatureChange('crmIntegration')}
                            disabled={!selectedServices.aiChat}
                            className="sr-only peer"
                          />
                          <div className={`w-11 h-6 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all ${
                            selectedServices.aiChat
                              ? 'bg-gray-600 peer-focus:outline-none peer-checked:bg-green-500'
                              : 'bg-gray-700 cursor-not-allowed'
                          }`}></div>
                        </label>
                      </div>
                    </div>

                    <div className={`p-4 rounded-lg border transition-all duration-300 ${
                      selectedServices.aiChat 
                        ? 'bg-gray-900 border-gray-600' 
                        : 'bg-gray-900/50 border-gray-700'
                    }`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Languages className="text-orange-500" size={20} />
                          <div>
                            <p className="font-medium text-white">Flersproget support</p>
                            <p className="text-sm text-gray-400">+{formatPrice(featurePrices.aiChat.multilingualSupport)}</p>
                          </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={aiChatFeatures.multilingualSupport}
                            onChange={() => handleAiChatFeatureChange('multilingualSupport')}
                            disabled={!selectedServices.aiChat}
                            className="sr-only peer"
                          />
                          <div className={`w-11 h-6 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all ${
                            selectedServices.aiChat
                              ? 'bg-gray-600 peer-focus:outline-none peer-checked:bg-orange-500'
                              : 'bg-gray-700 cursor-not-allowed'
                          }`}></div>
                        </label>
                      </div>
                    </div>

                    <div className={`p-4 rounded-lg border transition-all duration-300 ${
                      selectedServices.aiChat 
                        ? 'bg-gray-900 border-gray-600' 
                        : 'bg-gray-900/50 border-gray-700'
                    }`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Palette className="text-purple-500" size={20} />
                          <div>
                            <p className="font-medium text-white">Personlig branding</p>
                            <p className="text-sm text-gray-400">+{formatPrice(featurePrices.aiChat.personalBranding)}</p>
                          </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={aiChatFeatures.personalBranding}
                            onChange={() => handleAiChatFeatureChange('personalBranding')}
                            disabled={!selectedServices.aiChat}
                            className="sr-only peer"
                          />
                          <div className={`w-11 h-6 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all ${
                            selectedServices.aiChat
                              ? 'bg-gray-600 peer-focus:outline-none peer-checked:bg-purple-500'
                              : 'bg-gray-700 cursor-not-allowed'
                          }`}></div>
                        </label>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {/* AI Voice Agenter */}
              <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                    <Mic className="text-blue-400" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-white">🎙️ AI Voice Agenter</h3>
                        <p className="text-gray-400">Fra {formatPrice(basePrices.aiVoice)}</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedServices.aiVoice}
                          onChange={() => handleServiceChange('aiVoice')}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Voice Features - ALTID SYNLIGE og AKTIVE */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white">Tillægsfunktioner:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    
                    <div className={`p-4 rounded-lg border transition-all duration-300 ${
                      selectedServices.aiVoice 
                        ? 'bg-gray-900 border-gray-600' 
                        : 'bg-gray-900/50 border-gray-700'
                    }`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Palette className="text-purple-500" size={20} />
                          <div>
                            <p className="font-medium text-white">Personlig branding</p>
                            <p className="text-sm text-gray-400">+{formatPrice(featurePrices.voice.personalBranding)}</p>
                          </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={voiceFeatures.personalBranding}
                            onChange={() => handleVoiceFeatureChange('personalBranding')}
                            disabled={!selectedServices.aiVoice}
                            className="sr-only peer"
                          />
                          <div className={`w-11 h-6 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all ${
                            selectedServices.aiVoice
                              ? 'bg-gray-600 peer-focus:outline-none peer-checked:bg-purple-500'
                              : 'bg-gray-700 cursor-not-allowed'
                          }`}></div>
                        </label>
                      </div>
                    </div>

                    <div className={`p-4 rounded-lg border transition-all duration-300 ${
                      selectedServices.aiVoice 
                        ? 'bg-gray-900 border-gray-600' 
                        : 'bg-gray-900/50 border-gray-700'
                    }`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Zap className="text-yellow-500" size={20} />
                          <div>
                            <p className="font-medium text-white">Avanceret sprogforståelse</p>
                            <p className="text-sm text-gray-400">+{formatPrice(featurePrices.voice.advancedLanguage)}</p>
                          </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={voiceFeatures.advancedLanguage}
                            onChange={() => handleVoiceFeatureChange('advancedLanguage')}
                            disabled={!selectedServices.aiVoice}
                            className="sr-only peer"
                          />
                          <div className={`w-11 h-6 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all ${
                            selectedServices.aiVoice
                              ? 'bg-gray-600 peer-focus:outline-none peer-checked:bg-yellow-500'
                              : 'bg-gray-700 cursor-not-allowed'
                          }`}></div>
                        </label>
                      </div>
                    </div>

                    <div className={`p-4 rounded-lg border transition-all duration-300 ${
                      selectedServices.aiVoice 
                        ? 'bg-gray-900 border-gray-600' 
                        : 'bg-gray-900/50 border-gray-700'
                    }`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Languages className="text-orange-500" size={20} />
                          <div>
                            <p className="font-medium text-white">Flersproget support</p>
                            <p className="text-sm text-gray-400">+{formatPrice(featurePrices.voice.multilingualSupport)}</p>
                          </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={voiceFeatures.multilingualSupport}
                            onChange={() => handleVoiceFeatureChange('multilingualSupport')}
                            disabled={!selectedServices.aiVoice}
                            className="sr-only peer"
                          />
                          <div className={`w-11 h-6 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all ${
                            selectedServices.aiVoice
                              ? 'bg-gray-600 peer-focus:outline-none peer-checked:bg-orange-500'
                              : 'bg-gray-700 cursor-not-allowed'
                          }`}></div>
                        </label>
                      </div>
                    </div>

                    <div className={`p-4 rounded-lg border transition-all duration-300 ${
                      selectedServices.aiVoice 
                        ? 'bg-gray-900 border-gray-600' 
                        : 'bg-gray-900/50 border-gray-700'
                    }`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <BarChart3 className="text-blue-500" size={20} />
                          <div>
                            <p className="font-medium text-white">Samtale-analytics</p>
                            <p className="text-sm text-gray-400">+{formatPrice(featurePrices.voice.callAnalytics)}</p>
                          </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={voiceFeatures.callAnalytics}
                            onChange={() => handleVoiceFeatureChange('callAnalytics')}
                            disabled={!selectedServices.aiVoice}
                            className="sr-only peer"
                          />
                          <div className={`w-11 h-6 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all ${
                            selectedServices.aiVoice
                              ? 'bg-gray-600 peer-focus:outline-none peer-checked:bg-blue-500'
                              : 'bg-gray-700 cursor-not-allowed'
                          }`}></div>
                        </label>
                      </div>
                    </div>

                    <div className={`p-4 rounded-lg border transition-all duration-300 ${
                      selectedServices.aiVoice 
                        ? 'bg-gray-900 border-gray-600' 
                        : 'bg-gray-900/50 border-gray-700'
                    }`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <BarChart3 className="text-green-500" size={20} />
                          <div>
                            <p className="font-medium text-white">CRM integration</p>
                            <p className="text-sm text-gray-400">+{formatPrice(featurePrices.voice.crmIntegration)}</p>
                          </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={voiceFeatures.crmIntegration}
                            onChange={() => handleVoiceFeatureChange('crmIntegration')}
                            disabled={!selectedServices.aiVoice}
                            className="sr-only peer"
                          />
                          <div className={`w-11 h-6 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all ${
                            selectedServices.aiVoice
                              ? 'bg-gray-600 peer-focus:outline-none peer-checked:bg-green-500'
                              : 'bg-gray-700 cursor-not-allowed'
                          }`}></div>
                        </label>
                      </div>
                    </div>

                    <div className={`p-4 rounded-lg border transition-all duration-300 ${
                      selectedServices.aiVoice 
                        ? 'bg-gray-900 border-gray-600' 
                        : 'bg-gray-900/50 border-gray-700'
                    }`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Mic className="text-red-500" size={20} />
                          <div>
                            <p className="font-medium text-white">Tilpasset stemme</p>
                            <p className="text-sm text-gray-400">+{formatPrice(featurePrices.voice.customVoice)}</p>
                          </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={voiceFeatures.customVoice}
                            onChange={() => handleVoiceFeatureChange('customVoice')}
                            disabled={!selectedServices.aiVoice}
                            className="sr-only peer"
                          />
                          <div className={`w-11 h-6 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all ${
                            selectedServices.aiVoice
                              ? 'bg-gray-600 peer-focus:outline-none peer-checked:bg-red-500'
                              : 'bg-gray-700 cursor-not-allowed'
                          }`}></div>
                        </label>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {/* Support Packages Section */}
              <section className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                    <svg className="text-purple-400" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 18v-6a9 9 0 0 1 18 0v6"/>
                      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white">Support Pakker</h2>
                    <p className="text-gray-400">Vælg dit support niveau - faktureres separat månedligt</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {supportPackages.map((pkg) => (
                    <div
                      key={pkg.id}
                      onClick={() => toggleSupportPackage(pkg.id)}
                      className={`relative p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                        selectedSupportPackages.includes(pkg.id)
                          ? 'border-purple-500 bg-purple-500/10 shadow-purple-500/20'
                          : 'border-gray-600 bg-gray-800 hover:border-purple-400'
                      }`}
                    >
                      {/* Checkbox */}
                      <div className="absolute top-4 right-4">
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                          selectedSupportPackages.includes(pkg.id)
                            ? 'border-purple-500 bg-purple-500'
                            : 'border-gray-400'
                        }`}>
                          {selectedSupportPackages.includes(pkg.id) && (
                            <CheckCircle className="text-white" size={16} />
                          )}
                        </div>
                      </div>

                      {/* Popular Badge */}
                      {pkg.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <span className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                            POPULÆR
                          </span>
                        </div>
                      )}

                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
                        <div className="text-2xl font-bold text-purple-400 mb-2">
                          {pkg.price === 0 ? 'Gratis' : `${pkg.price.toLocaleString()} kr/måned`}
                        </div>
                        <p className="text-gray-400 text-sm">{pkg.description}</p>
                      </div>

                      <div className="space-y-2">
                        {pkg.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="text-purple-400 flex-shrink-0" size={16} />
                            <span className="text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

            </div>

            {/* Price Summary - Sticky */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 shadow-xl opacity-90">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                    <Calculator className="text-blue-400" size={24} />
                    Detaljeret oversigt
                  </h3>

                  {/* Selected Services */}
                  <div className="space-y-4 mb-6">
                    {selectedServices.website && (
                      <div className="flex justify-between items-center p-3 bg-gray-900 rounded-lg border border-gray-600">
                        <span className="text-white font-medium">💻 Hjemmeside ({websitePages} sider)</span>
                        <span className="text-blue-400 font-bold">{formatPrice(websitePagePrices[websitePages as keyof typeof websitePagePrices])}</span>
                      </div>
                    )}
                    
                    {selectedServices.aiChat && (
                      <div className="flex justify-between items-center p-3 bg-gray-900 rounded-lg border border-gray-600">
                        <span className="text-white font-medium">🤖 AI Chat</span>
                        <span className="text-blue-400 font-bold">{formatPrice(basePrices.aiChat)}</span>
                      </div>
                    )}
                    
                    {selectedServices.aiVoice && (
                      <div className="flex justify-between items-center p-3 bg-gray-900 rounded-lg border border-gray-600">
                        <span className="text-white font-medium">🎙️ AI Voice</span>
                        <span className="text-blue-400 font-bold">{formatPrice(basePrices.aiVoice)}</span>
                      </div>
                    )}

                    {/* Feature additions */}
                    {selectedServices.website && Object.entries(websiteFeatures).some(([_, selected]) => selected) && (
                      <div className="border-t border-gray-600 pt-3">
                        <p className="text-sm text-gray-400 mb-2">Hjemmeside tillæg:</p>
                        {Object.entries(websiteFeatures).map(([feature, selected]) => {
                          if (!selected) return null;
                          const featureNames = {
                            multilingual: 'Flersproget',
                            advancedSeo: 'Avanceret SEO',
                            interactive: 'Interaktive værktøjer',
                            booking: 'Booking system',
                            socialMedia: 'Sociale medier'
                          };
                          return (
                            <div key={feature} className="flex justify-between items-center text-sm mb-1">
                              <span className="text-gray-300">+ {featureNames[feature as keyof typeof featureNames]}</span>
                              <span className="text-green-400">+{formatPrice(featurePrices.website[feature as keyof typeof featurePrices.website])}</span>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {selectedServices.aiChat && Object.entries(aiChatFeatures).some(([_, selected]) => selected) && (
                      <div className="border-t border-gray-600 pt-3">
                        <p className="text-sm text-gray-400 mb-2">AI Chat tillæg:</p>
                        {Object.entries(aiChatFeatures).map(([feature, selected]) => {
                          if (!selected) return null;
                          const featureNames = {
                            automaticBooking: 'Automatisk booking',
                            crmIntegration: 'CRM integration',
                            multilingualSupport: 'Flersproget support',
                            personalBranding: 'Personlig branding'
                          };
                          return (
                            <div key={feature} className="flex justify-between items-center text-sm mb-1">
                              <span className="text-gray-300">+ {featureNames[feature as keyof typeof featureNames]}</span>
                              <span className="text-green-400">+{formatPrice(featurePrices.aiChat[feature as keyof typeof featurePrices.aiChat])}</span>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {selectedServices.aiVoice && Object.entries(voiceFeatures).some(([_, selected]) => selected) && (
                      <div className="border-t border-gray-600 pt-3">
                        <p className="text-sm text-gray-400 mb-2">Voice Agent tillæg:</p>
                        {Object.entries(voiceFeatures).map(([feature, selected]) => {
                          if (!selected) return null;
                          const featureNames = {
                            personalBranding: 'Personlig branding',
                            advancedLanguage: 'Avanceret sprogforståelse',
                            multilingualSupport: 'Flersproget support',
                            callAnalytics: 'Samtale-analytics',
                            crmIntegration: 'CRM integration',
                            customVoice: 'Tilpasset stemme'
                          };
                          return (
                            <div key={feature} className="flex justify-between items-center text-sm mb-1">
                              <span className="text-gray-300">+ {featureNames[feature as keyof typeof featureNames]}</span>
                              <span className="text-green-400">+{formatPrice(featurePrices.voice[feature as keyof typeof featurePrices.voice])}</span>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  {/* Support Packages Summary */}
                  {selectedSupportPackages.length > 0 && (
                    <div className="border-t border-gray-600 pt-6">
                      <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <svg className="text-purple-400" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 18v-6a9 9 0 0 1 18 0v6"/>
                          <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
                        </svg>
                        Support Pakker
                      </h3>
                      <div className="space-y-3">
                        {selectedSupportPackages.map(packageId => {
                          const pkg = supportPackages.find(p => p.id === packageId);
                          if (!pkg) return null;
                          return (
                            <div key={packageId} className="flex justify-between items-center py-2 border-b border-gray-700 last:border-b-0">
                              <span className="text-gray-300">{pkg.name}</span>
                              <span className="text-purple-400 font-medium">
                                {pkg.price === 0 ? 'Gratis' : `${pkg.price.toLocaleString()} kr/måned`}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                      
                      <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4 mt-4">
                        <p className="text-purple-300 text-sm">
                          <strong>Månedlig fakturering:</strong> Support pakker faktureres separat hver måned
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Total */}
                  <div className="border-t border-gray-600 pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-xl font-bold text-white">Total:</span>
                      <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                        {formatPrice(calculateTotal())}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400 mb-6">Ekskl. moms • Inkl. 30 dages support</p>
                    
                    <button
                      onClick={() => window.location.href = '/kontakt'}
                      className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-4 rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 font-medium text-lg flex items-center justify-center gap-3 group"
                    >
                      Få dit tilbud
                      <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
                    </button>
                  </div>

                  {/* Trust indicators */}
                  <div className="mt-6 pt-6 border-t border-gray-600">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="text-green-500" size={16} />
                        <span>Hurtig levering (3-4 uger)</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="text-green-500" size={16} />
                        <span>30 dages gratis support</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="text-green-500" size={16} />
                        <span>Personlig service</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Support Packages */}
      <section className="mb-12">
        <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
              <svg className="text-purple-400" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Support Pakker (månedligt)</h3>
              <p className="text-gray-400">Vælg dit support niveau - faktureres separat månedligt</p>
            </div>
          </div>
          
          <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4 mb-6">
            <div className="flex items-center gap-2 mb-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 16v-4"/>
                <path d="M12 8h.01"/>
              </svg>
              <span className="font-medium text-purple-300">Vigtigt at vide</span>
            </div>
            <p className="text-sm text-purple-200">
              Support pakker er månedlige abonnementer og indgår IKKE i den samlede projektpris. 
              De faktureres separat hver måned efter projektets aflevering.
            </p>
          </div>

          <p className="text-gray-300 mb-8">
            Support inkluderer: Teknisk hjælp, mindre ændringer, fejlrettelser og rådgivning til én af dine valgte services (hjemmeside, AI chat eller AI voice agent).
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <button
              onClick={() => setSupportPackage('none')}
              className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                supportPackage === 'none'
                  ? 'border-purple-500 bg-purple-500/10'
                  : 'border-gray-600 hover:border-purple-400'
              }`}
            >
              <div className="font-semibold text-white mb-1">Ingen</div>
              <div className="text-sm text-gray-400 mb-2">0 kr</div>
              <div className="text-xs text-gray-500">Ingen support</div>
            </button>

            <button
              onClick={() => setSupportPackage('basic')}
              className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                supportPackage === 'basic'
                  ? 'border-purple-500 bg-purple-500/10'
                  : 'border-gray-600 hover:border-purple-400'
              }`}
            >
              <div className="font-semibold text-white mb-1">Basis</div>
              <div className="text-sm text-gray-400 mb-2">1.500 kr</div>
              <div className="text-xs text-gray-500">1,5 timer</div>
            </button>

            <button
              onClick={() => setSupportPackage('standard')}
              className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                supportPackage === 'standard'
                  ? 'border-purple-500 bg-purple-500/10'
                  : 'border-gray-600 hover:border-purple-400'
              }`}
            >
              <div className="font-semibold text-white mb-1">Standard</div>
              <div className="text-sm text-gray-400 mb-2">3.000 kr</div>
              <div className="text-xs text-gray-500">4 timer</div>
            </button>

            <button
              onClick={() => setSupportPackage('premium')}
              className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                supportPackage === 'premium'
                  ? 'border-purple-500 bg-purple-500/10'
                  : 'border-gray-600 hover:border-purple-400'
              }`}
            >
              <div className="font-semibold text-white mb-1">Premium</div>
              <div className="text-sm text-gray-400 mb-2">5.000 kr</div>
              <div className="text-xs text-gray-500">8 timer</div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PriceCalculator;