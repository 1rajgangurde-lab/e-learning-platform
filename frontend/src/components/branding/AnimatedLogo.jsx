import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedLogo = ({ onDrawComplete }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Trigger the book open effect slightly after drawing finishes
    const timer = setTimeout(() => {
      setIsOpen(true);
      if (onDrawComplete) onDrawComplete();
    }, 2200); // Path animation takes 2s
    
    return () => clearTimeout(timer);
  }, [onDrawComplete]);

  // Book SVG path definition
  // Simplified elegant book icon
  const bookPathLeft = "M4 19.5A2.5 2.5 0 0 1 6.5 17H20";
  const bookPathRight = "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z";
  
  return (
    <div className="relative z-20 flex items-center justify-center">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-24 h-24 stroke-blue-500 drop-shadow-[0_0_15px_rgba(37,99,235,0.8)]"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <motion.path
          d={bookPathRight}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <motion.path
          d={bookPathLeft}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
        />
        
        {/* Glow burst when opening */}
        {isOpen && (
          <motion.circle
            cx="12"
            cy="12"
            r="2"
            fill="#7C3AED"
            initial={{ scale: 0, opacity: 0.8 }}
            animate={{ scale: 15, opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="origin-center"
          />
        )}
      </motion.svg>
    </div>
  );
};

export default AnimatedLogo;
