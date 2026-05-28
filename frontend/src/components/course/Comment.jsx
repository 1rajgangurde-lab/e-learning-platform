import React from 'react';
import { ThumbsUp, MessageSquare, MoreVertical } from 'lucide-react';

const Comment = ({ author, avatar, date, content, likes = 0, replies = 0 }) => {
  return (
    <div className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
      <img src={avatar || "https://via.placeholder.com/40"} alt={author} className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700" />
      <div className="flex-1">
        <div className="flex justify-between items-start mb-1">
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white text-sm">{author}</h4>
            <span className="text-xs text-slate-500 dark:text-slate-400">{date}</span>
          </div>
          <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
            <MoreVertical className="w-4 h-4" />
          </button>
        </div>
        <p className="text-slate-700 dark:text-slate-300 text-sm mb-3">
          {content}
        </p>
        <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
          <button className="flex items-center gap-1 hover:text-primary transition-colors">
            <ThumbsUp className="w-4 h-4" /> {likes > 0 && likes}
          </button>
          <button className="flex items-center gap-1 hover:text-primary transition-colors">
            <MessageSquare className="w-4 h-4" /> {replies > 0 && replies}
          </button>
          <button className="hover:text-primary transition-colors">Reply</button>
        </div>
      </div>
    </div>
  );
};

export default Comment;
