import React from 'react';
import { Sparkles } from 'lucide-react';
import CourseCard from './CourseCard';

const RecommendedCourses = () => {
  // Dummy AI logic for recommended courses
  const recommended = [
    { _id: 'r1', title: 'Advanced Next.js Patterns', instructor: { name: 'Sarah Drasner' }, price: 89, ratingAverage: 4.9, thumbnail: 'https://via.placeholder.com/400x225', level: 'Advanced' },
    { _id: 'r2', title: 'TypeScript for React Developers', instructor: { name: 'Matt Pocock' }, price: 49, ratingAverage: 4.7, thumbnail: 'https://via.placeholder.com/400x225', level: 'Intermediate' }
  ];

  return (
    <div className="space-y-6 mt-16 animate-fade-in">
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-purple-500/20 p-2 rounded-lg border border-purple-500/30 shadow-[0_0_15px_rgba(124,58,237,0.3)]">
          <Sparkles className="w-6 h-6 text-purple-400" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white">Recommended for you</h3>
          <p className="text-sm text-slate-400">Based on your progress and quiz performance</p>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recommended.map(course => (
          <CourseCard key={course._id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default RecommendedCourses;
