import React from 'react';
import GlassCard from '../ui/GlassCard';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Activity } from 'lucide-react';

const data = [
  { time: '00:00', cpu: 25, memory: 40 },
  { time: '04:00', cpu: 30, memory: 45 },
  { time: '08:00', cpu: 65, memory: 70 },
  { time: '12:00', cpu: 85, memory: 80 },
  { time: '16:00', cpu: 75, memory: 75 },
  { time: '20:00', cpu: 40, memory: 50 },
  { time: '24:00', cpu: 28, memory: 42 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#0F172A] border border-slate-700 p-4 rounded-xl shadow-[0_0_20px_rgba(225,29,72,0.2)]">
        <p className="text-white font-bold mb-2">{label}</p>
        {payload.map((p, i) => (
          <p key={i} className="text-sm font-medium" style={{ color: p.color }}>
            {p.name}: {p.value}%
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const SystemHealthChart = () => {
  return (
    <GlassCard className="p-6 border-slate-700/50">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-xl font-bold text-white mb-1">System Health</h3>
          <p className="text-slate-400 text-sm">Server CPU & Memory Load</p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full text-sm font-bold shadow-[0_0_10px_rgba(59,130,246,0.2)] animate-pulse">
          <Activity className="w-4 h-4" /> Stable
        </div>
      </div>
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorCpu" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2563EB" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="#2563EB" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorMemory" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#7C3AED" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="#7C3AED" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(37,99,235,0.1)" vertical={false} />
            <XAxis dataKey="time" stroke="#475569" tick={{fill: '#94A3B8', fontSize: 12}} axisLine={false} tickLine={false} />
            <YAxis stroke="#475569" tick={{fill: '#94A3B8', fontSize: 12}} tickFormatter={(val) => `${val}%`} axisLine={false} tickLine={false} />
            <Tooltip content={<CustomTooltip />} />
            <Area type="monotone" name="CPU" dataKey="cpu" stroke="#2563EB" strokeWidth={3} fillOpacity={1} fill="url(#colorCpu)" />
            <Area type="monotone" name="Memory" dataKey="memory" stroke="#7C3AED" strokeWidth={3} fillOpacity={1} fill="url(#colorMemory)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </GlassCard>
  );
};

export default SystemHealthChart;
