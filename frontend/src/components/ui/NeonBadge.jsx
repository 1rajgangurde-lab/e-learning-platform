import React from 'react';

const NeonBadge = ({ children, color = "blue", className = "" }) => {
  const colorMap = {
    blue: "bg-blue-500/10 text-blue-400 border-blue-500/30 shadow-[0_0_10px_rgba(37,99,235,0.2)]",
    purple: "bg-purple-500/10 text-purple-400 border-purple-500/30 shadow-[0_0_10px_rgba(168,85,247,0.2)]",
    cyan: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30 shadow-[0_0_10px_rgba(6,182,212,0.2)]",
    green: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30 shadow-[0_0_10px_rgba(16,185,129,0.2)]",
    orange: "bg-orange-500/10 text-orange-400 border-orange-500/30 shadow-[0_0_10px_rgba(249,115,22,0.2)]"
  };

  return (
    <span className={`px-2.5 py-1 text-xs font-semibold rounded-full border backdrop-blur-md ${colorMap[color] || colorMap.blue} ${className}`}>
      {children}
    </span>
  );
};

export default NeonBadge;
