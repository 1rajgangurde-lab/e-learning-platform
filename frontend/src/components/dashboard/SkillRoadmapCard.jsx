import React from 'react';
import { Map, ChevronRight } from 'lucide-react';

const SkillRoadmapCard = () => {
  return (
    <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-between cursor-pointer hover:border-primary transition-colors group">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 text-primary flex items-center justify-center">
          <Map className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-bold text-slate-900 dark:text-white">Frontend Developer Roadmap</h3>
          <p className="text-sm text-slate-500">65% Completed • Next step: Redux Toolkit</p>
        </div>
      </div>
      <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-primary transition-colors" />
    </div>
  );
};

export default SkillRoadmapCard;
