import React, { useState } from 'react';
import GlassCard from '../ui/GlassCard';
import { GripVertical, Video, FileText, HelpCircle, Plus, Edit2, Trash2, ChevronDown, ChevronUp } from 'lucide-react';
import LessonEditor from './LessonEditor';

const initialModules = [
  {
    id: 1,
    title: 'Getting Started with React',
    expanded: true,
    lessons: [
      { id: 101, title: 'Introduction to the Course', type: 'video', duration: '5:20' },
      { id: 102, title: 'Environment Setup', type: 'document', duration: '10 mins read' }
    ]
  },
  {
    id: 2,
    title: 'Advanced React Hooks',
    expanded: true,
    lessons: [
      { id: 201, title: 'Understanding useEffect thoroughly', type: 'video', duration: '15:40' },
      { id: 202, title: 'Custom Hooks Architecture', type: 'video', duration: '12:15' },
      { id: 203, title: 'Hooks Knowledge Check', type: 'quiz', duration: '10 questions' }
    ]
  }
];

const CurriculumEditor = () => {
  const [modules, setModules] = useState(initialModules);
  const [editingLesson, setEditingLesson] = useState(null);

  const toggleModule = (moduleId) => {
    setModules(modules.map(mod => mod.id === moduleId ? { ...mod, expanded: !mod.expanded } : mod));
  };

  const getIcon = (type) => {
    switch (type) {
      case 'video': return <Video className="w-4 h-4 text-blue-400" />;
      case 'document': return <FileText className="w-4 h-4 text-emerald-400" />;
      case 'quiz': return <HelpCircle className="w-4 h-4 text-purple-400" />;
      default: return <FileText className="w-4 h-4 text-slate-400" />;
    }
  };

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      {/* Curriculum Builder List */}
      <div className="lg:col-span-2 space-y-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-bold text-white">Course Outline</h3>
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-sm font-bold rounded-lg transition-colors">
            <Plus className="w-4 h-4" /> Add Section
          </button>
        </div>

        {modules.map((mod) => (
          <GlassCard key={mod.id} className="border-slate-700/50 overflow-hidden">
            {/* Module Header */}
            <div className="bg-slate-900/80 p-4 flex items-center justify-between border-b border-slate-700/50">
              <div className="flex items-center gap-4">
                <button className="cursor-grab hover:text-blue-400 text-slate-500 transition-colors">
                  <GripVertical className="w-5 h-5" />
                </button>
                <h4 className="font-bold text-white">Section {mod.id}: {mod.title}</h4>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 transition-colors">
                  <Edit2 className="w-4 h-4" />
                </button>
                <button className="p-2 hover:bg-red-500/10 hover:text-red-400 rounded-lg text-slate-400 transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
                <button onClick={() => toggleModule(mod.id)} className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 transition-colors">
                  {mod.expanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Lesson List (Drag Drop Area) */}
            {mod.expanded && (
              <div className="p-4 space-y-3 bg-slate-900/30">
                {mod.lessons.map((lesson) => (
                  <div key={lesson.id} className="flex items-center justify-between p-3 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-slate-600 transition-colors group">
                    <div className="flex items-center gap-4">
                      <button className="cursor-grab hover:text-blue-400 text-slate-500 transition-colors">
                        <GripVertical className="w-4 h-4" />
                      </button>
                      <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center shadow-inner">
                        {getIcon(lesson.type)}
                      </div>
                      <div>
                        <p className="font-bold text-slate-200 text-sm group-hover:text-blue-300 transition-colors">{lesson.title}</p>
                        <p className="text-xs text-slate-500">{lesson.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button onClick={() => setEditingLesson(lesson)} className="p-2 hover:bg-slate-700 rounded-lg text-blue-400 transition-colors">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button className="p-2 hover:bg-red-500/20 hover:text-red-400 rounded-lg text-slate-500 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}

                <button className="w-full py-3 mt-4 border-2 border-dashed border-slate-700 hover:border-slate-500 rounded-xl flex items-center justify-center gap-2 text-sm font-bold text-slate-400 hover:text-slate-300 transition-all bg-slate-900/30">
                  <Plus className="w-4 h-4" /> Add Lesson
                </button>
              </div>
            )}
          </GlassCard>
        ))}
      </div>

      {/* Editor Panel (Sticky) */}
      <div className="relative">
        <div className="sticky top-24">
          <LessonEditor lesson={editingLesson} />
        </div>
      </div>
    </div>
  );
};

export default CurriculumEditor;
