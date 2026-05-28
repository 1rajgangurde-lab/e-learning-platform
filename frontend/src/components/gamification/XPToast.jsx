import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const XPToast = ({ isVisible, amount, message }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-4"
        >
          <div className="bg-white/20 p-2 rounded-full">
            <Sparkles className="w-6 h-6 text-yellow-100" />
          </div>
          <div>
            <div className="font-black text-xl">+{amount} XP</div>
            <div className="text-sm text-amber-50 font-medium">{message}</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default XPToast;
