import React, { useState } from 'react';
import { PenTool, Bookmark, Clock, MoreVertical, Trash2 } from 'lucide-react';
import GlassCard from '../ui/GlassCard';
import GradientButton from '../ui/GradientButton';

const NotesPanel = () => {
  const [notes, setNotes] = useState([
    { id: 1, timestamp: '12:45', content: 'Important concept about component lifecycle.' },
    { id: 2, timestamp: '18:20', content: 'Remember to check the documentation for useEffect dependencies here.' }
  ]);
  const [newNote, setNewNote] = useState('');

  const handleAddNote = () => {
    if (!newNote.trim()) return;
    setNotes([{ id: Date.now(), timestamp: '00:00', content: newNote }, ...notes]);
    setNewNote('');
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center gap-2 mb-6 text-white">
        <PenTool className="w-6 h-6 text-blue-400" />
        <h3 className="text-2xl font-bold">My Notes</h3>
      </div>

      <GlassCard className="p-4 border-blue-500/20">
        <textarea
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Take a note at current timestamp..."
          className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl p-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors resize-none h-24"
        />
        <div className="flex justify-between items-center mt-3">
          <div className="flex items-center gap-2 text-slate-400 text-sm bg-slate-800/50 px-3 py-1 rounded-full border border-slate-700/50">
            <Clock className="w-4 h-4" /> Current: 05:23
          </div>
          <GradientButton onClick={handleAddNote} className="px-6 py-2 text-sm shadow-[0_0_15px_rgba(37,99,235,0.4)]">
            Save Note
          </GradientButton>
        </div>
      </GlassCard>

      <div className="space-y-3">
        {notes.map((note) => (
          <GlassCard key={note.id} className="p-4 border-slate-800/50 hover:border-slate-700/50 transition-colors group">
            <div className="flex justify-between items-start">
              <div className="flex gap-4">
                <button className="flex flex-col items-center justify-center bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3 py-2 rounded-lg hover:bg-blue-500/20 transition-colors h-fit">
                  <Bookmark className="w-4 h-4 mb-1" />
                  <span className="text-xs font-bold">{note.timestamp}</span>
                </button>
                <p className="text-slate-300 text-sm mt-1 leading-relaxed">
                  {note.content}
                </p>
              </div>
              <button className="text-slate-500 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-all p-2">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};

export default NotesPanel;
