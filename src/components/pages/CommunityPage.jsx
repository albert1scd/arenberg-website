import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { Calendar, Music, Heart, Award } from 'lucide-react';

export const CommunityPage = () => {
  const { theme, language } = useTheme();
  
  const events = [
    {
      icon: Calendar,
      titleNL: 'Welkomstfeest',
      titleEN: 'Welcome Party',
      dateNL: 'September 2024',
      dateEN: 'September 2024',
      descNL: 'Start het academiejaar met je nieuwe huisgenoten',
      descEN: 'Start the academic year with your new housemates'
    },
    {
      icon: Music,
      titleNL: 'Muziekavond',
      titleEN: 'Music Night',
      dateNL: 'Maandelijks',
      dateEN: 'Monthly',
      descNL: 'Geniet van live muziek en gezelligheid',
      descEN: 'Enjoy live music and cozy atmosphere'
    },
    {
      icon: Heart,
      titleNL: 'Vrijwilligerswerk',
      titleEN: 'Volunteer Work',
      dateNL: 'Regelmatig',
      dateEN: 'Regular',
      descNL: 'Maak impact in de gemeenschap',
      descEN: 'Make an impact in the community'
    },
    {
      icon: Award,
      titleNL: 'Sporttoernooien',
      titleEN: 'Sports Tournaments',
      dateNL: 'Seizoensgebonden',
      dateEN: 'Seasonal',
      descNL: 'Competitieve en leuke sportactiviteiten',
      descEN: 'Competitive and fun sports activities'
    }
  ];

  return (
    <div className="p-8 py-12 space-y-12">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl font-bold mb-6">
          {language === 'nl' ? 'Onze Gemeenschap' : 'Our Community'}
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          {language === 'nl' 
            ? 'Bij Arenberg draait het niet alleen om studeren, maar ook om vriendschappen voor het leven maken.'
            : 'At Arenberg, it\'s not just about studying, but also about making lifelong friendships.'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {events.map((event, index) => {
          const Icon = event.icon;
          return (
            <div
              key={index}
              className={`${theme.cardBg} rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-100 rounded-lg dark:bg-blue-900">
                  <Icon className="w-6 h-6 text-blue-600 dark:text-blue-300" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {language === 'nl' ? event.titleNL : event.titleEN}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-300 text-sm mb-2">
                    {language === 'nl' ? event.dateNL : event.dateEN}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {language === 'nl' ? event.descNL : event.descEN}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};
