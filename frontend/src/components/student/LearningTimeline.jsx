import React from 'react';
import GlassCard from '../ui/GlassCard';
import { BookOpen, CheckCircle, PlayCircle, Trophy } from 'lucide-react';

const LearningTimeline = ({ events = [] }) => {
  const defaultEvents = [
    { type: 'completed', title: 'React Hooks Mastery', time: '2 hours ago', icon: Trophy, color: 'text-yellow-400', bg: 'bg-yellow-400/20' },
    { type: 'progress', title: 'State Management', time: 'Yesterday', icon: PlayCircle, color: 'text-blue-400', bg: 'bg-blue-500/20' },
    { type: 'quiz', title: 'Passed Component Lifecycle', time: '3 days ago', icon: CheckCircle, color: 'text-green-400', bg: 'bg-green-500/20' }
  ];

  const displayEvents = events.length ? events : defaultEvents;

  return (
    <GlassCard className="p-6 border-slate-700/50">
      <h3 className="text-xl font-bold text-white mb-6">Recent Activity</h3>
      <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
        {displayEvents.map((evt, idx) => {
          const Icon = evt.icon;
          return (
            <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-900 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_10px_rgba(0,0,0,0.5)] z-10" className={`${evt.bg}`}>
                <Icon className={`w-5 h-5 ${evt.color}`} />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-800 bg-slate-900/50 shadow-inner group-hover:border-slate-600 transition-colors">
                <div className="flex items-center justify-between mb-1">
                  <span className={`font-bold text-sm ${evt.color}`}>{evt.title}</span>
                </div>
                <div className="text-xs text-slate-500">{evt.time}</div>
              </div>
            </div>
          );
        })}
      </div>
    </GlassCard>
  );
};

export default LearningTimeline;
