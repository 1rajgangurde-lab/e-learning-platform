import React from 'react';
import { CheckCircle2, Circle, Lock } from 'lucide-react';
import GlassCard from '../ui/GlassCard';

const LearningRoadmap = ({ sections = [] }) => {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-white mb-6">Learning Roadmap</h3>
      <div className="relative">
        {/* Vertical Connecting Line */}
        <div className="absolute top-4 bottom-4 left-6 w-0.5 bg-slate-800" />
        
        <div className="space-y-8 relative z-10">
          {sections.map((section, idx) => {
            const isCompleted = section.progress === 100;
            const isLocked = section.isLocked;
            const inProgress = section.progress > 0 && section.progress < 100;
            
            return (
              <div key={idx} className="flex gap-6">
                <div className="relative mt-1 z-10 shrink-0">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center border-4 border-[#020617] ${
                    isCompleted ? 'bg-green-500/20 text-green-400 shadow-[0_0_15px_rgba(34,197,94,0.3)]' :
                    inProgress ? 'bg-blue-500/20 text-blue-400 shadow-[0_0_15px_rgba(37,99,235,0.3)]' :
                    'bg-slate-800 text-slate-500'
                  }`}>
                    {isCompleted ? <CheckCircle2 className="w-6 h-6" /> : 
                     isLocked ? <Lock className="w-5 h-5" /> : 
                     <span className="font-bold">{idx + 1}</span>}
                  </div>
                </div>
                
                <GlassCard className={`flex-1 p-6 ${inProgress ? 'border-blue-500/30' : ''}`}>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className={`text-lg font-bold ${isLocked ? 'text-slate-500' : 'text-white'}`}>{section.title}</h4>
                    {!isLocked && (
                      <span className="text-sm font-medium text-slate-400">{section.progress || 0}%</span>
                    )}
                  </div>
                  
                  <p className="text-slate-400 text-sm mb-4">
                    {section.lessons?.length || 0} lessons • {section.duration || '0h 0m'}
                  </p>
                  
                  {/* Miniature progress bar */}
                  {!isLocked && (
                    <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${isCompleted ? 'bg-green-400' : 'bg-blue-500 shadow-[0_0_10px_rgba(37,99,235,0.8)]'}`} 
                        style={{ width: `${section.progress || 0}%` }} 
                      />
                    </div>
                  )}
                </GlassCard>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LearningRoadmap;
