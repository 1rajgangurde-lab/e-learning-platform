import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, BrainCircuit, Target, Trophy, ArrowRight, Users, BookOpen, Star } from 'lucide-react';

// New Components
import AnimatedBackground from '../../components/home/AnimatedBackground';
import ParticleLayer from '../../components/home/ParticleLayer';
import StatsCard from '../../components/home/StatsCard';
import GlassCard from '../../components/home/GlassCard';
import AIAssistantPreview from '../../components/home/AIAssistantPreview';
import RoadmapPreview from '../../components/home/RoadmapPreview';
import CourseShowcase from '../../components/home/CourseShowcase';
import AchievementPreview from '../../components/home/AchievementPreview';
import LeaderboardPreview from '../../components/home/LeaderboardPreview';
import TestimonialSection from '../../components/home/TestimonialSection';
import PortfolioPreview from '../../components/home/PortfolioPreview';
import CTASection from '../../components/home/CTASection';
import ExploreCoursesButton from '../../components/home/ExploreCoursesButton';

const FeatureCard = ({ icon: Icon, title, desc, delay }) => (
  <GlassCard delay={delay} className="p-8 h-full flex flex-col">
    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-6 border border-white/10 shadow-[0_0_20px_rgba(37,99,235,0.2)] group-hover:scale-110 transition-transform duration-300">
      <Icon className="w-7 h-7 text-blue-400" />
    </div>
    <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
    <p className="text-slate-400 leading-relaxed flex-grow">{desc}</p>
  </GlassCard>
);

const Home = () => {
  return (
    <AnimatedBackground>
      <ParticleLayer />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 z-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0F172A]/80 backdrop-blur-md border border-white/10 mb-8 shadow-[0_0_20px_rgba(37,99,235,0.2)]"
          >
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-slate-300">AI Powered Learning Platform</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight max-w-5xl mx-auto"
          >
            Master New Skills with <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 drop-shadow-[0_0_30px_rgba(37,99,235,0.5)]">Intelligent Guidance</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto"
          >
            Personalized roadmaps, AI study assistants, and gamified experiences designed to accelerate your career in tech.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24"
          >
            <Link to="/register" className="px-8 py-4 w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-xl font-bold text-lg transition-all shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(37,99,235,0.6)] flex items-center justify-center gap-2 hover:-translate-y-1">
              Get Started <ArrowRight className="w-5 h-5" />
            </Link>
            <ExploreCoursesButton className="px-8 py-4 w-full sm:w-auto bg-[#0F172A]/80 backdrop-blur-md text-white border border-white/10 rounded-xl font-bold text-lg hover:bg-white/5 transition-all hover:-translate-y-1" />
          </motion.div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <StatsCard icon={Users} value="10K+" label="Active Students" delay={0.4} />
            <StatsCard icon={BookOpen} value="500+" label="Premium Courses" delay={0.5} />
            <StatsCard icon={Star} value="95%" label="Success Rate" delay={0.6} />
            <StatsCard icon={Trophy} value="1M+" label="XP Earned" delay={0.7} />
          </div>
        </div>
      </section>

      {/* Main Content Flow */}
      <AIAssistantPreview />
      
      {/* Features Grid */}
      <section className="py-24 relative z-20 bg-slate-900/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Everything you need to succeed</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">Built from the ground up to make learning faster, easier, and more engaging.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={BrainCircuit}
              title="AI Study Assistant"
              desc="Get instant answers, dynamic flashcards, and personalized MCQs generated from your course content."
              delay={0.1}
            />
            <FeatureCard 
              icon={Target}
              title="Career Roadmaps"
              desc="Tell us your dream job, and our AI will build a step-by-step curriculum to get you there."
              delay={0.2}
            />
            <FeatureCard 
              icon={Trophy}
              title="Gamified Learning"
              desc="Earn XP, maintain streaks, and unlock achievements as you progress through your courses."
              delay={0.3}
            />
          </div>
        </div>
      </section>

      <RoadmapPreview />
      <CourseShowcase />
      <AchievementPreview />
      <LeaderboardPreview />
      <TestimonialSection />
      <PortfolioPreview />
      <CTASection />

    </AnimatedBackground>
  );
};

export default Home;
