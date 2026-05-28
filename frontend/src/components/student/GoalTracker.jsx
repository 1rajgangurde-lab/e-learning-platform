import React from 'react';
import GlassCard from '../ui/GlassCard';
import { Target } from 'lucide-react';

const GoalTracker = ({ current = 3, target = 5 }) => {
  const percentage = (current / target) * 100;

  return (
    <GlassCard className="p-6 border-slate-700/50 bg-gradient-to-br from-slate-800/80 to-slate-900/80">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <Target className="w-5 h-5 text-accent" /> Weekly Goal
        </h3>
        <span className="text-sm font-bold text-slate-400">{current}/{target} Days</span>
      </div>
      
      <div className="flex gap-2 mb-4">
        {[...Array(target)].map((_, i) => (
          <div key={i} className={`flex-1 h-2 rounded-full transition-all duration-500 ${i < current ? 'bg-accent shadow-[0_0_8px_rgba(6,182,212,0.6)]' : 'bg-slate-700'}`} />
        ))}
      </div>
      
      <p className="text-sm text-slate-400">
        {current >= target 
          ? "Goal reached! You're on fire! 🔥" 
          : `Only ${target - current} more days to reach your goal.`}
      </p>
    </GlassCard>
  );
};

export default GoalTracker;
