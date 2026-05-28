import React from 'react';
import GlassCard from '../ui/GlassCard';
import { Award, Download } from 'lucide-react';

const CertificateCard = ({ title, date, id }) => {
  return (
    <GlassCard className="p-6 relative overflow-hidden group border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div className="absolute -right-8 -top-8 text-purple-500/10 group-hover:text-purple-500/20 transition-colors pointer-events-none">
        <Award className="w-32 h-32 blur-[2px]" />
      </div>
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 border border-purple-500/30 shadow-[0_0_10px_rgba(168,85,247,0.5)]">
            <Award className="w-5 h-5" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-purple-400">Verified</span>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-2 pr-8">{title}</h3>
        <p className="text-sm text-slate-400 mb-6">Issued: {date}</p>
        
        <div className="mt-auto pt-4 border-t border-slate-700 flex items-center justify-between">
          <span className="text-xs font-mono text-slate-500">ID: {id}</span>
          <button className="flex items-center gap-2 text-sm font-medium text-accent hover:text-cyan-300 transition-colors">
            <Download className="w-4 h-4" /> PDF
          </button>
        </div>
      </div>
    </GlassCard>
  );
};

export default CertificateCard;
