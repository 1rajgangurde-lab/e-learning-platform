import React from 'react';
import GlassCard from '../ui/GlassCard';
import { Flame, Info, Snowflake } from 'lucide-react';

const StreakCard = () => {
  const streak = { currentStreak: 12, longestStreak: 21, freezeAvailable: 1 }; // Mock data for now

  return (
    <GlassCard className="p-6 relative overflow-hidden group border-orange-500/30 bg-gradient-to-br from-slate-900/80 to-orange-950/40 shadow-[0_0_20px_rgba(249,115,22,0.15)] hover:shadow-[0_0_30px_rgba(249,115,22,0.3)] transition-all">
      <div className="absolute -right-6 -top-6 opacity-20 group-hover:scale-110 group-hover:opacity-30 transition-all duration-500 pointer-events-none">
        <Flame className="w-40 h-40 text-orange-500 blur-sm" />
      </div>
      
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-6">
          <h3 className="font-bold text-lg text-white flex items-center gap-2">
            Learning Streak
            <div className="group/tooltip relative">
              <Info className="w-4 h-4 text-orange-400 cursor-pointer" />
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-[#0F172A] border border-slate-700 text-slate-300 text-xs p-2 rounded text-center opacity-0 group-hover/tooltip:opacity-100 pointer-events-none transition-opacity shadow-xl">
                Maintained by studying every day!
              </div>
            </div>
          </h3>
          {streak.freezeAvailable > 0 && (
            <button className="bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/50 text-blue-400 px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1 transition-colors shadow-[0_0_10px_rgba(59,130,246,0.3)]">
              <Snowflake className="w-3 h-3" /> Freeze Day
            </button>
          )}
        </div>

        <div className="flex items-end gap-4 mb-2">
          <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 drop-shadow-[0_0_10px_rgba(249,115,22,0.8)]">
            {streak.currentStreak}
          </div>
          <div className="text-orange-400 mb-1 font-bold tracking-widest uppercase text-sm">Days</div>
        </div>
        
        <div className="text-orange-200/60 text-sm font-medium">
          Longest Streak: <span className="text-orange-300">{streak.longestStreak}</span> Days
        </div>
      </div>
    </GlassCard>
  );
};

export default StreakCard;
