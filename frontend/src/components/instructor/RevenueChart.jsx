import React from 'react';
import GlassCard from '../ui/GlassCard';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp } from 'lucide-react';

const data = [
  { month: 'Jan', revenue: 1200, profit: 900 },
  { month: 'Feb', revenue: 1900, profit: 1400 },
  { month: 'Mar', revenue: 1500, profit: 1100 },
  { month: 'Apr', revenue: 2400, profit: 1800 },
  { month: 'May', revenue: 2100, profit: 1600 },
  { month: 'Jun', revenue: 3200, profit: 2400 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#0F172A] border border-slate-700 p-4 rounded-xl shadow-xl">
        <p className="text-white font-bold mb-2">{label} 2026</p>
        {payload.map((p, i) => (
          <p key={i} className="text-sm font-medium" style={{ color: p.color }}>
            {p.name}: ${p.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const RevenueChart = () => {
  return (
    <GlassCard className="p-6 border-slate-700/50">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-xl font-bold text-white mb-1">Monthly Revenue</h3>
          <p className="text-slate-400 text-sm">Income vs Profit tracking</p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full text-sm font-bold shadow-[0_0_10px_rgba(16,185,129,0.2)]">
          <TrendingUp className="w-4 h-4" /> +18.4%
        </div>
      </div>
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10B981" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#14B8A6" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="#14B8A6" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,163,184,0.05)" vertical={false} />
            <XAxis dataKey="month" stroke="#475569" tick={{fill: '#94A3B8', fontSize: 12}} axisLine={false} tickLine={false} />
            <YAxis stroke="#475569" tick={{fill: '#94A3B8', fontSize: 12}} tickFormatter={(val) => `$${val}`} axisLine={false} tickLine={false} />
            <Tooltip content={<CustomTooltip />} />
            <Area type="monotone" name="Revenue" dataKey="revenue" stroke="#10B981" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
            <Area type="monotone" name="Profit" dataKey="profit" stroke="#14B8A6" strokeWidth={3} fillOpacity={1} fill="url(#colorProfit)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </GlassCard>
  );
};

export default RevenueChart;
