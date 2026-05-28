import React, { useState } from 'react';
import { MessageSquare, ThumbsUp, Reply, Pin } from 'lucide-react';
import GlassCard from '../ui/GlassCard';
import GradientButton from '../ui/GradientButton';

const DiscussionPanel = () => {
  const [newComment, setNewComment] = useState('');

  const dummyComments = [
    {
      id: 1,
      author: 'Jane Doe',
      avatar: 'https://via.placeholder.com/40',
      text: 'This module perfectly explained the complex state management issues I was having. Thanks!',
      time: '2 days ago',
      likes: 24,
      isPinned: true,
      replies: [
        {
          id: 101,
          author: 'Instructor Name',
          isInstructor: true,
          avatar: 'https://via.placeholder.com/40',
          text: 'Glad it helped Jane! Make sure to check out the supplementary PDF in the resources section for more examples.',
          time: '1 day ago'
        }
      ]
    },
    {
      id: 2,
      author: 'John Smith',
      avatar: 'https://via.placeholder.com/40',
      text: 'At 12:45, why did we use a reducer instead of just state?',
      time: '5 hours ago',
      likes: 3,
      isPinned: false,
      replies: []
    }
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <h3 className="text-2xl font-bold text-white flex items-center gap-2">
        <MessageSquare className="w-6 h-6 text-blue-400" />
        Course Discussion
      </h3>

      <GlassCard className="p-6 border-slate-700/50 relative z-20">
        <div className="flex gap-4">
          <img src="https://via.placeholder.com/40" alt="You" className="w-10 h-10 rounded-full border border-slate-600" />
          <div className="flex-1 space-y-3">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Ask a question or share your thoughts..."
              className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl p-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors resize-none h-24"
            />
            <div className="flex justify-end">
              <GradientButton className="px-6 py-2 shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                Post Comment
              </GradientButton>
            </div>
          </div>
        </div>
      </GlassCard>

      <div className="space-y-6">
        {dummyComments.map((comment) => (
          <GlassCard key={comment.id} className={`p-6 ${comment.isPinned ? 'border-purple-500/30 bg-purple-500/5 shadow-[0_0_20px_rgba(124,58,237,0.05)]' : 'border-slate-800/50 bg-slate-900/40'}`}>
            {comment.isPinned && (
              <div className="flex items-center gap-2 text-purple-400 text-xs font-bold uppercase tracking-wider mb-4">
                <Pin className="w-3 h-3" /> Pinned by Instructor
              </div>
            )}
            <div className="flex gap-4">
              <img src={comment.avatar} alt={comment.author} className="w-10 h-10 rounded-full border border-slate-700" />
              <div className="flex-1">
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="font-bold text-white">{comment.author}</span>
                  <span className="text-xs text-slate-500">{comment.time}</span>
                </div>
                <p className="text-slate-300 leading-relaxed mb-4">
                  {comment.text}
                </p>
                <div className="flex gap-4 text-sm font-medium">
                  <button className="flex items-center gap-1.5 text-slate-400 hover:text-blue-400 transition-colors">
                    <ThumbsUp className="w-4 h-4" /> {comment.likes}
                  </button>
                  <button className="flex items-center gap-1.5 text-slate-400 hover:text-blue-400 transition-colors">
                    <Reply className="w-4 h-4" /> Reply
                  </button>
                </div>

                {comment.replies.length > 0 && (
                  <div className="mt-6 space-y-4">
                    {comment.replies.map(reply => (
                      <div key={reply.id} className="flex gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800/50">
                        <img src={reply.avatar} alt={reply.author} className="w-8 h-8 rounded-full border border-slate-700" />
                        <div>
                          <div className="flex items-baseline gap-3 mb-1">
                            <span className="font-bold text-white flex items-center gap-2">
                              {reply.author}
                              {reply.isInstructor && <span className="bg-blue-500/20 text-blue-400 text-[10px] px-2 py-0.5 rounded uppercase tracking-wider">Instructor</span>}
                            </span>
                            <span className="text-xs text-slate-500">{reply.time}</span>
                          </div>
                          <p className="text-slate-300 text-sm">{reply.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};

export default DiscussionPanel;
