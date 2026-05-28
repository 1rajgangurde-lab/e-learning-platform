import React from 'react';
import { Award, Star, Zap } from 'lucide-react';
import GlassCard from '../ui/GlassCard';

const CourseAchievements = () => {
  const badges = [
    { icon: Zap, name: 'Fast Learner', desc: 'Finished first module in 24h', unlocked: true, color: 'text-yellow-400', bg: 'bg-yellow-500/20' },
    { icon: Star, name: 'Perfect Score', desc: '100% on a quiz', unlocked: true, color: 'text-purple-400', bg: 'bg-purple-500/20' },
    { icon: Award, name: 'Course Master', desc: 'Complete all lessons', unlocked: false, color: 'text-blue-400', bg: 'bg-blue-500/20' },
  ];

  return (
    <GlassCard className="p-6 border-slate-700/50 bg-slate-800/30">
      <h4 className="font-bold text-white mb-4">Achievements</h4>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {badges.map((badge, idx) => {
          const Icon = badge.icon;
          return (
            <div key={idx} className={`flex flex-col items-center text-center p-4 rounded-xl border transition-all ${badge.unlocked ? 'bg-slate-900/50 border-slate-700/50 hover:bg-slate-800/80' : 'bg-slate-900/20 border-slate-800/30 opacity-60 grayscale'}`}>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${badge.unlocked ? badge.bg : 'bg-slate-800'} ${badge.unlocked ? `shadow-[0_0_15px_rgba(255,255,255,0.1)]` : ''}`}>
                <Icon className={`w-6 h-6 ${badge.unlocked ? badge.color : 'text-slate-500'}`} />
              </div>
              <p className="font-bold text-white text-sm mb-1">{badge.name}</p>
              <p className="text-xs text-slate-400">{badge.desc}</p>
            </div>
          );
        })}
      </div>
    </GlassCard>
  );
};

export default CourseAchievements;
