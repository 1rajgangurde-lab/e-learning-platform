import React from 'react';
import { Bookmark, PlayCircle } from 'lucide-react';
import GlassCard from '../ui/GlassCard';

const TimestampBookmarks = ({ bookmarks = [] }) => {
  const dummyBookmarks = bookmarks.length ? bookmarks : [
    { title: 'Introduction & Scope', time: '02:15' },
    { title: 'Setting up the environment', time: '08:45' },
    { title: 'Common errors', time: '14:20' }
  ];

  return (
    <GlassCard className="p-6 border-slate-800/50">
      <h4 className="font-bold text-white mb-4 flex items-center gap-2">
        <Bookmark className="w-5 h-5 text-purple-400" />
        Key Timestamps
      </h4>
      <div className="space-y-2">
        {dummyBookmarks.map((bm, idx) => (
          <button key={idx} className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-900/40 border border-slate-800/50 hover:bg-slate-800/60 hover:border-blue-500/30 transition-all group">
            <span className="text-sm text-slate-300 group-hover:text-blue-300 flex items-center gap-2 transition-colors">
              <PlayCircle className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity -ml-6" />
              {bm.title}
            </span>
            <span className="text-xs font-mono font-medium text-purple-400 bg-purple-500/10 px-2 py-1 rounded">
              {bm.time}
            </span>
          </button>
        ))}
      </div>
    </GlassCard>
  );
};

export default TimestampBookmarks;
