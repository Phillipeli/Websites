import React from 'react';
import { User, Target, Heart, Zap, CheckCircle, ArrowRight, Award, Users, Lightbulb } from 'lucide-react';
import OptimizedImage from '../components/OptimizedImage';

const About = () => {
  const values = [
    {
      icon: <Target size={32} />,
      title: 'Resultatorienteret',
      description: 'Vi fokuserer på løsninger der skaber reel værdi for din virksomhed'
    },
    {
      icon: <Heart size={32} />,
      title: 'Personlig Service',
      description: 'Du arbejder direkte med os - ingen mellemmænd eller call centers'
    },
    {
      icon: <Zap size={32} />,
      title: 'Hurtig Levering',
      description: 'Vi leverer kvalitet hurtigt, så du kan komme i gang med det samme'
    },
    {
      icon: <Lightbulb size={32} />,
      title: 'Innovation',
      description: 'Vi holder os opdateret med de nyeste teknologier og trends'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-950 via-black to-gray-950">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <User size={16} />
              Om Leadstrøm
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Hvem er jeg, og{' '}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                hvorfor gør jeg det?
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Lad os tage en uforpligtende snak om hvordan jeg kan hjælpe din virksomhed
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Min historie</h2>
                <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                  <p>
                    Mange bliver solgt en "flot hjemmeside", men får ingen effekt. Andre betaler dyrt for AI, der ikke forstår deres forretning.
                  </p>
                  <p>
                    Jeg så dette problem igen og igen, og besluttede at gøre noget ved det. Jeg kombinerer det bedste fra begge verdener: En stærk digital tilstedeværelse – og AI-agenter, der arbejder for dig 24/7. Du får et personligt link hvor du kan følge udviklingen af din hjemmeside løbende.
                  </p>
                  <p>
                    Min mission er simpel: At skabe digitale løsninger der faktisk gør en forskel for din forretning, ikke bare ser pæne ud.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-3xl p-8 shadow-xl">
                  <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg border border-gray-600">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src="/phillip-leadstrom-grundlaegger.jpg"
                        alt="Phillip - Grundlægger af Leadstrøm, ekspert i hjemmesider, AI chatbots og voice agenter"
                        className="w-full h-full object-cover"
                        loading="eager"
                        width={400}
                        height={400}
                      />
                    </div>
                    <div className="p-6 text-center">
                      <p className="text-gray-300 text-sm leading-relaxed">
                        "Jeg brænder for at hjælpe virksomheder med at vokse gennem intelligente digitale løsninger"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Mine værdier</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Hvad jeg står for, og hvordan jeg arbejder med mine kunder
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="p-8 bg-gray-800 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-700 group"
                >
                  <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-blue-400">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why We Do It */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Hvorfor vi gør det</h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Jeg tror på at alle virksomheder fortjener adgang til professionelle digitale løsninger
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 border border-gray-700">
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  <strong>Jeg så et problem:</strong> Mange små og mellemstore virksomheder blev efterladt i den digitale transformation. Enten fik de dyre løsninger der ikke virkede, eller billige løsninger der så amatøragtige ud.
                </p>
                <p>
                  <strong>Jeg fandt en løsning:</strong> Ved at kombinere moderne webudvikling med intelligent AI, kan jeg levere professionelle løsninger til en fair pris.
                </p>
                <p>
                  Jeg tror på, at alle danske virksomheder fortjener adgang til professionelle digitale løsninger - uanset hvor i landet de befinder sig.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Credibility */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Hvad kan du forvente?</h2>
              <p className="text-xl text-gray-300">
                Ærlighed, transparens og resultater
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-green-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Ærlighed</h3>
                <p className="text-gray-300">Jeg fortæller dig hvad der virker, og hvad der ikke gør - ingen falske løfter</p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="text-blue-400" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Kvalitet</h3>
                <p className="text-gray-300">Jeg leverer kun løsninger jeg selv ville være stolt af at bruge</p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="text-purple-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Partnerskab</h3>
                <p className="text-gray-300">Jeg ser mig som din langsigtede partner, ikke bare en leverandør</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Klar til at arbejde sammen?
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Lad os tage en uforpligtende snak om hvordan jeg kan hjælpe din virksomhed
          </p>
          <button
            onClick={() => window.location.href = '/kontakt'}
            className="bg-white text-blue-600 px-8 py-4 rounded-full hover:shadow-lg hover:shadow-white/20 transition-all duration-300 font-medium text-lg inline-flex items-center gap-3 group"
          >
            Kontakt os i dag
            <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
          </button>
        </div>
      </section>
    </>
  );
};

export default About;