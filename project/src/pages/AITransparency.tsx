import React from 'react';
import { Bot, Shield, Eye, Users, CheckCircle, AlertCircle, FileText, Phone, Mail } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const AITransparency = () => {
  const aiSystems = [
    {
      name: 'AI Chat-agent',
      purpose: 'Kundeservice, booking og spørgsmål',
      technology: 'Voiceflow med GPT-baserede sprogmodeller',
      riskLevel: 'Begrænset risiko',
      humanOversight: 'Alle vigtige beslutninger reviewes manuelt',
      dataRetention: '90 dage for kvalitetssikring',
      status: 'Aktiv'
    },
    {
      name: 'Lead-kvalificering',
      purpose: 'Automatisk vurdering af potentielle kunder',
      technology: 'Regelbaseret AI med machine learning',
      riskLevel: 'Høj risiko',
      humanOversight: 'Alle kvalificeringer reviewes manuelt',
      dataRetention: '2 år for forretningsformål',
      status: 'Under compliance review'
    },
    {
      name: 'Hjemmeside-optimering',
      purpose: 'Personalisering af indhold og brugeroplevelse',
      technology: 'Analytics-baseret AI',
      riskLevel: 'Minimal risiko',
      humanOversight: 'Kontinuerlig monitorering',
      dataRetention: '13 måneder (anonymiseret)',
      status: 'Aktiv'
    }
  ];

  const userRights = [
    {
      icon: <Eye size={24} />,
      title: 'Ret til information',
      description: 'Du har ret til at vide, når du interagerer med AI-systemer',
      actions: ['Klar markering af AI-interaktioner', 'Forklaring af AI-funktionalitet', 'Adgang til denne transparens-side']
    },
    {
      icon: <FileText size={24} />,
      title: 'Ret til forklaring',
      description: 'Hvis AI træffer beslutninger der påvirker dig, kan du få en forklaring',
      actions: ['Detaljeret forklaring af AI-beslutninger', 'Mulighed for menneskelig review', 'Dokumentation af beslutningslogik']
    },
    {
      icon: <Users size={24} />,
      title: 'Ret til menneskelig assistance',
      description: 'Du kan altid anmode om at tale med et menneske i stedet for AI',
      actions: ['Direkte kontakt til Phillip', 'Mulighed for at omgå AI-systemer', 'Prioriteret menneskelig service']
    },
    {
      icon: <Shield size={24} />,
      title: 'Ret til korrektion',
      description: 'Hvis AI laver fejl, retter vi dem øjeblikkeligt og forbedrer systemet',
      actions: ['Hurtig fejlrettelse', 'Feedback-integration', 'Kontinuerlig systemforbedring']
    }
  ];

  const getRiskColor = (riskLevel: string) => {
    switch (riskLevel) {
      case 'Høj risiko': return 'text-red-400 bg-red-500/20 border-red-500/30';
      case 'Begrænset risiko': return 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30';
      case 'Minimal risiko': return 'text-green-400 bg-green-500/20 border-green-500/30';
      default: return 'text-gray-400 bg-gray-500/20 border-gray-500/30';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Aktiv': return 'text-green-400';
      case 'Under compliance review': return 'text-yellow-400';
      case 'Inaktiv': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-950 py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Bot size={16} />
              AI Transparens
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Vores brug af{' '}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                kunstig intelligens
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Vi bruger AI for at levere bedre service til vores kunder. Her kan du se præcis hvordan, 
              og hvilke rettigheder du har i forhold til vores AI-systemer.
            </p>
          </AnimatedSection>

          {/* EU AI Act Compliance Notice */}
          <AnimatedSection animation="fadeInUp" delay={200}>
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-2xl p-6 mb-16">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="text-blue-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">EU AI Act Compliance</h3>
                  <p className="text-gray-300 mb-4">
                    Leadstrøm overholder EU's AI Act og alle relevante reguleringer for kunstig intelligens. 
                    Vores AI-systemer er klassificeret, dokumenteret og implementeret i overensstemmelse med 
                    gældende lovgivning.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-blue-400">
                    <CheckCircle size={16} />
                    <span>Certificeret AI Act compliance • Sidst opdateret: Januar 2025</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* AI Systems Overview */}
          <section className="mb-20">
            <AnimatedSection animation="fadeInUp" delay={300}>
              <h2 className="text-4xl font-bold text-white mb-8 text-center">Vores AI-systemer</h2>
              <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
                Her er en komplet oversigt over alle AI-systemer vi bruger, deres formål og risikoniveau
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {aiSystems.map((system, index) => (
                <AnimatedSection
                  key={index}
                  animation="fadeInUp"
                  delay={400 + index * 100}
                >
                  <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 h-full">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-white">{system.name}</h3>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(system.status)}`}>
                        {system.status}
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-400 mb-1">Formål</h4>
                        <p className="text-gray-300 text-sm">{system.purpose}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-gray-400 mb-1">Teknologi</h4>
                        <p className="text-gray-300 text-sm">{system.technology}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-gray-400 mb-1">Risikoniveau</h4>
                        <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${getRiskColor(system.riskLevel)}`}>
                          {system.riskLevel}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-gray-400 mb-1">Menneskelig kontrol</h4>
                        <p className="text-gray-300 text-sm">{system.humanOversight}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-gray-400 mb-1">Data opbevaring</h4>
                        <p className="text-gray-300 text-sm">{system.dataRetention}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </section>

          {/* User Rights */}
          <section className="mb-20">
            <AnimatedSection animation="fadeInUp">
              <h2 className="text-4xl font-bold text-white mb-8 text-center">Dine rettigheder</h2>
              <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
                Som bruger af vores AI-systemer har du specifikke rettigheder under EU's AI Act og GDPR
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {userRights.map((right, index) => (
                <AnimatedSection
                  key={index}
                  animation="fadeInUp"
                  delay={200 + index * 100}
                >
                  <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 h-full">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                        <div className="text-blue-400">
                          {right.icon}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white">{right.title}</h3>
                    </div>
                    
                    <p className="text-gray-300 mb-4">{right.description}</p>
                    
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-gray-400">Hvordan vi sikrer dette:</h4>
                      <ul className="space-y-1">
                        {right.actions.map((action, actionIndex) => (
                          <li key={actionIndex} className="flex items-center gap-2 text-sm text-gray-300">
                            <CheckCircle className="text-green-500 flex-shrink-0" size={14} />
                            <span>{action}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </section>

          {/* Quality Assurance */}
          <section className="mb-20">
            <AnimatedSection animation="fadeInUp">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
                <h2 className="text-3xl font-bold text-white mb-6 text-center">Kvalitetssikring og ansvar</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="text-green-500" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Kontinuerlig testing</h3>
                    <p className="text-gray-300 text-sm">
                      Alle AI-systemer testes regelmæssigt for bias, fejl og performance for at sikre høj kvalitet
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Shield className="text-blue-400" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Datasikkerhed</h3>
                    <p className="text-gray-300 text-sm">
                      AI-systemer overholder GDPR og dansk databeskyttelseslov med fuld kryptering og adgangskontrol
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Users className="text-purple-500" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Menneskelig kontrol</h3>
                    <p className="text-gray-300 text-sm">
                      Mennesker har altid det sidste ord i vigtige beslutninger og kan altid overtage fra AI
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </section>

          {/* Incident Reporting */}
          <section className="mb-20">
            <AnimatedSection animation="fadeInUp">
              <div className="bg-orange-500/10 border border-orange-500/30 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="text-orange-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Rapporter problemer med AI</h3>
                    <p className="text-gray-300 mb-4">
                      Hvis du oplever problemer med vores AI-systemer, fejl i beslutninger eller har bekymringer 
                      om AI-behandling, så kontakt os øjeblikkeligt. Vi tager alle henvendelser alvorligt og 
                      reagerer hurtigt.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={() => window.location.href = '/kontakt'}
                        className="inline-flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors duration-300 text-sm font-medium"
                      >
                        <Mail size={16} />
                        Rapporter via kontaktformular
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </section>

          {/* Contact and Support */}
          <section>
            <AnimatedSection animation="fadeInUp">
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 text-center">
                <h2 className="text-3xl font-bold text-white mb-4">Har du spørgsmål om vores AI?</h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Vi er altid klar til at forklare hvordan vores AI fungerer og hjælpe dig med at udøve dine rettigheder
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => window.location.href = '/kontakt'}
                    className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 font-medium text-lg"
                  >
                    Kontakt os
                  </button>
                  <button
                    onClick={() => window.location.href = '/privatlivspolitik'}
                    className="border-2 border-blue-500 text-blue-400 px-8 py-4 rounded-full hover:bg-blue-500/10 transition-all duration-300 font-medium text-lg"
                  >
                    Læs privatlivspolitik
                  </button>
                </div>
                
                <div className="mt-8 pt-8 border-t border-gray-700">
                  <p className="text-sm text-gray-400">
                    <strong>Responstid:</strong> Vi svarer på alle AI-relaterede henvendelser inden for 24 timer på hverdage
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </section>

        </div>
      </div>
    </div>
  );
};

export default AITransparency;