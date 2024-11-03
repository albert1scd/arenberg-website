import React from 'react';
import { ChevronDown, Star, Shield, Heart, Coffee, Book, Users, Clock } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { AnimatedBackground } from '../ui/AnimatedBackground';

export const HomePage = ({ onRoomsClick }) => {
  const { theme, language } = useTheme();
  
  const features = [
    {
      icon: Star,
      titleNL: 'Premium Locatie',
      titleEN: 'Premium Location',
      descNL: 'In het hart van Leuven',
      descEN: 'In the heart of Leuven'
    },
    {
      icon: Shield,
      titleNL: 'Veiligheid',
      titleEN: 'Security',
      descNL: '24/7 toegangscontrole',
      descEN: '24/7 access control'
    },
    {
      icon: Heart,
      titleNL: 'Community',
      titleEN: 'Community',
      descNL: 'Hechte studentengemeenschap',
      descEN: 'Close-knit student community'
    },
    {
      icon: Coffee,
      titleNL: 'Faciliteiten',
      titleEN: 'Facilities',
      descNL: 'Moderne voorzieningen',
      descEN: 'Modern amenities'
    }
  ];

  const stats = [
    {
      icon: Book,
      valueNL: '50+',
      valueEN: '50+',
      labelNL: 'Kamers',
      labelEN: 'Rooms'
    },
    {
      icon: Users,
      valueNL: '200+',
      valueEN: '200+',
      labelNL: 'Studenten',
      labelEN: 'Students'
    },
    {
      icon: Clock,
      valueNL: '30+',
      valueEN: '30+',
      labelNL: 'Jaren Ervaring',
      labelEN: 'Years Experience'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center p-8">
        <AnimatedBackground />
        <div className="relative text-center space-y-8 max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold mb-6">
            Studentenhuis Arenberg
          </h1>
          <p className="text-2xl mb-8">
            {language === 'nl' ? 'Samen op kot in Leuven' : 'Student Housing in Leuven'}
          </p>
          <button
            onClick={onRoomsClick}
            className="group px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all"
          >
            {language === 'nl' ? 'Ontdek onze kamers' : 'Discover our rooms'}
            <ChevronDown className="inline-block ml-2 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className={`py-20 ${theme.cardBg}`}>
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-center mb-16">
            {language === 'nl' ? 'Waarom Arenberg?' : 'Why Arenberg?'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 mb-6">
                    <Icon className="w-8 h-8 text-blue-600 dark:text-blue-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {language === 'nl' ? feature.titleNL : feature.titleEN}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {language === 'nl' ? feature.descNL : feature.descEN}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <Icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                  <div className="text-4xl font-bold mb-2">
                    {language === 'nl' ? stat.valueNL : stat.valueEN}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">
                    {language === 'nl' ? stat.labelNL : stat.labelEN}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 ${theme.cardBg}`}>
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {language === 'nl' 
              ? 'Klaar om deel te worden van onze gemeenschap?' 
              : 'Ready to join our community?'}
          </h2>
          <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
            {language === 'nl'
              ? 'Neem contact met ons op voor meer informatie of om een bezoek te plannen.'
              : 'Contact us for more information or to schedule a visit.'}
          </p>
          <button
            onClick={() => window.location.href = 'mailto:lambert.pierre@telenet.be'}
            className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all"
          >
            {language === 'nl' ? 'Contacteer Ons' : 'Contact Us'}
          </button>
        </div>
      </section>
    </div>
  );
};
