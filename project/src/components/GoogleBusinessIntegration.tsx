import React from 'react';
import { Star, MapPin, Phone, Clock, ExternalLink } from 'lucide-react';

const GoogleBusinessIntegration: React.FC = () => {
  // This component provides guidance and integration suggestions for Google Business Profile
  // Note: Actual Google Business Profile setup must be done manually through Google Business Profile dashboard

  const googleBusinessSteps = [
    {
      step: 1,
      title: "Opret Google Business Profile",
      description: "Gå til Google Business Profile og opret din virksomhedsprofil",
      action: "Besøg business.google.com"
    },
    {
      step: 2,
      title: "Verificer din virksomhed",
      description: "Google vil sende en verifikationskode til din adresse",
      action: "Følg Googles verifikationsproces"
    },
    {
      step: 3,
      title: "Optimer din profil",
      description: "Tilføj billeder, beskrivelse, åbningstider og services",
      action: "Udfyld alle relevante felter"
    },
    {
      step: 4,
      title: "Bed om anmeldelser",
      description: "Opfordr tilfredse kunder til at efterlade anmeldelser",
      action: "Implementer anmeldelsesproces"
    }
  ];

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "LocalBusiness",
      "name": "Leadstrøm",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "København",
        "addressCountry": "DK"
      }
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": "Tilfreds Kunde"
    },
    "reviewBody": "Leadstrøm leverede en fantastisk hjemmeside og AI chatbot til vores virksomhed. Professionel service og hurtig levering."
  };

  return (
    <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
          <MapPin className="text-blue-400" size={24} />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white">Google Business Profile</h3>
          <p className="text-gray-400">Optimer din lokale synlighed</p>
        </div>
      </div>

      {/* Setup Steps */}
      <div className="space-y-4 mb-8">
        {googleBusinessSteps.map((item, index) => (
          <div key={index} className="flex items-start gap-4 p-4 bg-gray-900 rounded-lg border border-gray-600">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
              {item.step}
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-white mb-1">{item.title}</h4>
              <p className="text-gray-300 text-sm mb-2">{item.description}</p>
              <span className="text-blue-400 text-sm font-medium">{item.action}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Key Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="bg-gray-900 rounded-lg p-4 border border-gray-600">
          <div className="flex items-center gap-2 mb-2">
            <Star className="text-yellow-400" size={20} />
            <h4 className="font-semibold text-white">Anmeldelser</h4>
          </div>
          <p className="text-gray-300 text-sm">Saml positive anmeldelser for at opbygge tillid og forbedre din lokale ranking</p>
        </div>
        
        <div className="bg-gray-900 rounded-lg p-4 border border-gray-600">
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="text-blue-400" size={20} />
            <h4 className="font-semibold text-white">Lokal SEO</h4>
          </div>
          <p className="text-gray-300 text-sm">Vis op i lokale søgeresultater når folk søger efter dine services</p>
        </div>
        
        <div className="bg-gray-900 rounded-lg p-4 border border-gray-600">
          <div className="flex items-center gap-2 mb-2">
            <Phone className="text-green-400" size={20} />
            <h4 className="font-semibold text-white">Direkte kontakt</h4>
          </div>
          <p className="text-gray-300 text-sm">Kunder kan ringe direkte fra søgeresultaterne</p>
        </div>
        
        <div className="bg-gray-900 rounded-lg p-4 border border-gray-600">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="text-purple-400" size={20} />
            <h4 className="font-semibold text-white">Åbningstider</h4>
          </div>
          <p className="text-gray-300 text-sm">Vis dine åbningstider og tilgængelighed</p>
        </div>
      </div>

      {/* Review Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(reviewSchema, null, 2)
        }}
      />

      {/* CTA */}
      <div className="text-center">
        <a
          href="https://business.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors duration-300 font-medium"
        >
          Opret Google Business Profile
          <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
};

export default GoogleBusinessIntegration;