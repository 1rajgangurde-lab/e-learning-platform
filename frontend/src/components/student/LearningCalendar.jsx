import React from 'react';
import GlassCard from '../ui/GlassCard';

const LearningCalendar = () => {
  // Simple mock heatmap for the past 30 days
  const days = Array.from({ length: 35 }, (_, i) => {
    const active = Math.random() > 0.4;
    const intensity = Math.floor(Math.random() * 4); // 0-3
    return { id: i, active, intensity };
  });

  const getIntensityClass = (intensity) => {
    switch (intensity) {
      case 1: return 'bg-blue-900/50 border-blue-800/50';
      case 2: return 'bg-blue-600/80 border-blue-500 shadow-[0_0_5px_rgba(37,99,235,0.4)]';
      case 3: return 'bg-purple-500 border-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.6)]';
      default: return 'bg-slate-800/50 border-slate-700/50';
    }
  };

  return (
    <GlassCard className="p-6 border-slate-700/50">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-white">Activity Heatmap</h3>
        <span className="text-xs text-slate-400">Last 35 days</span>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {days.map(day => (
          <div 
            key={day.id} 
            className={`aspect-square rounded-sm border ${getIntensityClass(day.active ? day.intensity : 0)} transition-colors hover:border-white/50 cursor-pointer`}
            title="Activity details here"
          />
        ))}
      </div>
      <div className="flex items-center justify-end gap-2 mt-4 text-xs text-slate-400">
        <span>Less</span>
        <div className="w-3 h-3 rounded-sm bg-slate-800/50 border border-slate-700/50" />
        <div className="w-3 h-3 rounded-sm bg-blue-900/50 border border-blue-800/50" />
        <div className="w-3 h-3 rounded-sm bg-blue-600/80 border border-blue-500" />
        <div className="w-3 h-3 rounded-sm bg-purple-500 border border-purple-400" />
        <span>More</span>
      </div>
    </GlassCard>
  );
};

export default LearningCalendar;
