import React from 'react';
import { X, ShieldAlert, Award, BookOpen, Clock, Activity, AlertTriangle } from 'lucide-react';
import GlassCard from '../ui/GlassCard';

const UserProfileModal = ({ user, onClose }) => {
  if (!user) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <GlassCard className="w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden border-slate-700/50 shadow-2xl shadow-blue-500/10">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-800 bg-slate-900/80 flex items-start justify-between shrink-0">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center text-2xl font-bold text-blue-400 border border-slate-700">
              {user.name.charAt(0)}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">{user.name}</h2>
              <p className="text-slate-400">{user.email} • ID: {user.id}</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="px-2 py-0.5 bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded text-xs font-bold uppercase">{user.role}</span>
                <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded text-xs font-bold uppercase">{user.status}</span>
              </div>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-800 text-slate-400 hover:text-white rounded-lg transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-8 bg-slate-900/30">
          
          {/* Quick Stats Grid */}
          <div className="grid grid-cols-4 gap-4">
            <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-800">
              <Award className="w-5 h-5 text-purple-400 mb-2" />
              <p className="text-xs text-slate-400 font-bold uppercase">Total XP</p>
              <p className="text-xl font-bold text-white">12,450</p>
            </div>
            <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-800">
              <BookOpen className="w-5 h-5 text-blue-400 mb-2" />
              <p className="text-xs text-slate-400 font-bold uppercase">Enrollments</p>
              <p className="text-xl font-bold text-white">8</p>
            </div>
            <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-800">
              <Clock className="w-5 h-5 text-emerald-400 mb-2" />
              <p className="text-xs text-slate-400 font-bold uppercase">Learning Hours</p>
              <p className="text-xl font-bold text-white">142h</p>
            </div>
            <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-800">
              <Activity className="w-5 h-5 text-amber-500 mb-2" />
              <p className="text-xs text-slate-400 font-bold uppercase">Current Streak</p>
              <p className="text-xl font-bold text-white">14 Days</p>
            </div>
          </div>

          {/* Security & Moderation Logs */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-red-500" /> Security & Moderation Logs
            </h3>
            <div className="bg-slate-900/50 rounded-xl border border-slate-800 overflow-hidden">
              <div className="p-4 border-b border-slate-800 flex justify-between items-center bg-slate-800/30">
                <span className="text-sm font-medium text-slate-300">Password changed from new IP</span>
                <span className="text-xs text-slate-500">2 days ago</span>
              </div>
              <div className="p-4 border-b border-slate-800 flex justify-between items-center">
                <span className="text-sm font-medium text-amber-500 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" /> Account flagged for spam comments
                </span>
                <span className="text-xs text-slate-500">Oct 15, 2026</span>
              </div>
              <div className="p-4 flex justify-between items-center bg-slate-800/30">
                <span className="text-sm font-medium text-slate-300">Logged in from Windows 11</span>
                <span className="text-xs text-slate-500">Oct 12, 2026</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-slate-800 bg-slate-900/80 flex justify-end gap-3 shrink-0">
          <button className="px-4 py-2 border border-slate-700 hover:bg-slate-800 text-slate-300 font-bold rounded-lg transition-colors">
            Reset Password
          </button>
          <button className="px-4 py-2 border border-amber-500/30 bg-amber-500/10 hover:bg-amber-500/20 text-amber-500 font-bold rounded-lg transition-colors">
            Suspend User
          </button>
          <button className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white font-bold rounded-lg shadow-[0_0_15px_rgba(220,38,38,0.3)] transition-colors">
            Delete Account
          </button>
        </div>

      </GlassCard>
    </div>
  );
};

export default UserProfileModal;
