import React from 'react';
import GlowBackground from '../branding/GlowBackground';
import ParticleLayer from '../branding/ParticleLayer';

const ThemeLayout = ({ children, hideParticles = false }) => {
  return (
    <div className="relative min-h-screen bg-[#020617] text-white overflow-hidden flex flex-col selection:bg-blue-500/30">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <GlowBackground />
        
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPjxwb2x5Z29uIHBvaW50cz0iMCwwIDYwLDAgNjAsNjAgMCw2MCIvPjwvZz48L3N2Zz4=')] opacity-50" />
        
        {!hideParticles && <ParticleLayer count={20} />}
      </div>
      
      <div className="relative z-10 flex flex-col flex-1">
        {children}
      </div>
    </div>
  );
};

export default ThemeLayout;
