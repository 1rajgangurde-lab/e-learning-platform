import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const stages = [
  { p: 0, text: "Initializing UI..." },
  { p: 25, text: "Loading Theme..." },
  { p: 50, text: "Preparing Routes..." },
  { p: 75, text: "Rendering Home..." },
  { p: 100, text: "Entering AI Learning Space..." }
];

const LoadingProgress = ({ duration = 3000, onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [stageText, setStageText] = useState(stages[0].text);

  useEffect(() => {
    let start = null;
    let animationFrame;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progressTime = timestamp - start;
      const percentage = Math.min((progressTime / duration) * 100, 100);
      
      setProgress(percentage);
      
      // Update text based on percentage
      const currentStage = [...stages].reverse().find(s => percentage >= s.p);
      if (currentStage) {
        setStageText(currentStage.text);
      }

      if (percentage < 100) {
        animationFrame = requestAnimationFrame(step);
      } else {
        if (onComplete) {
          setTimeout(onComplete, 300); // tiny delay before triggering complete
        }
      }
    };

    animationFrame = requestAnimationFrame(step);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [duration, onComplete]);

  return (
    <div className="w-full max-w-xs mx-auto mt-12 flex flex-col items-center">
      <div className="flex justify-between w-full text-xs text-blue-300/70 mb-2 font-mono">
        <span>{stageText}</span>
        <span>{Math.floor(progress)}%</span>
      </div>
      
      <div className="w-full h-1 bg-[#0F172A] rounded-full overflow-hidden border border-white/5 relative">
        <motion.div 
          className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-blue-600 via-purple-500 to-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.5)]"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default LoadingProgress;
