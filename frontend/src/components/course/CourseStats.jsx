import React from 'react';
import { BookOpen, CheckCircle, Zap } from 'lucide-react';
import GlassCard from '../ui/GlassCard';

const StatBox = ({ icon: Icon, value, label, colorClass, shadowClass }) => (
  <GlassCard className="p-4 flex items-center gap-4 border-slate-700/50 bg-slate-800/30">
    <div className={`p-3 rounded-xl border bg-slate-900/50 ${colorClass} ${shadowClass}`}>
      <Icon className="w-6 h-6" />
    </div>
    <div>
      <h4 className="text-2xl font-bold text-white">{value}</h4>
      <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">{label}</p>
    </div>
  </GlassCard>
);

const CourseStats = ({ lessonsDone = 7, totalLessons = 10, quizzesPassed = 2, xpEarned = 150 }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
      <StatBox 
        icon={BookOpen} 
        value={`${lessonsDone}/${totalLessons}`} 
        label="Lessons Done" 
        colorClass="text-blue-400 border-blue-500/20"
        shadowClass="shadow-[0_0_15px_rgba(37,99,235,0.15)]"
      />
      <StatBox 
        icon={CheckCircle} 
        value={quizzesPassed} 
        label="Quizzes Passed" 
        colorClass="text-green-400 border-green-500/20"
        shadowClass="shadow-[0_0_15px_rgba(34,197,94,0.15)]"
      />
      <StatBox 
        icon={Zap} 
        value={xpEarned} 
        label="XP Earned" 
        colorClass="text-yellow-400 border-yellow-500/20"
        shadowClass="shadow-[0_0_15px_rgba(250,204,21,0.15)]"
      />
    </div>
  );
};

export default CourseStats;
