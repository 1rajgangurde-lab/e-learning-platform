import React from 'react';
import { PlayCircle, Clock, Award, Zap, ChevronRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import GlassCard from '../ui/GlassCard';

const EnrollmentCard = ({ enrollment }) => {
  const { course, progressPercent, status } = enrollment;
  const navigate = useNavigate();

  return (
    <GlassCard className="overflow-hidden border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group flex flex-col h-full shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(37,99,235,0.2)]">
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={course?.thumbnail || 'https://via.placeholder.com/400x225'} 
          alt={course?.title} 
          className="w-full h-full object-cover group-hover:scale-105 group-hover:brightness-110 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] to-transparent" />
        <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
          <PlayCircle className="w-16 h-16 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
        </div>
        
        {status === 'completed' && (
          <div className="absolute top-3 right-3 bg-purple-500/80 backdrop-blur-md border border-purple-400 text-white text-xs font-bold px-2 py-1 rounded-md flex items-center gap-1 shadow-[0_0_10px_rgba(168,85,247,0.5)]">
            <Award className="w-3 h-3" /> Certified
          </div>
        )}
      </div>
      
      <div className="p-5 flex flex-col flex-1 relative z-10 bg-slate-900/60 backdrop-blur-md">
        <div className="flex justify-between items-start mb-2">
          <span className="text-xs font-bold px-2 py-1 bg-slate-800 border border-slate-700 text-slate-300 rounded uppercase tracking-wider">
            {course?.category || 'Development'}
          </span>
          <span className="flex items-center gap-1 text-xs font-bold text-yellow-400 bg-yellow-500/10 px-2 py-1 rounded border border-yellow-500/20">
             <Zap className="w-3 h-3" /> +150 XP
          </span>
        </div>
        
        <h3 className="font-bold text-lg text-white mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors drop-shadow-md">
          <Link to={`/courses/${course?._id}`}>{course?.title}</Link>
        </h3>
        
        <div className="text-sm text-slate-400 mb-6 flex-1">
          <p className="flex items-center gap-1"><Clock className="w-4 h-4" /> Active: {new Date(enrollment.updatedAt).toLocaleDateString()}</p>
        </div>
        
        <div className="mt-auto space-y-4">
          <div>
            <div className="flex justify-between text-xs font-bold text-slate-300 mb-2">
              <span className={progressPercent === 100 ? 'text-purple-400' : 'text-blue-400'}>
                {progressPercent === 100 ? 'Completed' : 'In Progress'}
              </span>
              <span>{progressPercent}%</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden border border-slate-700/50">
              <div 
                className={`h-full rounded-full transition-all duration-1000 shadow-[0_0_10px_currentColor] ${progressPercent === 100 ? 'bg-purple-500 text-purple-500' : 'bg-blue-500 text-blue-500'}`} 
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
          </div>
          
          <button 
            onClick={() => navigate(`/courses/${course?._id}`)}
            className={`w-full py-2.5 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-all ${
              progressPercent === 100 
                ? 'bg-purple-500/20 text-purple-400 border border-purple-500/50 hover:bg-purple-500/30 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)]'
                : 'bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_rgba(37,99,235,0.6)]'
            }`}
          >
            {progressPercent === 100 ? 'Review Course' : 'Continue Learning'}
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </GlassCard>
  );
};

export default EnrollmentCard;
