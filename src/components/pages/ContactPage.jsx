import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { Phone, Mail, MapPin, User } from 'lucide-react';

export const ContactPage = () => {
  const { theme, language } = useTheme();
  
  return (
    <div className="p-8 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          <h2 className="text-4xl font-bold mb-8">
            {language === 'nl' ? 'Contact' : 'Contact Us'}
          </h2>
          
          {/* Contact Person */}
          <div className={`${theme.cardBg} p-6 rounded-xl space-y-6`}>
            <div className="flex items-start space-x-4">
              <User className="w-6 h-6 text-blue-500 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">
                  {language === 'nl' ? 'Contactpersoon' : 'Contact Person'}
                </h3>
                <p className="font-medium">Pierre Lambert</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-blue-500 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">
                  {language === 'nl' ? 'Telefoon' : 'Phone'}
                </h3>
                <a 
                  href="tel:+3216232152" 
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  +32 16 23 21 52
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-blue-500 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Email</h3>
                <a 
                  href="mailto:lambert.pierre@telenet.be"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  lambert.pierre@telenet.be
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-blue-500 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">
                  {language === 'nl' ? 'Adres' : 'Address'}
                </h3>
                <p>Schapenstraat 29</p>
                <p>3000 Leuven</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className={`${theme.cardBg} p-8 rounded-xl space-y-6`}>
          <h3 className="text-2xl font-bold mb-6">
            {language === 'nl' ? 'Stuur ons een bericht' : 'Send us a message'}
          </h3>
          
          <div>
            <label className="block mb-2 font-medium">
              {language === 'nl' ? 'Naam en voornaam' : 'Full name'}
            </label>
            <input
              type="text"
              className={`w-full px-4 py-3 rounded-lg border ${theme.border} bg-white dark:bg-gray-800 
                focus:ring-2 focus:ring-blue-400 outline-none transition-all`}
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              className={`w-full px-4 py-3 rounded-lg border ${theme.border} bg-white dark:bg-gray-800
                focus:ring-2 focus:ring-blue-400 outline-none transition-all`}
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              {language === 'nl' ? 'Onderwerp' : 'Subject'}
            </label>
            <input
              type="text"
              className={`w-full px-4 py-3 rounded-lg border ${theme.border} bg-white dark:bg-gray-800
                focus:ring-2 focus:ring-blue-400 outline-none transition-all`}
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              {language === 'nl' ? 'Bericht' : 'Message'}
            </label>
            <textarea
              className={`w-full px-4 py-3 rounded-lg border ${theme.border} bg-white dark:bg-gray-800
                focus:ring-2 focus:ring-blue-400 outline-none transition-all`}
              rows="4"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium 
              hover:bg-blue-700 transition-colors"
          >
            {language === 'nl' ? 'Versturen' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
};
