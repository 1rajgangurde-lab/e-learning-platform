import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlowBackground from './GlowBackground';
import ParticleLayer from './ParticleLayer';
import AnimatedLogo from './AnimatedLogo';
import TextReveal from './TextReveal';
import LoadingProgress from './LoadingProgress';
import PortalTransition from './PortalTransition';

const SplashScreen = ({ onComplete }) => {
  const [logoDrawn, setLogoDrawn] = useState(false);
  const [progressComplete, setProgressComplete] = useState(false);
  const [startPortal, setStartPortal] = useState(false);

  const handleDrawComplete = () => {
    setLogoDrawn(true);
  };

  const handleProgressComplete = () => {
    setProgressComplete(true);
    setStartPortal(true);
  };

  const handlePortalComplete = () => {
    // Slight delay after portal flash to transition
    setTimeout(() => {
      onComplete();
    }, 200);
  };

  return (
    <motion.div 
      className="fixed inset-0 z-[100] bg-[#020617] flex flex-col items-center justify-center overflow-hidden"
      exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <GlowBackground />
        <ParticleLayer count={25} />
        
        <div className="relative z-20 flex flex-col items-center">
          <AnimatedLogo onDrawComplete={handleDrawComplete} />
          
          <div className="h-16 mt-6 flex items-center justify-center">
            {logoDrawn && (
              <TextReveal 
                text="AI E-Learning" 
                className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 drop-shadow-[0_0_15px_rgba(37,99,235,0.4)]"
              />
            )}
          </div>
        </div>

        <div className="absolute bottom-20 w-full px-6">
          <LoadingProgress 
            duration={2500} 
            onComplete={handleProgressComplete} 
          />
        </div>

      <PortalTransition 
        isActive={startPortal} 
        onComplete={handlePortalComplete} 
      />
    </motion.div>
  );
};

export default SplashScreen;
