import React, { useEffect } from 'react';
import { Phone, Mail, MapPin, Calendar, Clock, MessageSquare } from 'lucide-react';
import NAP from '../components/NAP';
import GoogleBusinessIntegration from '../components/GoogleBusinessIntegration';

const Contact = () => {
  // Load Calendly widget script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on component unmount
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-950 via-black to-gray-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <MessageSquare size={16} />
              Kontakt os
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Lad os{' '}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                tale sammen
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Book et uforpligtende møde og lad os diskutere hvordan vi kan hjælpe din virksomhed
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Calendly Booking */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="bg-gray-800 rounded-2xl shadow-sm border border-gray-700 overflow-hidden">
                <div className="p-6 border-b border-gray-700">
                  <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                    <Calendar className="text-blue-400" size={24} />
                    Book et møde
                  </h2>
                  <p className="text-gray-300">Vælg et tidspunkt der passer dig - den hurtigste måde at komme i kontakt</p>
                </div>
                
                <div className="calendly-inline-widget" 
                     data-url="https://calendly.com/kontakt-xn-leadstrm-c5a/30min" 
                     style={{minWidth: '320px', height: '700px', backgroundColor: '#1f2937'}}></div>
              </div>
            </div>

            {/* Airtable Contact Form */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="bg-gray-800 rounded-2xl shadow-sm border border-gray-700 overflow-hidden">
                <div className="p-6 border-b border-gray-700">
                  <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                    <MessageSquare className="text-blue-400" size={24} />
                    Eller udfyld kontaktformularen
                  </h2>
                  <p className="text-gray-300">Hvis du foretrækker at skrive til os, kan du udfylde formularen nedenfor</p>
                </div>
                
                <div className="p-6">
                  <iframe 
                    className="airtable-embed w-full rounded-lg" 
                    src="https://airtable.com/embed/appG1NXQ5gFlfK3Vx/pagA8xX4olG9vYyf7/form" 
                    frameBorder="0" 
                    width="100%" 
                    height="533" 
                    style={{background: 'transparent', border: '1px solid #374151'}}
                  />
                </div>
              </div>
            </div>

            {/* Process Steps - Moved to separate section */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-6 text-center flex items-center justify-center gap-2">
                  <Clock className="text-blue-400" size={24} />
                  Hvad sker der nu?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">1</div>
                    <div>
                      <p className="font-medium text-white mb-2">Book et møde</p>
                      <p className="text-sm text-gray-300">Vælg et tidspunkt der passer dig</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">2</div>
                    <div>
                      <p className="font-medium text-white mb-2">Diskutér dine behov</p>
                      <p className="text-sm text-gray-300">Jeg lytter og forstår dine mål</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">3</div>
                    <div>
                      <p className="font-medium text-white mb-2">Få et skræddersyet tilbud</p>
                      <p className="text-sm text-gray-300">Transparent pris og tidsplan</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Business Profile Integration - Moved below main content */}
            <div className="mt-16">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">Styrk din digitale tilstedeværelse</h2>
                <p className="text-xl text-gray-300">Professionelle løsninger til danske virksomheder</p>
              </div>
              <div className="max-w-4xl mx-auto">
                <GoogleBusinessIntegration />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;