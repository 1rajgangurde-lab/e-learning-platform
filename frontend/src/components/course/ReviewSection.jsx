import React from 'react';
import { Star } from 'lucide-react';
import GlassCard from '../ui/GlassCard';
import Rating from './Rating';

const ReviewSection = () => {
  const reviews = [
    { id: 1, author: 'Alex Turner', rating: 5, date: '2 weeks ago', text: 'Incredible depth! The way the concepts build upon each other makes it so easy to follow.' },
    { id: 2, author: 'Sarah Connor', rating: 4, date: '1 month ago', text: 'Great content, but I wish there were a few more practical exercises in section 3.' }
  ];

  const ratingStats = [
    { stars: 5, percentage: 75 },
    { stars: 4, percentage: 15 },
    { stars: 3, percentage: 7 },
    { stars: 2, percentage: 2 },
    { stars: 1, percentage: 1 }
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <h3 className="text-2xl font-bold text-white flex items-center gap-2">
        <Star className="w-6 h-6 text-yellow-400 fill-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]" />
        Student Reviews
      </h3>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <GlassCard className="p-6 border-slate-700/50 flex flex-col items-center justify-center text-center h-full">
            <h1 className="text-6xl font-bold text-white mb-2">4.8</h1>
            <Rating rating={4.8} size="w-5 h-5" className="mb-2" />
            <p className="text-slate-400 font-medium">Course Rating</p>
          </GlassCard>
        </div>
        
        <div className="md:col-span-2">
          <GlassCard className="p-6 border-slate-700/50 space-y-3">
            {ratingStats.map((stat, idx) => (
              <div key={idx} className="flex items-center gap-4 text-sm font-medium text-slate-300">
                <div className="w-16 flex items-center gap-1">
                  {stat.stars} <Star className="w-3 h-3 text-slate-400" />
                </div>
                <div className="flex-1 bg-slate-900 rounded-full h-2 border border-slate-800">
                  <div 
                    className="h-full rounded-full bg-yellow-400 shadow-[0_0_8px_rgba(250,204,21,0.6)]" 
                    style={{ width: `${stat.percentage}%` }} 
                  />
                </div>
                <div className="w-10 text-right text-slate-400">{stat.percentage}%</div>
              </div>
            ))}
          </GlassCard>
        </div>
      </div>

      <div className="space-y-4">
        {reviews.map(review => (
          <GlassCard key={review.id} className="p-6 border-slate-800/50 hover:bg-slate-800/40 transition-colors">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 font-bold flex items-center justify-center border border-blue-500/30">
                  {review.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white">{review.author}</h4>
                  <div className="flex items-center gap-2 mt-0.5">
                    <Rating rating={review.rating} size="w-3 h-3" />
                    <span className="text-xs text-slate-500">{review.date}</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-slate-300">{review.text}</p>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
