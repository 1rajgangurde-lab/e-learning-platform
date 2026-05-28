import React from 'react';
import ThemeLayout from '../../components/ui/ThemeLayout';
import GlassCard from '../../components/ui/GlassCard';
import { BookOpen, CheckCircle2, XCircle, Clock, Eye, ShieldAlert } from 'lucide-react';

const pendingCourses = [
  { id: 1, title: 'Advanced Fullstack Architecture', instructor: 'Marcus Chen', date: 'Oct 29, 2026', duration: '14h 20m', modules: 12 },
  { id: 2, title: 'Figma UI/UX Masterclass', instructor: 'Sarah Jenkins', date: 'Oct 28, 2026', duration: '8h 45m', modules: 8 },
  { id: 3, title: 'Python for Data Science', instructor: 'Dr. Alan Turing', date: 'Oct 27, 2026', duration: '22h 10m', modules: 18 },
];

const CourseModeration = () => {
  return (
    <ThemeLayout hideParticles={false}>
      <div className="max-w-7xl mx-auto space-y-8 pb-12">
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
              <ShieldAlert className="w-8 h-8 text-rose-500" /> Course Moderation
            </h1>
            <p className="text-slate-400">Review and approve new courses before they are published to students.</p>
          </div>
          <div className="px-4 py-2 bg-slate-900/80 border border-slate-700/50 rounded-lg flex items-center gap-2">
            <Clock className="w-4 h-4 text-yellow-500" />
            <span className="text-sm font-bold text-white">3 Pending Reviews</span>
          </div>
        </div>

        <div className="grid gap-6">
          {pendingCourses.map((course) => (
            <GlassCard key={course.id} className="p-6 border-slate-700/50 hover:border-slate-600 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-xl bg-slate-900 flex items-center justify-center border border-slate-700 shrink-0">
                    <BookOpen className="w-8 h-8 text-rose-400" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-lg font-bold text-white">{course.title}</h3>
                      <span className="px-2 py-0.5 bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 text-xs font-bold rounded uppercase tracking-wider">Under Review</span>
                    </div>
                    <p className="text-sm text-slate-400 mb-2">By <span className="text-blue-400">{course.instructor}</span> • Submitted on {course.date}</p>
                    <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {course.duration}</span>
                      <span className="flex items-center gap-1"><BookOpen className="w-3 h-3" /> {course.modules} Modules</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 md:ml-auto border-t md:border-t-0 border-slate-800 pt-4 md:pt-0">
                  <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-lg transition-colors flex items-center gap-2 text-sm">
                    <Eye className="w-4 h-4" /> Review Content
                  </button>
                  <button className="px-4 py-2 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/30 font-bold rounded-lg transition-colors flex items-center gap-2 text-sm">
                    <XCircle className="w-4 h-4" /> Reject
                  </button>
                  <button className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-colors flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4" /> Approve
                  </button>
                </div>

              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </ThemeLayout>
  );
};

export default CourseModeration;
