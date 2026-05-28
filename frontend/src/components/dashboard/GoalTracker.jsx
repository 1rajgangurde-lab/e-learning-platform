import React from 'react';
import { Target } from 'lucide-react';
import { motion } from 'framer-motion';

const GoalTracker = ({ progress = 85 }) => {
  return (
    <div>
      <div className="flex justify-between items-end mb-4">
        <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
          <Target className="w-5 h-5 text-primary" />
          <span className="font-bold text-sm">Weekly Goal</span>
        </div>
        <span className="text-2xl font-bold text-slate-900 dark:text-white">{progress}%</span>
      </div>
      <div className="w-full h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="h-full bg-primary rounded-full"
        />
      </div>
      <p className="text-xs text-slate-500 mt-3">You need 15% more to reach your goal!</p>
    </div>
  );
};

export default GoalTracker;
