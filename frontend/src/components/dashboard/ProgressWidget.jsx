import React from 'react';
import { BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const ProgressWidget = ({ title, progress, icon: Icon = BookOpen }) => {
  return (
    <div className="p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center gap-4">
      <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/20 text-primary flex items-center justify-center shrink-0">
        <Icon className="w-6 h-6" />
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-end mb-2">
          <h4 className="text-sm font-bold text-slate-900 dark:text-white">{title}</h4>
          <span className="text-xs font-medium text-slate-500">{progress}%</span>
        </div>
        <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1 }}
            className="h-full bg-primary rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ProgressWidget;
