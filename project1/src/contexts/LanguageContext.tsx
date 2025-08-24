import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'da' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  da: {
    // Common
    'common.language': 'da',
    'common.backToHome': 'Tilbage til forsiden',
    'common.contactToday': 'Kontakt os i dag',

    // Header
    'header.service': 'Tjenester',
    'header.aiAgents': 'AI Agenter',
    'header.aiAgentsDesc': 'Intelligente assistenter der automatiserer arbejdsprocesser',
    'header.leadGeneration': 'Automatiseret Leadgenerering',
    'header.leadGenerationDesc': 'Systematisk identifikation og kontakt til potentielle kunder',
    'header.appointmentSetter': 'Automatiseret Mødebooking',
    'header.appointmentSetterDesc': 'Automatisk booking af møder med potentielle kunder',
    'header.home': 'Hjem',
    'header.cases': 'Cases',
    'header.about': 'Om os',
    'header.reviews': 'Anmeldelser',
    'header.contact': 'Kontakt',

    // Hero
    'hero.subtitle': 'Få kontinuerligt flow af kunder uden stress og fokuser på det du elsker',
    'hero.cta': 'Book gratis konsultation',
    'hero.calendarTitle': 'Din kalender i dag',
    'hero.meetingPotential': 'Møde med potentiel kunde',
    'hero.salesMeeting': 'Salgsmøde',
    'hero.followUpMeeting': 'Opfølgningsmøde',
    'hero.autoBooked': 'Automatisk booket',
    'hero.meetingsThisMonth': 'Møder denne måned',
    'hero.leadsGenerated': 'Leads genereret',

    // Service/Benefits
    'service.title': 'Vores Tjenester',
    'service.subtitle': 'Vi tilbyder skræddersyede løsninger til automatisering af din mødebooking og leadgenerering',
    'service.aiAgents': 'AI Agenter',
    'service.aiAgentsDesc': 'Intelligente assistenter der automatiserer arbejdsprocesser og håndterer kundeinteraktioner 24/7',
    'service.leadGeneration': 'Automatiseret Leadgenerering',
    'service.leadGenerationDesc': 'Systematisk identifikation og kontakt til potentielle kunder gennem automatiserede kampagner',
    'service.appointmentSetter': 'Automatiseret Mødebooking',
    'service.appointmentSetterDesc': 'Automatisk booking af møder med kvalificerede potentielle kunder',
    'service.readMore': 'Læs mere →',
    'service.benefit1Title': 'Fokuser på det du elsker',
    'service.benefit1Desc': 'Spar tid på manuel prospektering og brug energien på at lukke deals og udvikle din forretning',
    'service.benefit2Title': 'Undgå unødvendige omkostninger',
    'service.benefit2Desc': 'Reducer behovet for dyre marketingkampagner og eksterne konsulenter',
    'service.benefit3Title': 'Kontinuerligt flow af kunder',
    'service.benefit3Desc': 'Få en stabil strøm af kvalificerede leads uden konstant manuel indsats',

    // Results
    'results.title': 'Resultater der taler for sig selv',
    'results.higherCloseRate': 'Højere lukningsrate',
    'results.higherCloseRateDesc': 'Gennemsnitlig forbedring i konvertering',
    'results.meetingsFirstMonth': 'Møder første måned',
    'results.meetingsFirstMonthDesc': 'Gennemsnitligt antal bookede møder',
    'results.satisfaction': 'Kundetilfredshed',
    'results.satisfactionDesc': 'Af vores kunder anbefaler os videre',
    'results.caseStudyTitle': 'Case Study: SMV i Teknologi',
    'results.caseStudySubtitle': 'Resultater efter 30 dage',
    'results.caseStudyMeetings': 'Bookede møder',
    'results.caseStudyStrategy': 'Med automatiseret outreach strategi',
    'results.resultsAfter': 'Resultater efter implementering:',
    'results.qualifiedMeetings': '18 kvalificerede møder booket automatisk',
    'results.automatedProcess': 'Fuldt automatiseret prospekteringsprocess',
    'results.moreTime': 'Mere tid til kerneforretnig og produktudvikling',
    'results.higherQuality': 'Højere kvalitet af indkommende leads',

    // Testimonials
    'testimonials.title': 'Hvad siger vores kunder?',
    'testimonials.additionalTitle': 'Tillid og resultater',
    'testimonials.additionalText1': 'Vores kunder oplever gennemsnitligt en stigning på 35% i deres lukningsrate inden for de første 3 måneder.',
    'testimonials.additionalText2': 'Vi er stolte af at have hjulpet over 50+ virksomheder med at automatisere deres mødebooking og skabe mere tid til det, de elsker.',

    // Process
    'process.heroTitle': 'Sådan transformerer vi din forretning',
    'process.heroSubtitle': 'En systematisk tilgang til at automatisere din mødebooking og skabe kontinuerligt flow af kunder',
    'process.transformTitle': 'Fra manuel prospektering til automatiseret succes',
    'process.autoProspecting': 'Automatisk prospektering',
    'process.autoProspectingDesc': 'Vi identificerer og kontakter potentielle kunder baseret på dine specifikke kriterier',
    'process.smartAutomation': 'Smart automatisering',
    'process.smartAutomationDesc': 'Personaliserede beskeder og opfølgning der føles ægte og professionel',
    'process.filledCalendar': 'Fyldt kalender',
    'process.filledCalendarDesc': 'Kvalificerede møder booket direkte i din kalender uden manuel indgriben',
    'process.continuousFlowTitle': 'Kontinuerligt flow',
    'process.continuousFlowDesc': 'Stabil strøm af nye muligheder der holder din pipeline fyldt',
    'process.beforeAfterTitle': 'Før vs. Efter',
    'process.before': 'Før',
    'process.beforeDesc': '80% af tiden brugt på at finde og kontakte potentielle kunder manuelt',
    'process.after': 'Efter',
    'process.afterDesc': '80% af tiden brugt på at lukke deals og udvikle forretningen',
    'process.readyTitle': 'Klar til at transformere din forretning?',
    'process.readyDesc': 'Lad os hjælpe dig med at skabe det kontinuerlige flow af kunder, du har drømt om',
    'process.contactUsToday': 'Kontakt os i dag',

    // Contact
    'contact.title': 'Klar til at komme i gang?',
    'contact.subtitle': 'Book en gratis konsultation og lad os vise dig, hvordan vi kan automatisere din appointment setting og skabe kontinuerligt flow af kunder til din forretning.',
    'contact.bookMeeting': 'Book dit gratis møde her',
    'contact.bookMeetingDesc': 'Vælg et tidspunkt der passer dig, og lad os tale om dine behov',
    'contact.whatYouGet': 'Hvad får du?',
    'contact.automatedStrategy': 'Skræddersyet automatiseret strategi',
    'contact.continuousFlow': 'Kontinuerligt flow af kvalificerede leads',
    'contact.moreTime': 'Mere tid til det du elsker',
    'contact.lessStress': 'Mindre stress og mere forudsigelig indtjening',
    'contact.alternativeContact': 'Eller kontakt os direkte',
    'contact.quickResponse': 'Vi svarer inden for 24 timer',

    // About
    'about.title': 'Hvem er Lai Solutions?',
    'about.description1': 'Lai Solutions er grundlagt af Bastian Hansen, som har siddet som sælger de sidste mange år. Virksomheden er startet for at hjælpe SMV\'er med at få et kontinuerligt flow af kunder i forretningen uden at man som virksomhedsejer skal bruge flere timer om dagen på at skaffe ny forretning.',
    'about.description2': 'Lai Solutions fylder et hul i markedet blandt virksomhedsejere og sælgere, da man ikke længere behøver at bruge 80% af sin dag på at ringe kold canvas, men faktisk har muligheden for at læne sig tilbage og bruge sin tid på det man brænder for.',
    'about.focusSME': 'Fokus på SMV\'er',
    'about.focusSMEDesc': 'Specialiseret i at hjælpe små og mellemstore virksomheder',
    'about.continuousFlow': 'Kontinuerligt flow',
    'about.continuousFlowDesc': 'Sikrer et stabilt flow af potentielle kunder',
    'about.experiencedFounder': 'Erfaren grundlægger',
    'about.experiencedFounderDesc': 'Bastian Hansen med mange års salgserfaring',
    'about.smvSpecialistTitle': 'SMV',
    'about.smvSpecialistSubtitle': 'Specialist',

    // About Page
    'aboutPage.heroTitle': 'Om Lai Solutions',
    'aboutPage.heroSubtitle': 'Vi hjælper SMV\'er med at automatisere deres appointment setting og skabe kontinuerligt flow af kunder',
    'aboutPage.missionTitle': 'Vores Mission',
    'aboutPage.missionDesc': 'At hjælpe små og mellemstore virksomheder med at automatisere deres salgsprocesser, så de kan fokusere på det de elsker - at levere værdi til deres kunder og udvikle deres forretning.',
    'aboutPage.visionTitle': 'Vores Vision',
    'aboutPage.visionDesc': 'En verden hvor virksomhedsejere ikke behøver at bruge 80% af deres tid på manuel prospektering, men kan fokusere på innovation, kundeservice og forretningsudvikling.',
    'aboutPage.whyChooseTitle': 'Hvorfor vælge os?',
    'aboutPage.experience': 'Erfaring',
    'aboutPage.experienceDesc': 'Mange års erfaring inden for salg og automatisering',
    'aboutPage.specialization': 'Specialisering',
    'aboutPage.specializationDesc': 'Fokuseret udelukkende på SMV\'er og deres unikke behov',
    'aboutPage.results': 'Resultater',
    'aboutPage.resultsDesc': 'Dokumenterede resultater og tilfredse kunder',

    // AI Agents Page
    'aiAgentsPage.benefitsTitle': 'Fordele ved AI Agenter',
    'aiAgentsPage.benefit1': 'Automatiserer gentagne opgaver: Frigør tid til strategisk arbejde ved at lade AI\'en håndtere rutineopgaver.',
    'aiAgentsPage.benefit2': 'Arbejder 24/7: Dine AI-agenter arbejder døgnet rundt uden pauser eller fridage.',
    'aiAgentsPage.benefit3': 'Skalerbar løsning: Håndterer flere opgaver samtidig uden at kvaliteten lider.',
    'aiAgentsPage.benefit4': 'Integrerer med eksisterende systemer: Fungerer problemfrit med jeres nuværende software og processer.',
    'aiAgentsPage.benefit5': 'Livstids support: Vi leverer kontinuerlig support og opdateringer til jeres AI-agenter.',
    'aiAgentsPage.supportTitle': 'Livstids Support Inkluderet',
    'aiAgentsPage.supportDescription': 'Vi leverer livstids support til alle vores AI-agenter. Det betyder kontinuerlige opdateringer, fejlrettelser og tilpasninger efter behov.',
    'aiAgentsPage.supportPricing': 'Support og vedligeholdelse er inkluderet i prisen - ingen skjulte omkostninger.',
    'aiAgentsPage.ctaTitle': 'Klar til at få din egen AI Agent?',
    'aiAgentsPage.ctaDescription': 'Lad os hjælpe dig med at automatisere dine arbejdsprocesser med intelligente AI-agenter.',

    // Footer
'footer.description': 'Automatiser din møde booking og fokuser på det du elsker',
    'footer.services': 'Tjenester',
    'footer.quickLinks': 'Hurtige Links',
    'footer.termsOfService': 'Handelsbetingelser',
    'footer.privacyPolicy': 'Privatlivspolitik',
    'footer.cookiePolicy': 'Cookiepolitik',
    'footer.cookieSettings': 'Cookie-indstillinger',
    'footer.allRightsReserved': 'Alle rettigheder forbeholdes',
    'footer.registeredInDenmark': 'Registreret i Danmark',

    // Legal pages
    'terms.title': 'Handelsbetingelser',
    'privacy.title': 'Privatlivspolitik',
    'cookies.title': 'Cookiepolitik',

    // Cookie Banner
    'cookies.bannerTitle': 'Vi bruger cookies',
    'cookies.bannerDescription': 'Vi bruger cookies til at forbedre din oplevelse på vores hjemmeside og til at analysere trafik.',
    'cookies.learnMore': 'Læs mere',
    'cookies.settings': 'Indstillinger',
    'cookies.acceptNecessary': 'Accepter nødvendige',
    'cookies.acceptAll': 'Accepter alle',
    'cookies.settingsTitle': 'Cookie Indstillinger',
    'cookies.necessary': 'Nødvendige Cookies',
    'cookies.necessaryDescription': 'Disse cookies er nødvendige for hjemmesidens grundlæggende funktioner',
    'cookies.analytics': 'Analyse Cookies',
    'cookies.analyticsDescription': 'Hjælper os med at forstå hvordan besøgende bruger hjemmesiden',
    'cookies.functional': 'Funktionelle Cookies',
    'cookies.functionalDescription': 'Gør det muligt for hjemmesiden at huske dine valg og præferencer',
    'cookies.marketing': 'Marketing Cookies',
    'cookies.marketingDescription': 'Bruges til at vise relevante annoncer og måle kampagneeffektivitet',
    'cookies.savePreferences': 'Gem præferencer',
    'cookies.consentRequired': 'Samtykke påkrævet',
    'cookies.functionalRequired': 'For at bruge booking systemet skal du acceptere funktionelle cookies.',
    'cookies.openSettings': 'Åbn indstillinger',

    // Testimonials
    'testimonials.frederikJensen': 'Fantastisk oplevelse med produkt og service. Meget effektivt og super nemt at administrere, sætte op osv. og har virkelig hjulpet med at tiltrække kunder',
    'testimonials.lucasHjorth': 'Utrolig godt stykke arbejde med resultater bedre end forventet',
    'testimonials.philipJohnsen': 'Godt produkt og virkelig god service! Skaber gode resultater, virkelig noget jeg kan anbefale andre!',
    'testimonials.sebastianJones': 'Meget professionel oplevelse, og de er altid klar til at hjælpe mig hvis der er nogle problemer eller ændringer jeg har behov for.',
    'testimonials.saraThomsen': 'Extremely good',
    'testimonials.carstenDalgaard1': 'Har hjulpet mig rigtig meget med, at få flere kunder i forretningen. Kan varmt anbefales.',
    'testimonials.carstenDalgaard2': 'Yderst professionelt appointment setting service. Efter lang og forgæves tid med andre appointment settere og eksterne marketings personer, fik jeg endelig det jeg søgte hos Lai Solutions. Kan stærkt anbefales'
  },
  en: {
    // Common
    'common.language': 'en',
    'common.backToHome': 'Back to home',
    'common.contactToday': 'Contact us today',

    // Header
    'header.service': 'Services',
    'header.aiAgents': 'AI Agents',
    'header.aiAgentsDesc': 'Intelligent assistants that automate work processes',
    'header.leadGeneration': 'Automated Lead Generation',
    'header.leadGenerationDesc': 'Systematic identification and contact with potential customers',
    'header.appointmentSetter': 'Automated Appointment Setter',
    'header.appointmentSetterDesc': 'Automatic booking of meetings with potential customers',
    'header.home': 'Home',
    'header.cases': 'Cases',
    'header.about': 'About',
    'header.reviews': 'Reviews',
    'header.contact': 'Contact',

    // Hero
    'hero.subtitle': 'Get continuous flow of customers without stress and focus on what you love',
    'hero.cta': 'Book free consultation',
    'hero.calendarTitle': 'Your calendar today',
    'hero.meetingPotential': 'Meeting with potential customer',
    'hero.salesMeeting': 'Sales meeting',
    'hero.followUpMeeting': 'Follow-up meeting',
    'hero.autoBooked': 'Automatically booked',
    'hero.meetingsThisMonth': 'Meetings this month',
    'hero.leadsGenerated': 'Leads generated',

    // Service/Benefits
    'service.title': 'Our Services',
    'service.subtitle': 'We offer customized solutions for automating your appointment setter and lead generation',
    'service.aiAgents': 'AI Agents',
    'service.aiAgentsDesc': 'Intelligent assistants that automate work processes and handle customer interactions 24/7',
    'service.leadGeneration': 'Automated Lead Generation',
    'service.leadGenerationDesc': 'Systematic identification and contact with potential customers through automated campaigns',
    'service.appointmentSetter': 'Automated Appointment Setter',
    'service.appointmentSetterDesc': 'Automatic booking of meetings with qualified potential customers',
    'service.readMore': 'Read more →',
    'service.benefit1Title': 'Focus on what you love',
    'service.benefit1Desc': 'Save time on manual prospecting and use energy to close deals and develop your business',
    'service.benefit2Title': 'Avoid unnecessary costs',
    'service.benefit2Desc': 'Reduce the need for expensive marketing campaigns and external consultants',
    'service.benefit3Title': 'Continuous flow of customers',
    'service.benefit3Desc': 'Get a stable stream of qualified leads without constant manual effort',

    // Results
    'results.title': 'Results that speak for themselves',
    'results.higherCloseRate': 'Higher close rate',
    'results.higherCloseRateDesc': 'Average improvement in conversion',
    'results.meetingsFirstMonth': 'Meetings first month',
    'results.meetingsFirstMonthDesc': 'Average number of booked meetings',
    'results.satisfaction': 'Customer satisfaction',
    'results.satisfactionDesc': 'Of our customers recommend us',
    'results.caseStudyTitle': 'Case Study: SME in Technology',
    'results.caseStudySubtitle': 'Results after 30 days',
    'results.caseStudyMeetings': 'Booked meetings',
    'results.caseStudyStrategy': 'With automated outreach strategy',
    'results.resultsAfter': 'Results after implementation:',
    'results.qualifiedMeetings': '11 qualified meetings booked automatically',
    'results.automatedProcess': 'Fully automated prospecting process',
    'results.moreTime': 'More time for core business and product development',
    'results.higherQuality': 'Higher quality of incoming leads',

    // Testimonials
    'testimonials.title': 'What do our customers say?',
    'testimonials.additionalTitle': 'Trust and results',
    'testimonials.additionalText1': 'Our customers experience an average increase of 35% in their close rate within the first 3 months.',
    'testimonials.additionalText2': 'We are proud to have helped over 50+ companies implement automated appointment setters and create more time for what they love.',

    // Process
    'process.heroTitle': 'How we transform your business',
    'process.heroSubtitle': 'A systematic approach to automating your appointment setter and creating a continuous flow of customers',
    'process.transformTitle': 'From manual prospecting to automated success',
    'process.autoProspecting': 'Automatic prospecting',
    'process.autoProspectingDesc': 'We identify and contact potential customers based on your specific criteria',
    'process.smartAutomation': 'Smart automation',
    'process.smartAutomationDesc': 'Personalized messages and follow-up that feels genuine and professional',
    'process.filledCalendar': 'Filled calendar',
    'process.filledCalendarDesc': 'Qualified meetings booked directly in your calendar without manual intervention',
    'process.continuousFlowTitle': 'Continuous flow',
    'process.continuousFlowDesc': 'Stable stream of new opportunities that keeps your pipeline filled',
    'process.beforeAfterTitle': 'Before vs. After',
    'process.before': 'Before',
    'process.beforeDesc': '80% of time spent finding and contacting potential customers manually',
    'process.after': 'After',
    'process.afterDesc': '80% of time spent closing deals and developing the business',
    'process.readyTitle': 'Ready to transform your business?',
    'process.readyDesc': 'Let us help you create the continuous flow of customers you have dreamed of',
    'process.contactUsToday': 'Contact us today',

    // Contact
    'contact.title': 'Ready to get started?',
    'contact.subtitle': 'Book a free consultation and let us show you how we can automate your appointment setting and create continuous flow of customers for your business.',
    'contact.bookMeeting': 'Book your free meeting here',
    'contact.bookMeetingDesc': 'Choose a time that suits you, and let us talk about your needs',
    'contact.whatYouGet': 'What do you get?',
    'contact.automatedStrategy': 'Customized automated strategy',
    'contact.continuousFlow': 'Continuous flow of qualified leads',
    'contact.moreTime': 'More time for what you love',
    'contact.lessStress': 'Less stress and more predictable income',
    'contact.alternativeContact': 'Or contact us directly',
    'contact.quickResponse': 'We respond within 24 hours',

    // About
    'about.title': 'Who is Lai Solutions?',
    'about.description1': 'Lai Solutions is founded by Bastian Hansen, who has worked as a salesperson for many years. The company was started to help SMEs get a continuous flow of customers in the business without the business owner having to spend several hours a day acquiring new business.',
    'about.description2': 'Lai Solutions fills a gap in the market among business owners and salespeople, as you no longer need to spend 80% of your day making cold calls, but actually have the opportunity to lean back and use your time on what you are passionate about.',
    'about.focusSME': 'Focus on SMEs',
    'about.focusSMEDesc': 'Specialized in helping small and medium-sized enterprises',
    'about.continuousFlow': 'Continuous flow',
    'about.continuousFlowDesc': 'Ensures a stable flow of potential customers',
    'about.experiencedFounder': 'Experienced founder',
    'about.experiencedFounderDesc': 'Bastian Hansen with many years of sales experience',
    'about.smvSpecialistTitle': 'SME',
    'about.smvSpecialistSubtitle': 'Specialist',

    // About Page
    'aboutPage.heroTitle': 'About Lai Solutions',
    'aboutPage.heroSubtitle': 'We help SMEs automate their appointment setting and create continuous flow of customers',
    'aboutPage.missionTitle': 'Our Mission',
    'aboutPage.missionDesc': 'To help small and medium-sized enterprises automate their sales processes, so they can focus on what they love - delivering value to their customers and developing their business.',
    'aboutPage.visionTitle': 'Our Vision',
    'aboutPage.visionDesc': 'A world where business owners do not need to spend 80% of their time on manual prospecting, but can focus on innovation, customer service and business development.',
    'aboutPage.whyChooseTitle': 'Why choose us?',
    'aboutPage.experience': 'Experience',
    'aboutPage.experienceDesc': 'Many years of experience in sales and automation',
    'aboutPage.specialization': 'Specialization',
    'aboutPage.specializationDesc': 'Focused exclusively on SMEs and their unique needs',
    'aboutPage.results': 'Results',
    'aboutPage.resultsDesc': 'Documented results and satisfied customers',

    // AI Agents Page
    'aiAgentsPage.benefitsTitle': 'Benefits of AI Agents',
    'aiAgentsPage.benefit1': 'Automates repetitive tasks: Frees up time for strategic work by letting AI handle routine tasks.',
    'aiAgentsPage.benefit2': 'Works 24/7: Your AI agents work around the clock without breaks or holidays.',
    'aiAgentsPage.benefit3': 'Scalable solution: Handles multiple tasks simultaneously without compromising quality.',
    'aiAgentsPage.benefit4': 'Integrates with existing systems: Works seamlessly with your current software and processes.',
    'aiAgentsPage.benefit5': 'Lifetime support: We provide continuous support and updates for your AI agents.',
    'aiAgentsPage.supportTitle': 'Lifetime Support Included',
    'aiAgentsPage.supportDescription': 'We provide lifetime support for all our AI agents. This means continuous updates, bug fixes and adjustments as needed.',
    'aiAgentsPage.supportPricing': 'Support and maintenance are included in the price - no hidden costs.',
    'aiAgentsPage.ctaTitle': 'Ready to get your own AI Agent?',
    'aiAgentsPage.ctaDescription': 'Let us help you automate your work processes with intelligent AI agents.',

    // Footer
    'footer.description': 'Automate your appointment setter and focus on what you love',
    'footer.description': 'Automate your appointment setting and focus on what you love',
    'footer.services': 'Services',
    'footer.quickLinks': 'Quick Links',
    'footer.termsOfService': 'Terms of Service',
    'footer.privacyPolicy': 'Privacy Policy',
    'footer.cookiePolicy': 'Cookie Policy',
    'footer.cookieSettings': 'Cookie Settings',
    'footer.allRightsReserved': 'All rights reserved',
    'footer.registeredInDenmark': 'Registered in Denmark',

    // Legal pages
    'terms.title': 'Terms of Service',
    'privacy.title': 'Privacy Policy',
    'cookies.title': 'Cookie Policy',

    // Cookie Banner
    'cookies.bannerTitle': 'We use cookies',
    'cookies.bannerDescription': 'We use cookies to improve your experience on our website and to analyze traffic.',
    'cookies.learnMore': 'Learn more',
    'cookies.settings': 'Settings',
    'cookies.acceptNecessary': 'Accept necessary',
    'cookies.acceptAll': 'Accept all',
    'cookies.settingsTitle': 'Cookie Settings',
    'cookies.necessary': 'Necessary Cookies',
    'cookies.necessaryDescription': 'These cookies are necessary for the website\'s basic functions',
    'cookies.analytics': 'Analytics Cookies',
    'cookies.analyticsDescription': 'Help us understand how visitors use the website',
    'cookies.functional': 'Functional Cookies',
    'cookies.functionalDescription': 'Enable the website to remember your choices and preferences',
    'cookies.marketing': 'Marketing Cookies',
    'cookies.marketingDescription': 'Used to show relevant ads and measure campaign effectiveness',
    'cookies.savePreferences': 'Save preferences',
    'cookies.consentRequired': 'Consent required',
    'cookies.functionalRequired': 'To use the booking system, you must accept functional cookies.',
    'cookies.openSettings': 'Open settings',

    // Testimonials
    'testimonials.frederikJensen': 'Fantastic experience with product and service. Very efficient and super easy to manage, set up etc. and has really helped attract customers',
    'testimonials.lucasHjorth': 'Incredibly good piece of work with results better than expected',
    'testimonials.philipJohnsen': 'Good product and really good service! Creates good results, really something I can recommend to others!',
    'testimonials.sebastianJones': 'Very professional experience, and they are always ready to help me if there are any problems or changes I need.',
    'testimonials.saraThomsen': 'Extremely good',
    'testimonials.carstenDalgaard1': 'Has helped me a lot with getting more customers in the business. Can be warmly recommended.',
    'testimonials.carstenDalgaard2': 'Extremely professional appointment setting service. After a long and futile time with other appointment setters and external marketing people, I finally got what I was looking for at Lai Solutions. Highly recommended'
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('da');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'da' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{
      language,
      setLanguage: handleSetLanguage,
      t
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};