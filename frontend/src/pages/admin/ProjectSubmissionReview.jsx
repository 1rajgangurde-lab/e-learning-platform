import React, { useState } from 'react';
import { CheckSquare, XCircle, ExternalLink, Download, Search, CheckCircle, Clock } from 'lucide-react';

const GlassCard = ({ children, className = '' }) => (
  <div className={`bg-[#0F172A]/80 backdrop-blur-xl border border-white/5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-6 ${className}`}>
    {children}
  </div>
);

const ProjectSubmissionReview = () => {
  const [activeTab, setActiveTab] = useState('pending');

  const submissions = [
    { id: 1, student: 'John Doe', course: 'React Masterclass', project: 'E-commerce Store', date: '2 hours ago', status: 'pending', github: 'https://github.com', zip: 'project.zip' },
    { id: 2, student: 'Jane Smith', course: 'Node.js Backend', project: 'REST API', date: '5 hours ago', status: 'pending', github: 'https://github.com', zip: null },
    { id: 3, student: 'Alice Johnson', course: 'Python for Beginners', project: 'Calculator', date: '1 day ago', status: 'approved', github: 'https://github.com', zip: 'calc.zip' },
    { id: 4, student: 'Bob Wilson', course: 'UI/UX Design', project: 'Mobile App Mockup', date: '2 days ago', status: 'rejected', github: null, zip: 'mockup.zip' },
  ];

  const filteredSubmissions = submissions.filter(s => s.status === activeTab);

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Project Submissions</h1>
          <p className="text-slate-400">Review, approve, and provide feedback on student projects.</p>
        </div>
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
          <input 
            type="text" 
            placeholder="Search projects..." 
            className="w-full bg-slate-900/50 border border-slate-700 text-white rounded-xl pl-10 pr-4 py-2 focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>
      </div>

      <GlassCard className="p-0 overflow-hidden">
        <div className="flex border-b border-white/10">
          {[
            { id: 'pending', label: 'Pending Review', icon: Clock },
            { id: 'approved', label: 'Approved', icon: CheckCircle },
            { id: 'rejected', label: 'Rejected', icon: XCircle }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-4 font-medium transition-colors border-b-2 ${
                activeTab === tab.id 
                  ? 'border-blue-500 text-blue-400 bg-blue-500/5' 
                  : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-white/5'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
              <span className="ml-2 px-2 py-0.5 rounded-full bg-slate-800 text-xs text-slate-300">
                {submissions.filter(s => s.status === tab.id).length}
              </span>
            </button>
          ))}
        </div>

        <div className="p-6 overflow-x-auto">
          {filteredSubmissions.length === 0 ? (
            <div className="text-center py-12 text-slate-500">
              No {activeTab} submissions found.
            </div>
          ) : (
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="border-b border-white/10 text-slate-400 text-sm">
                  <th className="pb-3 px-4 font-medium">Student</th>
                  <th className="pb-3 px-4 font-medium">Course & Project</th>
                  <th className="pb-3 px-4 font-medium">Submitted</th>
                  <th className="pb-3 px-4 font-medium">Files</th>
                  <th className="pb-3 px-4 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {filteredSubmissions.map((sub) => (
                  <tr key={sub.id} className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                    <td className="py-4 px-4 text-white font-medium">{sub.student}</td>
                    <td className="py-4 px-4">
                      <div className="text-white">{sub.project}</div>
                      <div className="text-xs text-slate-500">{sub.course}</div>
                    </td>
                    <td className="py-4 px-4 text-slate-400">{sub.date}</td>
                    <td className="py-4 px-4">
                      <div className="flex gap-2">
                        {sub.github && (
                          <a href={sub.github} target="_blank" rel="noreferrer" className="p-1.5 rounded bg-slate-800 text-blue-400 hover:bg-blue-500/20 transition-colors tooltip-trigger" title="GitHub Repo">
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                        {sub.zip && (
                          <button className="p-1.5 rounded bg-slate-800 text-purple-400 hover:bg-purple-500/20 transition-colors tooltip-trigger" title="Download ZIP">
                            <Download className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </td>
                    <td className="py-4 px-4 text-right">
                      {activeTab === 'pending' ? (
                        <div className="flex justify-end gap-2">
                          <button className="flex items-center gap-1 px-3 py-1.5 rounded bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 transition-colors">
                            <CheckSquare className="w-4 h-4" /> Approve
                          </button>
                          <button className="flex items-center gap-1 px-3 py-1.5 rounded bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors">
                            <XCircle className="w-4 h-4" /> Reject
                          </button>
                        </div>
                      ) : (
                        <button className="px-3 py-1.5 rounded border border-white/10 text-slate-300 hover:bg-white/5 transition-colors">
                          View Details
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </GlassCard>
    </div>
  );
};

export default ProjectSubmissionReview;
