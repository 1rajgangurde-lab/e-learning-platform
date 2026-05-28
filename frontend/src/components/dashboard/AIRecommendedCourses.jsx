import React from 'react';
import { Sparkles } from 'lucide-react';
import CourseCard from '../course/CourseCard';

const AIRecommendedCourses = () => {
  const dummyRecommended = [
    { id: '101', title: 'Spring Boot Microservices', instructor: 'Tech Lead', thumbnail: 'https://via.placeholder.com/400x225', rating: 4.9, duration: '14h 00m', lessons: 32, price: 59.99 },
    { id: '102', title: 'System Design Interview', instructor: 'Ex-Google Eng', thumbnail: 'https://via.placeholder.com/400x225', rating: 4.8, duration: '9h 30m', lessons: 15, price: 89.99 },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="w-6 h-6 text-primary" />
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">AI Recommendations</h3>
      </div>
      <p className="text-sm text-slate-500 mb-6">Based on your recent progress in <strong className="text-slate-700 dark:text-slate-300">Java Programming</strong>.</p>
      
      <div className="grid md:grid-cols-2 gap-6">
        {dummyRecommended.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default AIRecommendedCourses;
