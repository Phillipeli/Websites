import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import DynamicCounter from './DynamicCounter';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center dynamic-bg-hero overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/5 via-transparent to-emerald-900/5 animate-gradient-shift"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-4 sm:left-10 w-32 h-32 sm:w-40 sm:h-40 bg-emerald-500/10 animate-morph-blob animate-pulse-glow-slow"></div>
        <div className="absolute top-40 right-4 sm:right-20 w-28 h-28 sm:w-32 sm:h-32 bg-emerald-400/15 animate-morph-blob animate-pulse-glow-slow animate-delay-2s"></div>
        <div className="absolute bottom-32 left-1/4 w-24 h-24 sm:w-28 sm:h-28 bg-emerald-600/8 animate-morph-blob animate-pulse-glow-slow animate-delay-4s"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 sm:w-36 sm:h-36 bg-emerald-300/12 animate-morph-blob animate-pulse-glow-slow animate-delay-1s"></div>
        
        {/* Subtle pulsing dots */}
        <div className="absolute top-1/3 left-1/5 w-6 h-6 bg-emerald-400/30 rounded-full animate-pulse-subtle animate-delay-3s"></div>
        <div className="absolute top-2/3 right-1/4 w-5 h-5 bg-emerald-500/25 rounded-full animate-pulse-subtle animate-delay-5s"></div>
        <div className="absolute bottom-1/3 left-2/3 w-7 h-7 bg-emerald-300/20 rounded-full animate-pulse-subtle animate-delay-6s"></div>
        
        {/* Floating particles */}
        <div className="absolute top-0 left-1/4 w-3 h-3 bg-emerald-400/40 rounded-full animate-particle-float"></div>
        <div className="absolute top-0 left-3/4 w-2 h-2 bg-emerald-300/50 rounded-full animate-particle-float animate-delay-3s"></div>
        <div className="absolute top-0 left-1/2 w-2.5 h-2.5 bg-emerald-500/30 rounded-full animate-particle-float animate-delay-6s"></div>
        <div className="absolute top-0 left-1/6 w-2 h-2 bg-emerald-600/35 rounded-full animate-particle-float animate-delay-2s"></div>
        <div className="absolute top-0 right-1/6 w-1.5 h-1.5 bg-emerald-400/45 rounded-full animate-particle-float animate-delay-4s"></div>
        
        {/* Gradient overlays for depth */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(16,185,129,0.08),transparent_60%)] animate-fade-in-out animate-delay-2s"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(16,185,129,0.06),transparent_60%)] animate-fade-in-out animate-delay-4s"></div>
        <div className="absolute top-1/2 left-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.04),transparent_70%)] animate-fade-in-out animate-delay-6s"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-slide-in-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in">
              {t('common.language') === 'da' ? (
                <>
                  <span className="inline-block animate-slide-up">Spar tid og</span>{' '}
                  <span className="inline-block animate-slide-up animation-delay-200ms">strømlin</span>{' '}
                  <span className="inline-block animate-slide-up animation-delay-400ms">din</span>{' '}
                  <span className="inline-block animate-slide-up animation-delay-600ms text-emerald-400 font-extrabold">tidsplan</span>
                  <br />
                  <span className="inline-block animate-slide-up animation-delay-800ms">med en</span>{' '}
                  <span className="relative inline-block animate-slide-up animation-delay-1000ms">
                    <span className="text-emerald-400 font-extrabold bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
                      automatisk outreach strategi
                    </span>
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-emerald-300 rounded-full animate-expand-width animation-delay-1200ms"></span>
                  </span>
                </>
              ) : (
                <>
                  <span className="inline-block animate-slide-up">Save time and</span>{' '}
                  <span className="inline-block animate-slide-up animation-delay-200ms">streamline</span>{' '}
                  <span className="inline-block animate-slide-up animation-delay-400ms">your</span>{' '}
                  <span className="inline-block animate-slide-up animation-delay-600ms text-emerald-400 font-extrabold">schedule</span>
                  <br />
                  <span className="inline-block animate-slide-up animation-delay-800ms">with an</span>{' '}
                  <span className="relative inline-block animate-slide-up animation-delay-1000ms">
                    <span className="text-emerald-400 font-extrabold bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
                      automated outreach strategy
                    </span>
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-emerald-300 rounded-full animate-expand-width animation-delay-1200ms"></span>
                  </span>
                </>
              )}
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed animate-fade-in-up animate-delay-1s">
              {t('hero.subtitle')}
            </p>

            {/* CTA Button */}
            <div className="mb-8 flex justify-center lg:justify-start animate-zoom-in animate-delay-2s">
              <button 
                onClick={scrollToContact}
                className="bg-emerald-500 text-white px-8 py-4 rounded-lg hover:bg-emerald-600 transition-all duration-200 font-medium text-lg flex items-center justify-center group shadow-lg hover:shadow-xl w-full sm:w-auto max-w-xs hover-lift hover-glow hover-shimmer animate-heartbeat"
              >
                {t('hero.cta')}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200 animate-wiggle" />
              </button>
            </div>
          </div>

          {/* Calendar/Schedule Visual */}
          <div className="relative z-20 animate-slide-in-right animate-delay-1s">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border hover-lift animate-float hover-glow hover-shimmer">
              <div className="flex items-center mb-6">
                <Calendar className="h-8 w-8 text-emerald-500 mr-3 hover-rotate" />
                <h3 className="text-xl font-bold text-gray-900">{t('hero.calendarTitle')}</h3>
              </div>
              
              {/* Mock calendar entries */}
              <div className="space-y-4">
                <div className="flex items-center p-3 bg-emerald-50 rounded-lg border-l-4 border-emerald-500 hover-lift animate-fade-in-up animate-delay-2s">
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">{t('hero.meetingPotential')}</div>
                    <div className="text-sm text-gray-600">{t('hero.autoBooked')}</div>
                  </div>
                  <div className="text-emerald-500 font-medium">10:00</div>
                </div>
                
                <div className="flex items-center p-3 bg-emerald-50 rounded-lg border-l-4 border-emerald-500 hover-lift animate-fade-in-up animate-delay-3s">
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">{t('hero.salesMeeting')}</div>
                    <div className="text-sm text-gray-600">{t('hero.autoBooked')}</div>
                  </div>
                  <div className="text-emerald-500 font-medium">14:30</div>
                </div>
                
                <div className="flex items-center p-3 bg-emerald-50 rounded-lg border-l-4 border-emerald-500 hover-lift animate-fade-in-up animate-delay-4s">
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">{t('hero.followUpMeeting')}</div>
                    <div className="text-sm text-gray-600">{t('hero.autoBooked')}</div>
                  </div>
                  <div className="text-emerald-500 font-medium">16:00</div>
                </div>
              </div>
              
              <div className="mt-6 grid grid-cols-2 gap-4 animate-zoom-in animate-delay-5s">
                <DynamicCounter 
                  targetValue={11} 
                  label={t('hero.meetingsThisMonth')}
                />
                <DynamicCounter 
                  targetValue={47} 
                  label={t('hero.leadsGenerated')}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;