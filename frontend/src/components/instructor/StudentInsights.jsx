import React from 'react';
import GlassCard from '../ui/GlassCard';
import { Users, UserCheck, Activity } from 'lucide-react';

const StudentInsights = () => {
  return (
    <GlassCard className="p-6 border-slate-700/50 h-full">
      <h3 className="text-xl font-bold text-white mb-6">Student Insights</h3>
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center border border-blue-500/30">
            <Users className="w-6 h-6 drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-center mb-1">
              <span className="font-bold text-white">Active Learners</span>
              <span className="text-emerald-400 text-sm font-bold">+12%</span>
            </div>
            <p className="text-sm text-slate-400">1,240 students this week</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center border border-purple-500/30">
            <UserCheck className="w-6 h-6 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-center mb-1">
              <span className="font-bold text-white">Completion Rate</span>
              <span className="text-emerald-400 text-sm font-bold">+4%</span>
            </div>
            <p className="text-sm text-slate-400">68% average completion</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center border border-orange-500/30">
            <Activity className="w-6 h-6 drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]" />
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-center mb-1">
              <span className="font-bold text-white">Engagement Score</span>
              <span className="text-red-400 text-sm font-bold">-2%</span>
            </div>
            <p className="text-sm text-slate-400">Avg 45 mins per session</p>
          </div>
        </div>
      </div>
    </GlassCard>
  );
};

export default StudentInsights;
