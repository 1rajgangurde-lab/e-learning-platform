import React from 'react';
import { AnimatedCard } from '../ui/AnimatedCard';
import { Star, Clock, BookOpen, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useWishlist, useWishlistMutations } from '../../hooks/useWishlist';
import { useAuth } from '../../context/AuthContext';

const CourseCard = ({ course }) => {
  const { data: wishlistData } = useWishlist();
  const { addToWishlist, removeFromWishlist, isLoading } = useWishlistMutations();
  const { user } = useAuth();
  // Demo data fallback
  const data = course || {
    id: '1',
    title: 'Advanced React Patterns',
    instructor: 'Jane Doe',
    thumbnail: 'https://via.placeholder.com/400x225',
    rating: 4.8,
    duration: '12h 30m',
    lessons: 24,
    price: 49.99
  };

  const isWishlisted = wishlistData?.data?.some(w => w.course?._id === (course?._id || course?.id));

  const handleWishlist = (e) => {
    e.preventDefault();
    if (!user) return; // Maybe trigger login modal later
    if (isLoading) return; // Prevent double clicks

    if (isWishlisted) {
      removeFromWishlist(course?._id || course?.id);
    } else {
      addToWishlist(course?._id || course?.id);
    }
  };

  return (
    <AnimatedCard className="flex flex-col group h-full">
      <Link to={`/courses/${data.id || data._id}`} className="block relative overflow-hidden aspect-video">
        <img 
          src={data.thumbnail} 
          alt={data.title}
          loading="lazy"
          onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=60&w=400&fm=webp'; }}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-2 right-2 flex flex-col gap-2">
          <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-slate-900 dark:text-white">
            ${data.price}
          </div>
        </div>
        <button 
          onClick={handleWishlist}
          disabled={isLoading}
          className={`absolute top-2 left-2 p-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-full text-slate-400 hover:text-red-500 transition-colors ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-red-500 text-red-500' : ''}`} />
        </button>
      </Link>
      
      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-center gap-1 mb-2">
          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{data.rating}</span>
        </div>
        
        <Link to={`/courses/${data.id}`}>
          <h3 className="font-bold text-lg text-slate-900 dark:text-white line-clamp-2 mb-1 group-hover:text-primary transition-colors">
            {data.title}
          </h3>
        </Link>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">{typeof data.instructor === 'object' ? data.instructor?.name : data.instructor}</p>
        
        <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-medium">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{typeof data.duration === 'number' ? `${Math.floor(data.duration / 60)}h ${data.duration % 60}m` : data.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <BookOpen className="w-4 h-4" />
            <span>{Array.isArray(data.lessons) ? data.lessons.length : data.lessons} lessons</span>
          </div>
        </div>
      </div>
    </AnimatedCard>
  );
};

export default CourseCard;
