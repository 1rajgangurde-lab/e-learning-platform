import React from 'react';

const AnimatedDivider = ({ className = "" }) => {
  return (
    <div className={`h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent ${className}`} />
  );
};

export default AnimatedDivider;
