import React from 'react';
import { FileText, ArrowRight } from 'lucide-react';
import ProgressWidget from './ProgressWidget';

const ResumeProgressCard = () => {
  return (
    <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <FileText className="w-5 h-5 text-blue-500" /> Resume Builder
        </h3>
        <button className="text-sm font-medium text-primary hover:text-blue-700 transition-colors flex items-center gap-1">
          Edit <ArrowRight className="w-4 h-4" />
        </button>
      </div>
      <ProgressWidget title="Resume Completion" progress={75} icon={FileText} />
      <p className="text-xs text-slate-500 mt-4 text-center">Add 1 more project to reach 100%</p>
    </div>
  );
};

export default ResumeProgressCard;
