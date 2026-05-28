import { useState, useEffect } from 'react';

export const useSplash = () => {
  const [showSplash, setShowSplash] = useState(false);
  const [isReady, setIsReady] = useState(false); // To handle hydration properly

  useEffect(() => {
    // Only check session storage on the client side
    const splashSeen = sessionStorage.getItem('splashSeen');
    
    if (!splashSeen) {
      setShowSplash(true);
    }
    setIsReady(true);
  }, []);

  const completeSplash = () => {
    sessionStorage.setItem('splashSeen', 'true');
    setShowSplash(false);
  };

  return { showSplash, completeSplash, isReady };
};
