import React from 'react';
import GlassCard from '../ui/GlassCard';
import { CheckCircle, XCircle, ExternalLink, Code } from 'lucide-react';

const mockSubmissions = [
  { id: 1, student: 'Alex Johnson', projectTitle: 'Build a Weather App', githubLink: 'https://github.com/alex/weather', status: 'Pending', submittedAt: '2 hours ago' },
  { id: 2, student: 'Sarah Smith', projectTitle: 'Authentication Flow', fileUrl: 'https://cloudinary.com/dummy.zip', status: 'Pending', submittedAt: '5 hours ago' }
];

const PendingProjects = () => {
  return (
    <GlassCard className="p-6 border-slate-700/50">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <Code className="w-5 h-5 text-indigo-400" /> Pending Project Submissions
        </h3>
        <span className="px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-xs font-bold">{mockSubmissions.length} to grade</span>
      </div>

      <div className="space-y-4">
        {mockSubmissions.map((sub) => (
          <div key={sub.id} className="p-4 rounded-xl bg-slate-900/50 border border-slate-700/50 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h4 className="font-bold text-white">{sub.projectTitle}</h4>
              <p className="text-sm text-slate-400">Submitted by <span className="text-slate-300">{sub.student}</span> • {sub.submittedAt}</p>
              
              <div className="mt-2">
                {sub.githubLink && (
                  <a href={sub.githubLink} target="_blank" rel="noreferrer" className="text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1">
                    <ExternalLink className="w-3 h-3" /> View GitHub Repo
                  </a>
                )}
                {sub.fileUrl && (
                  <a href={sub.fileUrl} target="_blank" rel="noreferrer" className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1">
                    <ExternalLink className="w-3 h-3" /> Download ZIP
                  </a>
                )}
              </div>
            </div>

            <div className="flex gap-2">
              <button className="px-4 py-2 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 border border-emerald-500/50 rounded-lg text-sm font-bold flex items-center gap-2 transition-colors">
                <CheckCircle className="w-4 h-4" /> Approve
              </button>
              <button className="px-4 py-2 bg-rose-500/20 hover:bg-rose-500/30 text-rose-400 border border-rose-500/50 rounded-lg text-sm font-bold flex items-center gap-2 transition-colors">
                <XCircle className="w-4 h-4" /> Request Changes
              </button>
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
};

export default PendingProjects;
