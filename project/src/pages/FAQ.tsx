import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Clock, CreditCard, Globe, Bot, Shield, Zap, Mic } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'website' | 'ai' | 'pricing' | 'process' | 'technical';
  icon: React.ReactNode;
}

const FAQ = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const faqData: FAQItem[] = [
    // General
    {
      id: 'what-services',
      category: 'general',
      icon: <HelpCircle size={20} />,
      question: 'Hvilke services tilbyder du?',
      answer: 'Jeg specialiserer mig i to hovedområder: Skræddersyede hjemmesider og AI chat-agenter. Du kan vælge kun hjemmeside, kun AI-agent, eller begge dele. Hjemmesider starter fra 15.000 kr, og AI-agenter koster 20.000 kr. Jeg tilbyder også integrationer, booking-systemer og vedligeholdelse.'
    },
    {
      id: 'why-choose-me',
      category: 'general',
      icon: <Zap size={20} />,
      question: 'Hvorfor skal jeg vælge dig frem for andre?',
      answer: 'Jeg kombinerer personlig service med teknisk ekspertise. Du arbejder direkte med mig - ingen mellemmænd. Jeg leverer hurtigt (3-4 uger), fokuserer på resultater frem for bare udseende, og jeg forstår både teknologi og forretning. Plus du får AI-transparens og GDPR-compliance inkluderet.'
    },
    {
      id: 'target-audience',
      category: 'general',
      icon: <Globe size={20} />,
      question: 'Hvem er dine typiske kunder?',
      answer: 'Jeg arbejder primært med danske B2B-virksomheder der ønsker at automatisere kundeservice, øge lead-generering eller forbedre deres digitale tilstedeværelse. Typiske kunder inkluderer konsulentfirmaer, tech-virksomheder, advokatfirmaer, regnskabsfirmaer, servicevirksomheder og SaaS-startups i København og større danske byer.'
    },

    // Website
    {
      id: 'website-included',
      category: 'website',
      icon: <Globe size={20} />,
      question: 'Hvad er inkluderet i en hjemmeside?',
      answer: 'En komplet hjemmeside inkluderer: Responsivt design til alle enheder, SEO-optimering, SSL-certifikat, kontaktformularer, Google Analytics, hurtig hosting, og 30 dages gratis support. Du kan tilføje e-commerce, booking-system, blog/CMS, eller flersproget support mod tillæg.'
    },
    {
      id: 'website-seo',
      category: 'website',
      icon: <Globe size={20} />,
      question: 'Er hjemmesiden SEO-optimeret?',
      answer: 'Absolut! Alle hjemmesider bygges med SEO best practices: Hurtig indlæsning, mobilvenligt design, strukturerede data, optimerede billeder, og korrekt HTML-struktur. Google Analytics og Search Console kan tilføjes som ekstra service, så du kan følge din performance.'
    },

    // AI
    {
      id: 'ai-what-can-do',
      category: 'ai',
      icon: <Bot size={20} />,
      question: 'Hvad kan AI Chat-agenter gøre for min virksomhed?',
      answer: 'AI Chat-agenten håndterer kundeservice på hjemmesiden 24/7, besvarer kundeforespørgsler, kvalificerer leads og booker møder automatisk. Den er trænet specifikt på din virksomhed og kan integrere med dit CRM-system. Chat-agenten koster 20.000 kr og frigør tid til dig ved at automatisere rutine-henvendelser.'
    },
    {
      id: 'voice-agent-what-can-do',
      category: 'ai',
      icon: <Bot size={20} />,
      question: 'Hvad kan AI Voice Agenter gøre for min virksomhed?',
      answer: 'AI Voice Agenten håndterer telefonopkald på flydende dansk 24/7. Den kan kvalificere leads, booke møder automatisk, besvare kundeforespørgsler og integrere med dit CRM og telefonsystem. Voice Agenten koster 35.000 kr og lyder så naturlig, at mange kunder ikke opdager det er AI. Perfekt til virksomheder der modtager mange telefonopkald.'
    },
    {
      id: 'voice-agent-danish',
      category: 'ai',
      icon: <Mic size={20} />,
      question: 'Hvor godt taler AI Voice Agenten dansk?',
      answer: 'Voice Agenten taler flydende dansk med naturlig udtale og forstår danske dialekter og udtryk. Den er specialiseret i professionel forretningskommunikation og kan håndtere komplekse samtaler om dine services. Den lyder så naturlig, at mange kunder ikke opdager det er AI.'
    },
    {
      id: 'ai-training',
      category: 'ai',
      icon: <Bot size={20} />,
      question: 'Hvordan trænes AI Chat-agenten til min virksomhed?',
      answer: 'Jeg træner chat-agenten på dine specifikke data: Produktbeskrivelser, prislister, FAQ, kundeservice-historik, og virksomhedsinfo. Processen tager 1-2 uger, og jeg tester grundigt før go-live. Du kan altid tilføje ny viden eller justere svar efter behov.'
    },
    {
      id: 'voice-agent-training',
      category: 'ai',
      icon: <Mic size={20} />,
      question: 'Hvordan trænes AI Voice Agenten til min virksomhed?',
      answer: 'Voice-agenten trænes på dine specifikke data plus dansk udtale og brancheterminologi. Den lærer dine produkter, priser, processer og hvordan du kommunikerer med kunder. Jeg træner den også i professionel dansk forretningskommunikation og tester grundigt før go-live. Processen tager 1-2 uger.'
    },
    {
      id: 'ai-integration',
      category: 'ai',
      icon: <Bot size={20} />,
      question: 'Kan AI Chat-agenten integrere med mine eksisterende systemer?',
      answer: 'Ja! Chat-agenten kan integrere med de fleste CRM-systemer (HubSpot, Pipedrive, etc.), booking-systemer (Calendly, Acuity), email-marketing platforme, og andre business tools. Jeg sætter alle integrationerne op som del af projektet.'
    },
    {
      id: 'voice-agent-integration',
      category: 'ai',
      icon: <Mic size={20} />,
      question: 'Kan AI Voice Agenten integrere med mine eksisterende systemer?',
      answer: 'Ja! Voice-agenten kan integrere direkte med dit telefonsystem, CRM-systemer (HubSpot, Pipedrive, etc.), booking-systemer (Calendly, Acuity), og andre business tools. Den kan også synkronisere samtaledata og leads automatisk. Jeg sætter alle integrationerne op som del af projektet.'
    },

    // Pricing
    {
      id: 'pricing-structure',
      category: 'pricing',
      icon: <CreditCard size={20} />,
      question: 'Hvordan fungerer jeres prissætning?',
      answer: 'Jeg har faste priser: Hjemmesider fra 15.000 kr (afhænger af antal sider og funktioner), AI-agenter 20.000 kr. Du kan bruge prisberegneren til at få et præcist estimat. Alle priser er ekskl. moms, og jeg tilbyder betalingsplaner: 50% ved start, 25% ved design-godkendelse, 25% ved aflevering.'
    },
    {
      id: 'ongoing-costs',
      category: 'pricing',
      icon: <CreditCard size={20} />,
      question: 'Er der løbende omkostninger?',
      answer: 'Ja, der vil være løbende omkostninger forbundet med at holde en hjemmeside og AI-agenter kørende. Dette inkluderer hosting, domæne, vedligeholdelse og drift af AI-systemerne. De præcise omkostninger afhænger af dine specifikke behov og den løsning vi designer til dig. Vi gennemgår alle omkostninger transparent under vores første møde.'
    },
    {
      id: 'payment-terms',
      category: 'pricing',
      icon: <CreditCard size={20} />,
      question: 'Hvilke betalingsbetingelser har I?',
      answer: 'Jeg kræver 50% ved projektstart og 50% ved aflevering. Betalingsfrist er 14 dage netto. Jeg accepterer bankoverførsel og fakturering. For større projekter kan vi aftale alternative betalingsplaner.'
    },

    // Process
    {
      id: 'project-timeline',
      category: 'process',
      icon: <Clock size={20} />,
      question: 'Hvor lang tid tager et projekt?',
      answer: 'Standard projekter tager 3-4 uger fra kontraktindgåelse til go-live. Express-levering på 1-2 uger er muligt mod 30% tillæg. Komplekse projekter med mange integrationer kan tage 6-8 uger. Jeg giver altid en præcis tidsplan ved projektstart.'
    },
    {
      id: 'project-process',
      category: 'process',
      icon: <Clock size={20} />,
      question: 'Hvordan foregår projektforløbet?',
      answer: 'Vi starter med et kickoff-møde hvor jeg forstår dine behov. Du får et personligt link hvor du løbende kan se fremskridt på din hjemmeside. Jeg laver design og funktionalitet, som du godkender gennem linket. Til sidst tester vi sammen før go-live og jeg giver dig træning i systemet.'
    },
    {
      id: 'client-involvement',
      category: 'process',
      icon: <Clock size={20} />,
      question: 'Hvor meget skal jeg være involveret i projektet?',
      answer: 'Du skal levere indhold (tekster, billeder), give feedback på design, og teste funktionalitet. Det kræver typisk 2-4 timer om ugen fra din side. Jeg håndterer alt det tekniske, så du kan fokusere på din forretning.'
    },

    // Technical
    {
      id: 'technical-stack',
      category: 'technical',
      icon: <Shield size={20} />,
      question: 'Hvilke teknologier bruger du?',
      answer: 'Jeg bruger moderne, pålidelige teknologier der er velkendte i branchen. Alt er bygget med sikkerhed og skalerbarhed i fokus, og overholder GDPR og AI Act. Jeg vælger altid de bedste værktøjer til den specifikke opgave.'
    },
    {
      id: 'security-backup',
      category: 'technical',
      icon: <Shield size={20} />,
      question: 'Hvordan sikres mine data og hjemmeside?',
      answer: 'Alle hjemmesider får SSL-certifikat, automatiske sikkerhedsopdateringer, og daglige backups. Data krypteres både under transport og opbevaring. Jeg følger GDPR-reglerne og har implementeret AI Act compliance. Du ejer altid dine egne data.'
    },
    {
      id: 'support-maintenance',
      category: 'technical',
      icon: <Shield size={20} />,
      question: 'Hvilken support får jeg efter go-live?',
      answer: '30 dages gratis support er inkluderet - fejlrettelser, mindre ændringer og teknisk hjælp. Derefter kan du vælge en vedligeholdelsesaftale eller betale for support efter behov. Jeg svarer altid hurtigt på kritiske problemer.'
    }
  ];

  const categories = [
    { id: 'general', name: 'Generelt', icon: <HelpCircle size={16} /> },
    { id: 'website', name: 'Hjemmesider', icon: <Globe size={16} /> },
    { id: 'ai', name: 'AI Chat & Voice Agenter', icon: <Bot size={16} /> },
    { id: 'pricing', name: 'Priser', icon: <CreditCard size={16} /> },
    { id: 'process', name: 'Proces', icon: <Clock size={16} /> },
    { id: 'technical', name: 'Teknisk', icon: <Shield size={16} /> }
  ];

  const [activeCategory, setActiveCategory] = useState<string>('general');

  const filteredFAQs = faqData.filter(faq => faq.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-950 py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <HelpCircle size={16} />
              Ofte Stillede Spørgsmål
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Har du{' '}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                spørgsmål?
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Find svar på de mest almindelige spørgsmål om mine services, priser og processer
            </p>
          </AnimatedSection>

          {/* Category Filter */}
          <AnimatedSection animation="fadeInUp" delay={200}>
            <div className="mb-12">
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeCategory === category.id
                        ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-600'
                    }`}
                  >
                    {category.icon}
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* FAQ Items */}
          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <AnimatedSection
                key={faq.id}
                animation="fadeInUp"
                delay={300 + index * 100}
              >
                <div className="bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden">
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full p-6 text-left hover:bg-gray-700 transition-colors duration-300 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <div className="text-blue-400">
                          {faq.icon}
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-white pr-4">
                        {faq.question}
                      </h3>
                    </div>
                    <div className="flex-shrink-0">
                      {openItems.includes(faq.id) ? (
                        <ChevronUp className="text-blue-400" size={24} />
                      ) : (
                        <ChevronDown className="text-gray-400" size={24} />
                      )}
                    </div>
                  </button>
                  
                  {openItems.includes(faq.id) && (
                    <div className="px-6 pb-6">
                      <div className="pl-14">
                        <div className="border-t border-gray-600 pt-4">
                          <p className="text-gray-300 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* CTA Section */}
          <AnimatedSection animation="fadeInUp" delay={600}>
            <div className="mt-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Har du stadig spørgsmål?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Book et uforpligtende møde, så kan jeg besvare alle dine spørgsmål personligt
              </p>
              <button
                onClick={() => window.location.href = '/kontakt'}
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 font-medium text-lg inline-flex items-center gap-3 group"
              >
                Book en samtale
                <Clock className="group-hover:scale-110 transition-transform duration-300" size={20} />
              </button>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </div>
  );
};

export default FAQ;