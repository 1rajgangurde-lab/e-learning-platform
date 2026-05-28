import React from 'react';
import ThemeLayout from '../../components/ui/ThemeLayout';
import GlassCard from '../../components/ui/GlassCard';
import { useAuth } from '../../context/AuthContext';
import { User, Mail, Shield, Camera, Award, Star, Settings, ExternalLink } from 'lucide-react';

const InstructorProfile = () => {
  const { user } = useAuth();

  return (
    <ThemeLayout hideParticles={false}>
      <div className="max-w-7xl mx-auto space-y-8 pb-12">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Instructor Profile</h1>
          <p className="text-slate-400">Manage your public persona and payout settings.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-1 space-y-6">
            <GlassCard className="p-8 border-slate-700/50 flex flex-col items-center text-center">
              <div className="relative group mb-6">
                <div className="w-32 h-32 rounded-full bg-slate-800 border-4 border-slate-700 overflow-hidden shadow-[0_0_20px_rgba(37,99,235,0.2)]">
                  <img src="https://ui-avatars.com/api/?name=Instructor+Pro&background=0D8ABC&color=fff&size=128" alt="Avatar" className="w-full h-full object-cover" />
                </div>
                <button className="absolute bottom-0 right-0 p-2.5 bg-blue-600 text-white rounded-full shadow-[0_0_15px_rgba(37,99,235,0.5)] border border-blue-400/50">
                  <Camera className="w-5 h-5" />
                </button>
              </div>
              
              <div className="flex items-center gap-2 mb-1 justify-center">
                <h2 className="text-2xl font-bold text-white">{user?.name || "Instructor Pro"}</h2>
                <Award className="w-5 h-5 text-blue-400" title="Verified Instructor" />
              </div>
              <p className="text-slate-400 mb-6">{user?.email || "instructor@example.com"}</p>

              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="bg-slate-900/50 rounded-xl p-3 border border-slate-800">
                  <Star className="w-6 h-6 text-yellow-500 mx-auto mb-2 drop-shadow-[0_0_5px_rgba(234,179,8,0.8)] fill-yellow-500" />
                  <p className="text-2xl font-bold text-white">4.8</p>
                  <p className="text-xs text-slate-500">Instructor Rating</p>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-3 border border-slate-800">
                  <User className="w-6 h-6 text-blue-400 mx-auto mb-2 drop-shadow-[0_0_5px_rgba(59,130,246,0.8)]" />
                  <p className="text-2xl font-bold text-white">1,240</p>
                  <p className="text-xs text-slate-500">Total Students</p>
                </div>
              </div>
            </GlassCard>
            
            <GlassCard className="p-6 border-slate-700/50">
              <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                <Settings className="w-5 h-5 text-emerald-400" /> Payout Info
              </h3>
              <div className="bg-slate-900/50 border border-slate-700/50 p-4 rounded-xl">
                <p className="text-sm text-slate-400 mb-1">Stripe Account</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white">Connected (acct_***89)</span>
                  <ExternalLink className="w-4 h-4 text-emerald-400 cursor-pointer" />
                </div>
              </div>
            </GlassCard>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <GlassCard className="p-8 border-slate-700/50">
              <h3 className="text-xl font-bold text-white mb-6">Profile Details</h3>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Full Name</label>
                    <div className="relative group">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-blue-400 transition-colors" />
                      <input type="text" className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-700/50 bg-slate-900/50 outline-none text-white transition-all shadow-inner" defaultValue={user?.name || "Instructor Pro"} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Email Address</label>
                    <div className="relative group">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-blue-400 transition-colors" />
                      <input type="email" className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-700/50 bg-slate-900/50 outline-none text-slate-500 transition-all shadow-inner cursor-not-allowed" defaultValue={user?.email || "instructor@example.com"} disabled />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Instructor Bio</label>
                  <textarea rows="4" className="w-full p-4 rounded-xl border border-slate-700/50 bg-slate-900/50 outline-none text-white transition-all shadow-inner focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20" defaultValue="Senior Full-Stack Developer with 10+ years of experience building scalable applications. I teach advanced React and Node.js concepts." />
                </div>

                <div className="pt-4 flex justify-end">
                  <button className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-all">
                    Save Changes
                  </button>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </ThemeLayout>
  );
};

export default InstructorProfile;
