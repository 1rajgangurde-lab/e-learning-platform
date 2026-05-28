import React from 'react';
import ThemeLayout from '../../components/ui/ThemeLayout';
import GlassCard from '../../components/ui/GlassCard';
import BadgeCard from '../../components/gamification/BadgeCard';
import { Trophy, Flame, Target, Star, Rocket, Zap, Shield, BookOpen } from 'lucide-react';

const Achievements = () => {
  return (
    <ThemeLayout hideParticles={false}>
      <div className="space-y-8 max-w-7xl mx-auto pb-12">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Achievements</h1>
          <p className="text-slate-400">Track your milestones, collect badges, and show off your skills.</p>
        </div>

        {/* Highlight Card */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 blur-xl pointer-events-none rounded-2xl" />
          <GlassCard className="p-8 border-yellow-500/30 bg-gradient-to-br from-slate-900/90 to-yellow-900/20 relative z-10 shadow-[0_0_30px_rgba(234,179,8,0.15)] overflow-hidden group">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 group-hover:scale-110 group-hover:opacity-20 transition-all duration-700 pointer-events-none">
              <Trophy className="w-64 h-64 text-yellow-500" />
            </div>
            
            <div className="flex items-center gap-6 relative z-10">
              <div className="w-24 h-24 rounded-full bg-yellow-500/20 border-2 border-yellow-400/50 flex items-center justify-center shadow-[0_0_20px_rgba(234,179,8,0.4)]">
                <Trophy className="w-12 h-12 text-yellow-400 drop-shadow-[0_0_10px_rgba(234,179,8,1)]" />
              </div>
              <div>
                <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-xs font-bold rounded-full border border-yellow-500/30 mb-3 inline-block">Current Rank</span>
                <h2 className="text-3xl font-bold text-white mb-1">Level 12 Explorer</h2>
                <p className="text-slate-300 font-medium">Top <span className="text-yellow-400">15%</span> of all learners this month!</p>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Badge Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          <BadgeCard title="First Blood" description="Complete your first lesson" icon={Star} color="text-yellow-500" />
          <BadgeCard title="On Fire" description="Maintain a 7-day streak" icon={Flame} color="text-orange-500" />
          <BadgeCard title="Speedster" description="Finish a course in 1 day" icon={Zap} color="text-blue-500" />
          <BadgeCard title="Scholar" description="Pass 5 quizzes with 100%" icon={BookOpen} color="text-purple-500" rare={true} />
          <BadgeCard title="Social Butterfly" description="Leave 10 comments" icon={Shield} color="text-green-500" />
          <BadgeCard title="Mastermind" description="Create a career roadmap" icon={Target} color="text-pink-500" />
          
          {/* Locked Badges */}
          <BadgeCard title="Early Bird" description="Study before 6 AM" icon={Rocket} locked={true} />
          <BadgeCard title="Marathon" description="Study for 10 hours straight" icon={Trophy} locked={true} />
          <BadgeCard title="Completionist" description="Earn 5 certificates" icon={Trophy} locked={true} />
          <BadgeCard title="Mentor" description="Have 5 answers marked as helpful" icon={Star} locked={true} />
        </div>
      </div>
    </ThemeLayout>
  );
};

export default Achievements;
