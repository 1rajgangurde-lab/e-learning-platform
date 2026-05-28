import React from 'react';
import { motion } from 'framer-motion';

const GlassTabs = ({ tabs, activeTab, onChange }) => {
  return (
    <div className="flex gap-2 p-1 bg-[#0F172A]/50 backdrop-blur-md rounded-2xl border border-slate-700/50 w-fit">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
              isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-blue-600/20 border border-blue-500/30 rounded-xl"
                initial={false}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              {tab.icon && <tab.icon className="w-4 h-4" />}
              {tab.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default GlassTabs;
