import React from 'react';
import { PlayCircle, Clock, Users, Heart, Share2, Award, Star } from 'lucide-react';
import GlassCard from '../ui/GlassCard';
import GradientButton from '../ui/GradientButton';
import Rating from './Rating';
import EnrollButton from './EnrollButton';

const CourseHero = ({ course, isWishlisted, onWishlist, onPlay }) => {
  return (
    <div className="grid lg:grid-cols-3 gap-8 relative z-10 pt-8 pb-12">
      {/* Mobile Video Preview */}
      <div className="lg:hidden">
        <div 
          className="relative aspect-video rounded-2xl overflow-hidden group cursor-pointer border border-slate-700/50 shadow-[0_0_30px_rgba(37,99,235,0.2)]"
          onClick={onPlay}
        >
          <img src={course.thumbnail} alt="Course Preview" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
            <PlayCircle className="w-16 h-16 text-white opacity-80 group-hover:scale-110 transition-transform" />
          </div>
        </div>
      </div>

      {/* Course Info */}
      <div className="lg:col-span-2 space-y-6">
        <div className="flex items-center gap-2 text-sm font-medium text-blue-400">
          <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full">{course.category}</span>
          <span>•</span>
          <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 text-purple-400 rounded-full">{course.level}</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight drop-shadow-md">
          {course.title}
        </h1>
        
        <div className="flex flex-wrap items-center gap-6 text-sm text-slate-300">
          <div className="flex items-center gap-2 bg-slate-900/50 px-3 py-1.5 rounded-full border border-slate-700/50">
            <span className="font-bold text-yellow-400">{course.ratingAverage?.toFixed(1) || 0}</span>
            <Rating rating={course.ratingAverage || 0} size="w-4 h-4" />
            <span className="text-slate-400">({course.ratingCount?.toLocaleString() || 0} reviews)</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-blue-400" />
            <span>{course.enrollmentCount?.toLocaleString() || 0} students enrolled</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-purple-400" />
            <span>Last updated {new Date(course.updatedAt).toLocaleDateString()}</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4 mt-8 bg-slate-900/30 p-4 rounded-2xl border border-slate-800/50 inline-flex">
          <img src={course.instructor?.avatar || 'https://via.placeholder.com/40'} alt="Instructor" className="w-12 h-12 rounded-full border-2 border-slate-700 object-cover" />
          <div>
            <p className="text-xs text-slate-400 uppercase tracking-wider font-bold">Created by</p>
            <p className="font-bold text-white text-lg">{course.instructor?.name}</p>
          </div>
        </div>
      </div>

      {/* Desktop Floating Card */}
      <div className="hidden lg:block relative z-20">
        <GlassCard className="p-6 sticky top-24 shadow-[0_0_40px_rgba(37,99,235,0.15)] border-blue-500/20">
          <div 
            className="relative aspect-video rounded-xl overflow-hidden mb-6 group cursor-pointer border border-slate-700/50"
            onClick={onPlay}
          >
            <img src={course.thumbnail} alt="Course Preview" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
              <PlayCircle className="w-16 h-16 text-white opacity-80 group-hover:scale-110 transition-transform" />
            </div>
          </div>
          
          <div className="flex items-end justify-between mb-6">
            <div className="text-4xl font-bold text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
              {course.price === 0 ? 'Free' : `$${course.price}`}
            </div>
          </div>
          
          <EnrollButton courseId={course._id} price={course.price} />

          <div className="flex gap-3 mb-6 mt-4">
            <button 
              onClick={onWishlist}
              className={`flex-1 py-3 flex justify-center items-center gap-2 border rounded-xl font-medium transition-all duration-300 ${isWishlisted ? 'bg-red-500/10 border-red-500/30 text-red-400 shadow-[0_0_15px_rgba(239,68,68,0.2)]' : 'bg-slate-800/50 border-slate-700/50 text-slate-300 hover:bg-slate-700'}`}
            >
              <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-red-500' : ''}`} /> {isWishlisted ? 'Wishlisted' : 'Wishlist'}
            </button>
            <button className="px-4 py-3 border border-slate-700/50 bg-slate-800/50 rounded-xl text-slate-300 hover:bg-slate-700 transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
          
          <div className="space-y-3 pt-4 border-t border-slate-800/50">
            <h4 className="font-bold text-white mb-3">This course includes:</h4>
            <div className="flex items-center gap-3 text-sm text-slate-300">
              <Clock className="w-4 h-4 text-blue-400 drop-shadow-[0_0_5px_rgba(37,99,235,0.5)]" /> <span>{course.duration} hours on-demand video</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-300">
              <Award className="w-4 h-4 text-purple-400 drop-shadow-[0_0_5px_rgba(124,58,237,0.5)]" /> <span>Certificate of completion</span>
            </div>
          </div>
        </GlassCard>
      </div>

      {/* Mobile Actions */}
      <div className="lg:hidden space-y-4">
        <div className="text-3xl font-bold text-white">
          {course.price === 0 ? 'Free' : `$${course.price}`}
        </div>
        <EnrollButton courseId={course._id} price={course.price} />
        <div className="flex gap-3">
          <button 
            onClick={onWishlist}
            className={`flex-1 py-3 flex justify-center items-center gap-2 border rounded-xl font-medium transition-colors ${isWishlisted ? 'bg-red-500/10 border-red-500/30 text-red-400' : 'bg-slate-800/50 border-slate-700/50 text-slate-300'}`}
          >
            <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-red-500' : ''}`} /> {isWishlisted ? 'Wishlisted' : 'Wishlist'}
          </button>
          <button className="px-4 py-3 border border-slate-700/50 bg-slate-800/50 rounded-xl text-slate-300">
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseHero;
