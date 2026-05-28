import React from 'react';
import { Star, Users, BookOpen } from 'lucide-react';

const InstructorCard = ({ instructor }) => {
  return (
    <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 flex flex-col sm:flex-row gap-8 items-start shadow-xl relative overflow-hidden group">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity" />

      <div className="relative shrink-0">
        <div className="absolute inset-0 bg-blue-500 rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity" />
        <img 
          src={instructor?.avatar || 'https://via.placeholder.com/150'} 
          alt={instructor?.name} 
          className="w-28 h-28 rounded-full object-cover relative z-10 border-2 border-slate-700/50"
        />
      </div>
      
      <div className="relative z-10 flex-1">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
          <div>
            <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">{instructor?.name || 'Instructor Name'}</h3>
            <p className="text-blue-400 text-sm font-medium tracking-wide uppercase">{instructor?.title || 'Senior Software Engineer'}</p>
          </div>
          <button className="px-5 py-2 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-xl border border-slate-600 transition-colors shrink-0">
            Follow
          </button>
        </div>
        
        <div className="flex flex-wrap gap-6 mb-6 p-4 bg-slate-900/60 rounded-xl border border-slate-800/50 shadow-inner inline-flex">
          <div className="flex items-center gap-2 text-sm text-slate-300">
            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400 drop-shadow-[0_0_5px_rgba(250,204,21,0.5)]" />
            <span className="font-bold text-white">4.8</span>
            <span className="text-slate-500">Rating</span>
          </div>
          <div className="w-px bg-slate-700/50" />
          <div className="flex items-center gap-2 text-sm text-slate-300">
            <Users className="w-5 h-5 text-blue-400 drop-shadow-[0_0_5px_rgba(96,165,250,0.5)]" />
            <span className="font-bold text-white">124k</span>
            <span className="text-slate-500">Students</span>
          </div>
          <div className="w-px bg-slate-700/50" />
          <div className="flex items-center gap-2 text-sm text-slate-300">
            <BookOpen className="w-5 h-5 text-purple-400 drop-shadow-[0_0_5px_rgba(168,85,247,0.5)]" />
            <span className="font-bold text-white">12</span>
            <span className="text-slate-500">Courses</span>
          </div>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed max-w-3xl">
          {instructor?.bio || 'Passionate educator with 10+ years of industry experience. Dedicated to making complex topics accessible and engaging for students worldwide.'}
        </p>
      </div>
    </div>
  );
};

export default InstructorCard;
