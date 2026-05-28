import React from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: {
    opacity: 0,
    rotateY: 90,
    transformOrigin: 'left center',
  },
  animate: {
    opacity: 1,
    rotateY: 0,
    transformOrigin: 'left center',
  },
  exit: {
    opacity: 0,
    rotateY: -90,
    transformOrigin: 'left center',
  }
};

const pageTransition = {
  type: 'spring',
  stiffness: 100,
  damping: 20,
  mass: 1,
};

const PageTransition = ({ children, className = "" }) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={pageTransition}
      className={`w-full h-full perspective-1000 ${className}`}
      style={{ perspective: '1200px' }}
    >
      <div style={{ transformStyle: 'preserve-3d' }} className="w-full h-full">
        {children}
      </div>
    </motion.div>
  );
};

export default PageTransition;
