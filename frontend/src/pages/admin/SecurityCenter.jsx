import React from 'react';
import { Shield, ShieldAlert, Key, Server, FileWarning, Activity } from 'lucide-react';

const GlassCard = ({ children, className = '' }) => (
  <div className={`bg-[#0F172A]/80 backdrop-blur-xl border border-white/5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-6 ${className}`}>
    {children}
  </div>
);

const SecurityCenter = () => {
  const metrics = [
    { title: 'Failed Logins', value: '142', trend: '+12%', icon: Key, colorClass: 'text-amber-500' },
    { title: 'API Errors', value: '89', trend: '-5%', icon: Server, colorClass: 'text-red-500' },
    { title: 'JWT Violations', value: '12', trend: '+2%', icon: FileWarning, colorClass: 'text-purple-500' },
    { title: 'Suspicious Activity', value: '3', trend: '0%', icon: ShieldAlert, colorClass: 'text-orange-500' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Security Center</h1>
        <p className="text-slate-400">Monitor platform security, API health, and potential threats.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <GlassCard className="flex flex-col items-center justify-center text-center p-12">
          <div className="relative mb-6">
            <svg className="w-48 h-48 transform -rotate-90">
              <circle cx="96" cy="96" r="88" className="stroke-slate-800" strokeWidth="12" fill="none" />
              <circle cx="96" cy="96" r="88" className="stroke-emerald-500" strokeWidth="12" fill="none" strokeDasharray="552" strokeDashoffset="22" strokeLinecap="round" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <Shield className="w-10 h-10 text-emerald-500 mb-2" />
              <span className="text-4xl font-bold text-white">96</span>
              <span className="text-xs text-slate-400 mt-1">/ 100</span>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Security Score</h2>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-sm font-medium">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Status: Excellent
          </div>
        </GlassCard>

        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {metrics.map((metric, i) => (
            <GlassCard key={i} className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className={`p-3 rounded-xl bg-slate-800 ${metric.colorClass}`}>
                  <metric.icon className="w-6 h-6" />
                </div>
                <span className={`text-sm font-medium ${metric.trend.startsWith('-') || metric.trend === '0%' ? 'text-emerald-400' : 'text-red-400'}`}>
                  {metric.trend}
                </span>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">{metric.value}</div>
                <div className="text-sm text-slate-400">{metric.title}</div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      <GlassCard>
        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <Activity className="w-5 h-5 text-blue-500" /> Recent Security Events
        </h2>
        <div className="space-y-4">
          {[
            { msg: 'Multiple failed login attempts from IP 192.168.1.45', time: '5 mins ago', level: 'High', color: 'text-red-400', bg: 'bg-red-500/10', border: 'border-red-500/20' },
            { msg: 'Invalid JWT token format detected', time: '1 hour ago', level: 'Medium', color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/20' },
            { msg: 'Admin role changed for user ID: 894', time: '3 hours ago', level: 'Low', color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
          ].map((event, i) => (
            <div key={i} className={`flex items-center justify-between p-4 rounded-xl border ${event.bg} ${event.border}`}>
              <div className="flex items-center gap-4">
                <div className={`px-2 py-1 rounded text-xs font-bold ${event.color} bg-black/20`}>
                  {event.level}
                </div>
                <span className="text-slate-300">{event.msg}</span>
              </div>
              <span className="text-sm text-slate-500">{event.time}</span>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  );
};

export default SecurityCenter;
