import React from 'react';
import GlassCard from '../ui/GlassCard';
import { Upload, Video, FileText, CheckCircle } from 'lucide-react';

const LessonEditor = ({ lesson }) => {
  if (!lesson) {
    return (
      <GlassCard className="p-8 border-slate-700/50 flex flex-col items-center justify-center text-center h-[400px]">
        <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center mb-4">
          <FileText className="w-8 h-8 text-slate-500" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Select a Lesson</h3>
        <p className="text-slate-400 text-sm max-w-[250px]">Click the edit icon on any lesson in the curriculum to edit its contents here.</p>
      </GlassCard>
    );
  }

  return (
    <GlassCard className="p-6 border-slate-700/50 space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-slate-700">
        <h3 className="text-lg font-bold text-white">Edit Lesson</h3>
        <span className="text-xs font-bold px-2 py-1 bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded uppercase tracking-wider">
          {lesson.type}
        </span>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-bold text-slate-400 mb-2">Lesson Title</label>
          <input type="text" className="w-full px-4 py-2.5 rounded-lg border border-slate-700/50 bg-slate-900/50 focus:bg-slate-900 focus:border-blue-500/50 outline-none text-white transition-all shadow-inner" defaultValue={lesson.title} />
        </div>

        {lesson.type === 'video' && (
          <div>
            <label className="block text-sm font-bold text-slate-400 mb-2">Video Upload</label>
            <div className="w-full p-6 rounded-xl border-2 border-dashed border-slate-600 bg-slate-900/50 hover:bg-slate-900 hover:border-blue-500/50 flex flex-col items-center justify-center gap-2 cursor-pointer transition-colors group">
              <Upload className="w-6 h-6 text-slate-500 group-hover:text-blue-400 transition-colors" />
              <span className="text-sm font-medium text-slate-400 group-hover:text-slate-300 text-center">Drag & drop video file<br/>or click to browse</span>
            </div>
          </div>
        )}

        {lesson.type === 'document' && (
          <div>
            <label className="block text-sm font-bold text-slate-400 mb-2">Document Text (Markdown)</label>
            <textarea rows="6" className="w-full px-4 py-2.5 rounded-lg border border-slate-700/50 bg-slate-900/50 focus:bg-slate-900 focus:border-blue-500/50 outline-none text-white transition-all shadow-inner font-mono text-sm" placeholder="Write lesson content here..." />
          </div>
        )}
      </div>

      <div className="pt-4 flex justify-end">
        <button className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg shadow-[0_0_15px_rgba(37,99,235,0.4)] flex items-center gap-2 transition-all">
          <CheckCircle className="w-4 h-4" /> Save Lesson
        </button>
      </div>
    </GlassCard>
  );
};

export default LessonEditor;
