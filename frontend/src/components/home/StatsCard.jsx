import React from 'react';
import { motion } from 'framer-motion';

const StatsCard = ({ icon: Icon, value, label, delay = 0, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className={`flex items-center gap-4 bg-[#0F172A]/80 backdrop-blur-md border border-white/10 rounded-2xl p-4 shadow-[0_0_30px_rgba(37,99,235,0.1)] hover:border-blue-500/30 hover:shadow-[0_0_40px_rgba(37,99,235,0.2)] transition-all ${className}`}
    >
      <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <div className="text-2xl font-bold text-white tracking-tight">{value}</div>
        <div className="text-sm text-slate-400 font-medium">{label}</div>
      </div>
    </motion.div>
  );
};

export default StatsCard;
