import React from 'react';
import GlassCard from '../ui/GlassCard';
import { Zap } from 'lucide-react';

const XPCard = ({ xp = 1250, nextLevel = 2000, level = "Explorer" }) => {
  const progress = (xp / nextLevel) * 100;

  return (
    <GlassCard className="p-5 relative overflow-hidden group border-yellow-500/30 bg-gradient-to-br from-slate-900/80 to-yellow-950/20 shadow-[0_0_15px_rgba(234,179,8,0.1)] hover:shadow-[0_0_25px_rgba(234,179,8,0.2)]">
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity blur-md">
        <Zap className="w-24 h-24 text-yellow-500" />
      </div>
      
      <div className="flex items-center gap-3 mb-4 relative z-10">
        <div className="p-2 bg-yellow-500/20 border border-yellow-500/40 rounded-lg shadow-[0_0_10px_rgba(234,179,8,0.4)]">
          <Zap className="w-6 h-6 text-yellow-400 drop-shadow-[0_0_5px_rgba(234,179,8,1)]" />
        </div>
        <div>
          <h3 className="font-semibold text-white">Total XP</h3>
          <p className="text-xs text-yellow-500/80">Level: {level}</p>
        </div>
      </div>
      
      <div className="mb-2 flex justify-between items-end relative z-10">
        <span className="text-3xl font-bold text-yellow-400 drop-shadow-[0_0_5px_rgba(234,179,8,0.5)]">{xp}</span>
        <span className="text-sm font-medium text-slate-500">/ {nextLevel} XP</span>
      </div>
      
      <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden border border-slate-700/50 relative z-10">
        <div 
          className="bg-gradient-to-r from-yellow-600 to-yellow-400 h-2.5 rounded-full shadow-[0_0_10px_rgba(234,179,8,0.8)] transition-all duration-1000 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </GlassCard>
  );
};

export default XPCard;
