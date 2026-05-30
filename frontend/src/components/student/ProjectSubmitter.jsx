import React, { useState, useRef } from 'react';
import GlassCard from '../ui/GlassCard';
import { Upload, Code, Link as LinkIcon, Send, CheckCircle, Loader } from 'lucide-react';
import axios from 'axios';

const ProjectSubmitter = ({ courseId, projectTitle, onSubmitted }) => {
  const [githubLink, setGithubLink] = useState('');
  const [demoLink, setDemoLink] = useState('');
  const [fileUrl, setFileUrl] = useState('');
  const [uploading, setUploading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('Pending');
  const fileInputRef = useRef(null);

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    setProgress(0);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const { data } = await axios.post('http://localhost:5000/api/upload/document', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setProgress(percentCompleted);
        }
      });
      setFileUrl(data.url);
    } catch (err) {
      console.error('Upload failed:', err);
      alert('File upload failed. Ensure the file is .zip, .pdf, or .rar');
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async () => {
    if (!githubLink && !fileUrl) {
      alert('Please provide either a GitHub link or upload a project file.');
      return;
    }

    setSubmitting(true);
    try {
      await axios.post('http://localhost:5000/api/submissions', {
        course: courseId,
        projectTitle,
        githubLink,
        demoLink,
        fileUrl
      }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setStatus('Submitted');
      if (onSubmitted) onSubmitted();
    } catch (err) {
      console.error('Submission failed', err);
      alert('Failed to submit project');
    } finally {
      setSubmitting(false);
    }
  };

  if (status === 'Submitted') {
    return (
      <GlassCard className="p-8 border-emerald-500/30 bg-emerald-500/10 flex flex-col items-center justify-center text-center">
        <CheckCircle className="w-16 h-16 text-emerald-400 mb-4" />
        <h3 className="text-xl font-bold text-emerald-100 mb-2">Project Submitted!</h3>
        <p className="text-emerald-200/80 text-sm">Your instructor will review your code and provide feedback soon.</p>
      </GlassCard>
    );
  }

  return (
    <GlassCard className="p-6 border-slate-700/50 space-y-6">
      <div className="border-b border-slate-700 pb-4">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <Code className="w-5 h-5 text-indigo-400" /> Submit Your Project
        </h3>
        <p className="text-sm text-slate-400 mt-1">Provide your repository links or upload your source code.</p>
      </div>

      <div className="space-y-4">
        {/* GitHub Link */}
        <div>
          <label className="block text-sm font-bold text-slate-400 mb-2">GitHub Repository (Recommended)</label>
          <div className="relative">
            <Code className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input 
              type="url" 
              value={githubLink}
              onChange={(e) => setGithubLink(e.target.value)}
              placeholder="https://github.com/username/project"
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-700/50 bg-slate-900/50 focus:bg-slate-900 focus:border-indigo-500/50 outline-none text-white transition-all shadow-inner text-sm"
            />
          </div>
        </div>

        {/* Live Demo Link */}
        <div>
          <label className="block text-sm font-bold text-slate-400 mb-2">Live Demo URL (Optional)</label>
          <div className="relative">
            <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input 
              type="url" 
              value={demoLink}
              onChange={(e) => setDemoLink(e.target.value)}
              placeholder="https://my-project.vercel.app"
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-700/50 bg-slate-900/50 focus:bg-slate-900 focus:border-indigo-500/50 outline-none text-white transition-all shadow-inner text-sm"
            />
          </div>
        </div>

        <div className="relative py-4 flex items-center">
          <div className="flex-grow border-t border-slate-700"></div>
          <span className="flex-shrink-0 mx-4 text-slate-500 text-xs font-bold uppercase">OR</span>
          <div className="flex-grow border-t border-slate-700"></div>
        </div>

        {/* File Upload */}
        <div>
          <label className="block text-sm font-bold text-slate-400 mb-2">Upload Source Code (ZIP/RAR)</label>
          <input type="file" ref={fileInputRef} accept=".zip,.rar,.pdf" className="hidden" onChange={handleFileUpload} />
          
          {uploading ? (
            <div className="w-full p-4 rounded-xl border border-slate-700 bg-slate-900/50 flex flex-col items-center justify-center gap-2">
              <Loader className="w-5 h-5 text-indigo-400 animate-spin" />
              <div className="w-full max-w-[200px] h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-500 transition-all duration-300" style={{ width: `${progress}%` }}></div>
              </div>
              <span className="text-xs font-bold text-slate-400">Uploading {progress}%</span>
            </div>
          ) : fileUrl ? (
            <div className="w-full p-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 flex items-center justify-between">
              <span className="text-sm font-bold text-emerald-100">Project File Uploaded</span>
              <button onClick={() => fileInputRef.current?.click()} className="text-xs font-bold text-emerald-400">Replace</button>
            </div>
          ) : (
            <button onClick={() => fileInputRef.current?.click()} className="w-full py-4 rounded-xl border border-dashed border-slate-600 hover:border-indigo-500/50 bg-slate-900/30 hover:bg-slate-900 text-sm font-bold text-slate-400 transition-colors flex items-center justify-center gap-2">
              <Upload className="w-4 h-4" /> Click to upload .zip archive
            </button>
          )}
        </div>
      </div>

      <button 
        onClick={handleSubmit}
        disabled={submitting || uploading}
        className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-bold rounded-xl shadow-[0_0_15px_rgba(79,70,229,0.3)] flex items-center justify-center gap-2 transition-all mt-6"
      >
        {submitting ? <Loader className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
        Submit Assignment
      </button>
    </GlassCard>
  );
};

export default ProjectSubmitter;
