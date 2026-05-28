import React from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy } from 'lucide-react';

const BadgeUnlock = ({ active, badge }) => {
  const { width, height } = useWindowSize();

  return (
    <AnimatePresence>
      {active && (
        <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
          <Confetti
            width={width}
            height={height}
            recycle={false}
            numberOfPieces={500}
            gravity={0.15}
          />
          
          <motion.div 
            initial={{ scale: 0, rotate: -180, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-2xl border-4 border-yellow-400 flex flex-col items-center max-w-sm w-full mx-4"
          >
            <div className="w-24 h-24 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mb-4">
              <Trophy className="w-12 h-12 text-yellow-500" />
            </div>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-2">Awesome!</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 text-center font-medium">
              You earned the <span className="text-yellow-500 font-bold">{badge}</span>!
            </p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BadgeUnlock;
