import React from 'react';
import { MapPin, Users, Building, Zap } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { NAP_DATA } from './NAP';

const LocalContent: React.FC = () => {
  const serviceAreas = [
    {
      name: "København & Omegn",
      description: "B2B hjemmesider, AI chatbots og voice agenter til virksomheder i hovedstadsområdet",
      highlights: ["Tech-virksomheder", "Konsulentfirmaer", "Finansielle services", "Startup-miljø"]
    },
    {
      name: "Jylland",
      description: "Digitale løsninger til B2B virksomheder i Aarhus, Aalborg og resten af Jylland",
      highlights: ["Produktionsvirksomheder", "Teknologi-hubs", "Eksportvirksomheder", "Innovative startups"]
    },
    {
      name: "Øvrige Danmark",
      description: "Professionelle digitale løsninger til virksomheder i resten af Danmark",
      highlights: ["Fyn", "Bornholm", "Lolland-Falster", "Lokale B2B virksomheder"]
    }
  ];

  const localBenefits = [
    {
      icon: <Users size={24} />,
      title: "Lokal forståelse",
      description: "Vi forstår det danske marked og dine lokale kunders behov"
    },
    {
      icon: <MapPin size={24} />,
      title: "Personlige møder",
      description: "Mulighed for ansigt-til-ansigt møder i København-området"
    },
    {
      icon: <Building size={24} />,
      title: "Dansk kvalitet",
      description: "Høj dansk standard for design, udvikling og kundeservice"
    },
    {
      icon: <Zap size={24} />,
      title: "Hurtig respons",
      description: "Samme tidszone og hurtig kommunikation på dansk"
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <MapPin size={16} />
              Lokal Service
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Digitale løsninger til{' '}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                danske virksomheder
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Vi betjener virksomheder i hele Danmark med særligt fokus på København-området. 
              Lokal forståelse kombineret med international teknologi.
            </p>
          </AnimatedSection>

          {/* Service Areas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {serviceAreas.map((area, index) => (
              <AnimatedSection
                key={index}
                animation="fadeInUp"
                delay={index * 100}
              >
                <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                      <MapPin className="text-blue-400" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white">{area.name}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{area.description}</p>
                  <div className="space-y-2">
                    {area.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Local Benefits */}
          <AnimatedSection animation="fadeInUp" delay={300}>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">
                Hvorfor vælge en lokal partner?
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {localBenefits.map((benefit, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <div className="text-blue-400">
                        {benefit.icon}
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">{benefit.title}</h4>
                    <p className="text-gray-300 text-sm">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Local SEO Content */}
          <AnimatedSection animation="fadeInUp" delay={400}>
            <div className="mt-16 text-center">
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Betjener hele Danmark
                </h3>
                <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
                  Vi arbejder med virksomheder i hele Danmark. 
                  Vores digitale løsninger hjælper danske virksomheder med at vokse online, uanset hvor de befinder sig.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  {NAP_DATA.serviceAreas.map((area, index) => (
                    <span 
                      key={index}
                      className="bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm border border-gray-600"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
};

export default LocalContent;