import React from 'react';
import ThemeLayout from '../../components/ui/ThemeLayout';
import GlassCard from '../../components/ui/GlassCard';
import { FileText, DollarSign, Download, AlertTriangle, Bug } from 'lucide-react';

const SystemReports = () => {
  return (
    <ThemeLayout hideParticles={false}>
      <div className="max-w-7xl mx-auto space-y-8 pb-12">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
            <FileText className="w-8 h-8 text-rose-500" /> System Reports
          </h1>
          <p className="text-slate-400">Generate financial statements and view system error logs.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Financial Reports */}
          <GlassCard className="p-6 border-slate-700/50">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-emerald-400" /> Financial Reports
              </h2>
              <button className="text-sm font-bold text-blue-400 hover:text-blue-300">View All</button>
            </div>
            
            <div className="space-y-4">
              {[
                { title: 'Q3 2026 Platform Revenue Split', date: 'Oct 01, 2026', size: '2.4 MB' },
                { title: 'September Instructor Payouts', date: 'Oct 01, 2026', size: '1.8 MB' },
                { title: 'August Tax & Compliance Report', date: 'Sep 05, 2026', size: '3.1 MB' },
              ].map((report, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-slate-900/50 rounded-xl border border-slate-700/50 hover:border-slate-600 transition-colors">
                  <div>
                    <h4 className="font-bold text-slate-200 text-sm mb-1">{report.title}</h4>
                    <p className="text-xs text-slate-500">Generated {report.date} • {report.size}</p>
                  </div>
                  <button className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg transition-colors">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
            
            <button className="w-full mt-6 py-3 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-xl text-sm font-bold text-white transition-colors">
              Generate Custom Financial Report
            </button>
          </GlassCard>

          {/* System Error Logs */}
          <GlassCard className="p-6 border-slate-700/50">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-rose-500" /> Error Logs
              </h2>
              <button className="text-sm font-bold text-rose-400 hover:text-rose-300">Clear Logs</button>
            </div>

            <div className="space-y-4 font-mono text-sm">
              {[
                { time: '10:42 AM', type: 'ERROR', message: 'Failed to connect to Stripe Webhook', id: 'ERR-992' },
                { time: '09:15 AM', type: 'WARN', message: 'High CPU utilization detected on worker node 3', id: 'WRN-441' },
                { time: 'Yesterday', type: 'FATAL', message: 'Database connection timeout during backup', id: 'FTL-001' },
                { time: 'Yesterday', type: 'ERROR', message: 'OpenAI API rate limit exceeded', id: 'ERR-882' },
              ].map((log, idx) => (
                <div key={idx} className="p-3 bg-slate-900/80 rounded-lg border-l-4 border-slate-700 flex flex-col gap-1"
                  style={{ borderLeftColor: log.type === 'FATAL' ? '#E11D48' : log.type === 'ERROR' ? '#F43F5E' : '#F59E0B' }}
                >
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500">{log.time} [{log.id}]</span>
                    <span className={`font-bold ${log.type === 'FATAL' ? 'text-rose-600' : log.type === 'ERROR' ? 'text-rose-400' : 'text-yellow-500'}`}>
                      {log.type}
                    </span>
                  </div>
                  <p className="text-slate-300 flex items-start gap-2">
                    <Bug className="w-4 h-4 shrink-0 mt-0.5 opacity-50" />
                    {log.message}
                  </p>
                </div>
              ))}
            </div>
            
            <button className="w-full mt-6 py-3 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-xl text-sm font-bold text-white transition-colors">
              Export Full Server Logs
            </button>
          </GlassCard>

        </div>
      </div>
    </ThemeLayout>
  );
};

export default SystemReports;
