import React from 'react';
import { Plus, Edit3, MessageSquare, Settings } from 'lucide-react';

const actions = [
  { icon: Plus, label: 'Create Course', color: 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400' },
  { icon: Edit3, label: 'Grade Assignments', color: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' },
  { icon: MessageSquare, label: 'Announcements', color: 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400' },
  { icon: Settings, label: 'Settings', color: 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400' }
];

const QuickActionPanel = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {actions.map((action, idx) => {
        const Icon = action.icon;
        return (
          <button key={idx} className="flex flex-col items-center justify-center gap-3 p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${action.color}`}>
              <Icon className="w-6 h-6" />
            </div>
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{action.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default QuickActionPanel;
