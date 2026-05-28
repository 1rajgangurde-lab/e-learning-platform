import React from 'react';
import { motion } from 'framer-motion';

const PortalTransition = ({ isActive, onComplete }) => {
  if (!isActive) return null;

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Portal Expanding Circle */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 30, opacity: [0.8, 1, 0] }}
        transition={{ duration: 1.2, ease: "easeIn" }}
        className="w-32 h-32 rounded-full bg-blue-600/30 blur-[20px]"
        onAnimationComplete={onComplete}
      />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 30, opacity: [1, 1, 0] }}
        transition={{ duration: 1.2, ease: "easeIn", delay: 0.1 }}
        className="absolute w-32 h-32 rounded-full bg-cyan-400/40 blur-[30px]"
      />
    </motion.div>
  );
};

export default PortalTransition;
