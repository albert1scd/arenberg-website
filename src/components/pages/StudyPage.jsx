import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { Book, Library, Coffee, Users } from 'lucide-react';

export const StudyPage = () => {
  const { theme, language } = useTheme();
  
  const facilities = [
    {
      icon: Book,
      titleNL: 'Studeerkamer',
      titleEN: 'Study Room',
      descNL: 'Rustige ruimte voor geconcentreerd studeren',
      descEN: 'Quiet space for focused studying'
    },
    {
      icon: Library,
      titleNL: 'Bibliotheek',
      titleEN: 'Library',
      descNL: 'Toegang tot studiemateriaal en resources',
      descEN: 'Access to study materials and resources'
    },
    {
      icon: Coffee,
      titleNL: 'Koffiehoek',
      titleEN: 'Coffee Corner',
      descNL: 'Perfecte plek voor studie pauzes',
      descEN: 'Perfect spot for study breaks'
    },
    {
      icon: Users,
      titleNL: 'Groepsruimtes',
      titleEN: 'Group Spaces',
      descNL: 'Ideaal voor groepsprojecten',
      descEN: 'Ideal for group projects'
    }
  ];

  return (
    <div className="p-8 py-12 space-y-12">
      <h2 className="text-4xl font-bold">
        {language === 'nl' ? 'Studeer Faciliteiten' : 'Study Facilities'}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {facilities.map((facility, index) => {
          const Icon = facility.icon;
          return (
            <div
              key={index}
              className={`${theme.cardBg} rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow`}
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-100 rounded-lg dark:bg-blue-900">
                  <Icon className="w-6 h-6 text-blue-600 dark:text-blue-300" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {language === 'nl' ? facility.titleNL : facility.titleEN}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {language === 'nl' ? facility.descNL : facility.descEN}
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
