import React from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import GlassCard from './GlassCard';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#020617]/90 backdrop-blur-xl border border-blue-500/20 p-4 rounded-xl shadow-[0_0_15px_rgba(37,99,235,0.2)]">
        <p className="text-slate-300 text-sm mb-1">{label}</p>
        <p className="text-white font-bold text-lg">
          {payload[0].value}
        </p>
      </div>
    );
  }
  return null;
};

const GlassChart = ({ data, dataKey, xKey = "name", height = 300, color = "#2563EB" }) => {
  return (
    <div style={{ width: '100%', height }}>
      <ResponsiveContainer>
        <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={color} stopOpacity={0.3}/>
              <stop offset="95%" stopColor={color} stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis 
            dataKey={xKey} 
            stroke="#475569" 
            tick={{ fill: '#94A3B8', fontSize: 12 }}
            tickLine={false}
            axisLine={false}
          />
          <YAxis 
            stroke="#475569" 
            tick={{ fill: '#94A3B8', fontSize: 12 }}
            tickLine={false}
            axisLine={false}
          />
          <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" vertical={false} />
          <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'rgba(255,255,255,0.1)', strokeWidth: 1 }} />
          <Area 
            type="monotone" 
            dataKey={dataKey} 
            stroke={color} 
            strokeWidth={3}
            fillOpacity={1} 
            fill="url(#colorGradient)" 
            animationDuration={1500}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GlassChart;
