import React from 'react';
import { CheckCircle, Target, Book, Lightbulb } from 'lucide-react';
import GlassCard from '../ui/GlassCard';

const CourseOverview = ({ description, outcomes = [], requirements = [], skills = [] }) => {
  return (
    <div className="space-y-10 animate-fade-in">
      
      {/* Description */}
      <div>
        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <Book className="w-6 h-6 text-blue-400" />
          About this course
        </h3>
        <p className="text-slate-300 leading-relaxed whitespace-pre-wrap text-lg">
          {description}
        </p>
      </div>

      {/* Learning Outcomes */}
      {outcomes.length > 0 && (
        <GlassCard className="p-8 border-purple-500/20 shadow-[0_0_30px_rgba(124,58,237,0.05)] relative overflow-hidden">
          {/* Decorative blur */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Target className="w-5 h-5 text-purple-400" />
            What you'll learn
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 relative z-10">
            {outcomes.map((outcome, idx) => (
              <div key={idx} className="flex gap-3 items-start group">
                <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5 group-hover:drop-shadow-[0_0_8px_rgba(74,222,128,0.6)] transition-all" />
                <span className="text-sm text-slate-300 group-hover:text-white transition-colors">{outcome}</span>
              </div>
            ))}
          </div>
        </GlassCard>
      )}

      {/* Skills Covered */}
      {skills.length > 0 && (
        <div>
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-yellow-400" />
            Skills you will master
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, idx) => (
              <span key={idx} className="px-4 py-2 bg-blue-500/10 text-blue-300 border border-blue-500/20 rounded-lg text-sm font-medium hover:bg-blue-500/20 hover:text-white transition-colors cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Requirements */}
      {requirements.length > 0 && (
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Requirements</h3>
          <ul className="space-y-3">
            {requirements.map((req, idx) => (
              <li key={idx} className="flex gap-3 items-center text-slate-400">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-600 shrink-0" />
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

    </div>
  );
};

export default CourseOverview;
