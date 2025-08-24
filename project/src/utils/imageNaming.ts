// SEO-optimized image naming conventions and utilities

export interface ImageNamingConfig {
  businessName: string;
  location: string;
  services: string[];
}

const config: ImageNamingConfig = {
  businessName: 'leadstrom',
  location: 'danmark',
  services: ['hjemmesider', 'ai-chatbots', 'voice-agenter']
};

// Generate SEO-friendly filename
export const generateSEOImageName = (
  description: string,
  service?: string,
  location?: string,
  fileExtension: string = 'jpg'
): string => {
  const parts = [
    config.businessName,
    service || '',
    description,
    location || config.location
  ].filter(Boolean);

  return parts
    .join('-')
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, '') // Remove special characters
    .replace(/-+/g, '-') // Remove multiple hyphens
    .replace(/^-|-$/g, '') // Remove leading/trailing hyphens
    .substring(0, 60) // Limit length for SEO
    + '.' + fileExtension;
};

// Image naming examples for different services
export const imageNamingExamples = {
  homepage: {
    hero: generateSEOImageName('professionelle-digitale-loesninger'),
    services: generateSEOImageName('hjemmesider-ai-chatbots-voice-agenter'),
    testimonials: generateSEOImageName('kunde-anmeldelser-testimonials')
  },
  
  websites: {
    showcase: generateSEOImageName('responsive-hjemmeside-design', 'hjemmesider'),
    mobile: generateSEOImageName('mobil-venlig-hjemmeside', 'hjemmesider'),
    seo: generateSEOImageName('seo-optimeret-hjemmeside', 'hjemmesider'),
    ecommerce: generateSEOImageName('webshop-e-commerce-loesning', 'hjemmesider')
  },
  
  aiChatbots: {
    demo: generateSEOImageName('ai-chatbot-demo-samtale', 'ai-chatbots'),
    integration: generateSEOImageName('chatbot-crm-integration', 'ai-chatbots'),
    analytics: generateSEOImageName('chatbot-analytics-rapporter', 'ai-chatbots'),
    multilingual: generateSEOImageName('flersproget-ai-chatbot', 'ai-chatbots')
  },
  
  voiceAgents: {
    demo: generateSEOImageName('voice-ai-telefonopkald-demo', 'voice-agenter'),
    danish: generateSEOImageName('dansk-tale-voice-ai', 'voice-agenter'),
    business: generateSEOImageName('b2b-voice-agent-loesning', 'voice-agenter'),
    integration: generateSEOImageName('voice-ai-crm-integration', 'voice-agenter')
  },
  
  about: {
    founder: generateSEOImageName('phillip-grundlaegger-ekspert'),
    team: generateSEOImageName('leadstrom-team-eksperter'),
    office: generateSEOImageName('kontor-koebenhavn', '', 'koebenhavn')
  },
  
  contact: {
    booking: generateSEOImageName('booking-system-moede-aftale'),
    location: generateSEOImageName('kontakt-lokation', '', 'koebenhavn'),
    consultation: generateSEOImageName('gratis-konsultation-moede')
  }
};

// Alt text generator for better accessibility and SEO
export const generateAltText = (
  imageType: string,
  service?: string,
  context?: string
): string => {
  const templates = {
    hero: `Leadstrøm - Professionelle ${service || 'digitale løsninger'} til danske B2B virksomheder`,
    demo: `${service} demonstration - Sådan fungerer ${service} i praksis`,
    showcase: `Eksempel på ${service} udviklet af Leadstrøm til dansk virksomhed`,
    integration: `${service} integration med CRM og business systemer`,
    person: `${context} - Ekspert i ${service || 'digitale løsninger'} hos Leadstrøm`,
    location: `Leadstrøm kontor og mødelokaler i ${context || 'København'}`,
    process: `${service} udviklingsproces - Fra idé til færdig løsning`,
    results: `Resultater og ROI fra ${service} implementering`,
    comparison: `Sammenligning af ${service} funktioner og fordele`
  };

  return templates[imageType as keyof typeof templates] || 
         `Leadstrøm ${service || 'digitale løsninger'} - ${context || 'Professionel kvalitet'}`;
};

// Image compression recommendations
export const compressionSettings = {
  hero: { quality: 85, format: 'webp' },
  showcase: { quality: 80, format: 'webp' },
  thumbnail: { quality: 75, format: 'webp' },
  icon: { quality: 90, format: 'png' },
  logo: { quality: 100, format: 'svg' },
  background: { quality: 70, format: 'webp' }
};

// Responsive image sizes for different use cases
export const responsiveSizes = {
  hero: '(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px',
  showcase: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px',
  thumbnail: '(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 300px',
  avatar: '(max-width: 768px) 80px, 120px',
  logo: '(max-width: 768px) 150px, 200px'
};