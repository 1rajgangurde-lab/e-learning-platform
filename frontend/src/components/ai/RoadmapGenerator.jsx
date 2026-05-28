import React, { useState } from 'react';
import GlassCard from '../ui/GlassCard';
import { Route, CheckCircle2, Circle, ArrowRight, Zap, Target, BookOpen, Layers } from 'lucide-react';

const mockRoadmap = [
  { id: 1, title: 'HTML5 & Semantic Web', duration: '2 Weeks', xp: 500, status: 'completed', icon: Layers },
  { id: 2, title: 'CSS3 & Modern Layouts', duration: '3 Weeks', xp: 750, status: 'completed', icon: Zap },
  { id: 3, title: 'Advanced JavaScript Concepts', duration: '4 Weeks', xp: 1200, status: 'current', icon: BookOpen },
  { id: 4, title: 'React Ecosystem & Hooks', duration: '5 Weeks', xp: 2000, status: 'locked', icon: Target },
  { id: 5, title: 'Fullstack Next.js Apps', duration: '6 Weeks', xp: 3000, status: 'locked', icon: Layers },
];

const RoadmapGenerator = () => {
  const [targetGoal, setTargetGoal] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [showRoadmap, setShowRoadmap] = useState(true);

  const handleGenerate = () => {
    if (!targetGoal) return;
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setShowRoadmap(true);
    }, 2000);
  };

  return (
    <GlassCard className="h-[750px] border-slate-700/50 shadow-2xl overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700">
      <div className="p-8">
        
        <div className="text-center mb-10">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-cyan-600 mx-auto flex items-center justify-center shadow-[0_0_30px_rgba(124,58,237,0.3)] mb-4 border border-purple-500/50">
            <Route className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">AI Roadmap Generator</h2>
          <p className="text-slate-400 max-w-lg mx-auto">Tell the AI your ultimate career goal, and it will generate a step-by-step glowing learning path optimized for you.</p>
        </div>

        {!showRoadmap ? (
          <div className="max-w-xl mx-auto space-y-4">
            <input 
              type="text" 
              value={targetGoal}
              onChange={(e) => setTargetGoal(e.target.value)}
              placeholder="e.g. Become a Senior Fullstack Developer..."
              className="w-full px-6 py-4 rounded-2xl bg-slate-900 border border-slate-700 focus:border-cyan-500/50 outline-none text-white transition-all shadow-inner placeholder-slate-600 text-center"
            />
            <button 
              onClick={handleGenerate}
              disabled={isGenerating || !targetGoal}
              className="w-full py-4 bg-gradient-to-r from-purple-600 to-cyan-600 hover:opacity-90 rounded-2xl text-white font-bold transition-all shadow-[0_0_20px_rgba(124,58,237,0.3)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isGenerating ? 'Analyzing Pathways...' : 'Generate Learning Path'}
              {!isGenerating && <ArrowRight className="w-5 h-5" />}
            </button>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto relative pt-8 pb-16">
            
            {/* The Glowing Vertical Line */}
            <div className="absolute left-[39px] top-12 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-cyan-500 to-slate-800 shadow-[0_0_15px_rgba(6,182,212,0.5)] z-0" />

            <div className="space-y-12 relative z-10">
              {mockRoadmap.map((node, idx) => {
                const Icon = node.icon;
                const isCompleted = node.status === 'completed';
                const isCurrent = node.status === 'current';
                const isLocked = node.status === 'locked';

                return (
                  <div key={node.id} className={`flex items-start gap-6 transition-all duration-500 ${isLocked ? 'opacity-50 grayscale' : ''}`}>
                    
                    {/* Node Icon/Circle */}
                    <div className="relative shrink-0">
                      <div className={`w-20 h-20 rounded-2xl flex items-center justify-center border-2 transition-all ${
                        isCompleted 
                          ? 'bg-purple-500/20 border-purple-500 text-purple-400 shadow-[0_0_20px_rgba(124,58,237,0.3)]' 
                          : isCurrent 
                            ? 'bg-cyan-500/20 border-cyan-400 text-cyan-400 shadow-[0_0_30px_rgba(6,182,212,0.5)] animate-pulse'
                            : 'bg-slate-900 border-slate-700 text-slate-600'
                      }`}>
                        <Icon className="w-8 h-8" />
                      </div>
                      {/* Connector dot */}
                      {isCompleted && <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center shadow-[0_0_10px_rgba(124,58,237,0.5)]"><CheckCircle2 className="w-4 h-4 text-white" /></div>}
                      {isCurrent && <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-cyan-400 border-4 border-slate-900 shadow-[0_0_10px_rgba(6,182,212,0.5)]" />}
                      {isLocked && <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-slate-800 border-4 border-slate-900" />}
                    </div>

                    {/* Node Content Card */}
                    <div className={`flex-1 p-6 rounded-2xl border backdrop-blur-md transition-all ${
                      isCurrent ? 'bg-cyan-900/10 border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.15)]' : 'bg-slate-900/50 border-slate-800'
                    }`}>
                      <div className="flex justify-between items-start mb-2">
                        <h3 className={`text-xl font-bold ${isCurrent ? 'text-white' : 'text-slate-200'}`}>
                          Phase {idx + 1}: {node.title}
                        </h3>
                        <div className="flex items-center gap-1 text-xs font-bold text-amber-400 bg-amber-500/10 px-2 py-1 rounded">
                          <Zap className="w-3 h-3" /> {node.xp} XP
                        </div>
                      </div>
                      <p className="text-slate-400 text-sm mb-4">Estimated time to complete: {node.duration}</p>
                      
                      {isCurrent && (
                        <button className="px-6 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold rounded-lg transition-colors shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                          Continue Learning
                        </button>
                      )}
                    </div>
                    
                  </div>
                );
              })}
            </div>
            
            <button 
              onClick={() => setShowRoadmap(false)}
              className="mt-12 text-slate-400 hover:text-white text-sm font-bold mx-auto block"
            >
              Start a New Journey
            </button>

          </div>
        )}

      </div>
    </GlassCard>
  );
};

export default RoadmapGenerator;
