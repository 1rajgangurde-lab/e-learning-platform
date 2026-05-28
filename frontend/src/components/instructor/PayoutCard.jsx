import React from 'react';
import GlassCard from '../ui/GlassCard';
import { DollarSign, ExternalLink } from 'lucide-react';

const PayoutCard = () => {
  return (
    <GlassCard className="p-6 border-slate-700/50 bg-gradient-to-br from-slate-900/90 to-emerald-950/30 h-full relative overflow-hidden group shadow-[0_0_20px_rgba(16,185,129,0.1)] hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]">
      <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:scale-110 group-hover:opacity-20 transition-all duration-500 pointer-events-none">
        <DollarSign className="w-48 h-48 text-emerald-500" />
      </div>

      <div className="relative z-10">
        <h3 className="text-lg font-bold text-white mb-2">Next Payout</h3>
        <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 drop-shadow-[0_0_10px_rgba(16,185,129,0.6)] mb-2">
          $4,250.00
        </div>
        <p className="text-sm text-slate-400 mb-6">Scheduled for Oct 1, 2026</p>
        
        <div className="space-y-3 mb-6 border-t border-slate-700/50 pt-4">
          <div className="flex justify-between text-sm">
            <span className="text-slate-400">Processed</span>
            <span className="font-bold text-white">$12,400.00</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-slate-400">Pending</span>
            <span className="font-bold text-emerald-400">$4,250.00</span>
          </div>
        </div>

        <button className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(16,185,129,0.4)]">
          Manage Payouts <ExternalLink className="w-4 h-4" />
        </button>
      </div>
    </GlassCard>
  );
};

export default PayoutCard;
