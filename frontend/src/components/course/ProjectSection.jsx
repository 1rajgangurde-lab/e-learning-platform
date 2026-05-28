import React from 'react';
import { FolderGit2, Upload, FileCode, CheckCircle, Clock } from 'lucide-react';
import GlassCard from '../ui/GlassCard';
import GradientButton from '../ui/GradientButton';

const ProjectSection = () => {
  const projects = [
    {
      title: 'Build a Weather App',
      description: 'Use the concepts from this module to build a functional weather application fetching data from an external API.',
      status: 'completed',
      submittedAt: 'Oct 12, 2026',
      githubLink: 'https://github.com/user/weather-app'
    },
    {
      title: 'Authentication Flow',
      description: 'Implement JWT authentication and protected routes for a sample dashboard.',
      status: 'pending',
      dueDate: 'Nov 1, 2026'
    }
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
        <FolderGit2 className="w-6 h-6 text-accent" />
        Course Projects
      </h3>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <GlassCard key={idx} className="p-6 flex flex-col h-full border-slate-700/50 relative overflow-hidden group">
            {/* Status indicator glow */}
            <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none transition-opacity opacity-20 group-hover:opacity-40 ${project.status === 'completed' ? 'bg-green-500' : 'bg-blue-500'}`} />

            <div className="flex justify-between items-start mb-4 relative z-10">
              <div className="bg-slate-900/50 p-2.5 rounded-xl border border-slate-700/50 shadow-inner">
                <FileCode className="w-6 h-6 text-slate-300" />
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1 ${project.status === 'completed' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'}`}>
                {project.status === 'completed' ? <CheckCircle className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
                {project.status}
              </span>
            </div>

            <h4 className="text-xl font-bold text-white mb-2 relative z-10">{project.title}</h4>
            <p className="text-slate-400 text-sm mb-6 flex-1 relative z-10">{project.description}</p>

            {project.status === 'completed' ? (
              <div className="bg-slate-900/50 rounded-xl p-3 border border-slate-700/50 mt-auto relative z-10">
                <p className="text-xs text-slate-500 mb-1">Submitted: {project.submittedAt}</p>
                <a href={project.githubLink} target="_blank" rel="noreferrer" className="text-sm font-medium text-blue-400 hover:text-blue-300 hover:underline">
                  View Repository
                </a>
              </div>
            ) : (
              <div className="mt-auto relative z-10">
                <p className="text-xs text-slate-500 mb-3 flex items-center gap-1">
                  <Clock className="w-3 h-3" /> Due: {project.dueDate}
                </p>
                <GradientButton className="w-full py-2.5 flex justify-center items-center gap-2">
                  <Upload className="w-4 h-4" />
                  Submit Project
                </GradientButton>
              </div>
            )}
          </GlassCard>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
