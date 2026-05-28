import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from './GlassCard';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Michael Chang",
    role: "Frontend Developer at TechCorp",
    content: "The AI study assistant helped me understand Redux deeply. It broke down complex state management into simple, bite-sized analogies that finally made it click for me.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
  },
  {
    name: "Emily Rodriguez",
    role: "UI/UX Designer",
    content: "I love the career roadmaps! I wasn't sure what to learn after mastering Figma, but the platform generated a perfect CSS and React roadmap that landed me a promotion.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
  },
  {
    name: "David Smith",
    role: "Full Stack Engineer",
    content: "The portfolio builder alone is worth it. Being able to auto-generate a shareable portfolio from the courses I've completed saved me hours of work.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150"
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-24 relative z-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Loved by Learners Worldwide</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Join thousands of students who have accelerated their careers using our intelligent platform.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <GlassCard key={idx} delay={idx * 0.1} className="p-8 relative">
              <Quote className="absolute top-6 right-6 w-12 h-12 text-white/5" />
              <div className="flex items-center gap-1 text-yellow-500 mb-6">
                {[1, 2, 3, 4, 5].map(star => (
                  <Star key={star} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-slate-300 mb-8 leading-relaxed relative z-10">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full border border-white/10" />
                <div>
                  <h4 className="text-white font-medium">{testimonial.name}</h4>
                  <p className="text-sm text-slate-400">{testimonial.role}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
