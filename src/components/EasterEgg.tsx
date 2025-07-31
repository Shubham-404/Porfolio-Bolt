import React, { useState } from 'react';
import { RotateCcw } from 'lucide-react';

interface EasterEggProps {
  isActive: boolean;
  onToggle: () => void;
}

const EasterEgg: React.FC<EasterEggProps> = ({ isActive, onToggle }) => {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button
        onClick={onToggle}
        className={`group relative px-6 py-3 rounded-lg font-mono text-sm transition-all duration-500 transform hover:scale-110 ${
          isActive
            ? 'animate-pulse'
            : ''
        }`}
        style={{
          background: isActive 
            ? 'linear-gradient(to right, #FF0000, #FF2C58)' 
            : 'linear-gradient(to right, #712AFF, #FF2C58)',
          color: '#F0F0F0',
          boxShadow: isActive ? 'none' : '0 4px 20px rgba(113, 42, 255, 0.25)'
        }}
      >
        <div className="flex items-center space-x-2">
          <RotateCcw className={`w-4 h-4 transition-transform duration-500 ${isActive ? 'rotate-180' : ''}`} />
          <span>{isActive ? 'EXIT UPSIDE DOWN' : 'ENTER UPSIDE DOWN'}</span>
        </div>
        
        {/* Glowing Border */}
        <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10" 
             style={{ background: 'linear-gradient(to right, rgba(113, 42, 255, 0.2), rgba(255, 44, 88, 0.2))' }}></div>
        
        {/* Pulsing Dots */}
        <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: '#FF2C58' }}></div>
        <div className="absolute -bottom-1 -left-1 w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: '#00FFE4', animationDelay: '0.5s' }}></div>
      </button>
    </div>
  );
};

export default EasterEgg;