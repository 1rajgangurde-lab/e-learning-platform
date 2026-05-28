import React from 'react';
import GlassCard from '../ui/GlassCard';
import { Award, Star, Zap } from 'lucide-react';

const AchievementTimeline = () => {
  const achievements = [
    { title: '7 Day Streak', date: 'Oct 24', icon: Zap, color: 'text-yellow-400', bg: 'bg-yellow-500/20' },
    { title: 'Perfect Quiz', date: 'Oct 15', icon: Star, color: 'text-purple-400', bg: 'bg-purple-500/20' },
    { title: 'First Course', date: 'Sep 30', icon: Award, color: 'text-blue-400', bg: 'bg-blue-500/20' }
  ];

  return (
    <GlassCard className="p-6 border-slate-700/50 h-full">
      <h3 className="text-xl font-bold text-white mb-6">Recent Badges</h3>
      <div className="space-y-4">
        {achievements.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="flex items-center gap-4 p-3 rounded-xl bg-slate-900/40 border border-slate-800/50 hover:bg-slate-800/60 transition-colors">
              <div className={`p-2 rounded-lg border border-slate-700/50 shadow-inner ${item.bg}`}>
                <Icon className={`w-5 h-5 ${item.color}`} />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-white text-sm">{item.title}</h4>
                <p className="text-xs text-slate-400">Unlocked on {item.date}</p>
              </div>
            </div>
          );
        })}
      </div>
    </GlassCard>
  );
};

export default AchievementTimeline;
