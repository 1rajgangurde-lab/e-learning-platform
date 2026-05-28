import React from 'react';
import GlassCard from '../ui/GlassCard';
import { Award, Download } from 'lucide-react';

const CertificateShowcase = () => {
  return (
    <GlassCard className="p-6 border-slate-700/50 h-full relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="flex justify-between items-center mb-6 relative z-10">
        <h3 className="text-xl font-bold text-white">Latest Certificate</h3>
        <Award className="w-6 h-6 text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
      </div>
      
      <div className="bg-slate-950/80 border border-slate-700 rounded-xl p-6 text-center shadow-inner relative z-10">
        <Award className="w-12 h-12 text-slate-500 mx-auto mb-2 opacity-50" />
        <h4 className="font-serif font-bold text-white text-lg uppercase tracking-wider mb-1">React Masterclass</h4>
        <p className="text-xs text-slate-400 mb-4">Issued: Oct 2026</p>
        <button className="flex items-center justify-center gap-2 w-full py-2 bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white rounded-lg text-sm transition-colors">
          <Download className="w-4 h-4" /> Download PDF
        </button>
      </div>
    </GlassCard>
  );
};

export default CertificateShowcase;
