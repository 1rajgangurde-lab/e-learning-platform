import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy } from 'lucide-react';

const AchievementPopup = ({ isVisible, title, description }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50, x: '-50%' }}
          animate={{ opacity: 1, y: 20, x: '-50%' }}
          exit={{ opacity: 0, y: -50, x: '-50%' }}
          transition={{ type: 'spring', bounce: 0.5 }}
          className="fixed top-0 left-1/2 z-[100] bg-white dark:bg-slate-900 border-2 border-yellow-400 rounded-2xl shadow-2xl p-4 flex items-center gap-4 min-w-[300px]"
        >
          <div className="bg-yellow-100 dark:bg-yellow-900/50 p-3 rounded-full">
            <Trophy className="w-8 h-8 text-yellow-500" />
          </div>
          <div>
            <div className="text-xs font-bold text-yellow-500 uppercase tracking-widest mb-1">Achievement Unlocked</div>
            <div className="font-bold text-slate-900 dark:text-white text-lg">{title}</div>
            <div className="text-sm text-slate-500">{description}</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AchievementPopup;
