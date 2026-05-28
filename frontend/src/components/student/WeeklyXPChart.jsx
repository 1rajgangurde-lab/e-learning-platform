import React from 'react';
import GlassCard from '../ui/GlassCard';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { day: 'Mon', xp: 400 },
  { day: 'Tue', xp: 300 },
  { day: 'Wed', xp: 550 },
  { day: 'Thu', xp: 200 },
  { day: 'Fri', xp: 700 },
  { day: 'Sat', xp: 1200 },
  { day: 'Sun', xp: 800 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#0F172A] border border-slate-700 p-3 rounded-lg shadow-xl">
        <p className="text-blue-400 font-bold mb-1">{label}</p>
        <p className="text-white text-sm">{`${payload[0].value} XP Earned`}</p>
      </div>
    );
  }
  return null;
};

const WeeklyXPChart = () => {
  return (
    <GlassCard className="p-6 border-slate-700/50">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-white">Weekly Progress</h3>
        <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-bold rounded-full border border-blue-500/20">
          +4,150 XP This Week
        </span>
      </div>
      <div className="h-[250px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorXp" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#7C3AED" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#2563EB" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,163,184,0.1)" vertical={false} />
            <XAxis dataKey="day" stroke="#475569" tick={{fill: '#94A3B8', fontSize: 12}} axisLine={false} tickLine={false} />
            <YAxis stroke="#475569" tick={{fill: '#94A3B8', fontSize: 12}} axisLine={false} tickLine={false} />
            <Tooltip content={<CustomTooltip />} />
            <Area type="monotone" dataKey="xp" stroke="#06B6D4" strokeWidth={3} fillOpacity={1} fill="url(#colorXp)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </GlassCard>
  );
};

export default WeeklyXPChart;
