import React from 'react';
import { Search, Settings, Calendar, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

const Process: React.FC = () => {
  const { t } = useLanguage();
  const { ref, isInView } = useInViewAnimation();

  return (
    <section
      ref={ref}
      className={`py-20 dynamic-bg-secondary relative overflow-hidden transition-all duration-1000 ease-out ${
        isInView ? 'animate-on-scroll-visible' : 'animate-on-scroll-hidden'
      }`}
    >
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-16 right-16 w-44 h-44 bg-emerald-500/6 animate-morph-blob animate-delay-2s"></div>
        <div className="absolute bottom-16 left-16 w-36 h-36 bg-emerald-400/8 animate-morph-blob animate-delay-4s"></div>
        <div className="absolute top-2/3 right-1/3 w-28 h-28 bg-emerald-600/5 animate-morph-blob animate-delay-6s"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t('process.heroTitle')}
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            {t('process.heroSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 animate-stagger">
          <div className="animate-slide-in-left animate-delay-1s">
            <h3 className="text-2xl font-bold text-white mb-6">
              {t('process.transformTitle')}
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start hover-lift animate-fade-in-up animate-delay-2s">
                <Search className="h-8 w-8 text-emerald-400 mr-4 mt-1 flex-shrink-0 hover-rotate" />
                <div>
                  <h4 className="font-bold text-white mb-2 animate-swing">{t('process.autoProspecting')}</h4>
                  <p className="text-gray-300">
                    {t('process.autoProspectingDesc')}
                  </p>
                </div>
              </div>

              <div className="flex items-start hover-lift animate-fade-in-up animate-delay-3s">
                <Settings className="h-8 w-8 text-emerald-400 mr-4 mt-1 flex-shrink-0 hover-rotate" />
                <div>
                  <h4 className="font-bold text-white mb-2 animate-swing">{t('process.smartAutomation')}</h4>
                  <p className="text-gray-300">
                    {t('process.smartAutomationDesc')}
                  </p>
                </div>
              </div>

              <div className="flex items-start hover-lift animate-fade-in-up animate-delay-4s">
                <Calendar className="h-8 w-8 text-emerald-400 mr-4 mt-1 flex-shrink-0 hover-rotate" />
                <div>
                  <h4 className="font-bold text-white mb-2 animate-swing">{t('process.filledCalendar')}</h4>
                  <p className="text-gray-300">
                    {t('process.filledCalendarDesc')}
                  </p>
                </div>
              </div>

              <div className="flex items-start hover-lift animate-fade-in-up animate-delay-5s">
                <TrendingUp className="h-8 w-8 text-emerald-400 mr-4 mt-1 flex-shrink-0 hover-rotate" />
                <div>
                  <h4 className="font-bold text-white mb-2 animate-swing">{t('process.continuousFlowTitle')}</h4>
                  <p className="text-gray-300">
                    {t('process.continuousFlowDesc')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-2xl p-8 border border-gray-600 hover-lift hover-glow hover-shimmer animate-slide-in-right animate-delay-2s">
            <h4 className="text-xl font-bold text-white mb-6 text-center animate-tada">
              {t('process.beforeAfterTitle')}
            </h4>
            
            <div className="space-y-4">
              <div className="bg-red-900 p-4 rounded-lg border-l-4 border-red-400 hover-lift hover-shimmer animate-fade-in-up animate-delay-3s">
                <h5 className="font-medium text-red-200 mb-1">{t('process.before')}</h5>
                <p className="text-red-300 text-sm">
                  {t('process.beforeDesc')}
                </p>
              </div>
              
              <div className="bg-emerald-900 p-4 rounded-lg border-l-4 border-emerald-400 hover-lift hover-shimmer animate-fade-in-up animate-delay-4s">
                <h5 className="font-medium text-emerald-200 mb-1">{t('process.after')}</h5>
                <p className="text-emerald-300 text-sm">
                  {t('process.afterDesc')}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-emerald-900 rounded-2xl p-8 lg:p-12 text-center border border-emerald-700 hover-lift hover-glow hover-shimmer animate-zoom-in animate-delay-6s">
          <h3 className="text-2xl font-bold text-white mb-4 animate-tada">
            {t('process.readyTitle')}
          </h3>
          <p className="text-lg text-emerald-200 mb-6 max-w-3xl mx-auto animate-fade-in-up animate-delay-7s">
            {t('process.readyDesc')}
          </p>
          <div className="flex justify-center animate-zoom-in animate-delay-8s">
            <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-emerald-500 text-white px-8 py-4 rounded-lg hover:bg-emerald-600 transition-colors duration-200 font-medium text-lg shadow-lg hover:shadow-xl w-full sm:w-auto max-w-xs hover-lift hover-glow hover-shimmer animate-heartbeat"
          >
            {t('process.contactUsToday')}
          </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;