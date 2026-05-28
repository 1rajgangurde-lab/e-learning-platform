import React from 'react';
import ThemeLayout from './ThemeLayout';
import GlassCard from './GlassCard';

const SkeletonCard = () => (
  <div className="p-6 rounded-2xl bg-slate-900/30 border border-slate-800/50 flex flex-col gap-4 animate-pulse">
    <div className="w-12 h-12 rounded-full bg-slate-800/50"></div>
    <div className="w-3/4 h-6 rounded bg-slate-800/50"></div>
    <div className="w-1/2 h-4 rounded bg-slate-800/30"></div>
  </div>
);

const PageLoader = () => {
  return (
    <div className="w-full h-full min-h-screen flex flex-col items-center justify-center relative p-8">
      {/* Orb Animation */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <div className="relative w-32 h-32 flex items-center justify-center">
          <div className="absolute inset-0 border-4 border-blue-500/20 rounded-full animate-[spin_3s_linear_infinite]" />
          <div className="absolute inset-2 border-4 border-t-purple-500 border-r-transparent border-b-blue-500 border-l-transparent rounded-full animate-[spin_2s_linear_infinite_reverse]" />
          <div className="absolute inset-4 bg-blue-600/20 rounded-full blur-xl animate-pulse" />
          <div className="w-4 h-4 bg-white rounded-full shadow-[0_0_20px_10px_rgba(59,130,246,0.6)] animate-ping" />
        </div>
      </div>

      {/* Skeleton Background Layout */}
      <div className="w-full max-w-7xl mx-auto space-y-8 opacity-40">
        <div className="w-1/3 h-10 bg-slate-800/50 rounded-lg animate-pulse" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
        <div className="w-full h-64 bg-slate-900/30 border border-slate-800/50 rounded-2xl animate-pulse" />
      </div>
    </div>
  );
};

export default PageLoader;
