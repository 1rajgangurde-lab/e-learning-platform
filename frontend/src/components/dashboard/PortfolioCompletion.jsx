import React from 'react';
import { Briefcase, ArrowRight } from 'lucide-react';
import ProgressWidget from './ProgressWidget';

const PortfolioCompletion = () => {
  return (
    <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-purple-500" /> Portfolio Health
        </h3>
        <button className="text-sm font-medium text-primary hover:text-blue-700 transition-colors flex items-center gap-1">
          View <ArrowRight className="w-4 h-4" />
        </button>
      </div>
      <ProgressWidget title="Profile Strength" progress={90} icon={Briefcase} />
      <p className="text-xs text-slate-500 mt-4 text-center">Your portfolio is looking great!</p>
    </div>
  );
};

export default PortfolioCompletion;
