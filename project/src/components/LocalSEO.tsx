import React from 'react';

interface LocalSEOProps {
  businessName?: string;
  address?: string;
  city?: string;
  postalCode?: string;
  country?: string;
  phone?: string;
  email?: string;
  website?: string;
  description?: string;
  serviceArea?: string[];
  openingHours?: {
    dayOfWeek: string;
    opens: string;
    closes: string;
  }[];
}

const LocalSEO: React.FC<LocalSEOProps> = ({
  businessName = "Leadstrøm",
  address = "Danmark",
  city = "Danmark",
  postalCode = "",
  country = "DK",
  email = "kontakt@leadstrøm.dk",
  website = "https://leadstrom.dk",
  description = "Leadstrøm leverer skræddersyede hjemmesider, AI chat-agenter og voice agenter til danske B2B virksomheder. Vi betjener hele Danmark med fokus på kvalitet og personlig service.",
  serviceArea = ["København", "Aarhus", "Odense", "Aalborg", "Frederiksberg", "Gentofte", "Gladsaxe", "Lyngby-Taarbæk", "Hele Danmark"],
  openingHours = [
    { dayOfWeek: "Monday", opens: "09:00", closes: "17:00" },
    { dayOfWeek: "Tuesday", opens: "09:00", closes: "17:00" },
    { dayOfWeek: "Wednesday", opens: "09:00", closes: "17:00" },
    { dayOfWeek: "Thursday", opens: "09:00", closes: "17:00" },
    { dayOfWeek: "Friday", opens: "09:00", closes: "17:00" }
  ]
}) => {
  // Generate structured data for local business
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": website,
    "name": businessName,
    "description": description,
    "url": website,
    "email": email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address,
      "addressLocality": city,
      "postalCode": postalCode || undefined,
      "addressCountry": country
    },
    "areaServed": serviceArea.map(area => ({
      "@type": "City",
      "name": area
    })),
    "openingHoursSpecification": openingHours.map(hours => ({
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": `https://schema.org/${hours.dayOfWeek}`,
      "opens": hours.opens,
      "closes": hours.closes
    })),
    "sameAs": [
      // Add your social media profiles here when available
      // "https://www.facebook.com/leadstrom",
      // "https://www.linkedin.com/company/leadstrom"
    ],
    "priceRange": "15000-100000 DKK",
    "currenciesAccepted": "DKK",
    "paymentAccepted": "Bank Transfer, Invoice",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Leadstrøm Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Skræddersyede Hjemmesider",
            "description": "Moderne, responsive hjemmesider optimeret for SEO og konvertering"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Chat-agenter",
            "description": "Intelligente chatbots der automatiserer kundeservice og lead-kvalificering"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Voice Agenter",
            "description": "Avancerede stemme-AI'er der håndterer telefonopkald med naturlig dansk tale"
          }
        }
      ]
    }
  };

  // Professional service schema
  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": businessName,
    "description": description,
    "url": website,
    "email": email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address,
      "addressLocality": city,
      "postalCode": postalCode,
      "addressCountry": country
    },
    "areaServed": serviceArea,
    "serviceType": ["Web Development", "AI Development", "Digital Marketing"],
    "serviceType": ["Web Development", "AI Development", "Voice AI", "Digital Marketing"],
    "priceRange": "15000-100000 DKK"
  };

  // Organization schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": businessName,
    "description": description,
    "url": website,
    "email": email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address,
      "addressLocality": city,
      "postalCode": postalCode,
      "addressCountry": country
    },
    "founder": {
      "@type": "Person",
      "name": "Phillip",
      "jobTitle": "Grundlægger & Udvikler"
    },
    "foundingDate": "2024",
    "knowsAbout": [
      "Web Development",
      "AI Development",
      "Voice AI",
      "Danish Speech Recognition",
      "B2B Lead Generation",
      "Customer Service Automation",
      "Digital Marketing",
      "SEO",
      "AI Chatbots",
      "Voice Agents",
      "CRM Integration",
      "React",
      "TypeScript",
      "Supabase"
    ]
  };

  return (
    <>
      {/* Local Business Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema, null, 2)
        }}
      />
      
      {/* Professional Service Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema, null, 2)
        }}
      />
      
      {/* Organization Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema, null, 2)
        }}
      />
    </>
  );
};

export default LocalSEO;