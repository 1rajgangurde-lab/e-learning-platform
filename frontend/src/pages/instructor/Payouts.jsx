import React from 'react';
import ThemeLayout from '../../components/ui/ThemeLayout';
import GlassCard from '../../components/ui/GlassCard';
import PayoutCard from '../../components/instructor/PayoutCard';
import { Download, CheckCircle2, Clock } from 'lucide-react';

const Payouts = () => {
  const history = [
    { id: 'PAY-8821', date: 'Sep 1, 2026', amount: 3800, status: 'Completed' },
    { id: 'PAY-7643', date: 'Aug 1, 2026', amount: 4100, status: 'Completed' },
    { id: 'PAY-6621', date: 'Jul 1, 2026', amount: 2950, status: 'Completed' },
    { id: 'PAY-5510', date: 'Jun 1, 2026', amount: 1550, status: 'Completed' },
  ];

  return (
    <ThemeLayout hideParticles={false}>
      <div className="max-w-7xl mx-auto space-y-8 pb-12">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Payouts</h1>
          <p className="text-slate-400">Manage your payout methods and view transaction history.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div>
            <PayoutCard />
          </div>
          
          <div className="lg:col-span-2">
            <GlassCard className="p-6 border-slate-700/50 h-full">
              <h3 className="text-xl font-bold text-white mb-6">Payout History</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-900/80 border-b border-slate-700/80">
                      <th className="p-4 text-xs font-bold uppercase text-slate-400 tracking-wider">Reference ID</th>
                      <th className="p-4 text-xs font-bold uppercase text-slate-400 tracking-wider">Date</th>
                      <th className="p-4 text-xs font-bold uppercase text-slate-400 tracking-wider">Amount</th>
                      <th className="p-4 text-xs font-bold uppercase text-slate-400 tracking-wider">Status</th>
                      <th className="p-4 text-xs font-bold uppercase text-slate-400 tracking-wider text-right">Invoice</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {history.map((item) => (
                      <tr key={item.id} className="hover:bg-slate-800/30 transition-colors">
                        <td className="p-4 font-mono text-sm text-slate-300">{item.id}</td>
                        <td className="p-4 text-sm text-slate-400">{item.date}</td>
                        <td className="p-4 font-bold text-emerald-400">${item.amount.toLocaleString()}</td>
                        <td className="p-4">
                          <span className="flex items-center gap-1 text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-full w-fit">
                            <CheckCircle2 className="w-3 h-3" /> {item.status}
                          </span>
                        </td>
                        <td className="p-4 text-right">
                          <button className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-blue-400 transition-colors inline-flex">
                            <Download className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </ThemeLayout>
  );
};

export default Payouts;
