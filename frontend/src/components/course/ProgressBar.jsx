import React from 'react';
import { motion } from 'framer-motion';

const ProgressBar = ({ progress = 0, className }) => {
  return (
    <div className={`w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5 overflow-hidden ${className}`}>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="bg-primary h-2.5 rounded-full"
      />
    </div>
  );
};

export default ProgressBar;
