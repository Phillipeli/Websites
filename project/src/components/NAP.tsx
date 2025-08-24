import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

interface NAPProps {
  variant?: 'header' | 'footer' | 'contact' | 'inline';
  showIcons?: boolean;
  className?: string;
}

// Centralized NAP data - CRITICAL: Keep this consistent across all pages
export const NAP_DATA = {
  businessName: "Leadstrøm",
  address: "Danmark",
  email: "kontakt@leadstrøm.dk",
  website: "https://leadstrom.dk",
  serviceAreas: [
    "København",
    "Frederiksberg", 
    "Gentofte",
    "Gladsaxe",
    "Lyngby-Taarbæk",
    "Aarhus",
    "Odense",
    "Aalborg",
    "Hele Danmark"
  ],
  openingHours: {
    weekdays: "Mandag - Fredag: 09:00 - 17:00",
    weekend: "Weekend: Efter aftale"
  }
};

const NAP: React.FC<NAPProps> = ({ 
  variant = 'inline', 
  showIcons = true, 
  className = '' 
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'header':
        return 'text-sm text-gray-300';
      case 'footer':
        return 'text-sm text-gray-400';
      case 'contact':
        return 'text-base text-gray-300';
      default:
        return 'text-sm text-gray-300';
    }
  };

  const iconSize = variant === 'contact' ? 20 : 16;

  return (
    <div className={`${getVariantStyles()} ${className}`}>
      {/* Business Name */}
      <div className="font-semibold text-white mb-2">
        {NAP_DATA.businessName}
      </div>

      {/* Address */}
      <div className="flex items-center gap-2 mb-2">
        {showIcons && <MapPin size={iconSize} className="flex-shrink-0" />}
        <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
          <span itemProp="addressLocality">{NAP_DATA.address}</span>
        </span>
      </div>


      {/* Email */}
      <div className="flex items-center gap-2 mb-2">
        {showIcons && <Mail size={iconSize} className="flex-shrink-0" />}
        <a 
          href={`mailto:${NAP_DATA.email}`}
          className="hover:text-blue-400 transition-colors duration-300"
          itemProp="email"
        >
          {NAP_DATA.email}
        </a>
      </div>

      {/* Opening Hours (only for contact variant) */}
      {variant === 'contact' && (
        <div className="flex items-start gap-2 mt-4">
          <Clock size={iconSize} className="flex-shrink-0 mt-0.5" />
          <div>
            <div className="font-medium text-white mb-1">Åbningstider:</div>
            <div className="text-sm">{NAP_DATA.openingHours.weekdays}</div>
            <div className="text-sm">{NAP_DATA.openingHours.weekend}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NAP;