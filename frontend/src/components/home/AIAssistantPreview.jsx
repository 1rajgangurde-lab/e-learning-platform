import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from './GlassCard';
import { Bot, Sparkles, Zap, MessageSquare } from 'lucide-react';

const AIAssistantPreview = () => {
  return (
    <section className="py-24 relative z-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left: Text & Features */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" /> AI Powered Study
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Your Personal <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">AI Tutor</span>, 24/7
              </h2>
              <p className="text-lg text-slate-400 mb-8 max-w-xl">
                Stuck on a complex topic? Our AI assistant breaks down difficult concepts, generates custom flashcards, and quizzes you instantly to ensure true mastery.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Instant Answers</h4>
                    <p className="text-sm text-slate-400">Get context-aware help on any course material.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Custom Quizzes</h4>
                    <p className="text-sm text-slate-400">Generate practice tests on the fly.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: UI Mockup */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 blur-3xl rounded-full" />
              
              <GlassCard hover={false} className="relative z-10 border border-white/10 p-6 flex flex-col gap-4">
                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Antigravity AI</h3>
                    <p className="text-xs text-green-400">Online • Ready to help</p>
                  </div>
                </div>
                
                <div className="space-y-4 pt-2">
                  <div className="flex justify-end">
                    <div className="bg-blue-600 text-white px-4 py-2 rounded-2xl rounded-tr-sm text-sm max-w-[80%]">
                      Can you explain how React Context works simply?
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-[#1E293B] text-slate-300 px-4 py-3 rounded-2xl rounded-tl-sm text-sm max-w-[90%] border border-white/5">
                      <p>Sure! Think of React Context like a global radio station. Instead of passing props down a chain of components (prop-drilling), you broadcast data at the top, and any component can "tune in" using `useContext()` to listen to that exact data.</p>
                    </div>
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

export default AIAssistantPreview;
