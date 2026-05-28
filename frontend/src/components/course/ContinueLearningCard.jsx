import React from 'react';
import { PlayCircle, Clock } from 'lucide-react';
import GlassCard from '../ui/GlassCard';
import GradientButton from '../ui/GradientButton';

const ContinueLearningCard = ({ lastLesson, progress = 0, onContinue }) => {
  if (!lastLesson) return null;

  return (
    <GlassCard className="p-6 mb-8 border-blue-500/30 shadow-[0_0_20px_rgba(37,99,235,0.15)] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        <div className="flex items-center gap-6 w-full md:w-auto">
          <div className="w-16 h-16 rounded-full bg-blue-500/20 border-2 border-blue-500/50 flex items-center justify-center shrink-0">
            <PlayCircle className="w-8 h-8 text-blue-400 drop-shadow-[0_0_8px_rgba(37,99,235,0.8)]" />
          </div>
          <div>
            <p className="text-sm font-medium text-blue-400 mb-1 uppercase tracking-wide">Continue Learning</p>
            <h3 className="text-xl font-bold text-white truncate max-w-sm">{lastLesson.title}</h3>
            <div className="flex items-center gap-2 text-sm text-slate-400 mt-1">
              <Clock className="w-4 h-4" />
              <span>{progress}% completed</span>
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-auto flex-shrink-0">
          <GradientButton onClick={onContinue} className="w-full md:w-auto py-3 px-8 shadow-[0_0_15px_rgba(37,99,235,0.4)]">
            Resume Video
          </GradientButton>
        </div>
      </div>
    </GlassCard>
  );
};

export default ContinueLearningCard;
