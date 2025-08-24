import React from 'react';
import { User, Target, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Hvem er Lai Solutions?
            </h2>
            
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Lai Solutions er founded af <strong>Bastian Hansen</strong> som har siddet som sælger de sidste mange årtier. 
              Virksomheden er startet for at hjælpe SMV'er med at få et kontinuerligt flow af kunder i 
              forretningen uden at man som virksomhedsejer skal bruge flere timer om dagen på at skaffe ny forretning.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Lai solutions fylder et hul i markedet blandt virksomhedsejere og sælgere, da man ikke længere 
              behøver at bruge 80% af sin dag på at ringe kold canvas, men faktisk har muligheden for at læne 
              sig tilbage og bruge sin tid på det man brænder for.
            </p>

            {/* Key Points */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <Target className="h-6 w-6 text-emerald-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white mb-1">Fokus på SMV'er</h4>
                  <p className="text-gray-300">Specialiseret i at hjælpe små og mellemstore virksomheder</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <TrendingUp className="h-6 w-6 text-emerald-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white mb-1">Kontinuerligt flow</h4>
                  <p className="text-gray-300">Sikrer et stabilt flow af potentielle kunder</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <User className="h-6 w-6 text-emerald-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white mb-1">Erfaren grundlægger</h4>
                  <p className="text-gray-300">Bastian Hansen med mange års salgserfaring</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-start">
              <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-emerald-500 text-white px-8 py-4 rounded-lg hover:bg-emerald-600 transition-colors duration-200 font-medium text-lg shadow-lg hover:shadow-xl w-full sm:w-auto max-w-xs"
            >
              Kontakt Bastian i dag
            </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/IMG_0897.jpeg" 
                alt="Bastian Hansen - Grundlægger af Lai Solutions"
                className="w-full h-96 lg:h-[500px] object-cover"
                style={{ objectPosition: '50% 80%' }}
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
  );
};

export default About;
