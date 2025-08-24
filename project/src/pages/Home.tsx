import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import ParallaxBackground from '../components/ParallaxBackground';
import DynamicHero from '../components/DynamicHero';
import LocalContent from '../components/LocalContent';
import ImageSEO from '../components/ImageSEO';
import { ArrowRight, Globe, Bot, Zap, Shield, Rocket, Users, Clock, CheckCircle } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <Zap className="text-blue-500" size={32} />,
      title: 'Lynhurtig Levering',
      description: 'Fra idé til færdig løsning på rekordtid'
    },
    {
      icon: <Shield className="text-blue-500" size={32} />,
      title: 'Pålidelig Kvalitet',
      description: 'Professionelle løsninger du kan stole på'
    },
    {
      icon: <Users className="text-blue-500" size={32} />,
      title: 'Personlig Service',
      description: 'Dedikeret support gennem hele processen'
    },
    {
      icon: <Rocket className="text-blue-500" size={32} />,
      title: 'Skalerbare Løsninger',
      description: 'Vokser med din virksomhed'
    }
  ];

  // Define images for SEO
  const pageImages = [
    {
      url: 'https://leadstrom.dk/leadstrom-hjemmesider-ai-chatbots.jpg',
      alt: 'Leadstrøm - Professionelle hjemmesider og AI chatbots til danske B2B virksomheder',
      caption: 'Moderne digitale løsninger der hjælper virksomheder med at vokse online',
      location: 'https://leadstrom.dk/'
    },
    {
      url: 'https://leadstrom.dk/ai-voice-agent-dansk-telefonservice.jpg',
      alt: 'AI Voice Agent - Dansk telefonservice automatisering for B2B virksomheder',
      caption: 'Revolutionerende voice AI-teknologi der håndterer telefonopkald på flydende dansk',
      location: 'https://leadstrom.dk/services'
    }
  ];
  return (
    <>
      <ImageSEO images={pageImages} />
      
      {/* Hero Section */}
      <DynamicHero />

      {/* Services Overview */}
      <section className="py-20 bg-gray-900 relative">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Hvad tilbyder jeg?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Jeg specialiserer mig i 3 kerneprodukter der hjælper din virksomhed med at vokse digitalt
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Websites */}
            <AnimatedSection animation="fadeInLeft" delay={200}>
              <div className="group bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl border border-gray-700 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Globe className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">💻 Skræddersyede Hjemmesider</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Moderne, responsive hjemmesider der konverterer besøgende til kunder. Optimeret for hastighed, SEO og brugeroplevelse.
              </p>
              <button
                onClick={() => window.location.href = '/services#websites'}
                className="inline-flex items-center gap-2 text-blue-400 font-medium hover:text-blue-300 transition-colors duration-300 group"
              >
                Læs mere
                <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={16} />
              </button>
              </div>
            </AnimatedSection>

            {/* AI Agents */}
            <AnimatedSection animation="fadeInUp" delay={300}>
              <div className="group bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl border border-gray-700 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Bot className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">🤖 AI Chat-agenter</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Intelligente chatbots der håndterer kundeservice, bookinger og lead-kvalificering 24/7. Trænet specifikt til din virksomhed.
              </p>
              <button
                onClick={() => window.location.href = '/services#ai-agents'}
                className="inline-flex items-center gap-2 text-blue-400 font-medium hover:text-blue-300 transition-colors duration-300 group"
              >
                Læs mere
                <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={16} />
              </button>
              </div>
            </AnimatedSection>

            {/* AI Voice Agents */}
            <AnimatedSection animation="fadeInRight" delay={400}>
              <div className="group bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl border border-gray-700 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="text-white" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/>
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                  <line x1="12" y1="19" x2="12" y2="23"/>
                  <line x1="8" y1="23" x2="16" y2="23"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">🎙️ AI Voice Agenter på Dansk</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Revolutionerende voice AI-teknologi der håndterer telefonopkald på flydende dansk. Perfekt til B2B salg, kundeservice og lead-kvalificering.
              </p>
              <button
                onClick={() => window.location.href = '/services#ai-voice-agents'}
                className="inline-flex items-center gap-2 text-blue-400 font-medium hover:text-blue-300 transition-colors duration-300 group"
              >
                Læs mere
                <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={16} />
              </button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <ParallaxBackground className="py-20 bg-gradient-to-br from-gray-900 to-black" speed={0.2}>
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Hvorfor arbejde med mig?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Jeg kombinerer teknisk ekspertise med forståelse for forretning
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <AnimatedSection
                key={index}
                animation="fadeInUp"
                delay={index * 200}
              >
                <div className="text-center p-6 bg-gray-800 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-700">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </ParallaxBackground>

      {/* Local Content Section */}
      <LocalContent />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 relative">
        <div className="container mx-auto px-6 text-center">
          <AnimatedSection animation="fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Klar til at komme i gang?
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
              Lad mig hjælpe dig med at skabe en digital løsning der virkelig gør en forskel for din virksomhed
          </p>
          </AnimatedSection>
          
          <AnimatedSection animation="scaleIn" delay={300}>
            <button
            onClick={() => window.location.href = '/kontakt'}
            className="bg-white text-blue-600 px-8 py-4 rounded-full hover:shadow-lg hover:shadow-white/20 transition-all duration-300 font-medium text-lg inline-flex items-center gap-3 group"
          >
            Få et gratis tilbud
            <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </button>
            <button
            onClick={() => window.location.href = '/prisberegner'}
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 font-medium text-lg inline-flex items-center gap-3 group ml-4"
          >
            Beregn pris
            <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Home;