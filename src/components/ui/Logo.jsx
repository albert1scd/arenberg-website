import React from 'react';

export const ArenbergLogo = ({ isCollapsed }) => (
  <div className={`relative ${isCollapsed ? 'h-8 w-8' : 'h-12 w-auto'} flex items-center justify-center gap-3`}>
    <img 
      src="/path-to-your-logo.png" // Replace with your logo path
      alt="Arenberg Logo"
      className={`h-full w-auto object-contain ${isCollapsed ? 'rounded-full' : ''}`}
    />
    {!isCollapsed && (
      <span className="font-bold text-lg">Arenberg</span>
    )}
  </div>
);
