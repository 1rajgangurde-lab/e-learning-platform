import React from 'react';
import { motion } from 'framer-motion';

const GlassCard = ({ children, className = "", onClick, hover = true, neon = false }) => {
  const baseClass = "bg-[#0F172A]/80 backdrop-blur-xl border border-white/5 rounded-3xl relative overflow-hidden";
  const hoverClass = hover ? "hover:bg-[#1E293B]/80 hover:border-blue-500/30 transition-all duration-300" : "";
  const neonClass = neon ? "shadow-[0_0_15px_rgba(37,99,235,0.15)] hover:shadow-[0_0_25px_rgba(37,99,235,0.3)]" : "";

  return (
    <motion.div 
      className={`${baseClass} ${hoverClass} ${neonClass} ${className}`}
      onClick={onClick}
      whileHover={hover ? { y: -4 } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Subtle top glow line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      {children}
    </motion.div>
  );
};

export default GlassCard;
