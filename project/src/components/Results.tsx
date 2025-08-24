import React from 'react';
import { TrendingUp, Users, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

const Results: React.FC = () => {
  const { t } = useLanguage();
  const { ref, isInView } = useInViewAnimation();

  return (
    <section
      id="results" 
      ref={ref}
      className={`py-20 dynamic-bg-primary relative overflow-hidden transition-all duration-1000 ease-out ${
        isInView ? 'animate-on-scroll-visible' : 'animate-on-scroll-hidden'
      }`}
    >
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-36 h-36 bg-emerald-500/8 animate-morph-blob animate-delay-1s"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-emerald-400/10 animate-morph-blob animate-delay-3s"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-emerald-600/6 animate-morph-blob animate-delay-5s"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t('results.title')}
          </h2>
        </div>

        {/* Main Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 animate-stagger">
          <div className="bg-gray-700 rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-600 hover-lift hover-glow hover-shimmer">
            <TrendingUp className="h-12 w-12 text-emerald-400 mx-auto mb-4" />
            <div className="text-4xl font-bold text-emerald-400 mb-2 animate-bounce-slow hover-scale">35%</div>
            <div className="text-lg font-medium text-white mb-2">{t('results.higherCloseRate')}</div>
            <p className="text-gray-300">{t('results.higherCloseRateDesc')}</p>
          </div>

          <div className="bg-gray-700 rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-600 hover-lift hover-glow hover-shimmer">
            <Users className="h-12 w-12 text-emerald-400 mx-auto mb-4" />
            <div className="text-4xl font-bold text-emerald-400 mb-2 animate-bounce-slow hover-scale">11</div>
            <div className="text-lg font-medium text-white mb-2">{t('results.meetingsFirstMonth')}</div>
            <p className="text-gray-300">{t('results.meetingsFirstMonthDesc')}</p>
          </div>

          <div className="bg-gray-700 rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-600 hover-lift hover-glow hover-shimmer">
            <CheckCircle className="h-12 w-12 text-emerald-400 mx-auto mb-4" />
            <div className="text-4xl font-bold text-emerald-400 mb-2 animate-bounce-slow hover-scale">100%</div>
            <div className="text-lg font-medium text-white mb-2">{t('results.satisfaction')}</div>
            <p className="text-gray-300">{t('results.satisfactionDesc')}</p>
          </div>
        </div>

        {/* Case Study Highlight */}
        <div className="bg-gray-700 rounded-2xl shadow-xl p-8 lg:p-12 border border-gray-600 hover-lift hover-glow hover-shimmer">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">{t('results.caseStudyTitle')}</h3>
            <p className="text-emerald-400 font-medium">{t('results.caseStudySubtitle')}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-emerald-100 p-8 rounded-xl text-center hover-scale">
                <div className="text-5xl font-bold text-emerald-600 mb-2">18</div>
                <div className="text-lg text-emerald-800">{t('results.caseStudyMeetings')}</div>
                <div className="text-sm text-emerald-600 mt-2">{t('results.caseStudyStrategy')}</div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold text-white mb-4">{t('results.resultsAfter')}</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" />
                  <span className="text-gray-300">{t('results.qualifiedMeetings')}</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" />
                  <span className="text-gray-300">{t('results.automatedProcess')}</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" />
                  <span className="text-gray-300">{t('results.moreTime')}</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" />
                  <span className="text-gray-300">{t('results.higherQuality')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;