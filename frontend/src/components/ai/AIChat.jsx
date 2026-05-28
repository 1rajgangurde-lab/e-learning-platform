import React, { useState, useEffect, useRef } from 'react';
import GlassCard from '../ui/GlassCard';
import { Send, Bot, Sparkles, User, Lightbulb, Zap, Code, Terminal, FileText } from 'lucide-react';

const mockChat = [
  { id: 1, role: 'ai', text: 'Hello! I am your Antigravity AI. How can I accelerate your learning today?' },
];

const promptChips = [
  { icon: Lightbulb, text: 'Explain React Hooks' },
  { icon: FileText, text: 'Generate MCQ on Node.js' },
  { icon: Terminal, text: 'Interview Questions for Next.js' },
  { icon: Code, text: 'Debug this code' },
];

const TypingIndicator = () => (
  <div className="flex items-center gap-1.5 px-4 py-3 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 rounded-2xl rounded-tl-sm w-fit shadow-[0_0_15px_rgba(124,58,237,0.15)]">
    <div className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: '0ms' }} />
    <div className="w-2 h-2 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: '150ms' }} />
    <div className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: '300ms' }} />
  </div>
);

const AIMessageBubble = ({ text }) => (
  <div className="flex items-start gap-4 max-w-[85%]">
    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(124,58,237,0.4)] border border-purple-400/50">
      <Bot className="w-5 h-5 text-white" />
    </div>
    <div className="px-5 py-4 bg-slate-900/80 border border-purple-500/30 rounded-2xl rounded-tl-sm shadow-[0_0_15px_rgba(124,58,237,0.15)] relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 pointer-events-none group-hover:opacity-100 opacity-50 transition-opacity" />
      <p className="text-slate-200 leading-relaxed relative z-10 text-sm md:text-base">{text}</p>
    </div>
  </div>
);

const UserMessageBubble = ({ text }) => (
  <div className="flex items-start justify-end gap-4 max-w-[85%] ml-auto">
    <div className="px-5 py-4 bg-slate-800 border border-blue-500/20 rounded-2xl rounded-tr-sm shadow-[0_0_15px_rgba(37,99,235,0.1)]">
      <p className="text-white leading-relaxed text-sm md:text-base">{text}</p>
    </div>
    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
      <User className="w-5 h-5 text-blue-400" />
    </div>
  </div>
);

const AIChat = () => {
  const [messages, setMessages] = useState(mockChat);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (text) => {
    if (!text.trim()) return;
    
    // Add User Message
    const userMsg = { id: Date.now(), role: 'user', text };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Mock AI Streaming Response
    setTimeout(() => {
      setIsTyping(false);
      const aiMsg = { id: Date.now() + 1, role: 'ai', text: `Here is a detailed breakdown regarding "${text}". [Simulated AI Response streaming in...]` };
      setMessages(prev => [...prev, aiMsg]);
    }, 1500);
  };

  return (
    <GlassCard className="h-[750px] flex flex-col border-slate-700/50 shadow-2xl relative overflow-hidden">
      
      {/* Header */}
      <div className="p-6 border-b border-slate-800/80 bg-slate-900/50 flex justify-between items-center z-10">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Bot className="w-6 h-6 text-cyan-400 relative z-10" />
            <div className="absolute inset-0 bg-cyan-400 blur-md opacity-50 z-0" />
          </div>
          <div>
            <h2 className="font-bold text-white text-lg">AI Assistant</h2>
            <p className="text-xs text-purple-400 flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> Online & Ready
            </p>
          </div>
        </div>
        <button className="text-xs font-bold text-slate-400 hover:text-white transition-colors bg-slate-800/50 px-3 py-1.5 rounded-full border border-slate-700">
          Clear Chat
        </button>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 z-10 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
        {messages.map((msg) => (
          msg.role === 'ai' 
            ? <AIMessageBubble key={msg.id} text={msg.text} /> 
            : <UserMessageBubble key={msg.id} text={msg.text} />
        ))}
        {isTyping && (
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(124,58,237,0.4)] border border-purple-400/50">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <TypingIndicator />
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-6 bg-slate-900/80 border-t border-slate-800/80 z-10">
        
        {/* Prompt Chips */}
        {messages.length === 1 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {promptChips.map((chip, idx) => {
              const Icon = chip.icon;
              return (
                <button 
                  key={idx}
                  onClick={() => handleSend(chip.text)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/50 border border-slate-700 hover:border-purple-500/50 hover:bg-purple-500/10 text-slate-300 text-xs font-bold transition-all"
                >
                  <Icon className="w-3 h-3 text-cyan-400" />
                  {chip.text}
                </button>
              );
            })}
          </div>
        )}

        {/* Input Bar */}
        <div className="relative group">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend(input)}
            placeholder="Ask me to explain a concept, generate a quiz, or write code..."
            className="w-full pl-6 pr-16 py-4 rounded-2xl bg-slate-900 border border-slate-700 group-hover:border-purple-500/50 focus:border-cyan-500/50 outline-none text-white transition-all shadow-inner placeholder-slate-600"
          />
          <button 
            onClick={() => handleSend(input)}
            disabled={!input.trim()}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-gradient-to-r from-purple-600 to-cyan-600 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl flex items-center justify-center transition-all shadow-[0_0_15px_rgba(124,58,237,0.3)]"
          >
            <Send className="w-4 h-4 text-white ml-0.5" />
          </button>
        </div>
        <p className="text-center text-[10px] text-slate-500 mt-3 font-medium">
          Antigravity AI can make mistakes. Consider verifying important information.
        </p>
      </div>

    </GlassCard>
  );
};

export default AIChat;
