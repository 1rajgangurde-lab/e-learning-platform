import React from 'react';
import { useStreak } from '../../hooks/useStreak';

const WeeklyHeatmap = () => {
  const { data } = useStreak();
  const history = data?.data?.activityHistory || [];

  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  
  const today = new Date();
  const weekData = Array.from({ length: 7 }).map((_, i) => {
    const d = new Date(today);
    d.setDate(d.getDate() - (6 - i));
    
    const record = history.find(h => new Date(h.date).toDateString() === d.toDateString());
    return {
      day: days[d.getDay() === 0 ? 6 : d.getDay() - 1], // Monday = 0
      isActive: !!record,
      lessons: record?.lessonsCompleted || 0
    };
  });

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
      <h3 className="font-bold text-slate-900 dark:text-white mb-6">Activity Heatmap</h3>
      <div className="flex justify-between items-end h-32 gap-2">
        {weekData.map((d, i) => (
          <div key={i} className="flex flex-col items-center gap-3 flex-1 group relative">
            <div className="absolute bottom-full mb-2 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-10">
              {d.lessons} lessons
            </div>
            <div 
              className={`w-full rounded-md transition-all ${
                d.isActive 
                  ? 'bg-amber-500 hover:bg-amber-600' 
                  : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
              style={{ height: d.isActive ? `${Math.max(20, d.lessons * 20)}%` : '10%' }}
            ></div>
            <span className="text-xs font-bold text-slate-400">{d.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyHeatmap;
