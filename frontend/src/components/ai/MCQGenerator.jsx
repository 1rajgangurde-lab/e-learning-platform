import React, { useState } from 'react';
import GlassCard from '../ui/GlassCard';
import { FileText, Trophy, Zap, Clock, BrainCircuit, Play } from 'lucide-react';

const MCQGenerator = () => {
  const [topic, setTopic] = useState('');
  const [difficulty, setDifficulty] = useState('Medium');
  const [count, setCount] = useState(10);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    if (!topic) return;
    setIsGenerating(true);
    // Mock generate
    setTimeout(() => {
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="h-[750px] flex flex-col items-center justify-center">
      
      <div className="text-center mb-10">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-cyan-600 mx-auto flex items-center justify-center shadow-[0_0_30px_rgba(124,58,237,0.3)] mb-4 border border-purple-500/50">
          <BrainCircuit className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-2">AI Quiz Master</h2>
        <p className="text-slate-400 max-w-lg mx-auto">Generate a highly personalized, gamified quiz on any topic to test your knowledge and earn XP.</p>
      </div>

      <GlassCard className="w-full max-w-2xl p-8 border-slate-700/50 space-y-8">
        
        {/* Topic Input */}
        <div>
          <label className="block text-sm font-bold text-slate-300 mb-2">What do you want to be tested on?</label>
          <input 
            type="text" 
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="e.g. Docker Containers, React Context API..."
            className="w-full px-6 py-4 rounded-xl bg-slate-900 border border-slate-700 focus:border-purple-500/50 outline-none text-white transition-all shadow-inner placeholder-slate-600"
          />
        </div>

        {/* Configuration Grid */}
        <div className="grid grid-cols-2 gap-6">
          
          <div>
            <label className="block text-sm font-bold text-slate-300 mb-2">Difficulty</label>
            <div className="flex bg-slate-900 rounded-xl p-1 border border-slate-700">
              {['Easy', 'Medium', 'Hard'].map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setDifficulty(lvl)}
                  className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${
                    difficulty === lvl 
                      ? lvl === 'Easy' ? 'bg-cyan-500/20 text-cyan-400' 
                      : lvl === 'Medium' ? 'bg-purple-500/20 text-purple-400'
                      : 'bg-rose-500/20 text-rose-400'
                      : 'text-slate-500 hover:text-slate-300'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-300 mb-2">Question Count</label>
            <div className="flex items-center justify-between px-4 py-2 bg-slate-900 rounded-xl border border-slate-700 h-11">
              <span className="text-white font-bold">{count} Questions</span>
              <div className="flex gap-2">
                <button onClick={() => setCount(Math.max(5, count - 5))} className="w-6 h-6 rounded bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center">-</button>
                <button onClick={() => setCount(Math.min(30, count + 5))} className="w-6 h-6 rounded bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center">+</button>
              </div>
            </div>
          </div>

        </div>

        {/* Estimated Rewards Banner */}
        <div className="p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Trophy className="w-5 h-5 text-amber-400" />
            <div>
              <p className="text-sm font-bold text-white">Estimated Rewards</p>
              <p className="text-xs text-slate-400">Complete with 80%+ accuracy</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-lg font-bold text-amber-400">+{count * (difficulty === 'Hard' ? 50 : difficulty === 'Medium' ? 30 : 15)} XP</p>
          </div>
        </div>

        <button 
          onClick={handleGenerate}
          disabled={!topic || isGenerating}
          className="w-full py-4 bg-gradient-to-r from-purple-600 to-cyan-600 hover:opacity-90 rounded-xl text-white font-bold transition-all shadow-[0_0_20px_rgba(124,58,237,0.3)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isGenerating ? (
            <span className="animate-pulse">Generating Quiz...</span>
          ) : (
            <>
              <Play className="w-5 h-5 fill-current" /> Start Challenge
            </>
          )}
        </button>

      </GlassCard>

    </div>
  );
};

export default MCQGenerator;
