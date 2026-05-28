import React, { useState } from 'react';
import { Bot, Library, MessageSquare, Route, FileText, Target, Sparkles } from 'lucide-react';
import AIChat from '../../components/ai/AIChat';
import MCQGenerator from '../../components/ai/MCQGenerator';
import RoadmapGenerator from '../../components/ai/RoadmapGenerator';
import Flashcards from '../../components/ai/Flashcards';
import InterviewPrep from '../../components/ai/InterviewPrep';
import ThemeLayout from '../../components/ui/ThemeLayout';
import GlassCard from '../../components/ui/GlassCard';

const AIAssistant = () => {
  const [activeTab, setActiveTab] = useState('chat');

  const tabs = [
    { id: 'chat', label: 'AI Chat', icon: MessageSquare },
    { id: 'flashcards', label: 'Flashcards', icon: Library },
    { id: 'mcq', label: 'MCQ Generator', icon: FileText },
    { id: 'roadmap', label: 'Roadmap', icon: Route },
    { id: 'interview', label: 'Interview Prep', icon: Target },
  ];

  return (
    <ThemeLayout hideParticles={false}>
      <div className="max-w-7xl mx-auto space-y-8 pb-12">
        
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
              <Bot className="w-8 h-8 text-purple-500 animate-pulse" /> Antigravity AI
            </h1>
            <p className="text-slate-400">Your personal intelligence ecosystem. Chat, generate roadmaps, and practice.</p>
          </div>
          <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-bold text-purple-400">GPT-4 Turbo Online</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Sidebar */}
          <div className="w-full md:w-64 shrink-0">
            <GlassCard className="p-4 border-slate-700/50 sticky top-8 space-y-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${
                      isActive 
                        ? 'bg-gradient-to-r from-purple-600/80 to-cyan-600/80 text-white shadow-[0_0_15px_rgba(124,58,237,0.3)] border border-purple-500/50' 
                        : 'text-slate-400 hover:text-white hover:bg-slate-800/50 border border-transparent hover:border-slate-700/50'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {tab.label}
                  </button>
                );
              })}
            </GlassCard>
          </div>

          {/* Main Content */}
          <div className="flex-1">
          {activeTab === 'chat' && <AIChat />}
          {activeTab === 'flashcards' && <Flashcards />}
          {activeTab === 'mcq' && <MCQGenerator />}
          {activeTab === 'roadmap' && <RoadmapGenerator />}
          {activeTab === 'interview' && <InterviewPrep />}
        </div>
        </div>
      </div>
    </ThemeLayout>
  );
};

export default AIAssistant;
