import React from 'react';
import { Mail, Phone, MapPin, CheckCircle, Linkedin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import CalendlyWidget from './CalendlyWidget';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const { ref, isInView } = useInViewAnimation();

  return (
    <section
      id="contact" 
      ref={ref}
      className={`py-20 dynamic-bg-hero relative overflow-hidden transition-all duration-1000 ease-out ${
        isInView ? 'animate-on-scroll-visible' : 'animate-on-scroll-hidden'
      }`}
    >
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-8 right-8 w-52 h-52 bg-emerald-500/3 animate-morph-blob animate-delay-1s"></div>
        <div className="absolute bottom-8 left-8 w-44 h-44 bg-emerald-400/5 animate-morph-blob animate-delay-3s"></div>
        <div className="absolute top-1/3 left-1/3 w-36 h-36 bg-emerald-600/4 animate-morph-blob animate-delay-5s"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            {t('contact.title')}
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto animate-fade-in-up animate-delay-1s">
            {t('contact.subtitle')}
          </p>
        </div>

        {/* Calendly Booking Widget */}
        <div className="mb-16 animate-zoom-in animate-delay-2s">
          <div className="bg-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-700 max-w-4xl mx-auto hover-lift hover-glow hover-shimmer">
            <h3 className="text-2xl font-bold text-white mb-6 text-center animate-tada">
              {t('contact.bookMeeting')}
            </h3>
            <p className="text-gray-300 text-center mb-8 animate-fade-in-up animate-delay-3s">
              {t('contact.bookMeetingDesc')}
            </p>
            <CalendlyWidget className="rounded-lg overflow-hidden animate-fade-in-up animate-delay-4s" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center animate-slide-in-left animate-delay-5s">
          {/* Contact Info */}
          <div className="text-white">
            <div className="mb-8 animate-fade-in-up animate-delay-6s">
              <h3 className="text-xl font-bold text-white mb-6 animate-swing">{t('contact.whatYouGet')}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto animate-stagger">
                <div className="flex items-start justify-center md:justify-start hover-lift animate-fade-in-up animate-delay-7s">
                  <CheckCircle className="h-5 w-5 text-emerald-400 mr-3 flex-shrink-0 animate-pulse-glow" />
                  <span className="text-gray-300">{t('contact.automatedStrategy')}</span>
                </div>
                <div className="flex items-start justify-center md:justify-start hover-lift animate-fade-in-up animate-delay-8s">
                  <CheckCircle className="h-5 w-5 text-emerald-400 mr-3 flex-shrink-0 animate-pulse-glow" />
                  <span className="text-gray-300">{t('contact.continuousFlow')}</span>
                </div>
                <div className="flex items-start justify-center md:justify-start hover-lift animate-fade-in-up animate-delay-9s">
                  <CheckCircle className="h-5 w-5 text-emerald-400 mr-3 flex-shrink-0 animate-pulse-glow" />
                  <span className="text-gray-300">{t('contact.moreTime')}</span>
                </div>
                <div className="flex items-start justify-center md:justify-start hover-lift animate-fade-in-up animate-delay-10s">
                  <CheckCircle className="h-5 w-5 text-emerald-400 mr-3 flex-shrink-0 animate-pulse-glow" />
                  <span className="text-gray-300">{t('contact.lessStress')}</span>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="bg-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-700 max-w-2xl mx-auto hover-lift hover-glow hover-shimmer animate-zoom-in animate-delay-11s">
              <h3 className="text-2xl font-bold text-white mb-6 animate-tada">
                {t('contact.alternativeContact')}
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center justify-center hover-lift animate-fade-in-up animate-delay-12s">
                  <Phone className="h-6 w-6 text-emerald-400 mr-4 hover-rotate" />
                  <a 
                    href="tel:+4581731500" 
                    className="text-xl text-gray-300 hover:text-emerald-400 transition-colors duration-200 hover-scale hover-shimmer"
                  >
                    +45 81 73 15 00
                  </a>
                </div>
                
                <div className="flex items-center justify-center hover-lift animate-fade-in-up animate-delay-13s">
                  <Mail className="h-6 w-6 text-emerald-400 mr-4 hover-rotate" />
                  <a 
                    href="mailto:bastian@laisolutions.dk" 
                    className="text-xl text-gray-300 hover:text-emerald-400 transition-colors duration-200 hover-scale hover-shimmer"
                  >
                    bastian@laisolutions.dk
                  </a>
                </div>
                
                <div className="flex items-center justify-center hover-lift animate-fade-in-up animate-delay-14s">
                  <Linkedin className="h-6 w-6 text-emerald-400 mr-4 hover-rotate" />
                  <a 
                    href="https://www.linkedin.com/in/bastian-hansen-b012a1241/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl text-gray-300 hover:text-emerald-400 transition-colors duration-200 hover-scale hover-shimmer"
                  >
                    Bastian Hansen
                  </a>
                </div>
                
              </div>
              
              <p className="text-gray-400 text-center mt-6 animate-fade-in-up animate-delay-16s animate-wiggle">
                {t('contact.quickResponse')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;