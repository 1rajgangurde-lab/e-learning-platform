import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from './GlassCard';
import { PlayCircle, Star, Users } from 'lucide-react';
import ExploreCoursesButton from './ExploreCoursesButton';

const mockCourses = [
  {
    id: 1,
    title: "Advanced Machine Learning with Python",
    instructor: "Dr. Alan Turing",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=600",
    rating: 4.9,
    students: "12K",
    tags: ["AI", "Python"]
  },
  {
    id: 2,
    title: "Full-Stack Web Architecture",
    instructor: "Sarah Drasner",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600",
    rating: 4.8,
    students: "8.5K",
    tags: ["Web", "Architecture"]
  },
  {
    id: 3,
    title: "Cloud Native Deployment",
    instructor: "Kelsey Hightower",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600",
    rating: 5.0,
    students: "5K",
    tags: ["DevOps", "Cloud"]
  }
];

const CourseShowcase = () => {
  return (
    <section className="py-24 relative z-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Premium Courses</h2>
            <p className="text-slate-400 text-lg">Learn from industry experts with highly curated, project-based video courses that guarantee practical skills.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
             <ExploreCoursesButton className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] font-medium inline-flex items-center gap-2" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockCourses.map((course, idx) => (
            <GlassCard key={course.id} delay={idx * 0.1} className="flex flex-col h-full">
              <div className="relative h-48 w-full overflow-hidden rounded-t-xl group">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <PlayCircle className="w-12 h-12 text-white/90 drop-shadow-lg" />
                </div>
                <div className="absolute top-4 left-4 flex gap-2">
                  {course.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 text-xs font-semibold bg-[#0F172A]/80 backdrop-blur-md border border-white/10 rounded-md text-slate-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">{course.title}</h3>
                <p className="text-sm text-slate-400 mb-4 flex-grow">{course.instructor}</p>
                
                <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-auto">
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-medium">{course.rating}</span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-400 text-sm">
                    <Users className="w-4 h-4" />
                    <span>{course.students}</span>
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseShowcase;
