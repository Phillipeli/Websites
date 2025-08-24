import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const CookiesPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <main className="pt-20 bg-gray-50 min-h-screen relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 left-16 w-60 h-60 bg-emerald-500/3 animate-morph-blob animate-delay-2s"></div>
        <div className="absolute bottom-16 right-16 w-44 h-44 bg-emerald-400/4 animate-morph-blob animate-delay-4s"></div>
        <div className="absolute top-1/2 left-1/5 w-36 h-36 bg-emerald-600/3 animate-morph-blob animate-delay-6s"></div>
        <div className="absolute top-1/3 right-1/5 w-28 h-28 bg-emerald-300/4 animate-morph-blob animate-delay-1s"></div>
        
        {/* Floating particles */}
        <div className="absolute top-0 left-1/7 w-1 h-1 bg-emerald-400/30 rounded-full animate-particle-float"></div>
        <div className="absolute top-0 right-1/7 w-1.5 h-1.5 bg-emerald-300/25 rounded-full animate-particle-float animate-delay-3s"></div>
        <div className="absolute top-0 left-6/7 w-1 h-1 bg-emerald-500/20 rounded-full animate-particle-float animate-delay-5s"></div>
      </div>
      
      {/* Back Navigation */}
      <div className="bg-gray-800 py-4 relative">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1 w-40 h-40 bg-emerald-500/8 animate-morph-blob animate-delay-1s"></div>
          <div className="absolute top-0 right-1 w-36 h-36 bg-emerald-400/6 animate-morph-blob animate-delay-3s"></div>
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
          {t('cookies.title')}
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
          <div className="text-sm text-gray-600 mb-6">
            <p><strong>{t('common.language') === 'da' ? 'E-mail:' : 'Email:'}</strong> bastian@laisolutions.dk</p>
            <p><strong>{t('common.language') === 'da' ? 'Telefon:' : 'Phone:'}</strong> +45 81 73 15 00</p>
          </div>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Hvad er Cookies?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Cookies er små tekstfiler, der gemmes på din computer, tablet eller smartphone, når du besøger 
              vores hjemmeside. Cookies hjælper os med at gøre hjemmesiden mere brugervenlig og give dig en 
              bedre oplevelse.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Der findes forskellige typer cookies: nogle er nødvendige for hjemmesidens funktion, mens andre 
              hjælper os med at forstå, hvordan du bruger hjemmesiden, så vi kan forbedre den.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Hvilke Cookies Bruger Vi?</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">2.1 Nødvendige Cookies</h3>
                <p className="text-gray-700 mb-2">
                  Disse cookies er nødvendige for hjemmesidens grundlæggende funktioner og kan ikke slås fra.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Cookie</th>
                        <th className="text-left py-2">Formål</th>
                        <th className="text-left py-2">Varighed</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2 font-mono">session_id</td>
                        <td className="py-2">Opretholder bruger-session</td>
                        <td className="py-2">Session</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 font-mono">cookie_consent</td>
                        <td className="py-2">Gemmer cookie-præferencer</td>
                        <td className="py-2">1 år</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-mono">cookie_consent_date</td>
                        <td className="py-2">Tidsstempel for samtykke</td>
                        <td className="py-2">1 år</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">2.2 Analyse Cookies</h3>
                <p className="text-gray-700 mb-2">
                  Disse cookies hjælper os med at forstå, hvordan besøgende bruger hjemmesiden.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Cookie</th>
                        <th className="text-left py-2">Udbyder</th>
                        <th className="text-left py-2">Formål</th>
                        <th className="text-left py-2">Varighed</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2 font-mono">_ga</td>
                        <td className="py-2">Google Analytics</td>
                        <td className="py-2">Skelner mellem brugere</td>
                        <td className="py-2">2 år</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 font-mono">_ga_*</td>
                        <td className="py-2">Google Analytics</td>
                        <td className="py-2">Opretholder session-tilstand</td>
                        <td className="py-2">2 år</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-mono">_gid</td>
                        <td className="py-2">Google Analytics</td>
                        <td className="py-2">Skelner mellem brugere</td>
                        <td className="py-2">24 timer</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">2.3 Funktionalitets Cookies</h3>
                <p className="text-gray-700 mb-2">
                  Disse cookies gør det muligt for hjemmesiden at huske valg, du træffer.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Cookie</th>
                        <th className="text-left py-2">Formål</th>
                        <th className="text-left py-2">Varighed</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2 font-mono">calendly_session</td>
                        <td className="py-2">Calendly booking widget</td>
                        <td className="py-2">Session</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-mono">user_preferences</td>
                        <td className="py-2">Husker dine præferencer</td>
                        <td className="py-2">6 måneder</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">2.4 Marketing Cookies</h3>
                <p className="text-gray-700 mb-2">
                  Disse cookies bruges til at vise relevante annoncer og måle effektiviteten af kampagner.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Cookie</th>
                        <th className="text-left py-2">Udbyder</th>
                        <th className="text-left py-2">Formål</th>
                        <th className="text-left py-2">Varighed</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2 font-mono">_fbp</td>
                        <td className="py-2">Facebook</td>
                        <td className="py-2">Facebook Pixel tracking</td>
                        <td className="py-2">3 måneder</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-mono">li_sugr</td>
                        <td className="py-2">LinkedIn</td>
                        <td className="py-2">LinkedIn Insight Tag</td>
                        <td className="py-2">3 måneder</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Tredjeparters Cookies</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Vi bruger tjenester fra tredjeparter, som kan sætte deres egne cookies. Disse inkluderer:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Google Analytics</h4>
                  <p className="text-sm">Indlæses kun hvis du accepterer analyse-cookies.</p>
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" 
                     className="text-emerald-600 hover:text-emerald-700 text-sm">
                    Google's privatlivspolitik →
                  </a>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Calendly</h4>
                  <p className="text-sm">Indlæses kun hvis du accepterer funktionelle cookies.</p>
                  <a href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer" 
                     className="text-emerald-600 hover:text-emerald-700 text-sm">
                    Calendly's privatlivspolitik →
                  </a>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Facebook Pixel</h4>
                  <p className="text-sm">Indlæses kun hvis du accepterer marketing-cookies.</p>
                  <a href="https://www.facebook.com/privacy/explanation" target="_blank" rel="noopener noreferrer" 
                     className="text-emerald-600 hover:text-emerald-700 text-sm">
                    Facebook's privatlivspolitik →
                  </a>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">LinkedIn Insight</h4>
                  <p className="text-sm">Indlæses kun hvis du accepterer marketing-cookies.</p>
                  <a href="https://www.linkedin.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" 
                     className="text-emerald-600 hover:text-emerald-700 text-sm">
                    LinkedIn's privatlivspolitik →
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Hvordan Styrer Du Cookies?</h2>
            <div className="space-y-4 text-gray-700">
              <h3 className="text-lg font-semibold">4.1 Cookie-indstillinger på hjemmesiden</h3>
              <p>
                Du kan til enhver tid ændre dine cookie-præferencer ved at klikke på "Cookie-indstillinger" 
                i bunden af hjemmesiden.
              </p>
              
              <h3 className="text-lg font-semibold">4.2 Browser-indstillinger</h3>
              <p>Du kan også styre cookies gennem din browsers indstillinger:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Chrome</h4>
                  <p className="text-sm">Indstillinger → Avanceret → Privatliv og sikkerhed → Cookies</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Firefox</h4>
                  <p className="text-sm">Indstillinger → Privatliv og sikkerhed → Cookies og webstedsdata</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Safari</h4>
                  <p className="text-sm">Præferencer → Privatliv → Cookies og webstedsdata</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Edge</h4>
                  <p className="text-sm">Indstillinger → Cookies og webstedstilladelser</p>
                </div>
              </div>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
                <p className="text-sm text-yellow-800">
                  <strong>Bemærk:</strong> Hvis du blokerer alle cookies, kan nogle funktioner på hjemmesiden 
                  ikke fungere korrekt.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Opt-out Links</h2>
            <div className="space-y-4 text-gray-700">
              <p>Du kan fravælge specifikke tjenester ved at bruge følgende links:</p>
              
              <ul className="space-y-2">
                <li>
                  <strong>Google Analytics:</strong>{' '}
                  <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" 
                     className="text-emerald-600 hover:text-emerald-700">
                    Google Analytics Opt-out Browser Add-on
                  </a>
                </li>
                <li>
                  <strong>Facebook:</strong>{' '}
                  <a href="https://www.facebook.com/settings?tab=ads" target="_blank" rel="noopener noreferrer" 
                     className="text-emerald-600 hover:text-emerald-700">
                    Facebook Ad Preferences
                  </a>
                </li>
                <li>
                  <strong>LinkedIn:</strong>{' '}
                  <a href="https://www.linkedin.com/psettings/advertising" target="_blank" rel="noopener noreferrer" 
                     className="text-emerald-600 hover:text-emerald-700">
                    LinkedIn Ad Preferences
                  </a>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Opdateringer af Cookie-politik</h2>
            <p className="text-gray-700 leading-relaxed">
              Vi kan opdatere denne cookie-politik fra tid til anden for at afspejle ændringer i vores 
              brug af cookies eller af juridiske årsager. Vi opfordrer dig til at gennemgå denne politik 
              regelmæssigt. Væsentlige ændringer vil blive kommunikeret via hjemmesiden.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {t('common.language') === 'da' ? '7. Kontakt' : '7. Contact'}
            </h2>
            <div className="space-y-2 text-gray-700">
              <p>
                {t('common.language') === 'da'
                  ? 'Hvis du har spørgsmål om vores brug af cookies, kan du kontakte os:'
                  : 'If you have questions about our use of cookies, you can contact us:'
                }
              </p>
              <p><strong>{t('common.language') === 'da' ? 'E-mail:' : 'Email:'}</strong> kontakt@laisolutions.dk</p>
              <p><strong>{t('common.language') === 'da' ? 'Telefon:' : 'Phone:'}</strong> +45 30 12 34 56</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default CookiesPage;