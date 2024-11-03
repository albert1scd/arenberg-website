import React from 'react';

export const ArenbergLogo = ({ isCollapsed }) => (
  <div className={`relative ${isCollapsed ? 'h-8 w-8' : 'h-12 w-24'} flex items-center justify-center`}>
    <svg viewBox="0 0 120 60" className="w-full h-full">
      <circle 
        cx="60" 
        cy="30" 
        r="25" 
        className="fill-blue-400 animate-pulse" 
      />
    </svg>
    {!isCollapsed && (
      <span className="relative z-10 font-bold text-lg text-white">Arenberg</span>
    )}
  </div>
);
