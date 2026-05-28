import React from 'react';
import GlassCard from '../ui/GlassCard';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

const PublishPanel = () => {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <GlassCard className="p-8 border-slate-700/50 text-center">
        <div className="w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-blue-500/30">
          <Send className="w-10 h-10 text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.6)] ml-1" />
        </div>
        
        <h2 className="text-2xl font-bold text-white mb-2">Ready to Publish?</h2>
        <p className="text-slate-400 mb-8 max-w-md mx-auto">Your course is almost ready to go live. Let's do a quick check to make sure everything is in order.</p>

        <div className="bg-slate-900/50 rounded-xl border border-slate-700/50 p-6 text-left space-y-4 mb-8">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-white text-sm">Basic Info Completed</p>
              <p className="text-slate-500 text-xs">Title, description, and category are set.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-white text-sm">Curriculum Validated</p>
              <p className="text-slate-500 text-xs">All modules have at least one lesson.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-white text-sm">Pricing Warning</p>
              <p className="text-slate-500 text-xs">Your course is currently marked as Free. You can change this in Basic Settings.</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4">
          <button className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl transition-all">
            Save as Draft
          </button>
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-all group flex items-center gap-2">
            Publish Course
            <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </GlassCard>
    </div>
  );
};

export default PublishPanel;
