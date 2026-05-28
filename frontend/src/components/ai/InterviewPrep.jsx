import React, { useState, useEffect, useRef } from 'react';
import GlassCard from '../ui/GlassCard';
import { Target, Terminal, Code, MessageSquare, Mic, StopCircle, Zap } from 'lucide-react';

const InterviewPrep = () => {
  const [mode, setMode] = useState('technical');
  const [terminalOutput, setTerminalOutput] = useState([
    { type: 'system', text: 'Initializing Antigravity Interview Module v2.0...' },
    { type: 'system', text: 'Connecting to GPT-4 Turbo Assessment Engine...' },
    { type: 'success', text: 'Connection Established. Ready.' },
    { type: 'ai', text: 'Welcome candidate. I will be conducting your technical screening today.' },
    { type: 'ai', text: 'Question 1: Explain the concept of Closure in JavaScript and provide a real-world use case.' }
  ]);
  const [input, setInput] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [terminalOutput]);

  const handleSubmit = () => {
    if (!input.trim()) return;
    setTerminalOutput(prev => [...prev, { type: 'user', text: input }]);
    setInput('');
    
    setTimeout(() => {
      setTerminalOutput(prev => [
        ...prev, 
        { type: 'system', text: 'Analyzing response complexity and accuracy...' },
        { type: 'ai', text: 'Good explanation. You correctly identified that closures allow inner functions to access outer scope variables. Let us move to a coding challenge.' }
      ]);
    }, 1500);
  };

  return (
    <div className="h-[750px] flex flex-col gap-6">
      
      {/* Header */}
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold text-white flex items-center gap-3 mb-2">
            <Terminal className="w-6 h-6 text-cyan-400" />
            Interview Simulator
          </h2>
          <p className="text-slate-400">Practice under pressure with AI-driven technical and behavioral screenings.</p>
        </div>
        <div className="flex bg-slate-900/80 p-1 rounded-xl border border-slate-700/50">
          <button 
            onClick={() => setMode('technical')}
            className={`px-6 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all ${mode === 'technical' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' : 'text-slate-500 hover:text-slate-300'}`}
          >
            <Code className="w-4 h-4" /> Technical
          </button>
          <button 
            onClick={() => setMode('behavioral')}
            className={`px-6 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all ${mode === 'behavioral' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' : 'text-slate-500 hover:text-slate-300'}`}
          >
            <MessageSquare className="w-4 h-4" /> Behavioral
          </button>
        </div>
      </div>

      {/* Futuristic Terminal UI */}
      <GlassCard className="flex-1 flex flex-col border-cyan-500/30 bg-[#020617] overflow-hidden shadow-[0_0_40px_rgba(6,182,212,0.1)]">
        
        {/* Terminal Header Bar */}
        <div className="px-4 py-2 bg-slate-900 border-b border-cyan-900/50 flex items-center justify-between">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-xs font-mono text-cyan-500/50">antigravity@interview-node:~</span>
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 animate-pulse">
            <div className="w-2 h-2 bg-emerald-400 rounded-full" /> LIVE
          </div>
        </div>

        {/* Terminal Output */}
        <div className="flex-1 p-6 overflow-y-auto font-mono text-sm space-y-4">
          {terminalOutput.map((line, idx) => (
            <div key={idx} className="flex gap-3">
              {line.type === 'system' && (
                <><span className="text-slate-500">[{new Date().toLocaleTimeString()}]</span><span className="text-slate-400">{line.text}</span></>
              )}
              {line.type === 'success' && (
                <><span className="text-slate-500">[{new Date().toLocaleTimeString()}]</span><span className="text-emerald-400">{line.text}</span></>
              )}
              {line.type === 'ai' && (
                <><span className="text-cyan-400 font-bold shrink-0">AI_INTERVIEWER {'>'}</span><span className="text-cyan-100">{line.text}</span></>
              )}
              {line.type === 'user' && (
                <><span className="text-purple-400 font-bold shrink-0">CANDIDATE {'>'}</span><span className="text-slate-300">{line.text}</span></>
              )}
            </div>
          ))}
          <div ref={endRef} />
        </div>

        {/* Terminal Input */}
        <div className="p-4 bg-slate-900/80 border-t border-cyan-900/50 flex items-center gap-4">
          <button 
            onClick={() => setIsRecording(!isRecording)}
            className={`p-3 rounded-full border transition-all ${
              isRecording 
                ? 'bg-rose-500/20 border-rose-500 text-rose-400 shadow-[0_0_15px_rgba(225,29,72,0.4)] animate-pulse' 
                : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50'
            }`}
          >
            {isRecording ? <StopCircle className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
          </button>
          
          <div className="flex-1 relative flex items-center font-mono">
            <span className="absolute left-4 text-purple-400 font-bold">~</span>
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
              placeholder="Type your response or paste code..."
              className="w-full pl-8 pr-4 py-3 bg-slate-950 border border-slate-800 focus:border-cyan-500/50 outline-none text-slate-300 rounded-lg placeholder-slate-700"
            />
          </div>
          
          <button 
            onClick={handleSubmit}
            className="px-6 py-3 bg-cyan-600/20 hover:bg-cyan-600/30 text-cyan-400 border border-cyan-500/50 font-mono font-bold rounded-lg transition-colors"
          >
            SUBMIT
          </button>
        </div>

      </GlassCard>
    </div>
  );
};

export default InterviewPrep;
