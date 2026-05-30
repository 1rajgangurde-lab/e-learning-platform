import React from 'react';
import { motion } from 'framer-motion';
import { Users, DollarSign, Cpu, Award, FileText, CheckCircle, PlusCircle, Megaphone, Activity, BarChart2 } from 'lucide-react';
import ThemeLayout from '../../components/ui/ThemeLayout';
import RealTimeAnalytics from '../../components/admin/sections/RealTimeAnalytics';

const GlassCard = ({ children, className = '' }) => (
  <div className={`bg-[#0F172A]/80 backdrop-blur-xl border border-white/5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-6 ${className}`}>
    {children}
  </div>
);

const StatCard = ({ title, value, trend, icon: Icon, colorClass, sparklineData }) => (
  <GlassCard className="relative overflow-hidden group hover:border-white/10 transition-colors">
    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
      <Icon className={`w-24 h-24 ${colorClass}`} />
    </div>
    <div className="relative z-10 flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <div className={`p-3 rounded-xl bg-slate-800 ${colorClass}`}>
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-slate-400 font-medium">{title}</h3>
      </div>
      <div>
        <div className="text-3xl font-bold text-white mb-2">{value}</div>
        <div className="text-sm">
          <span className={trend.startsWith('+') ? 'text-emerald-400' : 'text-red-400'}>
            {trend}
          </span>
          <span className="text-slate-500 ml-2">vs last month</span>
        </div>
      </div>
      {/* Mock Sparkline */}
      <div className="h-8 flex items-end gap-1 mt-2">
        {sparklineData.map((val, i) => (
          <div key={i} className={`w-full rounded-t-sm ${colorClass.replace('text-', 'bg-').replace('-400', '-500').replace('-500', '-500/50')}`} style={{ height: `${val}%` }} />
        ))}
      </div>
    </div>
  </GlassCard>
);

const PlatformOverview = () => {
  const stats = [
    { title: 'Active Users', value: '12,450', trend: '+14.5%', icon: Users, colorClass: 'text-blue-500', sparklineData: [40, 30, 50, 70, 60, 80, 90] },
    { title: 'Premium Users', value: '3,200', trend: '+8.2%', icon: Award, colorClass: 'text-purple-500', sparklineData: [30, 40, 45, 50, 65, 70, 85] },
    { title: 'Revenue', value: '$45,200', trend: '+24.1%', icon: DollarSign, colorClass: 'text-emerald-400', sparklineData: [50, 40, 60, 80, 70, 90, 100] },
    { title: 'AI Requests', value: '145K', trend: '+45.2%', icon: Cpu, colorClass: 'text-cyan-400', sparklineData: [20, 30, 40, 60, 80, 95, 100] },
  ];

  const secondaryStats = [
    { title: 'Certificates Generated', value: '1,240', icon: FileText, colorClass: 'text-amber-500' },
    { title: 'Quiz Attempts', value: '45.2K', icon: CheckCircle, colorClass: 'text-indigo-400' },
    { title: 'Project Submissions', value: '890', icon: Activity, colorClass: 'text-rose-400' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Platform Overview</h1>
        <p className="text-slate-400">Welcome to the Enterprise Command Center.</p>
      </div>

      {/* Main Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
            <StatCard {...stat} />
          </motion.div>
        ))}
      </div>

      {/* Secondary Stats & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
          {secondaryStats.map((stat, i) => (
            <GlassCard key={i} className="flex flex-col items-center justify-center text-center p-8">
              <div className={`p-4 rounded-2xl bg-slate-800 mb-4 ${stat.colorClass}`}>
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-slate-400">{stat.title}</div>
            </GlassCard>
          ))}
        </div>
        
        {/* Quick Actions */}
        <GlassCard>
          <h2 className="text-xl font-bold text-white mb-6">Quick Actions</h2>
          <div className="space-y-3">
            {[
              { label: 'Create New Course', icon: PlusCircle, color: 'text-blue-400' },
              { label: 'Send Announcement', icon: Megaphone, color: 'text-purple-400' },
              { label: 'View System Logs', icon: Activity, color: 'text-emerald-400' },
              { label: 'Generate Report', icon: BarChart2, color: 'text-amber-400' }
            ].map((action, i) => (
              <button key={i} className="w-full flex items-center gap-3 p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors border border-transparent hover:border-white/5">
                <action.icon className={`w-5 h-5 ${action.color}`} />
                <span className="font-medium">{action.label}</span>
              </button>
            ))}
          </div>
        </GlassCard>
      </div>

      {/* Activity Feed Placeholder */}
      <GlassCard>
        <h2 className="text-xl font-bold text-white mb-6">Real-Time Activity Feed</h2>
        <div className="space-y-4">
          {[
            { msg: 'Student John Doe enrolled in Advanced React Patterns', time: '2 mins ago', type: 'enrollment' },
            { msg: 'Instructor Jane Smith published a new course', time: '15 mins ago', type: 'course' },
            { msg: 'Admin approved course: Intro to Python', time: '1 hour ago', type: 'admin' },
            { msg: 'AI Roadmap generated for 15 users', time: '3 hours ago', type: 'ai' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/30 border border-white/5">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <div className="flex-1 text-slate-300">{item.msg}</div>
              <div className="text-sm text-slate-500">{item.time}</div>
            </div>
          ))}
        </div>
      </GlassCard>

      {/* Real-Time Analytics Section */}
      <div className="pt-8 border-t border-white/5">
        <RealTimeAnalytics />
      </div>
    </div>
  );
};

export default PlatformOverview;
