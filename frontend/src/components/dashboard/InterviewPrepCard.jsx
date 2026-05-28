import React from 'react';
import { Users, PlayCircle } from 'lucide-react';

const InterviewPrepCard = () => {
  return (
    <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
      <div className="flex items-center gap-3 mb-4">
        <Users className="w-5 h-5 text-purple-500" />
        <h3 className="font-bold text-slate-900 dark:text-white">AI Mock Interview</h3>
      </div>
      <p className="text-sm text-slate-500 mb-4">Practice your React skills with our AI recruiter. Get instant feedback on your answers.</p>
      <button className="w-full py-2 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 font-medium rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors flex items-center justify-center gap-2">
        <PlayCircle className="w-4 h-4" /> Start Session
      </button>
    </div>
  );
};

export default InterviewPrepCard;
