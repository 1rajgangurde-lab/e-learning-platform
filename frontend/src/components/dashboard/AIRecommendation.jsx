import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { AnimatedCard } from '../ui/AnimatedCard';

const AIRecommendation = () => {
  return (
    <AnimatedCard hover="glow" className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900 border-blue-100 dark:border-slate-700">
      <div className="flex items-center gap-2 mb-4 text-primary">
        <Sparkles className="w-5 h-5" />
        <span className="text-xs font-bold uppercase tracking-wider">AI Suggested</span>
      </div>
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Next Best Skill: GraphQL</h3>
      <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">Based on your recent interest in React and Node.js, learning GraphQL will significantly boost your full-stack capabilities.</p>
      <button className="flex items-center gap-2 text-sm font-bold text-primary hover:text-blue-700 transition-colors">
        View Suggested Course <ArrowRight className="w-4 h-4" />
      </button>
    </AnimatedCard>
  );
};

export default AIRecommendation;
