import React from 'react';
import GlassCard from '../ui/GlassCard';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'Completed', value: 12 },
  { name: 'In Progress', value: 5 },
  { name: 'Not Started', value: 3 }
];
const COLORS = ['#2563EB', '#7C3AED', '#334155'];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#0F172A] border border-slate-700 p-3 rounded-lg shadow-xl">
        <p className="text-slate-300 font-medium">{`${payload[0].name}: ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

const CourseCompletionChart = () => {
  return (
    <GlassCard className="p-6 border-slate-700/50 flex flex-col h-full">
      <h3 className="text-xl font-bold text-white mb-6">Course Status</h3>
      <div className="flex-1 min-h-[250px] relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} className="drop-shadow-[0_0_5px_rgba(37,99,235,0.3)]" />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="text-3xl font-bold text-white">20</span>
          <span className="text-xs text-slate-400">Total Courses</span>
        </div>
      </div>
      <div className="flex justify-center gap-4 mt-4 text-xs font-medium text-slate-300">
        <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#2563EB]" /> Completed</div>
        <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#7C3AED]" /> Active</div>
      </div>
    </GlassCard>
  );
};

export default CourseCompletionChart;
