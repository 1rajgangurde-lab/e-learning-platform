import React, { useState } from 'react';
import ThemeLayout from '../../components/ui/ThemeLayout';
import CourseBuilder from '../../components/instructor/CourseBuilder';
import CurriculumEditor from '../../components/instructor/CurriculumEditor';
import PublishPanel from '../../components/instructor/PublishPanel';
import { Settings, ListVideo, Send } from 'lucide-react';

const STEPS = [
  { id: 'basic', label: 'Basic Info', icon: Settings },
  { id: 'curriculum', label: 'Curriculum', icon: ListVideo },
  { id: 'publish', label: 'Publish', icon: Send }
];

const CourseCreator = () => {
  const [activeStep, setActiveStep] = useState('basic');

  return (
    <ThemeLayout hideParticles={false}>
      <div className="max-w-7xl mx-auto space-y-8 pb-12">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Course Creator</h1>
          <p className="text-slate-400">Build your course curriculum and manage settings.</p>
        </div>

        {/* Stepper Navigation */}
        <div className="flex gap-4 border-b border-slate-800 pb-4 overflow-x-auto scrollbar-hide">
          {STEPS.map((step) => {
            const Icon = step.icon;
            const isActive = activeStep === step.id;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm whitespace-nowrap transition-all duration-300 ${
                  isActive 
                    ? 'bg-blue-600/20 text-blue-400 border border-blue-500/50 shadow-[0_0_15px_rgba(37,99,235,0.3)]' 
                    : 'bg-slate-900/50 text-slate-400 border border-slate-800 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5" />
                {step.label}
              </button>
            );
          })}
        </div>

        {/* Step Content */}
        <div className="mt-8">
          {activeStep === 'basic' && <CourseBuilder />}
          {activeStep === 'curriculum' && <CurriculumEditor />}
          {activeStep === 'publish' && <PublishPanel />}
        </div>
      </div>
    </ThemeLayout>
  );
};

export default CourseCreator;
