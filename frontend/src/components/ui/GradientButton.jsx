import React from 'react';
import { motion } from 'framer-motion';

const GradientButton = ({ children, onClick, className = "", disabled, type = "button" }) => {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      className={`px-6 py-3 rounded-xl font-medium text-white bg-gradient-to-r from-blue-600 via-purple-500 to-cyan-500 hover:from-blue-500 hover:via-purple-400 hover:to-cyan-400 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default GradientButton;
