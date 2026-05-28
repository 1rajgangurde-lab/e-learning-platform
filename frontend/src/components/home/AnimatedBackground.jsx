import React from 'react';

const AnimatedBackground = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-[#020617] overflow-hidden text-slate-50 selection:bg-blue-500/30">
      {/* Base Layer: Deep Dark Background #020617 (already set on wrapper) */}

      {/* Layer 2: Animated Blobs via CSS/Divs (Optimized) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[120px] mix-blend-screen animate-blob" />
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[60%] rounded-full bg-purple-600/10 blur-[120px] mix-blend-screen animate-blob animation-delay-2000" />
        <div className="absolute -bottom-[20%] left-[20%] w-[60%] h-[50%] rounded-full bg-cyan-600/10 blur-[120px] mix-blend-screen animate-blob animation-delay-4000" />
      </div>

      {/* Layer 3 (Particles), Layer 4 (Glow), and Layer 5 (Hero) are injected inside children */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default AnimatedBackground;
