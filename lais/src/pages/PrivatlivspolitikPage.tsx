import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const PrivatlivspolitikPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <main className="pt-20 bg-gray-50 min-h-screen relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-24 left-24 w-72 h-72 bg-emerald-500/3 animate-morph-blob animate-delay-2s"></div>
        <div className="absolute bottom-24 right-24 w-56 h-56 bg-emerald-400/4 animate-morph-blob animate-delay-4s"></div>
        <div className="absolute top-2/3 left-1/3 w-44 h-44 bg-emerald-600/3 animate-morph-blob animate-delay-6s"></div>
        <div className="absolute top-1/4 right-1/4 w-36 h-36 bg-emerald-300/4 animate-morph-blob animate-delay-1s"></div>
        
        {/* Floating particles */}
        <div className="absolute top-0 left-1/8 w-1 h-1 bg-emerald-400/30 rounded-full animate-particle-float"></div>
        <div className="absolute top-0 right-1/8 w-1.5 h-1.5 bg-emerald-300/25 rounded-full animate-particle-float animate-delay-4s"></div>
        <div className="absolute top-0 left-7/8 w-1 h-1 bg-emerald-500/20 rounded-full animate-particle-float animate-delay-2s"></div>
      </div>
      
      {/* Back Navigation */}
      <div className="bg-gray-800 py-4 relative">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-2 w-36 h-36 bg-emerald-500/8 animate-morph-blob animate-delay-1s"></div>
          <div className="absolute top-0 right-2 w-32 h-32 bg-emerald-400/6 animate-morph-blob animate-delay-3s"></div>
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
          {t('privacy.title')}
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
          <div className="text-sm text-gray-600 mb-6">
            <p><strong>Sidst opdateret:</strong> {new Date().toLocaleDateString('da-DK')}</p>
            <p><strong>Gældende fra:</strong> {new Date().toLocaleDateString('da-DK')}</p>
          </div>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Dataansvarlig</h2>
            <div className="space-y-2 text-gray-700">
              <p><strong>Virksomhed:</strong> Lai Solutions</p>
              <p><strong>Indehaver:</strong> Bastian Hansen</p>
              <p><strong>E-mail:</strong> bastian@laisolutions.dk</p>
              <p><strong>Telefon:</strong> +45 81 73 15 00</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Hvilke Personoplysninger Indsamler Vi</h2>
            <div className="space-y-4 text-gray-700">
              <h3 className="text-lg font-semibold">2.1 Oplysninger du giver os direkte</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Kontaktoplysninger:</strong> Navn, e-mail, telefonnummer, virksomhedsnavn</li>
                <li><strong>Mødeoplysninger:</strong> Kalenderbookinger via Calendly</li>
                <li><strong>Kommunikation:</strong> E-mails, beskeder, samtalenotater</li>
                <li><strong>Forretningsoplysninger:</strong> Branche, målgruppe, virksomhedsstørrelse</li>
              </ul>
              
              <h3 className="text-lg font-semibold">2.2 Oplysninger vi indsamler automatisk</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Webstedsdata:</strong> IP-adresse, browsertype, besøgstid</li>
                <li><strong>Cookies:</strong> Se vores cookiepolitik for detaljer</li>
                <li><strong>Brugsstatistik:</strong> Sidevisninger, klikdata, interaktioner</li>
              </ul>

              <h3 className="text-lg font-semibold">2.3 Oplysninger fra tredjeparter</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>LinkedIn:</strong> Offentlige profiloplysninger ved outreach</li>
                <li><strong>Calendly:</strong> Mødedata og præferencer</li>
                <li><strong>E-mail platforme:</strong> Åbnings- og klikstatistik</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Formål med Databehandling</h2>
            <div className="space-y-4 text-gray-700">
              <p>Vi behandler dine personoplysninger til følgende formål:</p>
              
              <h3 className="text-lg font-semibold">3.1 Levering af tjenester</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Automatiseret mødebooking og leadgenerering</li>
                <li>AI-agent udvikling og implementation</li>
                <li>Kundesupport og kommunikation</li>
                <li>Fakturering og betalingshåndtering</li>
              </ul>

              <h3 className="text-lg font-semibold">3.2 Markedsføring og kommunikation</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Outreach kampagner til potentielle kunder</li>
                <li>Nyhedsbreve og produktopdateringer</li>
                <li>Personaliseret markedsføring</li>
              </ul>

              <h3 className="text-lg font-semibold">3.3 Analyse og forbedring</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Webstedsanalyse og brugeroplevelse</li>
                <li>Tjenesteudbedring og optimering</li>
                <li>Rapportering og statistik</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Retsgrundlag for Behandling</h2>
            <div className="space-y-4 text-gray-700">
              <p>Vi behandler dine personoplysninger baseret på følgende retsgrundlag:</p>
              
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Samtykke (GDPR art. 6.1.a):</strong> Markedsføring og nyhedsbreve</li>
                <li><strong>Kontraktopfyldelse (GDPR art. 6.1.b):</strong> Levering af aftalte tjenester</li>
                <li><strong>Legitim interesse (GDPR art. 6.1.f):</strong> Forretningsudvikling og analyse</li>
                <li><strong>Lovpligt (GDPR art. 6.1.c):</strong> Bogføring og skattemæssige forpligtelser</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Videregivelse af Personoplysninger</h2>
            <div className="space-y-4 text-gray-700">
              <h3 className="text-lg font-semibold">5.1 Databehandlere</h3>
              <p>Vi deler oplysninger med følgende kategorier af databehandlere:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>IT-leverandører:</strong> Hosting, cloud-tjenester, software</li>
                <li><strong>Kommunikationsplatforme:</strong> E-mail, CRM, kalendersystemer</li>
                <li><strong>Analyseudbydere:</strong> Google Analytics, webstatistik</li>
                <li><strong>Betalingsudbydere:</strong> Fakturering og betalingshåndtering</li>
              </ul>

              <h3 className="text-lg font-semibold">5.2 Tredjeparter</h3>
              <p>Vi videregiver ikke personoplysninger til tredjeparter uden dit samtykke, medmindre:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Det er nødvendigt for at levere vores tjenester</li>
                <li>Vi er juridisk forpligtet hertil</li>
                <li>Det er nødvendigt for at beskytte vores rettigheder</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Internationale Overførsler</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Nogle af vores databehandlere kan være placeret uden for EU/EØS. I sådanne tilfælde 
                sikrer vi passende beskyttelse gennem:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>EU-Kommissionens standardkontraktbestemmelser</li>
                <li>Adequacy decisions fra EU-Kommissionen</li>
                <li>Certificeringsordninger som Privacy Shield (hvor relevant)</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Opbevaringsperioder</h2>
            <div className="space-y-4 text-gray-700">
              <p>Vi opbevarer dine personoplysninger i følgende perioder:</p>
              
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Kundedata:</strong> I kontraktperioden + 5 år (bogføringsloven)</li>
                <li><strong>Prospektdata:</strong> Indtil du trækker samtykke tilbage eller 2 år uden kontakt</li>
                <li><strong>Webstedsdata:</strong> 26 måneder (Google Analytics standard)</li>
                <li><strong>E-mail kommunikation:</strong> 3 år efter sidste kontakt</li>
                <li><strong>Faktureringsdata:</strong> 5 år (bogføringsloven)</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Dine Rettigheder</h2>
            <div className="space-y-4 text-gray-700">
              <p>Du har følgende rettigheder i henhold til GDPR:</p>
              
              <h3 className="text-lg font-semibold">8.1 Ret til indsigt (art. 15)</h3>
              <p>Du kan anmode om indsigt i, hvilke personoplysninger vi behandler om dig.</p>

              <h3 className="text-lg font-semibold">8.2 Ret til berigtigelse (art. 16)</h3>
              <p>Du kan få rettet forkerte eller ufuldstændige oplysninger.</p>

              <h3 className="text-lg font-semibold">8.3 Ret til sletning (art. 17)</h3>
              <p>Du kan få slettet dine personoplysninger under visse omstændigheder.</p>

              <h3 className="text-lg font-semibold">8.4 Ret til begrænsning (art. 18)</h3>
              <p>Du kan få begrænset behandlingen af dine personoplysninger.</p>

              <h3 className="text-lg font-semibold">8.5 Ret til dataportabilitet (art. 20)</h3>
              <p>Du kan få udleveret dine data i et struktureret, almindeligt anvendt format.</p>

              <h3 className="text-lg font-semibold">8.6 Ret til indsigelse (art. 21)</h3>
              <p>Du kan gøre indsigelse mod behandling baseret på legitim interesse.</p>

              <h3 className="text-lg font-semibold">8.7 Ret til at trække samtykke tilbage</h3>
              <p>Du kan til enhver tid trække dit samtykke tilbage.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Sikkerhed</h2>
            <div className="space-y-4 text-gray-700">
              <p>Vi beskytter dine personoplysninger gennem:</p>
              
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Tekniske sikkerhedsforanstaltninger:</strong> Kryptering, firewalls, sikre servere</li>
                <li><strong>Organisatoriske foranstaltninger:</strong> Adgangskontrol, medarbejderuddannelse</li>
                <li><strong>Regelmæssige sikkerhedsopdateringer</strong> og penetrationstest</li>
                <li><strong>Backup og disaster recovery</strong> procedurer</li>
                <li><strong>Databrudsprocedurer</strong> i henhold til GDPR</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Klager</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Hvis du har klager over vores behandling af dine personoplysninger, kan du kontakte os på 
                kontakt@laisolutions.dk. Du har også ret til at indgive en klage til Datatilsynet:
              </p>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <p><strong>Datatilsynet</strong></p>
                <p>Borgergade 28, 5.</p>
                <p>1300 København K</p>
                <p>Telefon: 33 19 32 00</p>
                <p>E-mail: dt@datatilsynet.dk</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Ændringer af Privatlivspolitik</h2>
            <p className="text-gray-700 leading-relaxed">
              Vi kan opdatere denne privatlivspolitik fra tid til anden. Væsentlige ændringer vil blive 
              kommunikeret via e-mail eller på vores hjemmeside. Vi opfordrer dig til at gennemgå denne 
              politik regelmæssigt.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Kontakt</h2>
            <div className="space-y-2 text-gray-700">
              <p>For spørgsmål om denne privatlivspolitik eller dine rettigheder, kontakt:</p>
              <p><strong>E-mail:</strong> bastian@laisolutions.dk</p>
              <p><strong>Telefon:</strong> +45 81 73 15 00</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default PrivatlivspolitikPage;