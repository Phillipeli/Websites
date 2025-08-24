import React from 'react';
import { ArrowLeft, User, Target, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import Contact from '../components/Contact';

const AboutPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <main className="pt-20 relative overflow-hidden">
      {/* Back Navigation */}
      <div className="bg-gray-800 py-4 relative">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-10 w-20 h-20 bg-emerald-500/8 animate-morph-blob animate-delay-1s"></div>
          <div className="absolute top-0 right-10 w-16 h-16 bg-emerald-400/6 animate-morph-blob animate-delay-3s"></div>
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
          <div className="absolute top-16 left-16 w-40 h-40 bg-emerald-500/6 animate-morph-blob animate-delay-2s"></div>
          <div className="absolute bottom-16 right-16 w-32 h-32 bg-emerald-400/8 animate-morph-blob animate-delay-4s"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-emerald-600/5 animate-morph-blob animate-delay-6s"></div>
          
          {/* Floating particles */}
          <div className="absolute top-0 left-1/3 w-2 h-2 bg-emerald-400/40 rounded-full animate-particle-float"></div>
          <div className="absolute top-0 right-1/3 w-1 h-1 bg-emerald-300/50 rounded-full animate-particle-float animate-delay-4s"></div>
          <div className="absolute top-0 left-2/3 w-1.5 h-1.5 bg-emerald-500/30 rounded-full animate-particle-float animate-delay-2s"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              {t('aboutPage.heroTitle')}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t('aboutPage.heroSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 dynamic-bg-secondary relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-12 right-12 w-36 h-36 bg-emerald-500/7 animate-morph-blob animate-delay-1s"></div>
          <div className="absolute bottom-12 left-12 w-28 h-28 bg-emerald-400/9 animate-morph-blob animate-delay-3s"></div>
          <div className="absolute top-2/3 right-1/4 w-20 h-20 bg-emerald-600/6 animate-morph-blob animate-delay-5s"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                {t('about.title')}
              </h2>
              
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                {t('about.description1')}
              </p>

              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                {t('about.description2')}
              </p>

              {/* Key Points */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Target className="h-6 w-6 text-emerald-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-white mb-1">{t('about.focusSME')}</h4>
                    <p className="text-gray-300">{t('about.focusSMEDesc')}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <TrendingUp className="h-6 w-6 text-emerald-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-white mb-1">{t('about.continuousFlow')}</h4>
                    <p className="text-gray-300">{t('about.continuousFlowDesc')}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <User className="h-6 w-6 text-emerald-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-white mb-1">{t('about.experiencedFounder')}</h4>
                    <p className="text-gray-300">{t('about.experiencedFounderDesc')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/IMG_0897.jpeg" 
                  alt="Bastian Hansen - Grundlægger af Lai Solutions"
                  className="w-full h-96 lg:h-[500px] object-cover"
                  style={{ objectPosition: '50% 40%' }}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/20 to-transparent"></div>
              </div>

              {/* Floating Achievement Card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-6 border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-500">{t('about.smvSpecialistTitle')}</div>
                  <div className="text-sm text-gray-600">{t('about.smvSpecialistSubtitle')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 dynamic-bg-primary relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-44 h-44 bg-emerald-500/5 animate-morph-blob animate-delay-2s"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-emerald-400/7 animate-morph-blob animate-delay-4s"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">{t('aboutPage.missionTitle')}</h3>
              <p className="text-gray-300 leading-relaxed">
                {t('aboutPage.missionDesc')}
              </p>
            </div>

            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">{t('aboutPage.visionTitle')}</h3>
              <p className="text-gray-300 leading-relaxed">
                {t('aboutPage.visionDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 dynamic-bg-secondary relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-48 h-48 bg-emerald-500/4 animate-morph-blob animate-delay-1s"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-emerald-400/6 animate-morph-blob animate-delay-3s"></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-emerald-600/5 animate-morph-blob animate-delay-5s"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            {t('aboutPage.whyChooseTitle')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-emerald-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">1</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-4">{t('aboutPage.experience')}</h4>
              <p className="text-gray-300">
                {t('aboutPage.experienceDesc')}
              </p>
            </div>

            <div className="text-center">
              <div className="bg-emerald-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">2</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-4">{t('aboutPage.specialization')}</h4>
              <p className="text-gray-300">
                {t('aboutPage.specializationDesc')}
              </p>
            </div>

            <div className="text-center">
              <div className="bg-emerald-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">3</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-4">{t('aboutPage.results')}</h4>
              <p className="text-gray-300">
                {t('aboutPage.resultsDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
};

export default AboutPage;