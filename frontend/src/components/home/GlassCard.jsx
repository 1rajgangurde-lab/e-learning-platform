import React from 'react';
import { motion } from 'framer-motion';

const GlassCard = ({ children, className = '', hover = true, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      className={`relative group overflow-hidden rounded-2xl border border-white/10 bg-[#0F172A]/80 backdrop-blur-xl transition-all duration-300 ${hover ? 'hover:shadow-[0_0_40px_rgba(37,99,235,0.15)] hover:border-blue-500/30' : ''} ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      {children}
    </motion.div>
  );
};

export default GlassCard;
