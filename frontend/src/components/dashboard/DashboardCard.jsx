import React from 'react';
import GlassCard from '../ui/GlassCard';

const DashboardCard = ({ title, value, icon: Icon, colorClass = "text-blue-400" }) => {
  return (
    <GlassCard className="p-6 border-slate-700/50 flex items-center gap-4 group hover:border-slate-500/50 transition-colors">
      <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 bg-slate-800 border border-slate-700 shadow-inner group-hover:scale-110 transition-transform ${colorClass}`}>
        <Icon className="w-7 h-7 drop-shadow-md" />
      </div>
      <div>
        <h3 className="text-sm font-medium text-slate-400 mb-1">{title}</h3>
        <p className="text-2xl font-bold text-white">{value}</p>
      </div>
    </GlassCard>
  );
};

export default DashboardCard;
