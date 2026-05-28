import { useState, useEffect, useCallback, useRef } from 'react';
import { useUpdateProgress } from './useProgress';

export const useCoursePlayer = (courseId, initialLesson) => {
  const [currentLesson, setCurrentLesson] = useState(initialLesson);
  const [playedSeconds, setPlayedSeconds] = useState(0);
  const { mutate: updateProgress } = useUpdateProgress();
  
  const stateRef = useRef({ courseId, lessonId: initialLesson?._id, playedSeconds: 0 });

  useEffect(() => {
    stateRef.current.lessonId = currentLesson?._id;
  }, [currentLesson]);

  const saveProgressToBackend = useCallback((time, duration = 0) => {
    if (!stateRef.current.courseId || !stateRef.current.lessonId) return;
    updateProgress({
      courseId: stateRef.current.courseId,
      lessonId: stateRef.current.lessonId,
      watchTime: time,
      videoDuration: duration
    });
  }, [updateProgress]);

  const handleProgress = (state) => {
    setPlayedSeconds(state.playedSeconds);
    stateRef.current.playedSeconds = state.playedSeconds;
    
    // Auto save every 10 seconds
    if (Math.floor(state.playedSeconds) % 10 === 0) {
      saveProgressToBackend(state.playedSeconds, state.loadedSeconds || 100);
    }
  };

  const handlePauseOrSeek = () => {
    saveProgressToBackend(stateRef.current.playedSeconds);
  };

  // Capture Exit events
  useEffect(() => {
    const handleUnload = () => {
      saveProgressToBackend(stateRef.current.playedSeconds);
    };
    
    window.addEventListener('beforeunload', handleUnload);
    return () => {
      window.removeEventListener('beforeunload', handleUnload);
      handleUnload(); // Save on unmount
    };
  }, [saveProgressToBackend]);

  return {
    currentLesson,
    setCurrentLesson,
    playedSeconds,
    handleProgress,
    handlePauseOrSeek
  };
};
