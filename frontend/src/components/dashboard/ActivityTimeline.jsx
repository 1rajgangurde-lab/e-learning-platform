import React from 'react';
import { BookOpen, Trophy, HelpCircle } from 'lucide-react';

const icons = {
  lesson: BookOpen,
  achievement: Trophy,
  quiz: HelpCircle
};

const colors = {
  lesson: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
  achievement: 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400',
  quiz: 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400'
};

const ActivityTimeline = ({ activities = [] }) => {
  return (
    <div className="space-y-6">
      {activities.map((activity, index) => {
        const Icon = icons[activity.type] || BookOpen;
        const colorClass = colors[activity.type] || colors.lesson;
        
        return (
          <div key={activity.id} className="flex gap-4 relative">
            {index !== activities.length - 1 && (
              <div className="absolute top-10 left-5 bottom-[-24px] w-px bg-slate-200 dark:bg-slate-700" />
            )}
            <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 z-10 ${colorClass}`}>
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">{activity.title}</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{activity.description}</p>
              <span className="text-xs font-medium text-slate-400 mt-2 block">{activity.time}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ActivityTimeline;
