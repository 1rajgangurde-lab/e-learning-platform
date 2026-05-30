import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap, BrainCircuit, List, Image as ImageIcon, MessageSquare, AlertTriangle, TrendingUp } from 'lucide-react';
import ThemeLayout from '../../components/ui/ThemeLayout';

const GlassCard = ({ children, className = '' }) => (
  <div className={`bg-[#0F172A]/80 backdrop-blur-xl border border-white/5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-6 ${className}`}>
    {children}
  </div>
);

const AIMonitoringCenter = () => {
  const metrics = [
    { title: 'Total AI Requests', value: '1.2M', trend: '+12%', icon: Cpu, colorClass: 'text-blue-500' },
    { title: 'Tokens Consumed', value: '450M', trend: '+8%', icon: Zap, colorClass: 'text-amber-500' },
    { title: 'AI Errors', value: '24', trend: '-5%', icon: AlertTriangle, colorClass: 'text-red-500' },
    { title: 'Avg Response Time', value: '1.2s', trend: '-2%', icon: TrendingUp, colorClass: 'text-emerald-500' }
  ];

  const tools = [
    { name: 'Roadmaps Generated', value: '45,210', icon: List, color: 'text-purple-500' },
    { name: 'Flashcards Generated', value: '124,500', icon: ImageIcon, color: 'text-blue-400' },
    { name: 'MCQs Generated', value: '89,300', icon: CheckSquare, color: 'text-emerald-400' },
    { name: 'Interview Sessions', value: '12,400', icon: MessageSquare, color: 'text-pink-500' }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">AI Monitoring Center</h1>
        <p className="text-slate-400">Track artificial intelligence usage, tokens, and errors across the platform.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, i) => (
          <GlassCard key={i} className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className={`p-3 rounded-xl bg-slate-800 ${metric.colorClass}`}>
                <metric.icon className="w-6 h-6" />
              </div>
              <span className={`text-sm font-medium ${metric.trend.startsWith('+') && metric.title !== 'AI Errors' ? 'text-emerald-400' : 'text-red-400'}`}>
                {metric.trend}
              </span>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">{metric.value}</div>
              <div className="text-sm text-slate-400">{metric.title}</div>
            </div>
          </GlassCard>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <GlassCard>
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <BrainCircuit className="w-6 h-6 text-purple-500" /> Tool Usage Breakdown
          </h2>
          <div className="space-y-6">
            {tools.map((tool, i) => (
              <div key={i}>
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2 text-slate-300">
                    <tool.icon className={`w-5 h-5 ${tool.color}`} />
                    <span>{tool.name}</span>
                  </div>
                  <span className="font-bold text-white">{tool.value}</span>
                </div>
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.random() * 40 + 40}%` }}
                    className={`h-full ${tool.color.replace('text-', 'bg-')}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard>
          <h2 className="text-xl font-bold text-white mb-6">Recent AI Error Logs</h2>
          <div className="space-y-4">
            {[
              { error: 'Timeout generating Roadmap for topic: "Quantum Computing"', time: '10 mins ago', code: '504 Gateway Timeout' },
              { error: 'Invalid payload for MCQ Generation', time: '1 hour ago', code: '400 Bad Request' },
              { error: 'Rate limit exceeded for User ID: 9482', time: '3 hours ago', code: '429 Too Many Requests' },
            ].map((log, i) => (
              <div key={i} className="p-4 rounded-xl border border-red-500/20 bg-red-500/5 flex flex-col gap-2">
                <div className="flex justify-between items-start">
                  <span className="text-red-400 font-medium">{log.error}</span>
                  <span className="text-xs text-slate-500">{log.time}</span>
                </div>
                <code className="text-xs text-red-300/70">{log.code}</code>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

// Quick fix for missing CheckSquare import from lucide-react above
import { CheckSquare } from 'lucide-react';

export default AIMonitoringCenter;
