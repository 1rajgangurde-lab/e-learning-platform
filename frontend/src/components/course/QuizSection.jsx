import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, ArrowRight, HelpCircle, Trophy } from 'lucide-react';
import GlassCard from '../ui/GlassCard';
import GradientButton from '../ui/GradientButton';

const QuizSection = ({ questions = [] }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const data = questions.length > 0 ? questions : [
    {
      question: "What is the primary purpose of a React Component?",
      options: ["To style the DOM", "To manage backend state", "To encapsulate reusable UI logic", "To connect to databases"],
      answer: 2
    },
    {
      question: "Which hook is used for side effects in React?",
      options: ["useState", "useEffect", "useContext", "useReducer"],
      answer: 1
    }
  ];

  const handleSelect = (idx) => {
    if (showResult) return;
    setSelected(idx);
    setShowResult(true);
    if (idx === data[currentIdx].answer) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx < data.length - 1) {
      setCurrentIdx(i => i + 1);
      setSelected(null);
      setShowResult(false);
    }
  };

  const isComplete = showResult && currentIdx === data.length - 1;

  return (
    <GlassCard className="p-8 max-w-3xl mx-auto relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="mb-8 flex justify-between items-center text-sm font-medium relative z-10">
        <span className="bg-slate-900/50 px-4 py-2 rounded-full border border-slate-700/50 text-slate-300 shadow-inner flex items-center gap-2">
          <HelpCircle className="w-4 h-4 text-blue-400" /> Question {currentIdx + 1} of {data.length}
        </span>
        {isComplete && <span className="bg-green-500/10 text-green-400 border border-green-500/30 px-4 py-2 rounded-full font-bold shadow-[0_0_10px_rgba(34,197,94,0.2)]">Score: {score}/{data.length}</span>}
      </div>

      <h3 className="text-2xl font-bold text-white mb-8 relative z-10">
        {data[currentIdx].question}
      </h3>

      <div className="space-y-4 relative z-10">
        {data[currentIdx].options.map((opt, idx) => {
          const isCorrect = showResult && idx === data[currentIdx].answer;
          const isWrong = showResult && selected === idx && idx !== data[currentIdx].answer;

          return (
            <motion.button
              key={idx}
              whileHover={!showResult ? { scale: 1.01 } : {}}
              whileTap={!showResult ? { scale: 0.99 } : {}}
              onClick={() => handleSelect(idx)}
              disabled={showResult}
              className={`w-full p-5 rounded-2xl border text-left flex justify-between items-center transition-all ${
                !showResult 
                  ? 'bg-slate-900/40 border-slate-700/50 text-slate-300 hover:border-blue-500/50 hover:bg-slate-800/60 shadow-sm' 
                  : isCorrect 
                    ? 'border-green-500/50 bg-green-500/10 text-green-400 shadow-[0_0_15px_rgba(34,197,94,0.1)]' 
                    : isWrong 
                      ? 'border-red-500/50 bg-red-500/10 text-red-400 shadow-[0_0_15px_rgba(239,68,68,0.1)]' 
                      : 'border-slate-800/50 bg-slate-900/20 opacity-50 text-slate-500'
              }`}
            >
              <span className="font-medium text-lg">{opt}</span>
              {isCorrect && <CheckCircle className="w-6 h-6 text-green-400 drop-shadow-[0_0_8px_rgba(74,222,128,0.6)]" />}
              {isWrong && <XCircle className="w-6 h-6 text-red-400 drop-shadow-[0_0_8px_rgba(239,68,68,0.6)]" />}
            </motion.button>
          );
        })}
      </div>

      {showResult && !isComplete && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 relative z-10 flex justify-end"
        >
          <GradientButton onClick={handleNext} className="py-3 px-8 flex justify-center items-center gap-2">
            Next Question <ArrowRight className="w-5 h-5" />
          </GradientButton>
        </motion.div>
      )}

      {isComplete && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-10 p-8 bg-blue-900/20 rounded-2xl text-center border border-blue-500/30 shadow-[0_0_30px_rgba(37,99,235,0.15)] relative z-10"
        >
          <div className="w-20 h-20 mx-auto bg-blue-500/20 rounded-full flex items-center justify-center border-2 border-blue-400 mb-6 shadow-[0_0_20px_rgba(37,99,235,0.4)]">
            <Trophy className="w-10 h-10 text-blue-400" />
          </div>
          <h4 className="text-2xl font-bold text-white mb-2">Quiz Completed!</h4>
          <p className="text-slate-300 mb-8 text-lg">You scored <span className="font-bold text-white">{score}</span> out of {data.length}. You earned <span className="text-yellow-400 font-bold">+50 XP</span>.</p>
          <GradientButton className="px-8 py-3 w-full sm:w-auto">
            Continue Learning
          </GradientButton>
        </motion.div>
      )}
    </GlassCard>
  );
};

export default QuizSection;
