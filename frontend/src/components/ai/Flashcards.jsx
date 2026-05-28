import React, { useState } from 'react';
import GlassCard from '../ui/GlassCard';
import { Library, Zap, ArrowRight, ArrowLeft } from 'lucide-react';

const mockCards = [
  { id: 1, front: 'What is the Virtual DOM in React?', back: 'The Virtual DOM is a lightweight memory representation of the real DOM. React uses it to diff changes and efficiently update the real browser DOM.', difficulty: 'Medium' },
  { id: 2, front: 'What does the useEffect hook do?', back: 'It allows you to perform side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM.', difficulty: 'Easy' },
  { id: 3, front: 'Explain Server-Side Rendering (SSR).', back: 'SSR is when HTML is rendered on the server instead of the browser. It improves initial load time and SEO by sending a fully hydrated page to the client.', difficulty: 'Hard' },
];

const getDifficultyColor = (diff) => {
  switch(diff) {
    case 'Easy': return 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30 shadow-[0_0_10px_rgba(6,182,212,0.2)]';
    case 'Medium': return 'text-purple-400 bg-purple-500/10 border-purple-500/30 shadow-[0_0_10px_rgba(124,58,237,0.2)]';
    case 'Hard': return 'text-rose-400 bg-rose-500/10 border-rose-500/30 shadow-[0_0_10px_rgba(225,29,72,0.2)]';
    default: return 'text-slate-400 bg-slate-500/10 border-slate-500/30';
  }
};

const Flashcards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleNext = () => {
    setIsFlipped(false);
    setTimeout(() => setCurrentIndex((prev) => (prev + 1) % mockCards.length), 150);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setTimeout(() => setCurrentIndex((prev) => (prev - 1 + mockCards.length) % mockCards.length), 150);
  };

  const currentCard = mockCards[currentIndex];

  return (
    <div className="h-[750px] flex flex-col">
      <div className="flex justify-between items-end mb-6">
        <div>
          <h2 className="text-2xl font-bold text-white flex items-center gap-3 mb-2">
            <Library className="w-6 h-6 text-purple-400" />
            AI Flashcards
          </h2>
          <p className="text-slate-400">Master concepts via spaced repetition.</p>
        </div>
        <div className="px-4 py-2 bg-slate-900/80 border border-slate-700/50 rounded-xl text-sm font-bold text-slate-300">
          Card {currentIndex + 1} of {mockCards.length}
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center perspective-[1500px]">
        
        {/* 3D Flip Card Container */}
        <div 
          onClick={() => setIsFlipped(!isFlipped)}
          className={`relative w-full max-w-2xl h-96 cursor-pointer transition-transform duration-700 preserve-3d group ${isFlipped ? 'rotate-y-180' : ''}`}
        >
          
          {/* FRONT */}
          <GlassCard className="absolute inset-0 p-8 backface-hidden border-slate-700/50 flex flex-col items-center justify-center text-center group-hover:-translate-y-2 group-hover:border-purple-500/50 transition-all shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:shadow-[0_20px_40px_rgba(124,58,237,0.2)]">
            <div className={`absolute top-6 right-6 px-3 py-1 rounded-full text-xs font-bold border ${getDifficultyColor(currentCard.difficulty)}`}>
              {currentCard.difficulty}
            </div>
            <h3 className="text-3xl font-bold text-white leading-relaxed">
              {currentCard.front}
            </h3>
            <p className="absolute bottom-6 text-slate-500 text-sm font-medium animate-pulse">Click to reveal answer</p>
          </GlassCard>

          {/* BACK */}
          <GlassCard className="absolute inset-0 p-8 backface-hidden rotate-y-180 border-cyan-500/30 flex flex-col items-center justify-center text-center bg-slate-900 shadow-[0_0_30px_rgba(6,182,212,0.15)]">
            <div className="absolute top-6 left-6 text-cyan-400 opacity-50">
              <Zap className="w-6 h-6" />
            </div>
            <p className="text-xl text-slate-200 leading-loose">
              {currentCard.back}
            </p>
            <div className="absolute bottom-6 flex gap-4">
              <span className="text-slate-500 text-xs uppercase tracking-wider font-bold">Did you get it right?</span>
            </div>
          </GlassCard>

        </div>

        {/* Controls */}
        <div className="flex items-center gap-6 mt-12">
          <button 
            onClick={handlePrev}
            className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 hover:border-slate-500 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-slate-900/80 hover:bg-rose-500/20 border border-rose-500/30 text-rose-400 font-bold rounded-xl transition-all">
              Needs Review
            </button>
            <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 hover:opacity-90 text-white font-bold rounded-xl shadow-[0_0_15px_rgba(124,58,237,0.3)] transition-all">
              Got It (+50 XP)
            </button>
          </div>

          <button 
            onClick={handleNext}
            className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 hover:border-slate-500 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </div>
  );
};

export default Flashcards;
