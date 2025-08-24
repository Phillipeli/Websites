import React from 'react';
import { Shield, Mail, Phone, MapPin, Eye, Database, Users, Lock, FileText, AlertCircle } from 'lucide-react';
import CookieSettingsButton from '../components/CookieSettingsButton';

const Privatlivspolitik = () => {
  const currentDate = new Date().toLocaleDateString('da-DK');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-950 py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Shield size={16} />
              Privatlivspolitik
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Privatlivspolitik
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Sidst opdateret: {currentDate}
            </p>
            
            {/* Cookie Settings Button */}
            <div className="mt-8">
              <CookieSettingsButton variant="primary" />
            </div>
          </div>

          {/* Content */}
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 space-y-8">
            
            {/* Introduktion */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Eye className="text-blue-400" size={20} />
                </div>
                <h2 className="text-2xl font-bold text-white">1. Introduktion</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <p>
                  Leadstrøm ("vi", "os", "vores") respekterer dit privatliv og er forpligtet til at beskytte dine personoplysninger. 
                  Denne privatlivspolitik forklarer, hvordan vi indsamler, bruger og beskytter dine oplysninger, når du besøger 
                  vores hjemmeside eller bruger vores services.
                </p>
                <p>
                  Vi overholder EU's Generelle Databeskyttelsesforordning (GDPR) og dansk databeskyttelseslovgivning.
                </p>
              </div>
            </section>

            {/* Dataansvarlig */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Users className="text-blue-400" size={20} />
                </div>
                <h2 className="text-2xl font-bold text-white">2. Dataansvarlig</h2>
              </div>
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-600">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <MapPin className="text-blue-400" size={16} />
                    <span className="text-gray-300">København, Danmark</span>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Kontakt mig via booking-systemet på hjemmesiden.
                  </p>
                </div>
              </div>
            </section>

            {/* Dataindsamling */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Database className="text-blue-400" size={20} />
                </div>
                <h2 className="text-2xl font-bold text-white">3. Hvilke oplysninger indsamler vi?</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <h3 className="text-xl font-semibold text-white">3.1 Oplysninger du giver os direkte:</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Navn, email, telefonnummer (via kontaktformularer)</li>
                  <li>Virksomhedsoplysninger (navn, branche, størrelse)</li>
                  <li>Projektbeskrivelser og servicebehov</li>
                  <li>Kommunikation med os (emails, chat-beskeder)</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mt-6">3.2 Oplysninger vi indsamler automatisk:</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>IP-adresse og browseroplysninger</li>
                  <li>Besøgsstatistikker og sidevisninger</li>
                  <li>Cookies og lignende teknologier</li>
                  <li>Henvisningskilder (hvordan du fandt os)</li>
                </ul>
              </div>
            </section>

            {/* Formål */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <FileText className="text-blue-400" size={20} />
                </div>
                <h2 className="text-2xl font-bold text-white">4. Hvorfor bruger vi dine oplysninger?</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <div className="bg-gray-900 rounded-lg p-4 border border-gray-600">
                  <h3 className="text-lg font-semibold text-white mb-2">Leadgenerering og kundeservice:</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Besvare dine henvendelser og tilbyde services</li>
                    <li>Kvalificere leads og tilpasse vores tilbud</li>
                    <li>Følge op på potentielle projekter</li>
                    <li>Levere kundeservice og support</li>
                  </ul>
                </div>
                
                <div className="bg-gray-900 rounded-lg p-4 border border-gray-600">
                  <h3 className="text-lg font-semibold text-white mb-2">Markedsføring og forbedring:</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Sende relevante tilbud og nyhedsbreve (med samtykke)</li>
                    <li>Analysere hjemmesidens performance</li>
                    <li>Forbedre vores services og brugeroplevelse</li>
                    <li>Målrettet markedsføring på sociale medier</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Retsgrundlag */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Lock className="text-blue-400" size={20} />
                </div>
                <h2 className="text-2xl font-bold text-white">5. Retsgrundlag for behandling</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-900 rounded-lg p-4 border border-gray-600">
                    <h3 className="text-lg font-semibold text-white mb-2">Samtykke</h3>
                    <p className="text-sm">Markedsføring, nyhedsbreve og ikke-nødvendige cookies</p>
                  </div>
                  <div className="bg-gray-900 rounded-lg p-4 border border-gray-600">
                    <h3 className="text-lg font-semibold text-white mb-2">Legitim interesse</h3>
                    <p className="text-sm">Leadkvalificering, kundeservice og hjemmeside-analyse</p>
                  </div>
                  <div className="bg-gray-900 rounded-lg p-4 border border-gray-600">
                    <h3 className="text-lg font-semibold text-white mb-2">Kontraktopfyldelse</h3>
                    <p className="text-sm">Levering af bestilte services og projektarbejde</p>
                  </div>
                  <div className="bg-gray-900 rounded-lg p-4 border border-gray-600">
                    <h3 className="text-lg font-semibold text-white mb-2">Lovpligt</h3>
                    <p className="text-sm">Bogføring, skat og andre juridiske forpligtelser</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Tredjeparter */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Users className="text-blue-400" size={20} />
                </div>
                <h2 className="text-2xl font-bold text-white">6. Deling med tredjeparter</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <p>Vi deler kun dine oplysninger med tredjeparter i følgende tilfælde:</p>
                <div className="space-y-3">
                  <div className="bg-gray-900 rounded-lg p-4 border border-gray-600">
                    <h3 className="text-lg font-semibold text-white mb-2">Tekniske leverandører:</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                      <li>Supabase (database og hosting)</li>
                      <li>Voiceflow (AI chatbot)</li>
                      <li>Calendly (booking system)</li>
                      <li>Google Analytics (statistik)</li>
                    </ul>
                  </div>
                  <div className="bg-gray-900 rounded-lg p-4 border border-gray-600">
                    <h3 className="text-lg font-semibold text-white mb-2">Markedsføringsværktøjer:</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                      <li>Facebook/Meta Pixel (målrettet annoncering)</li>
                      <li>Google Ads (konverteringssporing)</li>
                      <li>Email marketing platforme</li>
                    </ul>
                  </div>
                </div>
                <p className="text-sm bg-blue-500/10 border border-blue-500/30 rounded-lg p-3">
                  <strong>Vigtigt:</strong> Alle tredjeparter er GDPR-compliant og har indgået databehandleraftaler med os.
                </p>
                
                <div className="mt-6 p-4 bg-gray-900 rounded-lg border border-gray-600">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Administrer dine cookie-præferencer</h4>
                      <p className="text-sm text-gray-300">Du kan til enhver tid ændre dine cookie-indstillinger</p>
                    </div>
                    <CookieSettingsButton variant="outline" />
                  </div>
                </div>
              </div>
            </section>

            {/* Opbevaring */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Database className="text-blue-400" size={20} />
                </div>
                <h2 className="text-2xl font-bold text-white">7. Hvor længe opbevarer vi dine oplysninger?</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-900 rounded-lg p-4 border border-gray-600">
                    <h3 className="text-lg font-semibold text-white mb-2">Aktive leads</h3>
                    <p className="text-sm">2 år fra sidste kontakt</p>
                  </div>
                  <div className="bg-gray-900 rounded-lg p-4 border border-gray-600">
                    <h3 className="text-lg font-semibold text-white mb-2">Kunder</h3>
                    <p className="text-sm">5 år efter projektafslutning (bogføringsloven)</p>
                  </div>
                  <div className="bg-gray-900 rounded-lg p-4 border border-gray-600">
                    <h3 className="text-lg font-semibold text-white mb-2">Markedsføring</h3>
                    <p className="text-sm">Indtil samtykke trækkes tilbage</p>
                  </div>
                  <div className="bg-gray-900 rounded-lg p-4 border border-gray-600">
                    <h3 className="text-lg font-semibold text-white mb-2">Cookies</h3>
                    <p className="text-sm">13 måneder (eller indtil sletning)</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Rettigheder */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Shield className="text-blue-400" size={20} />
                </div>
                <h2 className="text-2xl font-bold text-white">8. Dine rettigheder under GDPR</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <p>Du har følgende rettigheder vedrørende dine personoplysninger:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-900 rounded-lg p-4 border border-gray-600">
                    <h3 className="text-lg font-semibold text-white mb-2">Ret til indsigt</h3>
                    <p className="text-sm">Se hvilke oplysninger vi har om dig</p>
                  </div>
                  <div className="bg-gray-900 rounded-lg p-4 border border-gray-600">
                    <h3 className="text-lg font-semibold text-white mb-2">Ret til berigtigelse</h3>
                    <p className="text-sm">Få rettet forkerte oplysninger</p>
                  </div>
                  <div className="bg-gray-900 rounded-lg p-4 border border-gray-600">
                    <h3 className="text-lg font-semibold text-white mb-2">Ret til sletning</h3>
                    <p className="text-sm">Få slettet dine oplysninger</p>
                  </div>
                  <div className="bg-gray-900 rounded-lg p-4 border border-gray-600">
                    <h3 className="text-lg font-semibold text-white mb-2">Ret til dataportabilitet</h3>
                    <p className="text-sm">Få dine data i et læsbart format</p>
                  </div>
                  <div className="bg-gray-900 rounded-lg p-4 border border-gray-600">
                    <h3 className="text-lg font-semibold text-white mb-2">Ret til begrænsning</h3>
                    <p className="text-sm">Begrænse behandlingen af dine data</p>
                  </div>
                  <div className="bg-gray-900 rounded-lg p-4 border border-gray-600">
                    <h3 className="text-lg font-semibold text-white mb-2">Ret til indsigelse</h3>
                    <p className="text-sm">Protestere mod behandling</p>
                  </div>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                  <p className="text-sm">
                    <strong>Kontakt os:</strong> For at udøve dine rettigheder, kontakt os på hej@leadstrom.dk. 
                    Vi svarer inden for 30 dage.
                  </p>
                </div>
              </div>
            </section>

            {/* Sikkerhed */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Lock className="text-blue-400" size={20} />
                </div>
                <h2 className="text-2xl font-bold text-white">9. Datasikkerhed</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <p>Vi beskytter dine oplysninger med følgende sikkerhedsforanstaltninger:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>SSL-kryptering af al datatransmission</li>
                  <li>Sikre datacentre med fysisk adgangskontrol</li>
                  <li>Regelmæssige sikkerhedsopdateringer</li>
                  <li>Begrænset adgang på "need-to-know" basis</li>
                  <li>Regelmæssige backup og disaster recovery</li>
                </ul>
              </div>
            </section>

            {/* Klager */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <AlertCircle className="text-blue-400" size={20} />
                </div>
                <h2 className="text-2xl font-bold text-white">10. Klager</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <p>
                  Hvis du har klager over vores behandling af dine personoplysninger, kan du kontakte os direkte. 
                  Du har også ret til at indgive en klage til Datatilsynet:
                </p>
                <div className="bg-gray-900 rounded-lg p-4 border border-gray-600">
                  <h3 className="text-lg font-semibold text-white mb-2">Datatilsynet</h3>
                  <p className="text-sm">Borgergade 28, 5. sal</p>
                  <p className="text-sm">1300 København K</p>
                  <p className="text-sm">Telefon: 33 19 32 00</p>
                  <p className="text-sm">Email: dt@datatilsynet.dk</p>
                </div>
              </div>
            </section>

            {/* Ændringer */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <FileText className="text-blue-400" size={20} />
                </div>
                <h2 className="text-2xl font-bold text-white">11. Ændringer til denne politik</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <p>
                  Vi kan opdatere denne privatlivspolitik fra tid til anden. Væsentlige ændringer vil blive kommunikeret 
                  via email til registrerede brugere eller via en fremtrædende meddelelse på hjemmesiden.
                </p>
                <p className="text-sm text-gray-400">
                  Denne politik blev sidst opdateret: {currentDate}
                </p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Privatlivspolitik;