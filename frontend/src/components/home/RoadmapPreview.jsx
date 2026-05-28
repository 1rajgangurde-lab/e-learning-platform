import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from './GlassCard';
import { Map, ArrowRight, Target, Code, Database } from 'lucide-react';

const RoadmapPreview = () => {
  return (
    <section className="py-24 relative z-20 bg-slate-900/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-4">
              <Map className="w-4 h-4" /> Career Roadmaps
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Your Path to Success
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Stop guessing what to learn next. Tell us your dream career, and our AI will build a personalized, step-by-step curriculum customized to your skill level.
            </p>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Connecting Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent transform md:-translate-x-1/2" />
          
          <div className="space-y-8 relative z-10">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col md:flex-row items-center gap-6"
            >
              <div className="hidden md:block w-1/2 pr-12 text-right">
                <h3 className="text-xl font-bold text-white mb-2">Frontend Fundamentals</h3>
                <p className="text-slate-400 text-sm">Master HTML, CSS, and modern JavaScript basics to build a strong foundation.</p>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-[#0F172A] border-2 border-blue-500 flex flex-col items-center justify-center shrink-0 shadow-[0_0_20px_rgba(37,99,235,0.3)] z-10">
                <Code className="w-6 h-6 text-blue-400 mb-1" />
              </div>
              <div className="md:hidden w-full pl-20">
                <h3 className="text-xl font-bold text-white mb-2">Frontend Fundamentals</h3>
                <p className="text-slate-400 text-sm">Master HTML, CSS, and modern JavaScript basics.</p>
              </div>
              <div className="hidden md:block w-1/2 pl-12">
                <GlassCard hover={false} className="p-4">
                  <div className="flex items-center gap-3">
                     <div className="w-8 h-8 rounded bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold">1</div>
                     <span className="text-white text-sm">HTML & CSS Essentials</span>
                  </div>
                </GlassCard>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col md:flex-row items-center gap-6"
            >
              <div className="hidden md:block w-1/2 pr-12">
                <GlassCard hover={false} className="p-4">
                  <div className="flex items-center gap-3">
                     <div className="w-8 h-8 rounded bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold">2</div>
                     <span className="text-white text-sm">React Component Architecture</span>
                  </div>
                </GlassCard>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-[#0F172A] border-2 border-purple-500 flex flex-col items-center justify-center shrink-0 shadow-[0_0_20px_rgba(124,58,237,0.3)] z-10">
                <Database className="w-6 h-6 text-purple-400 mb-1" />
              </div>
              <div className="w-full pl-20 md:pl-12 md:w-1/2 text-left">
                <h3 className="text-xl font-bold text-white mb-2">Advanced UI Patterns</h3>
                <p className="text-slate-400 text-sm">Learn React, state management, and modern hooks for dynamic web apps.</p>
              </div>
            </motion.div>
            
            {/* Step 3 */}
             <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col md:flex-row items-center gap-6"
            >
              <div className="hidden md:block w-1/2 pr-12 text-right">
                <h3 className="text-xl font-bold text-white mb-2">Full-Stack Integration</h3>
                <p className="text-slate-400 text-sm">Connect your frontend to robust Node.js and database backends.</p>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-[#0F172A] border-2 border-cyan-500 flex flex-col items-center justify-center shrink-0 shadow-[0_0_20px_rgba(6,182,212,0.3)] z-10">
                <Target className="w-6 h-6 text-cyan-400 mb-1" />
              </div>
              <div className="md:hidden w-full pl-20">
                <h3 className="text-xl font-bold text-white mb-2">Full-Stack Integration</h3>
                <p className="text-slate-400 text-sm">Connect your frontend to backends.</p>
              </div>
              <div className="hidden md:block w-1/2 pl-12">
                <GlassCard hover={false} className="p-4">
                  <div className="flex items-center gap-3">
                     <div className="w-8 h-8 rounded bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">3</div>
                     <span className="text-white text-sm">MERN Stack Deployment</span>
                  </div>
                </GlassCard>
              </div>
            </motion.div>
          </div>
          
          <div className="mt-16 text-center">
            <button className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl border border-white/10 transition-colors inline-flex items-center gap-2 text-sm font-medium">
              Generate Your Custom Roadmap <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapPreview;
