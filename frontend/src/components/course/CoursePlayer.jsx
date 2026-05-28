import React, { useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import { useCoursePlayer } from '../../hooks/useCoursePlayer';
import { Bookmark, FileText, FastForward, Settings } from 'lucide-react';
import { useAddBookmark } from '../../hooks/useBookmarks';

const CoursePlayer = ({ course, currentLesson, onLessonComplete, initialProgressTime }) => {
  const playerRef = useRef(null);
  const { playedSeconds, handleProgress, handlePauseOrSeek } = useCoursePlayer(course?._id, currentLesson);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [showNotes, setShowNotes] = useState(false);
  const [noteText, setNoteText] = useState('');
  
  const { mutate: addBookmark } = useAddBookmark();

  // Resume learning logic
  const handleReady = () => {
    if (playerRef.current && initialProgressTime > 0) {
      playerRef.current.seekTo(initialProgressTime, 'seconds');
    }
  };

  const handleBookmark = () => {
    const currentTime = playerRef.current.getCurrentTime();
    if (noteText.trim()) {
      addBookmark({
        courseId: course._id,
        lessonId: currentLesson._id,
        timestamp: currentTime,
        note: noteText
      });
      setNoteText('');
      setShowNotes(false);
    }
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  if (!currentLesson) return <div className="w-full aspect-video bg-slate-900 rounded-2xl" />;

  return (
    <div className="relative group">
      <div className="w-full bg-black rounded-2xl overflow-hidden shadow-2xl relative aspect-video group">
        <ReactPlayer
          ref={playerRef}
          url={currentLesson.videoUrl || 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'} 
          width="100%"
          height="100%"
          controls={true}
          playing={isPlaying}
          playbackRate={playbackRate}
          onPlay={() => setIsPlaying(true)}
          onPause={() => { setIsPlaying(false); handlePauseOrSeek(); }}
          onSeek={handlePauseOrSeek}
          onReady={handleReady}
          onProgress={handleProgress}
          onEnded={() => onLessonComplete && onLessonComplete(currentLesson)}
        />
        
        {/* Custom Overlay Controls */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
          <button 
            onClick={() => setPlaybackRate(prev => prev === 1 ? 1.5 : prev === 1.5 ? 2 : 1)}
            className="bg-slate-900/60 hover:bg-blue-600/80 backdrop-blur-md border border-slate-700/50 text-white px-3 py-1.5 rounded-lg text-sm font-bold flex items-center gap-1 transition-colors"
          >
            <FastForward className="w-4 h-4" /> {playbackRate}x
          </button>
          <button 
            onClick={() => setShowNotes(!showNotes)}
            className="bg-slate-900/60 hover:bg-yellow-500/80 backdrop-blur-md border border-slate-700/50 text-white px-3 py-1.5 rounded-lg text-sm font-bold flex items-center gap-1 transition-colors"
          >
            <Bookmark className="w-4 h-4" /> Note
          </button>
        </div>

        {/* Note Taking Panel */}
        {showNotes && (
          <div className="absolute bottom-16 right-4 w-72 bg-slate-900/90 backdrop-blur-xl rounded-xl p-4 shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-slate-700/50 animate-in fade-in slide-in-from-bottom-4 z-50">
            <h4 className="font-bold text-white mb-2 flex items-center gap-2">
              <FileText className="w-4 h-4 text-yellow-400" /> Add Note at {formatTime(playerRef.current?.getCurrentTime() || 0)}
            </h4>
            <textarea 
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
              placeholder="Type your insight here..."
              className="w-full h-24 bg-slate-950/50 border border-slate-700/50 rounded-lg p-3 text-sm text-white mb-3 resize-none focus:outline-none focus:border-yellow-500/50 placeholder:text-slate-500"
            />
            <div className="flex justify-end gap-3">
              <button onClick={() => setShowNotes(false)} className="px-3 py-1.5 text-xs font-bold text-slate-400 hover:text-slate-300">Cancel</button>
              <button onClick={handleBookmark} className="px-4 py-1.5 text-xs font-bold bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 rounded-md hover:bg-yellow-500/30 transition-colors shadow-[0_0_10px_rgba(250,204,21,0.2)]">Save Note</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursePlayer;
