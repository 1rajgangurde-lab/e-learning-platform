import React from 'react';
import { motion } from 'framer-motion';

const LoadingSkeleton = ({ width = "w-full", height = "h-4", className = "", rounded = "rounded-xl" }) => {
  return (
    <motion.div
      initial={{ opacity: 0.3 }}
      animate={{ opacity: 0.7 }}
      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", repeatType: "reverse" }}
      className={`bg-slate-700/30 ${width} ${height} ${rounded} ${className}`}
    />
  );
};

export default LoadingSkeleton;
