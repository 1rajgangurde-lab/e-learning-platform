import React from 'react';
import { FileText, Download, ExternalLink, Paperclip, FileArchive } from 'lucide-react';

const DownloadResource = ({ resource }) => {
  const getIcon = (type) => {
    switch (type) {
      case 'PDF': return <FileText className="w-5 h-5 text-red-400 drop-shadow-[0_0_5px_rgba(248,113,113,0.5)]" />;
      case 'ZIP': return <FileArchive className="w-5 h-5 text-amber-400 drop-shadow-[0_0_5px_rgba(251,191,36,0.5)]" />;
      case 'Link': return <ExternalLink className="w-5 h-5 text-blue-400 drop-shadow-[0_0_5px_rgba(96,165,250,0.5)]" />;
      case 'DOC': return <FileText className="w-5 h-5 text-blue-400 drop-shadow-[0_0_5px_rgba(96,165,250,0.5)]" />;
      case 'PPT': return <FileText className="w-5 h-5 text-orange-400 drop-shadow-[0_0_5px_rgba(251,146,60,0.5)]" />;
      case 'GitHub': return <ExternalLink className="w-5 h-5 text-slate-300 drop-shadow-[0_0_5px_rgba(203,213,225,0.5)]" />;
      default: return <Paperclip className="w-5 h-5 text-slate-500" />;
    }
  };

  return (
    <div className="flex items-center justify-between p-4 rounded-xl border border-slate-700/50 bg-slate-800/40 hover:bg-slate-800/70 hover:border-blue-500/30 transition-all group shadow-sm">
      <div className="flex items-center gap-4">
        <div className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-700/50 shadow-inner group-hover:scale-110 transition-transform">
          {getIcon(resource.type)}
        </div>
        <div>
          <p className="font-bold text-white text-sm group-hover:text-blue-300 transition-colors">{resource.title}</p>
          <p className="text-xs text-slate-400 font-medium tracking-wide mt-0.5">{resource.size || 'External Link'}</p>
        </div>
      </div>
      <a 
        href={resource.url} 
        target="_blank" 
        rel="noreferrer"
        className="p-2.5 rounded-lg bg-slate-900 border border-slate-700/50 text-slate-400 hover:text-blue-400 hover:border-blue-500/50 hover:shadow-[0_0_10px_rgba(37,99,235,0.3)] transition-all"
      >
        {resource.type === 'Link' || resource.type === 'GitHub' ? <ExternalLink className="w-4 h-4" /> : <Download className="w-4 h-4" />}
      </a>
    </div>
  );
};

const ResourcePanel = ({ resources = [] }) => {
  if (!resources.length) {
    return <div className="text-slate-500">No resources available for this section.</div>;
  }

  return (
    <div className="space-y-3">
      {resources.map((res, idx) => (
        <DownloadResource key={idx} resource={res} />
      ))}
    </div>
  );
};

export default ResourcePanel;
