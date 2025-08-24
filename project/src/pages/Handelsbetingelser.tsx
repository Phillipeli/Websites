import React from 'react';
import { FileText, Scale, CreditCard, AlertTriangle, Phone, Mail, MapPin } from 'lucide-react';
import CookieSettingsButton from '../components/CookieSettingsButton';

const Handelsbetingelser = () => {
  const currentDate = new Date().toLocaleDateString('da-DK');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-950 py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Scale size={16} />
              Handelsbetingelser
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Handelsbetingelser
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Sidst opdateret: {currentDate}
            </p>
            
            {/* Cookie Settings Button */}
            <div className="mt-8">
              <CookieSettingsButton variant="secondary" />
            </div>
          </div>

          {/* Content */}
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 space-y-8">
            
            {/* Introduktion */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <FileText className="text-blue-400" size={20} />
                </div>
                <h2 className="text-2xl font-bold text-white">1. Introduktion og anvendelse</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <p>
                  Disse handelsbetingelser gælder for alle services leveret af Leadstrøm ("vi", "os", "vores") 
                  til kunder ("du", "din", "kunden"). Ved at bestille vores services accepterer du disse betingelser.
                </p>
                <div className="bg-gray-900 rounded-lg p-4 border border-gray-600">
                  <h3 className="text-lg font-semibold text-white mb-2">Kontaktoplysninger:</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <MapPin className="text-blue-400" size={16} />
                      <span className="text-sm">Baseret i København, Danmark</span>
                    </div>
                    <p className="text-sm text-gray-300">
                      Kontakt via hjemmesidens booking-system
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Services */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <FileText className="text-blue-400" size={20} />
                </div>
                <h2 className="text-2xl font-bold text-white">2. Services og leverancer</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <h3 className="text-xl font-semibold text-white">2.1 Servicetyper</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-900 rounded-lg p-4 border border-gray-600">
                    <h4 className="text-lg font-semibold text-white mb-2">Hjemmesider</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Skræddersyet webdesign og udvikling</li>
                      <li>Responsivt design til alle enheder</li>
                      <li>SEO-optimering og performance</li>
                      <li>CMS og indholdsadministration</li>
                    </ul>
                  </div>
                  <div className="bg-gray-900 rounded-lg p-4 border border-gray-600">
                    <h4 className="text-lg font-semibold text-white mb-2">AI Chat-agenter</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Intelligent chatbot-udvikling</li>
                      <li>Træning på virksomhedsdata</li>
                      <li>Integration med CRM-systemer</li>
                      <li>24/7 kundeservice automation</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mt-6">2.2 Leveringstid</h3>
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>Standard projekter:</strong> 3-4 uger fra kontraktindgåelse</li>
                    <li><strong>Express levering:</strong> 1-2 uger (mod tillæg på 30%)</li>
                    <li><strong>Komplekse projekter:</strong> Aftales individuelt</li>
                    <li><strong>Revisioner:</strong> Mindre ændringer inden for 48 timer</li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold text-white mt-6">2.3 Kundens forpligtelser</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Levere nødvendigt indhold og materialer til tiden</li>
                  <li>Give konstruktiv feedback inden for aftalte tidsfrister</li>
                  <li>Teste og godkende leverancer inden go-live</li>
                  <li>Betale fakturaer til tiden</li>
                </ul>
              </div>
            </section>

            {/* Priser og betaling */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <CreditCard className="text-blue-400" size={20} />
                </div>
                <h2 className="text-2xl font-bold text-white">3. Priser og betaling</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <h3 className="text-xl font-semibold text-white">3.1 Prissætning</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Alle priser er angivet i danske kroner (DKK) ekskl. moms</li>
                  <li>Priser er faste ved kontraktindgåelse, medmindre andet aftales</li>
                  <li>Ekstraarbejde ud over det aftalte faktureres efter gældende timepriser</li>
                  <li>Prisændringer varsles minimum 30 dage i forvejen</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mt-6">3.2 Betalingsbetingelser</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-900 rounded-lg p-4 border border-gray-600">
                    <h4 className="text-lg font-semibold text-white mb-2">Betalingsplan</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>50% ved kontraktindgåelse</li>
                      <li>25% ved design-godkendelse</li>
                      <li>25% ved projektaflevering</li>
                    </ul>
                  </div>
                  <div className="bg-gray-900 rounded-lg p-4 border border-gray-600">
                    <h4 className="text-lg font-semibold text-white mb-2">Betalingsfrister</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Betalingsfrist: 14 dage netto</li>
                      <li>Rykkergebyr: 100 DKK</li>
                      <li>Morarente: 2% pr. måned</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                  <p className="text-sm">
                    <strong>Vigtigt:</strong> Ved forsinket betaling forbeholder vi os ret til at suspendere arbejdet 
                    og/eller tage hjemmesiden offline indtil fuld betaling er modtaget.
                  </p>
                </div>
              </div>
            </section>

            {/* Immaterielle rettigheder */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Scale className="text-blue-400" size={20} />
                </div>
                <h2 className="text-2xl font-bold text-white">4. Immaterielle rettigheder</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <h3 className="text-xl font-semibold text-white">4.1 Ophavsret</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Kunden erhverver fuld ophavsret til det færdige produkt ved fuld betaling</li>
                  <li>Vi bevarer ret til at bruge projektet som reference i vores portefølje</li>
                  <li>Tredjepartskomponenter (plugins, biblioteker) er underlagt deres egne licenser</li>
                  <li>Kunden er ansvarlig for at have rettigheder til alt leveret indhold</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mt-6">4.2 Varemærker og logoer</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Kunden bevarer alle rettigheder til egne varemærker og logoer</li>
                  <li>Vi må bruge kundens logo i forbindelse med projektarbejdet</li>
                  <li>Brug af tredjepartsvaremærker kræver særskilt tilladelse</li>
                </ul>
              </div>
            </section>

            {/* Ansvar og begrænsninger */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="text-blue-400" size={20} />
                </div>
                <h2 className="text-2xl font-bold text-white">5. Ansvar og begrænsninger</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <h3 className="text-xl font-semibold text-white">5.1 Vores ansvar</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Vi leverer services i overensstemmelse med god skik og praksis</li>
                  <li>Vi garanterer funktionalitet i henhold til specifikationer</li>
                  <li>Vi yder 30 dages gratis support efter projektaflevering</li>
                  <li>Vi sikrer backup og grundlæggende sikkerhed</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mt-6">5.2 Ansvarsbegrænsninger</h3>
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>Vores samlede ansvar er begrænset til det betalte beløb for projektet</li>
                    <li>Vi er ikke ansvarlige for indirekte tab, driftstab eller fortabte indtægter</li>
                    <li>Vi er ikke ansvarlige for tredjepartsservices eller -integrationer</li>
                    <li>Kunden er ansvarlig for backup af eget indhold</li>
                    <li>Vi er ikke ansvarlige for skader som følge af kundens misbrug</li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold text-white mt-6">5.3 Force majeure</h3>
                <p>
                  Vi er ikke ansvarlige for forsinkelser eller manglende opfyldelse som følge af 
                  omstændigheder uden for vores kontrol, herunder naturkatastrofer, krig, 
                  terrorisme, cyberangreb eller myndighedspåbud.
                </p>
              </div>
            </section>

            {/* Opsigelse og refundering */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <CreditCard className="text-blue-400" size={20} />
                </div>
                <h2 className="text-2xl font-bold text-white">6. Opsigelse og refundering</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <h3 className="text-xl font-semibold text-white">6.1 Kundens opsigelse</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Projekter kan opsiges med 14 dages skriftligt varsel</li>
                  <li>Betaling for udført arbejde kan ikke refunderes</li>
                  <li>Resterende arbejde faktureres pro rata</li>
                  <li>Kunden modtager alt udført arbejde i eksisterende tilstand</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mt-6">6.2 Vores opsigelse</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Vi kan opsige ved væsentlig misligholdelse fra kundens side</li>
                  <li>14 dages varsel ved forsinket betaling</li>
                  <li>Øjeblikkelig opsigelse ved grove overtrædelser</li>
                  <li>Udført arbejde leveres og faktureres</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mt-6">6.3 Refunderingspolitik</h3>
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li><strong>Inden projektstart:</strong> Fuld refundering minus 10% administrationsgebyr</li>
                    <li><strong>Under udvikling:</strong> Refundering af ikke-udført arbejde</li>
                    <li><strong>Efter levering:</strong> Ingen refundering, men gratis fejlrettelser i 30 dage</li>
                    <li><strong>Utilfredshed:</strong> Vi arbejder sammen om en løsning før refundering overvejes</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Support og vedligeholdelse */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Phone className="text-blue-400" size={20} />
                </div>
                <h2 className="text-2xl font-bold text-white">7. Support og vedligeholdelse</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <h3 className="text-xl font-semibold text-white">7.1 Inkluderet support</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>30 dages gratis support efter projektaflevering</li>
                  <li>Fejlrettelser og bugfixes uden beregning</li>
                  <li>Mindre indholdsændringer (op til 2 timer)</li>
                  <li>Teknisk support via email og telefon</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mt-6">7.2 Vedligeholdelsesaftaler</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-900 rounded-lg p-4 border border-gray-600">
                    <h4 className="text-lg font-semibold text-white mb-2">Basic (1.500 DKK/måned)</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Sikkerhedsopdateringer</li>
                      <li>Backup og monitoring</li>
                      <li>2 timers support pr. måned</li>
                    </ul>
                  </div>
                  <div className="bg-gray-900 rounded-lg p-4 border border-gray-600">
                    <h4 className="text-lg font-semibold text-white mb-2">Premium (3.500 DKK/måned)</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Alt fra Basic</li>
                      <li>Indholdsvedligeholdelse</li>
                      <li>5 timers support pr. måned</li>
                      <li>Prioriteret support</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Tvister og lovvalg */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Scale className="text-blue-400" size={20} />
                </div>
                <h2 className="text-2xl font-bold text-white">8. Tvister og lovvalg</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <h3 className="text-xl font-semibold text-white">8.1 Lovvalg</h3>
                <p>
                  Disse handelsbetingelser er underlagt dansk ret. Eventuelle tvister skal afgøres 
                  ved danske domstole med København som værneting.
                </p>

                <h3 className="text-xl font-semibold text-white mt-6">8.2 Tvisteløsning</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Vi stræber efter at løse alle uenigheder i mindelighed</li>
                  <li>Mediation gennem Dansk Industri kan anvendes</li>
                  <li>Som sidste udvej kan sagen indbringes for domstolene</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mt-6">8.3 Forbrugerklagenævn</h3>
                <p>
                  Forbrugere kan indbringe klager for Forbrugerklagenævnet, 
                  Carl Jacobsens Vej 35, 2500 Valby eller via www.forbrug.dk.
                </p>
              </div>
            </section>

            {/* Ændringer */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <FileText className="text-blue-400" size={20} />
                </div>
                <h2 className="text-2xl font-bold text-white">9. Ændringer til betingelserne</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <p>
                  Vi forbeholder os ret til at ændre disse handelsbetingelser. Væsentlige ændringer 
                  vil blive kommunikeret med minimum 30 dages varsel via email eller på hjemmesiden.
                </p>
                <p>
                  Fortsættelse af samarbejdet efter ændringernes ikrafttræden betragtes som accept 
                  af de nye betingelser.
                </p>
                <p className="text-sm text-gray-400">
                  Disse betingelser blev sidst opdateret: {currentDate}
                </p>
                
                <div className="mt-8 p-4 bg-gray-900 rounded-lg border border-gray-600">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Cookie-indstillinger</h4>
                      <p className="text-sm text-gray-300">Administrer dine cookie-præferencer i overensstemmelse med vores privatlivspolitik</p>
                    </div>
                    <CookieSettingsButton variant="outline" />
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Handelsbetingelser;