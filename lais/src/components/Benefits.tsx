import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, DollarSign, Shield, Bot, Target } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Benefits: React.FC = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: <Heart className="h-12 w-12 text-emerald-400" />,
      title: t('service.benefit1Title'),
      description: t('service.benefit1Desc')
    },
    {
      icon: <DollarSign className="h-12 w-12 text-emerald-400" />,
      title: t('service.benefit2Title'),
      description: t('service.benefit2Desc')
    },
    {
      icon: <Shield className="h-12 w-12 text-emerald-400" />,
      title: t('service.benefit3Title'),
      description: t('service.benefit3Desc')
    }
  ];

  return (
    <section className="py-20 dynamic-bg-secondary relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-4 sm:right-10 w-48 h-48 sm:w-56 sm:h-56 bg-emerald-500/8 animate-morph-blob animate-delay-2s"></div>
        <div className="absolute bottom-10 left-4 sm:left-10 w-40 h-40 sm:w-44 sm:h-44 bg-emerald-400/12 animate-morph-blob animate-delay-4s"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 sm:w-36 sm:h-36 bg-emerald-600/10 animate-morph-blob animate-delay-6s"></div>
        <div className="absolute top-1/4 left-1/4 w-28 h-28 bg-emerald-300/6 animate-morph-blob animate-delay-1s"></div>
        <div className="absolute bottom-1/4 right-1/4 w-36 h-36 bg-emerald-500/7 animate-morph-blob animate-delay-3s"></div>
        
        {/* Additional floating particles for mobile */}
        <div className="absolute top-0 left-1/5 w-2 h-2 bg-emerald-400/40 rounded-full animate-particle-float"></div>
        <div className="absolute top-0 right-1/5 w-1.5 h-1.5 bg-emerald-300/50 rounded-full animate-particle-float animate-delay-3s"></div>
        <div className="absolute top-0 left-4/5 w-2.5 h-2.5 bg-emerald-500/30 rounded-full animate-particle-float animate-delay-5s"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t('service.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('service.subtitle')}
          </p>
        </div>

        {/* Service Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 animate-stagger">
          <Link to="/ai-agenter" className="bg-gray-700 rounded-2xl p-8 cursor-pointer hover:bg-gray-600 transition-all duration-300 border border-gray-600 hover:border-emerald-500 group hover-lift hover-glow hover-shimmer animate-slide-in-left animate-delay-1s">
            <div className="flex justify-center mb-6">
              <Bot className="h-12 w-12 text-emerald-400 group-hover:scale-110 transition-transform duration-300 hover-rotate" />
            </div>
            
            <h3 className="text-xl font-bold text-white mb-4 text-center">
              {t('service.aiAgents')}
            </h3>
            
            <p className="text-gray-300 leading-relaxed text-center">
              {t('service.aiAgentsDesc')}
            </p>
            
            <div className="mt-6 text-center">
              <span className="text-emerald-400 font-medium group-hover:text-emerald-300 transition-colors animate-wiggle">
                {t('service.readMore')}
              </span>
            </div>
          </Link>

          <Link to="/automatiseret-leadgenerering" className="bg-gray-700 rounded-2xl p-8 cursor-pointer hover:bg-gray-600 transition-all duration-300 border border-gray-600 hover:border-emerald-500 group hover-lift hover-glow hover-shimmer animate-slide-in-right animate-delay-2s">
            <div className="flex justify-center mb-6">
              <Target className="h-12 w-12 text-emerald-400 group-hover:scale-110 transition-transform duration-300 hover-rotate" />
            </div>
            
            <h3 className="text-xl font-bold text-white mb-4 text-center">
              {t('service.leadGeneration')}
            </h3>
            
            <p className="text-gray-300 leading-relaxed text-center">
              {t('service.leadGenerationDesc')}
            </p>
            
            <div className="mt-6 text-center">
              <span className="text-emerald-400 font-medium group-hover:text-emerald-300 transition-colors animate-wiggle">
                {t('service.readMore')}
              </span>
            </div>
          </Link>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-stagger">
          {benefits.map((benefit, index) => (
            <div key={index} className={`text-center group hover-lift animate-fade-in-up animate-delay-${index + 3}s`}>
              <div className="bg-gray-700 rounded-2xl p-8 h-full hover:shadow-lg transition-all duration-300 hover:bg-gray-600 border border-gray-600 hover-glow hover-scale hover-shimmer">
                <div className="flex justify-center mb-6 hover-bounce">
                  {benefit.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 animate-swing">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed animate-fade-in-up animate-delay-1s">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;