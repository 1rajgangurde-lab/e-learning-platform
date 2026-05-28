import React from 'react';
import { motion } from 'framer-motion';

// Optimized particle component to avoid FPS drops
const ParticleLayer = () => {
  // Generate a small, fixed number of particles (optimized 20)
  const particles = Array.from({ length: 20 });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((_, i) => {
        const size = Math.random() * 4 + 2;
        const initialX = Math.random() * 100;
        const initialY = Math.random() * 100;
        const duration = Math.random() * 20 + 10;
        
        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-400/20 shadow-[0_0_10px_rgba(37,99,235,0.5)]"
            style={{
              width: size,
              height: size,
              left: `${initialX}%`,
              top: `${initialY}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0.2, 0.8, 0.2]
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        );
      })}
    </div>
  );
};

export default ParticleLayer;
