import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const [language, setLanguage] = useState('nl');

  // Check system preference on mount
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
    }
  }, []);

  const theme = {
    bg: isDark ? 'bg-gray-900' : 'bg-blue-50',
    text: isDark ? 'text-white' : 'text-gray-900',
    navBg: isDark ? 'bg-gray-800' : 'bg-white',
    cardBg: isDark ? 'bg-gray-800' : 'bg-white',
    highlight: isDark ? 'bg-blue-500' : 'bg-blue-600',
    border: isDark ? 'border-gray-700' : 'border-blue-100',
    hover: isDark ? 'hover:bg-gray-700' : 'hover:bg-blue-50',
    input: isDark ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'
  };

  // Apply dark mode class to body
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ theme, isDark, setIsDark, language, setLanguage }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
