import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from './GlassCard';
import { Trophy, Medal, Crown } from 'lucide-react';

const LeaderboardPreview = () => {
  const leaders = [
    { rank: 1, name: "Alex Johnson", role: "Frontend Dev", xp: "45,200", icon: Crown, color: "text-yellow-400" },
    { rank: 2, name: "Maria Garcia", role: "Full Stack", xp: "42,150", icon: Medal, color: "text-slate-300" },
    { rank: 3, name: "James Chen", role: "Data Scientist", xp: "39,800", icon: Medal, color: "text-amber-600" },
    { rank: 4, name: "Sarah Williams", role: "UI/UX Designer", xp: "35,400", icon: null },
    { rank: 5, name: "David Kim", role: "Backend Dev", xp: "34,900", icon: null },
  ];

  return (
    <section className="py-24 relative z-20 bg-slate-900/30 border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Compete on the <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Global Leaderboard</span>
              </h2>
              <p className="text-lg text-slate-400 mb-8 max-w-xl">
                See how you stack up against thousands of other learners worldwide. Climb the ranks, earn bragging rights, and get noticed by recruiters on our competitive leaderboards.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-3xl font-bold text-white mb-1">#1</h4>
                  <p className="text-slate-400 text-sm">Highest Rank Achievable</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-white mb-1">Weekly</h4>
                  <p className="text-slate-400 text-sm">Leaderboard Resets</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2">
             <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
             >
               <GlassCard hover={false} className="p-1">
                 <div className="bg-[#0F172A] rounded-xl overflow-hidden">
                   <div className="px-6 py-4 border-b border-white/5 bg-white/5 flex items-center gap-2">
                     <Trophy className="w-5 h-5 text-yellow-400" />
                     <h3 className="text-white font-semibold">Global Top 5</h3>
                   </div>
                   <div className="divide-y divide-white/5">
                     {leaders.map((leader) => (
                       <div key={leader.rank} className={`flex items-center justify-between px-6 py-4 transition-colors ${leader.rank === 1 ? 'bg-yellow-500/5' : 'hover:bg-white/5'}`}>
                         <div className="flex items-center gap-4">
                           <div className={`w-8 font-bold ${leader.color || 'text-slate-500'}`}>
                             #{leader.rank}
                           </div>
                           <div className="w-10 h-10 rounded-full bg-slate-800 border border-white/10 overflow-hidden flex items-center justify-center">
                              <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${leader.name}`} alt="avatar" className="w-full h-full" />
                           </div>
                           <div>
                             <h4 className="text-white font-medium">{leader.name}</h4>
                             <p className="text-xs text-slate-400">{leader.role}</p>
                           </div>
                         </div>
                         <div className="flex items-center gap-3">
                           <span className="text-blue-400 font-bold">{leader.xp} XP</span>
                           {leader.icon && <leader.icon className={`w-5 h-5 ${leader.color}`} />}
                         </div>
                       </div>
                     ))}
                   </div>
                 </div>
               </GlassCard>
             </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default LeaderboardPreview;
