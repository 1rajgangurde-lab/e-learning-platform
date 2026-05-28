import React from 'react';
import GlassCard from '../ui/GlassCard';

const LessonProgress = ({ modules = [] }) => {
  const dummyModules = modules.length ? modules : [
    { name: 'Introduction', progress: 100 },
    { name: 'Core Concepts', progress: 50 },
    { name: 'Advanced Patterns', progress: 0 }
  ];

  return (
    <GlassCard className="p-6 border-slate-700/50 bg-slate-800/30 space-y-5">
      <h4 className="font-bold text-white mb-2">Module Progress</h4>
      {dummyModules.map((mod, idx) => (
        <div key={idx}>
          <div className="flex justify-between text-sm mb-1">
            <span className={mod.progress > 0 ? 'text-white font-medium' : 'text-slate-400'}>{mod.name}</span>
            <span className={mod.progress === 100 ? 'text-green-400' : 'text-slate-400'}>{mod.progress}%</span>
          </div>
          <div className="w-full bg-slate-900 rounded-full h-2 border border-slate-800">
            <div 
              className={`h-full rounded-full transition-all ${mod.progress === 100 ? 'bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.5)]' : 'bg-blue-500 shadow-[0_0_10px_rgba(37,99,235,0.5)]'}`} 
              style={{ width: `${mod.progress}%` }} 
            />
          </div>
        </div>
      ))}
    </GlassCard>
  );
};

export default LessonProgress;
