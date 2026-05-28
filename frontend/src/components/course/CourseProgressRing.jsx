import React from 'react';
import GlassCard from '../ui/GlassCard';

const CourseProgressRing = ({ progress = 65, size = 120, strokeWidth = 10 }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <GlassCard className="p-6 flex flex-col items-center justify-center border-slate-700/50 bg-slate-800/30">
      <h4 className="font-bold text-white mb-4">Course Progress</h4>
      <div className="relative" style={{ width: size, height: size }}>
        {/* Background Circle */}
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            className="stroke-slate-800"
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          {/* Foreground Circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            className="stroke-blue-500 transition-all duration-1000 ease-out drop-shadow-[0_0_10px_rgba(37,99,235,0.6)]"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            fill="transparent"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <span className="text-3xl font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">{progress}%</span>
        </div>
      </div>
    </GlassCard>
  );
};

export default CourseProgressRing;
