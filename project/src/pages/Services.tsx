import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import ParallaxBackground from '../components/ParallaxBackground';
import { Globe, Bot, Zap, Shield, Rocket, Users, Clock, CheckCircle, ArrowRight, Calendar, Search, Smartphone, BarChart3, MessageSquare, Settings, Phone, Mic } from 'lucide-react';

const Services = () => {
  const websiteFeatures = [
    {
      icon: <Rocket size={24} />,
      title: 'Skræddersyet Design',
      description: 'Unikt design tilpasset din brand og målgruppe'
    },
    {
      icon: <Search size={24} />,
      title: 'SEO Optimeret',
      description: 'Bygget til at ranke højt på Google fra dag ét'
    },
    {
      icon: <Zap size={24} />,
      title: 'Lynhurtig Performance',
      description: 'Optimeret for hastighed og brugeroplevelse'
    },
    {
      icon: <Smartphone size={24} />,
      title: 'Fuldt Responsiv',
      description: 'Perfekt på alle enheder og skærmstørrelser'
    },
    {
      icon: <Shield size={24} />,
      title: 'Sikkerhed',
      description: 'SSL-certifikat'
    },
    {
      icon: <BarChart3 size={24} />,
      title: 'Skalerbarhed',
      description: 'Vokser med din virksomhed og behov'
    }
  ];

  const aiFeatures = [
    {
      icon: <MessageSquare size={24} />,
      title: 'Kundeservice 24/7',
      description: 'Besvarer kundeforespørgsler døgnet rundt'
    },
    {
      icon: <Calendar size={24} />,
      title: 'Automatisk Booking',
      description: 'Håndterer aftaler og kalenderbooking'
    },
    {
      icon: <Users size={24} />,
      title: 'Lead Kvalificering',
      description: 'Identificerer og kvalificerer potentielle kunder'
    },
    {
      icon: <Settings size={24} />,
      title: 'CRM Integration',
      description: 'Integrerer med dine eksisterende systemer'
    },
    {
      icon: <Zap size={24} />,
      title: 'Trænet til Din Virksomhed',
      description: 'Forstår dine produkter, priser og processer'
    },
    {
      icon: <Clock size={24} />,
      title: 'Sparer Tid & Penge',
      description: 'Reducerer behov for manuel kundeservice'
    }
  ];

  const voiceFeatures = [
    {
      icon: <Phone size={24} />,
      title: 'Telefonopkald 24/7',
      description: 'Håndterer indgående opkald døgnet rundt'
    },
    {
      icon: <Mic size={24} />,
      title: 'Naturlig dansk tale',
      description: 'Forstår og taler flydende dansk'
    },
    {
      icon: <Users size={24} />,
      title: 'Salg & kundeservice',
      description: 'Kvalificerer leads og hjælper kunder'
    },
    {
      icon: <Calendar size={24} />,
      title: 'Automatisk booking',
      description: 'Booker møder direkte i din kalender'
    },
    {
      icon: <Settings size={24} />,
      title: 'CRM Integration',
      description: 'Synkroniserer med dine systemer'
    },
    {
      icon: <BarChart3 size={24} />,
      title: 'Samtale-analytics',
      description: 'Detaljeret rapportering og indsigt'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <ParallaxBackground className="pt-32 pb-20 bg-gradient-to-br from-gray-950 via-black to-gray-950" speed={0.3}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <AnimatedSection animation="fadeIn" delay={200}>
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Zap size={16} />
              Vores Services
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeInUp" delay={400}>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Digitale løsninger der{' '}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                leverer resultater
              </span>
              </h1>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeInUp" delay={600}>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Vi specialiserer os i skræddersyede hjemmesider, intelligente AI chat-agenter og avancerede AI voice-agenter der hjælper din virksomhed med at vokse
              </p>
            </AnimatedSection>
          </div>
        </div>
      </ParallaxBackground>

      {/* Websites Section */}
      <section id="websites" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              <AnimatedSection animation="fadeInLeft">
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Globe size={16} />
                  Hjemmesider
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  💻 Skræddersyede Hjemmesider
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Jeg skaber moderne, responsive hjemmesider der konverterer besøgende til kunder. Hver hjemmeside er skræddersyet til din virksomhed og optimeret for performance, SEO og brugeroplevelse.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                    <span className="text-gray-300">Responsivt design der fungerer på alle enheder</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                    <span className="text-gray-300">SEO-optimeret for bedre synlighed på Google</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                    <span className="text-gray-300">Lynhurtig indlæsning og optimal performance</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                    <span className="text-gray-300">Personligt link til at følge udviklingen løbende</span>
                  </div>
                </div>
                <button
                  onClick={() => window.location.href = '/kontakt'}
                  className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 font-medium inline-flex items-center gap-3 group"
                >
                  Book en samtale
                  <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
                </button>
              </AnimatedSection>
              
              <AnimatedSection animation="fadeInRight" delay={200}>
                <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-3xl p-8 shadow-xl">
                  <div className="bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-600">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                      <div className="h-4 bg-gray-700 rounded w-1/2"></div>
                      <div className="h-8 bg-blue-500/20 rounded"></div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="h-16 bg-gray-800 rounded"></div>
                        <div className="h-16 bg-gray-800 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Website Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {websiteFeatures.map((feature, index) => (
                <AnimatedSection
                  key={index}
                  animation="fadeInUp"
                  delay={index * 100}
                >
                  <div className="p-6 bg-gray-800 rounded-2xl hover:bg-gray-700 hover:shadow-lg transition-all duration-300 border border-gray-700">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                    <div className="text-blue-400">
                      {feature.icon}
                    </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Agents Section */}
      <ParallaxBackground id="ai-agents" className="py-20 bg-gradient-to-br from-gray-900 to-black" speed={0.2}>
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              <AnimatedSection className="order-2 lg:order-1 relative" animation="fadeInLeft">
                <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-3xl p-8 shadow-xl">
                  <div className="bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-600">
                    <div className="flex items-center gap-3 mb-4">
                      <Bot className="text-blue-400" size={24} />
                      <span className="font-semibold text-white">AI Chat Agent</span>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-blue-500/20 p-3 rounded-lg">
                        <p className="text-sm text-gray-200">Hej! Hvordan kan jeg hjælpe dig i dag?</p>
                      </div>
                      <div className="bg-gray-700 p-3 rounded-lg ml-8">
                        <p className="text-sm text-gray-200">Jeg vil gerne booke et møde</p>
                      </div>
                      <div className="bg-blue-500/20 p-3 rounded-lg">
                        <p className="text-sm text-gray-200">Perfekt! Hvad handler mødet om?</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection className="order-1 lg:order-2" animation="fadeInRight" delay={200}>
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Bot size={16} />
                  AI Agenter
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  🤖 AI Chat-agenter
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Intelligente chatbots der arbejder 24/7 for din virksomhed. En AI-agent jeg træner specifikt til din virksomhed, dine produkter og dine kunder.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                    <span className="text-gray-300">Håndterer kundeservice døgnet rundt</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                    <span className="text-gray-300">Kvalificerer leads og booker møder automatisk</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                    <span className="text-gray-300">Trænet på dine specifikke produkter og priser</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                    <span className="text-gray-300">Integrerer med dit CRM system</span>
                  </div>
                </div>
                <button
                  onClick={() => window.location.href = '/kontakt'}
                  className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 font-medium inline-flex items-center gap-3 group"
                >
                  Book en samtale
                  <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
                </button>
              </AnimatedSection>
            </div>

            {/* AI Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiFeatures.map((feature, index) => (
                <AnimatedSection
                  key={index}
                  animation="fadeInUp"
                  delay={index * 100}
                >
                  <div className="p-6 bg-gray-800 rounded-2xl hover:shadow-lg transition-all duration-300 border border-gray-700">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                    <div className="text-blue-400">
                      {feature.icon}
                    </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </ParallaxBackground>

      {/* AI Voice Agents Section */}
      <section id="ai-voice-agents" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              <AnimatedSection className="order-2 lg:order-1 relative" animation="fadeInLeft">
                <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-3xl p-8 shadow-xl">
                  <div className="bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-600">
                    <div className="flex items-center gap-3 mb-4">
                      <Phone className="text-blue-400" size={24} />
                      <span className="font-semibold text-white">AI Voice Agent</span>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-blue-500/20 p-3 rounded-lg">
                        <p className="text-sm text-gray-200">🎙️ "Hej, det er Leadstrøm. Hvordan kan jeg hjælpe dig?"</p>
                      </div>
                      <div className="bg-gray-700 p-3 rounded-lg ml-8">
                        <p className="text-sm text-gray-200">📞 "Jeg vil gerne høre om jeres hjemmesider"</p>
                      </div>
                      <div className="bg-blue-500/20 p-3 rounded-lg">
                        <p className="text-sm text-gray-200">🎙️ "Selvfølgelig! Skal jeg booke et møde med Phillip?"</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection className="order-1 lg:order-2" animation="fadeInRight" delay={200}>
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Mic size={16} />
                  AI Voice Agenter
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  🎙️ AI Voice Agenter - Dansk Telefonservice
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Banebrydende voice AI-teknologi der revolutionerer telefonservice for danske B2B virksomheder. Håndterer opkald på flydende dansk, kvalificerer leads og booker møder automatisk.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                    <span className="text-gray-300">Håndterer telefonopkald 24/7 på dansk</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                    <span className="text-gray-300">Naturlig samtale og forståelse</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                    <span className="text-gray-300">Automatisk lead-kvalificering og booking</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                    <span className="text-gray-300">Integration med telefonsystem og CRM</span>
                  </div>
                </div>
                <button
                  onClick={() => window.location.href = '/kontakt'}
                  className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 font-medium inline-flex items-center gap-3 group"
                >
                  Book en samtale
                  <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
                </button>
              </AnimatedSection>
            </div>

            {/* Voice Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {voiceFeatures.map((feature, index) => (
                <AnimatedSection
                  key={index}
                  animation="fadeInUp"
                  delay={index * 100}
                >
                  <div className="p-6 bg-gray-800 rounded-2xl hover:shadow-lg transition-all duration-300 border border-gray-700">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                    <div className="text-blue-400">
                      {feature.icon}
                    </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Hvorfor kombinere alle tre services?
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Sammen skaber de en komplet digital løsning der arbejder for dig 24/7. Du kan vælge én, to eller alle tre services afhængig af dine behov.
            </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimatedSection animation="fadeInUp" delay={200}>
                <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="text-green-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Komplet Lead-håndtering</h3>
                <p className="text-gray-300">Hjemmeside tiltrækker, chat-agent konverterer online, voice-agent håndterer opkald</p>
              </AnimatedSection>
              
              <AnimatedSection animation="fadeInUp" delay={400}>
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-blue-400" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Sparer Tid</h3>
                <p className="text-gray-300">Automatiserer kundeservice og booking, så du kan fokusere på kerneforretningen</p>
              </AnimatedSection>
              
              <AnimatedSection animation="fadeInUp" delay={600}>
                <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="text-purple-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Bedre ROI</h3>
                <p className="text-gray-300">Højere konverteringsrate og lavere driftsomkostninger giver bedre afkast</p>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-6 text-center">
          <AnimatedSection animation="fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Klar til at revolutionere din kundeservice?
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Lad mig hjælpe dig med at skabe en komplet digital løsning der arbejder for dig døgnet rundt - hjemmeside, chat-agent og voice-agent.
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
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Services;