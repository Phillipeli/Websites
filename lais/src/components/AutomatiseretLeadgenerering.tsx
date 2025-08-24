import React from 'react';
import { Target, Search, Mail, Phone, TrendingUp, ArrowRight } from 'lucide-react';

const AutomatiseretLeadgenerering: React.FC = () => {
  return (
    <section id="automatiseret-leadgenerering" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Target className="h-16 w-16 text-emerald-400" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Automatiseret Leadgenerering
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Systematisk identifikation og kontakt til potentielle kunder gennem 
            automatiserede outreach kampagner
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700">
              <Search className="h-12 w-12 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">1. Identifikation</h3>
              <p className="text-gray-300 text-sm">
                Vi finder relevante potentielle kunder baseret på dine kriterier
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700">
              <Mail className="h-12 w-12 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">2. Outreach</h3>
              <p className="text-gray-300 text-sm">
                Personaliserede beskeder sendes automatisk til potentielle kunder
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700">
              <Phone className="h-12 w-12 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">3. Opfølgning</h3>
              <p className="text-gray-300 text-sm">
                Systematisk opfølgning sikrer maksimal respons rate
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700">
              <TrendingUp className="h-12 w-12 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">4. Konvertering</h3>
              <p className="text-gray-300 text-sm">
                Interesserede leads konverteres til bookede møder
              </p>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Fordele ved Automatiseret Leadgenerering
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-emerald-500 rounded-full w-2 h-2 mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-white mb-1">Skalerbar proces</h4>
                  <p className="text-gray-300">Kontakt hundredvis af potentielle kunder samtidig</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-emerald-500 rounded-full w-2 h-2 mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-white mb-1">Personaliseret tilgang</h4>
                  <p className="text-gray-300">Hver besked tilpasses den specifikke modtager</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-emerald-500 rounded-full w-2 h-2 mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-white mb-1">Kontinuerligt flow</h4>
                  <p className="text-gray-300">Konstant tilgang af nye potentielle kunder</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-emerald-500 rounded-full w-2 h-2 mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-white mb-1">Målrettet approach</h4>
                  <p className="text-gray-300">Fokus på din ideelle kunde profil</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <h4 className="text-xl font-bold text-white mb-6 text-center">
              Månedlige Resultater
            </h4>
            
            <div className="space-y-4">
              <div className="bg-emerald-900 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-emerald-200">Kontaktede leads</span>
                  <span className="text-emerald-400 font-bold text-xl">500+</span>
                </div>
              </div>
              
              <div className="bg-emerald-900 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-emerald-200">Positive svar</span>
                  <span className="text-emerald-400 font-bold text-xl">50+</span>
                </div>
              </div>
              
              <div className="bg-emerald-900 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-emerald-200">Bookede møder</span>
                  <span className="text-emerald-400 font-bold text-xl">15+</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Channels */}
        <div className="bg-gray-800 rounded-2xl p-8 lg:p-12 mb-16 border border-gray-700">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Outreach Kanaler
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-blue-400" />
              </div>
              <h4 className="font-bold text-white mb-2">Email Outreach</h4>
              <p className="text-gray-300 text-sm">
                Personaliserede email kampagner med høj åbningsrate
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-400 font-bold text-lg">in</span>
              </div>
              <h4 className="font-bold text-white mb-2">LinkedIn Outreach</h4>
              <p className="text-gray-300 text-sm">
                Professionel networking og direkte kontakt via LinkedIn
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-blue-400" />
              </div>
              <h4 className="font-bold text-white mb-2">Cold Calling</h4>
              <p className="text-gray-300 text-sm">
                Strategiske opkald til kvalificerede potentielle kunder
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Start din automatiserede leadgenerering i dag
          </h3>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Lad os hjælpe dig med at skabe et kontinuerligt flow af kvalificerede leads
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-emerald-500 text-white px-8 py-4 rounded-lg hover:bg-emerald-600 transition-colors duration-200 font-medium text-lg shadow-lg hover:shadow-xl inline-flex items-center"
          >
            Kontakt os i dag
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AutomatiseretLeadgenerering;