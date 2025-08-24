import React from 'react';
import { Bot, Clock, Users, CheckCircle, ArrowRight } from 'lucide-react';

const AIAgenter: React.FC = () => {
  return (
    <section id="ai-agenter" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Bot className="h-16 w-16 text-emerald-400" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            AI Agenter
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Intelligente AI-assistenter der automatisk håndterer kundeinteraktioner, 
            kvalificerer leads og booker møder 24/7
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-700 rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-600">
            <Clock className="h-12 w-12 text-emerald-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-4">24/7 Tilgængelighed</h3>
            <p className="text-gray-300">
              Dine AI-agenter arbejder døgnet rundt og sikrer, at ingen potentielle kunder går tabt
            </p>
          </div>

          <div className="bg-gray-700 rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-600">
            <Users className="h-12 w-12 text-emerald-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-4">Intelligent Kvalificering</h3>
            <p className="text-gray-300">
              AI'en stiller de rigtige spørgsmål og kvalificerer leads automatisk baseret på dine kriterier
            </p>
          </div>

          <div className="bg-gray-700 rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-600">
            <CheckCircle className="h-12 w-12 text-emerald-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-4">Automatisk Booking</h3>
            <p className="text-gray-300">
              Seamless integration med din kalender for automatisk mødebooking uden manuel indgriben
            </p>
          </div>
        </div>

        {/* How it Works */}
        <div className="bg-gray-700 rounded-2xl p-8 lg:p-12 mb-16 border border-gray-600">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Sådan fungerer AI Agenter
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-emerald-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Initial Kontakt</h4>
                  <p className="text-gray-300">
                    AI'en identificerer og kontakter potentielle kunder gennem forskellige kanaler
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-emerald-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Kvalificering</h4>
                  <p className="text-gray-300">
                    Gennem naturlige samtaler kvalificerer AI'en leads baseret på dine specifikke kriterier
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-emerald-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Mødebooking</h4>
                  <p className="text-gray-300">
                    Kvalificerede leads får automatisk booket møder direkte i din kalender
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 border border-gray-600">
              <h4 className="text-lg font-bold text-white mb-4 text-center">
                AI Agent Dashboard
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-emerald-900 rounded-lg">
                  <span className="text-emerald-200">Aktive samtaler</span>
                  <span className="text-emerald-400 font-bold">24</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-emerald-900 rounded-lg">
                  <span className="text-emerald-200">Kvalificerede leads</span>
                  <span className="text-emerald-400 font-bold">8</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-emerald-900 rounded-lg">
                  <span className="text-emerald-200">Bookede møder</span>
                  <span className="text-emerald-400 font-bold">5</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Klar til at få din egen AI Agent?
          </h3>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Lad vores intelligente AI-agenter håndtere din mødebooking, så du kan fokusere på at lukke deals
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

export default AIAgenter;