import React from 'react';
import { ArrowLeft, Bot } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import Contact from '../components/Contact';

const AIAgenterPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <main className="pt-20 relative">
      {/* Back Navigation */}
      <div className="bg-gray-800 py-4 relative">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-8 w-24 h-24 bg-emerald-500/8 animate-morph-blob animate-delay-1s"></div>
          <div className="absolute top-0 right-8 w-20 h-20 bg-emerald-400/6 animate-morph-blob animate-delay-3s"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            {t('common.backToHome')}
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 dynamic-bg-hero relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-52 h-52 bg-emerald-500/8 animate-morph-blob animate-delay-2s"></div>
          <div className="absolute bottom-20 right-20 w-44 h-44 bg-emerald-400/10 animate-morph-blob animate-delay-4s"></div>
          <div className="absolute top-1/3 right-1/4 w-36 h-36 bg-emerald-600/8 animate-morph-blob animate-delay-6s"></div>
          
          {/* Floating particles */}
          <div className="absolute top-0 left-1/4 w-2 h-2 bg-emerald-400/40 rounded-full animate-particle-float"></div>
          <div className="absolute top-0 right-1/4 w-1.5 h-1.5 bg-emerald-300/50 rounded-full animate-particle-float animate-delay-3s"></div>
          <div className="absolute top-0 left-3/4 w-1 h-1 bg-emerald-500/30 rounded-full animate-particle-float animate-delay-5s"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <Bot className="h-20 w-20 text-emerald-400" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              {t('common.language') === 'da' ? 'AI Agenter' : 'AI Agents'}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t('common.language') === 'da' 
                ? 'Vi bygger og implementerer intelligente AI-agenter, der arbejder for dig'
                : 'We build and implement intelligent AI agents that work for you'
              }
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-lg text-gray-300 leading-relaxed">
              {t('common.language') === 'da'
                ? 'Har din virksomhed opgaver, der løses manuelt – igen og igen? Vi udvikler skræddersyede AI-agenter, der automatiserer netop disse arbejdsprocesser. Vores løsning integrerer direkte i jeres eksisterende systemer og kræver ingen teknisk viden fra jeres side. Vi håndterer alt – og leverer med livstids support.'
                : 'Does your business have tasks that are solved manually – again and again? We develop customized AI agents that automate exactly these work processes. Our solution integrates directly into your existing systems and requires no technical knowledge from your side. We handle everything – and deliver with lifetime support.'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 dynamic-bg-secondary relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-16 right-16 w-40 h-40 bg-emerald-500/7 animate-morph-blob animate-delay-1s"></div>
          <div className="absolute bottom-16 left-16 w-32 h-32 bg-emerald-400/9 animate-morph-blob animate-delay-3s"></div>
          <div className="absolute top-2/3 left-1/3 w-28 h-28 bg-emerald-600/6 animate-morph-blob animate-delay-5s"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            {t('aiAgentsPage.benefitsTitle')}
          </h2>
          
          <div className="space-y-8 mb-16">
            <div className="flex items-start">
              <span className="text-3xl mr-4 flex-shrink-0">⚙️</span>
              <p className="text-xl text-gray-300 leading-relaxed">
                <strong className="text-white">{t('aiAgentsPage.benefit1')}</strong>
              </p>
            </div>

            <div className="flex items-start">
              <span className="text-3xl mr-4 flex-shrink-0">🕒</span>
              <p className="text-xl text-gray-300 leading-relaxed">
                <strong className="text-white">{t('aiAgentsPage.benefit2')}</strong>
              </p>
            </div>

            <div className="flex items-start">
              <span className="text-3xl mr-4 flex-shrink-0">💡</span>
              <p className="text-xl text-gray-300 leading-relaxed">
                <strong className="text-white">{t('aiAgentsPage.benefit3')}</strong>
              </p>
            </div>

            <div className="flex items-start">
              <span className="text-3xl mr-4 flex-shrink-0">🧩</span>
              <p className="text-xl text-gray-300 leading-relaxed">
                <strong className="text-white">{t('aiAgentsPage.benefit4')}</strong>
              </p>
            </div>

            <div className="flex items-start">
              <span className="text-3xl mr-4 flex-shrink-0">🛠</span>
              <p className="text-xl text-gray-300 leading-relaxed">
                <strong className="text-white">{t('aiAgentsPage.benefit5')}</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 dynamic-bg-primary relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-12 left-12 w-48 h-48 bg-emerald-500/5 animate-morph-blob animate-delay-2s"></div>
          <div className="absolute bottom-12 right-12 w-36 h-36 bg-emerald-400/7 animate-morph-blob animate-delay-4s"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-gray-800 rounded-2xl p-8 lg:p-12 border border-gray-700 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6">{t('aiAgentsPage.supportTitle')}</h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                <strong className="text-emerald-400">{t('aiAgentsPage.supportDescription')}</strong>
              </p>
              <p className="text-lg text-gray-400">
                {t('aiAgentsPage.supportPricing')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
};

export default AIAgenterPage;