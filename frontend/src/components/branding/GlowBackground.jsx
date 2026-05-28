import React from 'react';
import { motion } from 'framer-motion';

const GlowBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute inset-0 bg-[#020617]" />
      
      {/* Primary Glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.2, 1] }}
        transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-blue-600/20 blur-[120px] rounded-full"
      />
      
      {/* Secondary Accent */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-purple-600/20 blur-[100px] rounded-full"
      />
      
      {/* Cyan Accent */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2, delay: 1.5 }}
        className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-cyan-500/20 blur-[100px] rounded-full"
      />
    </div>
  );
};

export default GlowBackground;
