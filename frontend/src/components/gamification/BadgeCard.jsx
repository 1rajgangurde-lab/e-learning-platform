import React from 'react';
import GlassCard from '../ui/GlassCard';
import { Shield } from 'lucide-react';

const BadgeCard = ({ title, description, icon: Icon = Shield, locked = false, rare = false }) => {
  let glowStyle = "shadow-[0_0_15px_rgba(59,130,246,0.3)] border-blue-500/30 group-hover:border-blue-500 hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] bg-slate-900/40";
  let iconGlow = "text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]";
  let iconBg = "bg-blue-500/20";
  
  if (locked) {
    glowStyle = "opacity-50 grayscale blur-[1px] border-slate-700/50 bg-slate-900/20 shadow-none";
    iconGlow = "text-slate-500";
    iconBg = "bg-slate-800";
  } else if (rare) {
    glowStyle = "shadow-[0_0_20px_rgba(234,179,8,0.4)] border-yellow-500/50 group-hover:border-yellow-400 hover:shadow-[0_0_35px_rgba(234,179,8,0.7)] bg-gradient-to-br from-yellow-900/20 to-slate-900/40";
    iconGlow = "text-yellow-400 drop-shadow-[0_0_10px_rgba(234,179,8,1)]";
    iconBg = "bg-yellow-500/20";
  }

  return (
    <GlassCard className={`p-6 flex flex-col items-center text-center transition-all duration-300 group ${glowStyle}`}>
      <div className={`p-4 rounded-full mb-4 relative ${iconBg} ${!locked ? 'group-hover:animate-pulse' : ''}`}>
        {!locked && <div className={`absolute inset-0 rounded-full blur-md ${rare ? 'bg-yellow-500/30' : 'bg-blue-500/30'}`} />}
        <Icon className={`w-12 h-12 relative z-10 ${iconGlow}`} />
      </div>
      <h3 className={`font-bold mb-2 ${rare ? 'text-yellow-400' : 'text-white'}`}>{title}</h3>
      <p className="text-sm text-slate-400">{description}</p>
    </GlassCard>
  );
};

export default BadgeCard;
