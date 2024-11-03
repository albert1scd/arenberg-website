import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { ROOMS_DATA } from '../../utils/constants';

export const RoomsPage = () => {
  const { theme, language } = useTheme();
  
  return (
    <div className="p-8 py-12 space-y-12">
      <h2 className="text-4xl font-bold">
        {language === 'nl' ? 'Onze Kamers' : 'Our Rooms'}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ROOMS_DATA.map((room) => (
          <div
            key={room.id}
            className={`${theme.cardBg} rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}
          >
            <div className="relative h-48 overflow-hidden">
              <img 
                src={`/api/placeholder/400/${300 + room.id * 20}`}
                alt={room.title}
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-1 rounded-full">
                {room.price}
              </div>
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-semibold">{room.title}</h3>
              <ul className="space-y-2">
                {room.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
