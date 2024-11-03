import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const [language, setLanguage] = useState('nl');

  const theme = {
    bg: isDark ? 'bg-gray-900' : 'bg-blue-50',
    text: isDark ? 'text-white' : 'text-gray-900',
    navBg: isDark ? 'bg-gray-800' : 'bg-white',
    cardBg: isDark ? 'bg-gray-800' : 'bg-white',
    highlight: isDark ? 'bg-blue-500' : 'bg-blue-600',
    border: isDark ? 'border-gray-700' : 'border-blue-100',
    hover: isDark ? 'hover:bg-gray-700' : 'hover:bg-blue-50'
  };

  return (
    <ThemeContext.Provider value={{ theme, isDark, setIsDark, language, setLanguage }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
