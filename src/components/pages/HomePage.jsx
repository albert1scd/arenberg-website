import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { AnimatedBackground } from '../ui/AnimatedBackground';

export const HomePage = ({ onRoomsClick }) => {
  const { language } = useTheme();
  
  return (
    <div className="relative min-h-screen flex items-center justify-center p-8">
      <AnimatedBackground />
      <div className="relative text-center space-y-8">
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
    </div>
  );
};
