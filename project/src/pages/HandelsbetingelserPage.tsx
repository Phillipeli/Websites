import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const HandelsbetingelserPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <main className="pt-20 bg-gray-50 min-h-screen relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-emerald-500/3 animate-morph-blob animate-delay-2s"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-emerald-400/4 animate-morph-blob animate-delay-4s"></div>
        <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-emerald-600/3 animate-morph-blob animate-delay-6s"></div>
        <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-emerald-300/4 animate-morph-blob animate-delay-1s"></div>
        
        {/* Floating particles */}
        <div className="absolute top-0 left-1/6 w-1 h-1 bg-emerald-400/30 rounded-full animate-particle-float"></div>
        <div className="absolute top-0 right-1/6 w-1.5 h-1.5 bg-emerald-300/25 rounded-full animate-particle-float animate-delay-3s"></div>
        <div className="absolute top-0 left-5/6 w-1 h-1 bg-emerald-500/20 rounded-full animate-particle-float animate-delay-5s"></div>
      </div>
      
      {/* Back Navigation */}
      <div className="bg-gray-800 py-4 relative">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-4 w-32 h-32 bg-emerald-500/8 animate-morph-blob animate-delay-1s"></div>
          <div className="absolute top-0 right-4 w-28 h-28 bg-emerald-400/6 animate-morph-blob animate-delay-3s"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            {t('common.backToHome')}
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          {t('terms.title')}
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
          <div className="text-sm text-gray-600 mb-6">
            <p><strong>Sidst opdateret:</strong> {new Date().toLocaleDateString('da-DK')}</p>
            <p><strong>Gældende fra:</strong> {new Date().toLocaleDateString('da-DK')}</p>
          </div>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Virksomhedsoplysninger</h2>
            <div className="space-y-2 text-gray-700">
              <p><strong>Virksomhedsnavn:</strong> Lai Solutions</p>
              <p><strong>Indehaver:</strong> Bastian Hansen</p>
              <p><strong>E-mail:</strong> bastian@laisolutions.dk</p>
              <p><strong>Telefon:</strong> +45 81 73 15 00</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Anvendelsesområde</h2>
            <p className="text-gray-700 leading-relaxed">
              Disse handelsbetingelser gælder for alle aftaler mellem Lai Solutions og kunden om levering af 
              automatiseret mødebooking, AI-agenter, leadgenerering og relaterede tjenester. Ved accept af 
              tilbud eller igangsætning af samarbejde accepterer kunden disse betingelser.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Tjenester</h2>
            <div className="space-y-4 text-gray-700">
              <h3 className="text-lg font-semibold">3.1 AI Agenter</h3>
              <p>
                Vi udvikler og implementerer skræddersyede AI-agenter til automatisering af arbejdsprocesser. 
                Tjenesten inkluderer opsætning, integration og livstids support.
              </p>
              
              <h3 className="text-lg font-semibold">3.2 Automatiseret Leadgenerering</h3>
              <p>
                Systematisk identifikation og kontakt til potentielle kunder gennem automatiserede outreach 
                kampagner. Pris: 4.000-7.000 kr./måned afhængig af branche og volumen.
              </p>
              
              <h3 className="text-lg font-semibold">3.3 Mødebooking</h3>
              <p>
                Automatiseret mødebooking service der håndterer prospektering, kvalificering og booking af møder.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Priser og Betaling</h2>
            <div className="space-y-4 text-gray-700">
              <h3 className="text-lg font-semibold">4.1 Priser</h3>
              <p>
                Alle priser er angivet i danske kroner (DKK) eksklusiv moms, medmindre andet er angivet. 
                Priser kan ændres med 30 dages varsel.
              </p>
              
              <h3 className="text-lg font-semibold">4.2 Betaling</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Månedlige abonnementer faktureres forud</li>
                <li>Betalingsfrist: 8 dage netto</li>
                <li>Ved forsinket betaling påløber renter i henhold til renteloven</li>
                <li>Manglende betaling kan medføre suspension af tjenester</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Kundens Forpligtelser</h2>
            <div className="space-y-2 text-gray-700">
              <p>Kunden forpligter sig til at:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Levere nødvendige informationer og adgang til systemer</li>
                <li>Overholde gældende lovgivning ved brug af tjenesterne</li>
                <li>Ikke misbruge tjenesterne til spam eller ulovlige aktiviteter</li>
                <li>Respektere tredjeparters rettigheder</li>
                <li>Betale rettidigt i henhold til faktura</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Databeskyttelse og GDPR</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Lai Solutions er databehandler for kundens persondata i forbindelse med levering af tjenester. 
                Vi overholder GDPR og dansk databeskyttelseslovgivning.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Persondata behandles kun til det aftalte formål</li>
                <li>Data opbevares sikkert og kun så længe det er nødvendigt</li>
                <li>Kunden har ret til indsigt, rettelse og sletning af data</li>
                <li>Databrud rapporteres inden 72 timer</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Opsigelse</h2>
            <div className="space-y-4 text-gray-700">
              <h3 className="text-lg font-semibold">7.1 Kundens opsigelse</h3>
              <p>
                Månedlige abonnementer kan opsiges med 30 dages varsel til udgangen af en måned. 
                Opsigelse skal ske skriftligt til kontakt@laisolutions.dk.
              </p>
              
              <h3 className="text-lg font-semibold">7.2 Lai Solutions' opsigelse</h3>
              <p>
                Vi kan opsige aftalen med 30 dages varsel ved misligholdelse eller ved ophør af forretning.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Ansvar og Begrænsninger</h2>
            <div className="space-y-4 text-gray-700">
              <h3 className="text-lg font-semibold">8.1 Tjenesteydeansvar</h3>
              <p>
                Lai Solutions leverer tjenester efter bedste evne, men kan ikke garantere specifikke resultater 
                som antal møder eller leads. Vi stræber efter høj oppetid, men kan ikke garantere 100% tilgængelighed.
              </p>
              
              <h3 className="text-lg font-semibold">8.2 Ansvarsbegrænsning</h3>
              <p>
                Lai Solutions' samlede ansvar er begrænset til det beløb, kunden har betalt for tjenesten 
                i de seneste 12 måneder. Vi er ikke ansvarlige for indirekte tab eller følgeskader.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Force Majeure</h2>
            <p className="text-gray-700 leading-relaxed">
              Lai Solutions er ikke ansvarlig for forsinkelser eller manglende opfyldelse af forpligtelser 
              som følge af omstændigheder uden for vores kontrol, herunder naturkatastrofer, krig, 
              terrorisme, cyberangreb, eller myndighedspåbud.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Tvister og Lovvalg</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Aftalen er underlagt dansk ret. Tvister søges først løst i mindelighed. 
                Kan enighed ikke opnås, afgøres tvister ved danske domstole med Retten i [By] som værneting.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Ændringer</h2>
            <p className="text-gray-700 leading-relaxed">
              Lai Solutions forbeholder sig ret til at ændre disse handelsbetingelser med 30 dages skriftligt varsel. 
              Væsentlige ændringer giver kunden ret til at opsige aftalen uden varsel.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Kontakt</h2>
            <div className="space-y-2 text-gray-700">
              <p>For spørgsmål til disse handelsbetingelser, kontakt:</p>
              <p><strong>E-mail:</strong> bastian@laisolutions.dk</p>
              <p><strong>Telefon:</strong> +45 81 73 15 00</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default HandelsbetingelserPage;