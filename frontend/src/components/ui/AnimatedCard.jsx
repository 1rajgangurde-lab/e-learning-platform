import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

export const AnimatedCard = ({ children, className, onClick, delay = 0, hover = "subtle" }) => {
  const hoverAnimations = {
    subtle: { y: -2, boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)" },
    spring: { scale: 1.05, rotate: [-1, 1, 0], transition: { type: "spring", stiffness: 300 } },
    glow: { boxShadow: "0 0 15px 2px rgba(139, 92, 246, 0.4)", y: -2 }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay }}
      whileHover={hoverAnimations[hover]}
      onClick={onClick}
      className={cn(
        "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm",
        onClick && "cursor-pointer",
        className
      )}
    >
      {children}
    </motion.div>
  );
};
