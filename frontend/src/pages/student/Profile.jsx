import React from 'react';
import ThemeLayout from '../../components/ui/ThemeLayout';
import GlassCard from '../../components/ui/GlassCard';
import { useAuth } from '../../context/AuthContext';
import { User, Mail, Shield, Camera, Award, Zap, Trophy, Briefcase, ExternalLink, Code } from 'lucide-react';

const Profile = () => {
  const { user } = useAuth();

  return (
    <ThemeLayout hideParticles={false}>
      <div className="max-w-7xl mx-auto space-y-8 pb-12">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">My Profile</h1>
          <p className="text-slate-400">Manage your account settings and showcase your learning journey.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          
          {/* Left Column: Avatar & Stats */}
          <div className="lg:col-span-1 space-y-6">
            <GlassCard className="p-8 border-slate-700/50 flex flex-col items-center text-center">
              <div className="relative group mb-6">
                <div className="w-32 h-32 rounded-full bg-slate-800 border-4 border-slate-700 overflow-hidden shadow-[0_0_20px_rgba(37,99,235,0.2)] group-hover:border-blue-500/50 transition-colors">
                  <img src="https://ui-avatars.com/api/?name=Student+User&background=0D8ABC&color=fff&size=128" alt="Avatar" className="w-full h-full object-cover" />
                </div>
                <button className="absolute bottom-0 right-0 p-2.5 bg-blue-600 text-white rounded-full shadow-[0_0_15px_rgba(37,99,235,0.5)] hover:bg-blue-500 transition-colors border border-blue-400/50">
                  <Camera className="w-5 h-5" />
                </button>
              </div>
              <h2 className="text-2xl font-bold text-white mb-1">{user?.name || "Student Learner"}</h2>
              <p className="text-slate-400 mb-6">{user?.email || "student@example.com"}</p>
              
              <div className="w-full flex justify-between text-sm mb-2 text-slate-300">
                <span className="font-bold flex items-center gap-1"><Zap className="w-4 h-4 text-yellow-400" /> Level 12</span>
                <span className="text-slate-500">3,450 / 5,000 XP</span>
              </div>
              <div className="w-full bg-slate-900 rounded-full h-2 mb-6 border border-slate-700/50">
                <div className="bg-gradient-to-r from-blue-600 to-purple-500 h-2 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]" style={{ width: '69%' }}></div>
              </div>

              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="bg-slate-900/50 rounded-xl p-3 border border-slate-800">
                  <Trophy className="w-6 h-6 text-yellow-500 mx-auto mb-2 drop-shadow-[0_0_5px_rgba(234,179,8,0.8)]" />
                  <p className="text-2xl font-bold text-white">#142</p>
                  <p className="text-xs text-slate-500">Global Rank</p>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-3 border border-slate-800">
                  <Award className="w-6 h-6 text-purple-400 mx-auto mb-2 drop-shadow-[0_0_5px_rgba(168,85,247,0.8)]" />
                  <p className="text-2xl font-bold text-white">5</p>
                  <p className="text-xs text-slate-500">Certificates</p>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-6 border-slate-700/50">
              <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-accent" /> Portfolio Link
              </h3>
              <div className="flex items-center gap-2 bg-slate-900/50 border border-slate-700/50 p-3 rounded-xl group hover:border-slate-600 transition-colors cursor-pointer">
                <ExternalLink className="w-5 h-5 text-slate-500 group-hover:text-blue-400 transition-colors" />
                <span className="text-sm font-medium text-slate-400 group-hover:text-slate-300 transition-colors">aie-learning.com/student/portfolio</span>
              </div>
            </GlassCard>
          </div>

          {/* Right Column: Settings & Details */}
          <div className="lg:col-span-2 space-y-8">
            <GlassCard className="p-8 border-slate-700/50">
              <h3 className="text-xl font-bold text-white mb-6">Account Settings</h3>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Full Name</label>
                    <div className="relative group">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-blue-400 transition-colors" />
                      <input type="text" className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-700/50 bg-slate-900/50 focus:bg-slate-900 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 outline-none text-white transition-all shadow-inner" defaultValue={user?.name || "Student Learner"} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Email Address</label>
                    <div className="relative group">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-blue-400 transition-colors" />
                      <input type="email" className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-700/50 bg-slate-900/50 focus:bg-slate-900 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 outline-none text-white transition-all shadow-inner opacity-70" defaultValue={user?.email || "student@example.com"} disabled />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Role & Permissions</label>
                  <div className="relative">
                    <Shield className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400" />
                    <input type="text" className="w-full pl-12 pr-4 py-3 rounded-xl border border-purple-500/20 bg-purple-900/10 outline-none text-purple-300 font-bold uppercase tracking-wider opacity-90 cursor-not-allowed shadow-inner" defaultValue={user?.role || "STUDENT"} disabled />
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <button className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_rgba(37,99,235,0.6)] transition-all">
                    Save Changes
                  </button>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-8 border-slate-700/50">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Code className="w-5 h-5 text-blue-400" /> Mastered Skills
                </h3>
                <button className="text-sm font-bold text-blue-400 hover:text-blue-300">Edit Skills</button>
              </div>
              <div className="flex flex-wrap gap-3">
                {['React.js', 'Node.js', 'Tailwind CSS', 'MongoDB', 'Express', 'JavaScript (ES6+)'].map((skill, idx) => (
                  <span key={idx} className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-sm font-medium hover:border-blue-500/50 hover:text-white transition-colors cursor-pointer shadow-inner">
                    {skill}
                  </span>
                ))}
              </div>
            </GlassCard>
            
          </div>
        </div>
      </div>
    </ThemeLayout>
  );
};

export default Profile;
