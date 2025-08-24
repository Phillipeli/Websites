import React from 'react';
import { ArrowLeft, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import Contact from '../components/Contact';

const AutomatiseretLeadgenereringPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <main className="pt-20 relative">
      {/* Back Navigation */}
      <div className="bg-gray-800 py-4 relative">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-6 w-28 h-28 bg-emerald-500/8 animate-morph-blob animate-delay-1s"></div>
          <div className="absolute top-0 right-6 w-24 h-24 bg-emerald-400/6 animate-morph-blob animate-delay-3s"></div>
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
          <div className="absolute top-24 left-24 w-56 h-56 bg-emerald-500/4 animate-morph-blob animate-delay-2s"></div>
          <div className="absolute bottom-24 right-24 w-48 h-48 bg-emerald-400/6 animate-morph-blob animate-delay-4s"></div>
          <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-emerald-600/5 animate-morph-blob animate-delay-6s"></div>
          
          {/* Floating particles */}
          <div className="absolute top-0 left-1/5 w-2 h-2 bg-emerald-400/40 rounded-full animate-particle-float"></div>
          <div className="absolute top-0 right-1/5 w-1.5 h-1.5 bg-emerald-300/50 rounded-full animate-particle-float animate-delay-4s"></div>
          <div className="absolute top-0 left-4/5 w-1 h-1 bg-emerald-500/30 rounded-full animate-particle-float animate-delay-2s"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <Target className="h-20 w-20 text-emerald-400" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              {t('common.language') === 'da' ? 'Automatiseret Leadgenerering' : 'Automated Lead Generation'}
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              {t('common.language') === 'da' 
                ? 'Vores løsning inden for automatiseret leadgenerering hjælper dig med at komme i kontakt med præcis de mennesker og virksomheder, du ønsker at tale med. Gennem avancerede workflows og datadrevet outreach bygger vi en stabil strøm af relevante møder og forretningsforbindelser.'
                : 'Our automated lead generation solution helps you connect with exactly the people and companies you want to talk to. Through advanced workflows and data-driven outreach, we build a stable stream of relevant meetings and business connections.'
              }
            </p>
          </div>
          
          <div className="text-center mb-16">
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              {t('common.language') === 'da'
                ? 'Få kvalificerede leads – helt automatisk'
                : 'Get qualified leads – completely automatically'
              }
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 dynamic-bg-secondary relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-44 h-44 bg-emerald-500/7 animate-morph-blob animate-delay-1s"></div>
          <div className="absolute bottom-20 left-20 w-36 h-36 bg-emerald-400/9 animate-morph-blob animate-delay-3s"></div>
          <div className="absolute top-3/4 right-1/3 w-32 h-32 bg-emerald-600/6 animate-morph-blob animate-delay-5s"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12">
            {t('common.language') === 'da' ? 'Fordele for din virksomhed:' : 'Benefits for your business:'}
          </h2>
          
          <div className="space-y-8 mb-16">
            <div className="flex items-start">
              <span className="text-3xl mr-4 flex-shrink-0">🎯</span>
              <p className="text-xl text-gray-300 leading-relaxed">
                <strong className="text-white">
                  {t('common.language') === 'da' 
                    ? 'Målretning mod præcis de virksomheder og beslutningstagere, du ønsker'
                    : 'Targeting exactly the companies and decision makers you want'
                  }
                </strong>
              </p>
            </div>

            <div className="flex items-start">
              <span className="text-3xl mr-4 flex-shrink-0">🕒</span>
              <p className="text-xl text-gray-300 leading-relaxed">
                <strong className="text-white">
                  {t('common.language') === 'da'
                    ? 'Spar op til 20-30 timers manuelt outreach-arbejde om måneden'
                    : 'Save up to 20-30 hours of manual outreach work per month'
                  }
                </strong>
              </p>
            </div>

            <div className="flex items-start">
              <span className="text-3xl mr-4 flex-shrink-0">🤝</span>
              <p className="text-xl text-gray-300 leading-relaxed">
                <strong className="text-white">
                  {t('common.language') === 'da'
                    ? 'Byg et netværk af relevante kontakter, der kan konverteres over tid'
                    : 'Build a network of relevant contacts that can be converted over time'
                  }
                </strong>
              </p>
            </div>

            <div className="flex items-start">
              <span className="text-3xl mr-4 flex-shrink-0">📈</span>
              <p className="text-xl text-gray-300 leading-relaxed">
                <strong className="text-white">
                  {t('common.language') === 'da'
                    ? 'Skab flere møder og mere pipeline'
                    : 'Create more meetings and more pipeline'
                  }
                </strong>
              </p>
            </div>

            <div className="flex items-start">
              <span className="text-3xl mr-4 flex-shrink-0">💼</span>
              <p className="text-xl text-gray-300 leading-relaxed">
                <strong className="text-white">
                  {t('common.language') === 'da'
                    ? 'Færdig løsning med minimal intern involvering'
                    : 'Ready solution with minimal internal involvement'
                  }
                </strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 dynamic-bg-primary relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-16 left-16 w-52 h-52 bg-emerald-500/5 animate-morph-blob animate-delay-2s"></div>
          <div className="absolute bottom-16 right-16 w-40 h-40 bg-emerald-400/7 animate-morph-blob animate-delay-4s"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-gray-800 rounded-2xl p-8 lg:p-12 border border-gray-700 max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6">
                {t('common.language') === 'da' ? 'Pris' : 'Price'}
              </h2>
              <div className="text-5xl font-bold text-emerald-400 mb-4">
                {t('common.language') === 'da' ? '4.000–7.000 kr./md.' : '4,000–7,000 DKK/month'}
              </div>
              <p className="text-xl text-gray-300">
                {t('common.language') === 'da' ? 'afhængig af branche og volumen' : 'depending on industry and volume'}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
};

export default AutomatiseretLeadgenereringPage;