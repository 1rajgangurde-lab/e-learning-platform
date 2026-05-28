import React from 'react';
import GlassCard from '../ui/GlassCard';
import { Zap } from 'lucide-react';

const XPProgressBar = ({ currentXP = 3450, level = 12, nextLevelXP = 5000 }) => {
  const progress = (currentXP / nextLevelXP) * 100;

  return (
    <GlassCard className="p-6 border-slate-700/50 bg-slate-800/40 relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover:bg-blue-500/20 transition-all" />
      
      <div className="flex justify-between items-end mb-4 relative z-10">
        <div>
          <p className="text-blue-400 text-sm font-bold tracking-wider uppercase mb-1 flex items-center gap-1">
            <Zap className="w-4 h-4 fill-blue-400" /> Level {level}
          </p>
          <h3 className="text-3xl font-bold text-white">{currentXP.toLocaleString()} <span className="text-slate-500 text-lg">XP</span></h3>
        </div>
        <div className="text-right">
          <p className="text-slate-400 text-sm">Next Level</p>
          <p className="text-white font-medium">{nextLevelXP.toLocaleString()} XP</p>
        </div>
      </div>

      <div className="w-full h-3 bg-slate-900 rounded-full overflow-hidden border border-slate-700/50 relative z-10">
        <div 
          className="h-full bg-gradient-to-r from-blue-600 to-purple-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.6)] transition-all duration-1000 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </GlassCard>
  );
};

export default XPProgressBar;
