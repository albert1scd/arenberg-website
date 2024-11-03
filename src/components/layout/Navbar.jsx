import React, { useState, useEffect } from 'react';
import { Sun, Moon, ChevronLeft, Menu } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { NAVIGATION_ITEMS } from '../../utils/constants';
import { ArenbergLogo } from '../ui/Logo';

export const Navbar = ({ currentPage, onPageChange, isMenuOpen, onMenuToggle }) => {
  const { theme, language, setLanguage, isDark, setIsDark } = useTheme();
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Reset collapse state when menu closes on mobile
  useEffect(() => {
    if (!isMenuOpen) {
      setIsCollapsed(false);
    }
  }, [isMenuOpen]);
  
  return (
    <>
      <nav 
        className={`fixed left-0 top-0 h-full ${isCollapsed ? 'w-20' : 'w-72'} 
          ${theme.navBg} border-r ${theme.border} shadow-lg transform transition-all duration-300 z-50
          ${isMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
      >
        {/* Toggle button for desktop */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={`absolute -right-3 top-8 w-6 h-6 bg-blue-600 rounded-full text-white 
            flex items-center justify-center cursor-pointer hidden lg:flex
            hover:bg-blue-700 transition-colors`}
        >
          <ChevronLeft className={`w-4 h-4 transition-transform duration-300 
            ${isCollapsed ? 'rotate-180' : ''}`} />
        </button>

        {/* Logo Section */}
        <div className={`p-6 border-b border-gray-200 flex items-center 
          ${isCollapsed ? 'justify-center' : 'justify-center'}`}>
          <ArenbergLogo isCollapsed={isCollapsed} />
        </div>

        {/* Navigation Links */}
        <div className="py-6">
          {NAVIGATION_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`w-full flex items-center ${isCollapsed ? 'px-4' : 'px-6'} py-3 
                  ${isCollapsed ? 'justify-center' : 'justify-start'} space-x-4 group 
                  transition-all duration-300 relative
                  ${currentPage === item.id 
                    ? `${theme.highlight} text-white` 
                    : 'text-gray-600 hover:text-blue-600'}`}
                title={isCollapsed ? (language === 'nl' ? item.labelNL : item.labelEN) : ''}
              >
                <Icon className={`w-5 h-5 flex-shrink-0 ${
                  currentPage === item.id 
                    ? 'text-white' 
                    : 'text-gray-400 group-hover:text-blue-500'
                }`} />
                {!isCollapsed && (
                  <span className="font-medium truncate">
                    {language === 'nl' ? item.labelNL : item.labelEN}
                  </span>
                )}
                {currentPage === item.id && (
                  <div className="absolute right-0 w-1 h-full bg-blue-400" />
                )}
              </button>
            );
          })}
        </div>

        {/* Settings */}
        <div className={`absolute bottom-0 w-full p-6 border-t ${theme.border}`}>
          <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'} 
            flex-wrap gap-2`}>
            {!isCollapsed && (
              <button
                onClick={() => setLanguage(language === 'nl' ? 'en' : 'nl')}
                className={`px-3 py-1 rounded-full ${theme.hover} transition-colors font-medium`}
              >
                {language.toUpperCase()}
              </button>
            )}
            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-full ${theme.hover} transition-colors`}
              title={isDark ? 'Light mode' : 'Dark mode'}
            >
              {isDark ? 
                <Sun className="w-5 h-5 text-yellow-400" /> : 
                <Moon className="w-5 h-5 text-blue-600" />
              }
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Toggle */}
      <button
        onClick={onMenuToggle}
        className={`fixed top-4 left-4 z-50 p-2 rounded-full ${theme.navBg} 
          shadow-lg lg:hidden`}
      >
        {isMenuOpen ? (
          <ChevronLeft className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>
    </>
  );
};
