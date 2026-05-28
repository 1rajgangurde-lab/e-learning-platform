import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedCard } from '../ui/AnimatedCard';
import { Flame } from 'lucide-react';

const StreakCard = ({ streak = 5 }) => {
  return (
    <AnimatedCard hover="subtle" className="p-5 flex items-center justify-between">
      <div>
        <h3 className="font-semibold text-slate-800 dark:text-slate-200">Learning Streak</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">Keep it up to earn more XP!</p>
      </div>
      <div className="flex items-center gap-2">
        <motion.div 
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <Flame className="w-8 h-8 text-orange-500" />
        </motion.div>
        <span className="text-3xl font-bold text-orange-500">{streak}</span>
      </div>
    </AnimatedCard>
  );
};

export default StreakCard;
