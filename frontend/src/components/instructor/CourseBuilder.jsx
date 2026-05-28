import React from 'react';
import GlassCard from '../ui/GlassCard';
import { Upload, Info, Type, Tag, DollarSign, Image as ImageIcon } from 'lucide-react';

const CourseBuilder = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-6">
        <GlassCard className="p-8 border-slate-700/50">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Info className="w-5 h-5 text-blue-400" /> Basic Details
          </h3>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-slate-400 mb-2">Course Title</label>
              <div className="relative group">
                <Type className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-blue-400 transition-colors" />
                <input type="text" placeholder="e.g. Advanced React Architecture" className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-700/50 bg-slate-900/50 focus:bg-slate-900 focus:border-blue-500/50 outline-none text-white transition-all shadow-inner placeholder-slate-600" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-bold text-slate-400 mb-2">Description</label>
              <textarea rows="5" placeholder="What will students learn?" className="w-full p-4 rounded-xl border border-slate-700/50 bg-slate-900/50 focus:bg-slate-900 focus:border-blue-500/50 outline-none text-white transition-all shadow-inner placeholder-slate-600" />
            </div>
          </div>
        </GlassCard>
      </div>

      <div className="space-y-6">
        <GlassCard className="p-8 border-slate-700/50">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Tag className="w-5 h-5 text-purple-400" /> Settings
          </h3>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-slate-400 mb-2">Category</label>
              <select className="w-full p-3 rounded-xl border border-slate-700/50 bg-slate-900/50 outline-none text-white cursor-pointer hover:border-slate-600 transition-colors">
                <option>Web Development</option>
                <option>Data Science</option>
                <option>Design</option>
                <option>Marketing</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-bold text-slate-400 mb-2">Pricing</label>
              <div className="relative group">
                <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-500 group-focus-within:text-emerald-400 transition-colors" />
                <input type="number" placeholder="49.99" className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-700/50 bg-slate-900/50 focus:bg-slate-900 focus:border-emerald-500/50 outline-none text-white transition-all shadow-inner placeholder-slate-600" />
              </div>
            </div>
          </div>
        </GlassCard>

        <GlassCard className="p-8 border-slate-700/50">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <ImageIcon className="w-5 h-5 text-orange-400" /> Thumbnail
          </h3>
          <div className="w-full aspect-video rounded-xl border-2 border-dashed border-slate-600 bg-slate-900/50 hover:bg-slate-900 hover:border-blue-500/50 flex flex-col items-center justify-center gap-2 cursor-pointer transition-colors group">
            <Upload className="w-8 h-8 text-slate-500 group-hover:text-blue-400 transition-colors" />
            <span className="text-sm font-medium text-slate-400 group-hover:text-slate-300">Upload Image (1920x1080)</span>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default CourseBuilder;
