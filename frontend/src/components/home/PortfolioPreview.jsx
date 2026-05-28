import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from './GlassCard';
import { Briefcase, Layout, FileText, Share2 } from 'lucide-react';

const PortfolioPreview = () => {
  return (
    <section className="py-24 relative z-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          
          {/* Right: Text & Features */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
                <Briefcase className="w-4 h-4" /> Career Ready
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Instantly Generate <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Portfolios & Resumes</span>
              </h2>
              <p className="text-lg text-slate-400 mb-8 max-w-xl">
                Turn your learning progress into a professional asset. Our platform automatically compiles your completed courses, projects, and achievements into a stunning public portfolio and exportable PDF resume.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0">
                    <Layout className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Public Profile</h4>
                    <p className="text-sm text-slate-400">Share a unique link with recruiters.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-8 h-8 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-400 shrink-0">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Export to PDF</h4>
                    <p className="text-sm text-slate-400">Generate a print-ready modern resume.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Left: UI Mockup */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              {/* Decorative elements */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-500/20 blur-3xl rounded-full" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/20 blur-3xl rounded-full" />
              
              <GlassCard hover={false} className="p-2 border border-white/10 relative z-10">
                <div className="bg-[#020617] rounded-xl overflow-hidden border border-white/5">
                   {/* Browser Header */}
                   <div className="h-8 bg-[#0F172A] border-b border-white/5 flex items-center px-4 gap-2">
                     <div className="flex gap-1.5">
                       <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                       <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                       <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                     </div>
                     <div className="mx-auto bg-black/30 text-slate-500 text-[10px] px-24 py-1 rounded-md flex items-center gap-1">
                        <Share2 className="w-3 h-3" /> antigravity.ai/user/alex
                     </div>
                   </div>
                   
                   {/* Portfolio Content */}
                   <div className="p-6">
                     <div className="flex items-center gap-4 mb-6">
                       <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150" alt="avatar" className="w-16 h-16 rounded-full border-2 border-indigo-500" />
                       <div>
                         <h3 className="text-xl font-bold text-white">Alex Johnson</h3>
                         <p className="text-sm text-indigo-400">Frontend Developer</p>
                       </div>
                     </div>
                     
                     <div className="grid grid-cols-2 gap-4 mb-4">
                       <div className="bg-[#0F172A] p-3 rounded-lg border border-white/5">
                         <h4 className="text-xs text-slate-400 mb-1">Certificates</h4>
                         <p className="text-lg font-bold text-white">4 Earned</p>
                       </div>
                       <div className="bg-[#0F172A] p-3 rounded-lg border border-white/5">
                         <h4 className="text-xs text-slate-400 mb-1">Projects</h4>
                         <p className="text-lg font-bold text-white">12 Completed</p>
                       </div>
                     </div>
                     
                     <div className="bg-indigo-600/20 border border-indigo-500/30 rounded-lg p-3 text-center cursor-pointer hover:bg-indigo-600/30 transition-colors">
                       <span className="text-indigo-400 text-sm font-medium flex items-center justify-center gap-2">
                         <FileText className="w-4 h-4" /> Download Resume (PDF)
                       </span>
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

export default PortfolioPreview;
