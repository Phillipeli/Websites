import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
  gdprConsent: boolean;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

interface ContactFormProps {
  compact?: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({ compact = false }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
    gdprConsent: false
  });

  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: ''
  });

  const serviceOptions = [
    { value: '', label: 'Vælg service' },
    { value: 'website', label: 'Hjemmeside' },
    { value: 'ai-chat', label: 'AI Chat-agent' },
    { value: 'ai-voice', label: 'AI Voice Agent' },
    { value: 'website-ai-chat', label: 'Hjemmeside + AI Chat' },
    { value: 'website-ai-voice', label: 'Hjemmeside + AI Voice' },
    { value: 'ai-chat-voice', label: 'AI Chat + Voice Agent' },
    { value: 'complete-package', label: 'Komplet pakke (Alt)' },
    { value: 'consultation', label: 'Konsultation' },
    { value: 'other', label: 'Andet' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const validateForm = (): string | null => {
    if (!formData.name.trim()) return 'Navn er påkrævet';
    if (!formData.email.trim()) return 'Email er påkrævet';
    if (!formData.phone.trim()) return 'Telefon er påkrævet';
    if (!formData.gdprConsent) return 'GDPR samtykke er påkrævet';

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return 'Indtast en gyldig email-adresse';
    }

    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const validationError = validateForm();
    if (validationError) {
      setStatus({
        type: 'error',
        message: validationError
      });
      return;
    }

    setStatus({
      type: 'loading',
      message: 'Sender din henvendelse...'
    });

    try {
      const response = await fetch('/.netlify/functions/submit-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({
          type: 'success',
          message: result.message || 'Tak for din henvendelse! Vi kontakter dig snarest.'
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: '',
          gdprConsent: false
        });
      } else {
        setStatus({
          type: 'error',
          message: result.error || 'Der opstod en fejl. Prøv igen senere.'
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus({
        type: 'error',
        message: 'Der opstod en netværksfejl. Tjek din internetforbindelse og prøv igen.'
      });
    }
  };

  return (
    <div className={`bg-gray-800 rounded-2xl border border-gray-700 ${compact ? 'p-6' : 'p-8'}`}>
      <div className="mb-8">
        <h2 className={`font-bold text-white mb-4 ${compact ? 'text-2xl' : 'text-3xl'}`}>
          {compact ? 'Eller kontakt os direkte' : 'Kontakt os'}
        </h2>
        <p className="text-gray-300">
          {compact 
            ? 'Udfyld formularen, så kontakter vi dig inden for 24 timer.'
            : 'Udfyld formularen nedenfor, så kontakter vi dig inden for 24 timer på hverdage.'
          }
        </p>
      </div>

      {/* Status Message */}
      {status.type !== 'idle' && (
        <div className={`mb-6 p-4 rounded-lg border ${
          status.type === 'success' 
            ? 'bg-green-500/10 border-green-500/30 text-green-400'
            : status.type === 'error'
            ? 'bg-red-500/10 border-red-500/30 text-red-400'
            : 'bg-blue-500/10 border-blue-500/30 text-blue-400'
        }`}>
          <div className="flex items-center gap-2">
            {status.type === 'success' && <CheckCircle size={20} />}
            {status.type === 'error' && <AlertCircle size={20} />}
            {status.type === 'loading' && <Loader2 size={20} className="animate-spin" />}
            <span className="font-medium">{status.message}</span>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Compact layout for smaller form */}
        <div className={`grid gap-6 ${compact ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'}`}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              Navn *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Dit fulde navn"
            />
          </div>
          {!compact && (
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="din@email.dk"
              />
            </div>
          )}
        </div>

        {compact && (
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="din@email.dk"
            />
          </div>
        )}

        <div className={`grid gap-6 ${compact ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'}`}>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
              Telefon *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="+45 12 34 56 78"
            />
          </div>
          {!compact && (
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                Virksomhed
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Din virksomhed"
              />
            </div>
          )}
        </div>

        {compact && (
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
              Virksomhed
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Din virksomhed"
            />
          </div>
        )}

        {!compact && (
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
              Hvilken service er du interesseret i?
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {serviceOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        )}

        {compact && (
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
              Service interesse
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Vælg service</option>
              <option value="website">Hjemmeside</option>
              <option value="ai-chat">AI Chat-agent</option>
              <option value="ai-voice">AI Voice Agent</option>
              <option value="complete-package">Komplet pakke</option>
              <option value="consultation">Konsultation</option>
            </select>
          </div>
        )}

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
            Besked
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={compact ? 3 : 5}
            className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
            placeholder={compact ? "Kort besked..." : "Fortæl os om dit projekt eller dine behov..."}
          />
        </div>

        {/* GDPR Consent */}
        <div className="bg-gray-900 rounded-lg p-4 border border-gray-600">
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="gdprConsent"
              name="gdprConsent"
              checked={formData.gdprConsent}
              onChange={handleInputChange}
              required
              className="mt-1 w-4 h-4 text-blue-500 bg-gray-700 border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
            />
            <label htmlFor="gdprConsent" className="text-sm text-gray-300 leading-relaxed">
              Jeg accepterer at Leadstrøm behandler mine personoplysninger i henhold til{' '}
              <button
                type="button"
                onClick={() => window.location.href = '/privatlivspolitik'}
                className="text-blue-400 hover:text-blue-300 underline"
              >
                privatlivspolitikken
              </button>
              . Mine data bruges kun til at kontakte mig vedrørende min henvendelse. *
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status.type === 'loading'}
          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 font-medium text-lg flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status.type === 'loading' ? (
            <>
              <Loader2 size={20} className="animate-spin" />
              Sender...
            </>
          ) : (
            <>
              <Send size={20} />
              Send besked
            </>
          )}
        </button>
      </form>

      {!compact && (
        <div className="mt-8 pt-6 border-t border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-400">
            <div>
              <p className="font-medium text-gray-300 mb-2">📞 Responstid</p>
              <p>Vi svarer inden for 24 timer på hverdage</p>
            </div>
            <div>
              <p className="font-medium text-gray-300 mb-2">🔒 Datasikkerhed</p>
              <p>Dine oplysninger behandles sikkert og fortroligt</p>
            </div>
          </div>
        </div>
      )}

      {compact && (
        <div className="mt-6 pt-4 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-400">
            📞 Vi svarer inden for 24 timer • 🔒 Sikker behandling af data
          </p>
        </div>
      )}
    </div>
  );
};

export default ContactForm;