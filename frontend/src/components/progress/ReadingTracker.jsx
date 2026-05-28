import React, { useEffect, useRef, useState } from 'react';
import { useUpdateProgress } from '../../hooks/useProgress';

const ReadingTracker = ({ courseId, lessonId, resourceUrl }) => {
  const containerRef = useRef(null);
  const { mutate: updateProgress } = useUpdateProgress();
  const [scrollProgress, setScrollProgress] = useState(0);
  const startTime = useRef(Date.now());

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
      const percent = Math.min((scrollTop / (scrollHeight - clientHeight)) * 100, 100);
      setScrollProgress(Math.round(percent));
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (container) container.removeEventListener('scroll', handleScroll);
      
      const readTime = Math.floor((Date.now() - startTime.current) / 1000);
      updateProgress({
        courseId,
        lessonId,
        readingProgress: {
          resourceId: resourceUrl,
          readPercent: scrollProgress,
          readTime
        }
      });
    };
  }, [courseId, lessonId, resourceUrl, scrollProgress, updateProgress]);

  return (
    <div className="relative w-full h-[600px] border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden bg-slate-50 dark:bg-slate-900 flex flex-col">
      {/* Scroll Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-slate-200 dark:bg-slate-700 z-10">
        <div 
          className="h-full bg-blue-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 p-3 flex justify-between items-center text-sm font-medium text-slate-600 dark:text-slate-300">
        <span>Reading Material</span>
        <span>{scrollProgress}% Completed</span>
      </div>

      <div ref={containerRef} className="w-full flex-1 overflow-y-auto p-4 md:p-8">
        <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 shadow-xl min-h-[1200px] rounded-lg p-8 prose dark:prose-invert">
          {/* Fallback mock content if iframe fails or instead of iframe for demo */}
          <h1>Learning Resource</h1>
          <p>This is a simulated reading document. Scroll down to track your reading progress!</p>
          <div className="h-[800px] bg-slate-100 dark:bg-slate-700 rounded-lg mt-8 flex items-center justify-center text-slate-400">
            [Document Content / PDF Viewer]
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadingTracker;
