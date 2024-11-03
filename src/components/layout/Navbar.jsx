import React from 'react';
import { Sun, Moon, ArrowRight } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { NAVIGATION_ITEMS } from '../../utils/constants';
import { ArenbergLogo } from '../ui/Logo';

export const Navbar = ({ currentPage, onPageChange, isMenuOpen, onMenuToggle }) => {
  const { theme, language, setLanguage, isDark, setIsDark } = useTheme();
  
  return (
    <>
      <nav className={`fixed left-0 top-0 h-full w-72 ${theme.navBg} border-r ${theme.border} shadow-lg transform transition-transform duration-300 z-50
        ${isMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="p-6 border-b border-gray-200 flex items-center justify-center">
          <ArenbergLogo />
        </div>

        <div className="py-6">
          {NAVIGATION_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`w-full flex items-center px-6 py-3 space-x-4 group transition-all duration-300 relative
                  ${currentPage === item.id 
                    ? `${theme.highlight} text-white` 
                    : 'text-gray-600 hover:text-blue-600'}`}
              >
                <Icon className={`w-5 h-5 ${
                  currentPage === item.id 
                    ? 'text-white' 
                    : 'text-gray-400 group-hover:text-blue-500'
                }`} />
                <span className="font-medium">
                  {language === 'nl' ? item.labelNL : item.labelEN}
                </span>
                {currentPage === item.id && (
                  <div className="absolute right-0 w-1 h-full bg-blue-400" />
                )}
              </button>
            );
          })}
        </div>

        <div className={`absolute bottom-0 w-full p-6 border-t ${theme.border}`}>
          <div className="flex items-center justify-between">
            <button
              onClick={() => setLanguage(language === 'nl' ? 'en' : 'nl')}
              className={`px-3 py-1 rounded-full ${theme.hover} transition-colors font-medium`}
            >
              {language.toUpperCase()}
            </button>
            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-full ${theme.hover} transition-colors`}
            >
              {isDark ? 
                <Sun className="w-5 h-5 text-yellow-400" /> : 
                <Moon className="w-5 h-5 text-blue-600" />
              }
            </button>
          </div>
        </div>
      </nav>

      <button
        onClick={onMenuToggle}
        className={`fixed top-4 left-4 z-50 p-2 rounded-full ${theme.navBg} shadow-lg lg:hidden`}
      >
        <ArrowRight className={`w-6 h-6 transform transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} />
      </button>
    </>
  );
};
