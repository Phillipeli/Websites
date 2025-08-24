import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2, User, Mail, Phone, MessageSquare } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

interface AirtableContactFormProps {
  className?: string;
  title?: string;
  subtitle?: string;
}

const AirtableContactForm: React.FC<AirtableContactFormProps> = ({ 
  className = '',
  title = 'Kontakt os',
  subtitle = 'Udfyld formularen nedenfor, så kontakter vi dig inden for 24 timer'
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: ''
  });

  // Airtable configuration - UPDATE THESE VALUES
  const AIRTABLE_CONFIG = {
    apiKey: 'YOUR_AIRTABLE_API_KEY', // Replace with your API key
    baseId: 'YOUR_BASE_ID', // Replace with your base ID
    tableName: 'YOUR_TABLE_NAME' // Replace with your table name
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = (): string | null => {
    if (!formData.name.trim()) return 'Navn er påkrævet';
    if (!formData.email.trim()) return 'Email er påkrævet';
    if (!formData.phone.trim()) return 'Telefon er påkrævet';
    if (!formData.message.trim()) return 'Besked er påkrævet';

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return 'Indtast en gyldig email-adresse';
    }

    return null;
  };

  const submitToAirtable = async (data: FormData) => {
    const airtableUrl = `https://api.airtable.com/v0/${AIRTABLE_CONFIG.baseId}/${AIRTABLE_CONFIG.tableName}`;
    
    const payload = {
      records: [
        {
          fields: {
            Name: data.name,
            Email: data.email,
            Phone: data.phone,
            Message: data.message,
            'Submitted At': new Date().toISOString(),
            Status: 'New'
          }
        }
      ]
    };

    const response = await fetch(airtableUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${AIRTABLE_CONFIG.apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || 'Failed to submit to Airtable');
    }

    return await response.json();
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

    // Check if Airtable is configured
    if (AIRTABLE_CONFIG.apiKey === 'YOUR_AIRTABLE_API_KEY') {
      setStatus({
        type: 'error',
        message: 'Airtable integration er ikke konfigureret endnu. Kontakt administratoren.'
      });
      return;
    }

    setStatus({
      type: 'loading',
      message: 'Sender din henvendelse...'
    });

    try {
      await submitToAirtable(formData);
      
      setStatus({
        type: 'success',
        message: 'Tak for din henvendelse! Vi kontakter dig snarest.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error('Airtable submission error:', error);
      setStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Der opstod en fejl. Prøv igen senere.'
      });
    }
  };

  return (
    <div className={`bg-gray-800 rounded-2xl border border-gray-700 p-8 ${className}`}>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
        <p className="text-gray-300">{subtitle}</p>
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
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
            <div className="flex items-center gap-2">
              <User size={16} />
              Navn *
            </div>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            placeholder="Dit fulde navn"
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            <div className="flex items-center gap-2">
              <Mail size={16} />
              Email *
            </div>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            placeholder="din@email.dk"
          />
        </div>

        {/* Phone Field */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
            <div className="flex items-center gap-2">
              <Phone size={16} />
              Telefon *
            </div>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            placeholder="+45 12 34 56 78"
          />
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
            <div className="flex items-center gap-2">
              <MessageSquare size={16} />
              Besked *
            </div>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={5}
            className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical transition-all duration-300"
            placeholder="Fortæl os om dit projekt eller dine behov..."
          />
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
              <div className="group-hover:translate-x-1 transition-transform duration-300">
                →
              </div>
            </>
          )}
        </button>
      </form>

      {/* Footer Info */}
      <div className="mt-8 pt-6 border-t border-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-400">
          <div>
            <p className="font-medium text-gray-300 mb-2">📞 Responstid</p>
            <p>Vi svarer inden for 24 timer på hverdage</p>
          </div>
          <div>
            <p className="font-medium text-gray-300 mb-2">🔒 Datasikkerhed</p>
            <p>Dine oplysninger behandles sikkert via Airtable</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirtableContactForm;