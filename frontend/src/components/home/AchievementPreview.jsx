import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from './GlassCard';
import { Trophy, Shield, Star, Award, TrendingUp } from 'lucide-react';

const AchievementPreview = () => {
  return (
    <section className="py-24 relative z-20 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left: UI Mockup */}
          <div className="w-full lg:w-1/2">
             <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
             >
               <GlassCard hover={false} className="p-8">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-[0_0_30px_rgba(234,179,8,0.3)]">
                        <Trophy className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">Level 42</h3>
                        <p className="text-slate-400 text-sm">Master Scholar</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-blue-400">12,450</div>
                      <p className="text-slate-400 text-sm">Total XP</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-8">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-300">Progress to Level 43</span>
                      <span className="text-blue-400 font-medium">85%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 w-[85%] rounded-full shadow-[0_0_10px_rgba(56,189,248,0.5)]" />
                    </div>
                  </div>
                  
                  <h4 className="text-white font-medium mb-4">Recent Badges</h4>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="flex flex-col items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                      <Shield className="w-8 h-8 text-purple-400" />
                      <span className="text-xs text-slate-300 text-center">React Pro</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                      <Star className="w-8 h-8 text-yellow-400" />
                      <span className="text-xs text-slate-300 text-center">Top 5%</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                      <TrendingUp className="w-8 h-8 text-green-400" />
                      <span className="text-xs text-slate-300 text-center">30 Day Streak</span>
                    </div>
                  </div>
               </GlassCard>
             </motion.div>
          </div>

          {/* Right: Text & Features */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-sm font-medium mb-6">
                <Award className="w-4 h-4" /> Gamified Learning
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Level Up Your <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">Coding Career</span>
              </h2>
              <p className="text-lg text-slate-400 mb-8 max-w-xl">
                Learning shouldn't be boring. Earn experience points (XP) for completing lessons, unlock exclusive badges, and maintain your learning streak to stay motivated.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Earn XP for watching videos and taking quizzes",
                  "Unlock rare badges for mastering specific skills",
                  "Maintain learning streaks for bonus multipliers",
                  "Showcase your rank on your public portfolio"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                      ✓
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AchievementPreview;
