import React, { useState, useRef } from 'react';
import GlassCard from '../ui/GlassCard';
import { Upload, FileText, CheckCircle, Loader, Film, Code, HelpCircle } from 'lucide-react';
import axios from 'axios';
import QuizEditor from './QuizEditor';

const LessonEditor = ({ lesson, onSave }) => {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [fileUrl, setFileUrl] = useState('');
  const [quizData, setQuizData] = useState(lesson?.quizData || { questions: [] });
  const fileInputRef = useRef(null);

  if (!lesson) {
    return (
      <GlassCard className="p-8 border-slate-700/50 flex flex-col items-center justify-center text-center h-[400px]">
        <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center mb-4">
          <FileText className="w-8 h-8 text-slate-500" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Select a Lesson</h3>
        <p className="text-slate-400 text-sm max-w-[250px]">Click the edit icon on any lesson in the curriculum to edit its contents here.</p>
      </GlassCard>
    );
  }

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    setProgress(0);

    const formData = new FormData();
    formData.append('file', file);

    const endpoint = lesson.type === 'video' ? '/api/upload/video' : '/api/upload/document';

    try {
      const { data } = await axios.post(`http://localhost:5000${endpoint}`, formData, {
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
      alert('File upload failed. Check the console.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <GlassCard className="p-6 border-slate-700/50 space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-slate-700">
        <h3 className="text-lg font-bold text-white">Edit Lesson</h3>
        <span className="text-xs font-bold px-2 py-1 bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded uppercase tracking-wider">
          {lesson.type}
        </span>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-bold text-slate-400 mb-2">Lesson Title</label>
          <input type="text" className="w-full px-4 py-2.5 rounded-lg border border-slate-700/50 bg-slate-900/50 focus:bg-slate-900 focus:border-blue-500/50 outline-none text-white transition-all shadow-inner" defaultValue={lesson.title} />
        </div>

        {/* Video Upload Section */}
        {lesson.type === 'video' && (
          <div>
            <label className="block text-sm font-bold text-slate-400 mb-2">Video File</label>
            <input type="file" ref={fileInputRef} accept="video/*" className="hidden" onChange={handleFileUpload} />
            
            {uploading ? (
              <div className="w-full p-6 rounded-xl border border-slate-700 bg-slate-900/50 flex flex-col items-center justify-center gap-3">
                <Loader className="w-6 h-6 text-blue-400 animate-spin" />
                <div className="w-full max-w-[200px] h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 transition-all duration-300" style={{ width: `${progress}%` }}></div>
                </div>
                <span className="text-xs font-bold text-slate-400">Uploading... {progress}%</span>
              </div>
            ) : fileUrl || lesson.videoUrl ? (
              <div className="w-full p-4 rounded-xl border border-blue-500/30 bg-blue-500/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Film className="w-5 h-5 text-blue-400" />
                  <span className="text-sm font-bold text-blue-100 truncate max-w-[150px]">Video Uploaded</span>
                </div>
                <button onClick={() => fileInputRef.current?.click()} className="text-xs font-bold text-blue-400 hover:text-blue-300">Replace</button>
              </div>
            ) : (
              <div onClick={() => fileInputRef.current?.click()} className="w-full p-6 rounded-xl border-2 border-dashed border-slate-600 bg-slate-900/50 hover:bg-slate-900 hover:border-blue-500/50 flex flex-col items-center justify-center gap-2 cursor-pointer transition-colors group">
                <Upload className="w-6 h-6 text-slate-500 group-hover:text-blue-400 transition-colors" />
                <span className="text-sm font-medium text-slate-400 group-hover:text-slate-300 text-center">Drag & drop video file<br/>or click to browse</span>
              </div>
            )}
          </div>
        )}

        {/* Document Section */}
        {lesson.type === 'document' && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-slate-400 mb-2">Upload PDF (Optional)</label>
              <input type="file" ref={fileInputRef} accept=".pdf,.doc,.docx" className="hidden" onChange={handleFileUpload} />
              
              {uploading ? (
                <div className="w-full p-4 rounded-xl border border-slate-700 bg-slate-900/50 flex flex-col items-center justify-center gap-2">
                  <Loader className="w-5 h-5 text-blue-400 animate-spin" />
                  <span className="text-xs font-bold text-slate-400">Uploading PDF... {progress}%</span>
                </div>
              ) : fileUrl || lesson.resource ? (
                <div className="w-full p-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 flex items-center justify-between">
                  <span className="text-sm font-bold text-emerald-100">Document Uploaded</span>
                  <button onClick={() => fileInputRef.current?.click()} className="text-xs font-bold text-emerald-400">Replace</button>
                </div>
              ) : (
                <button onClick={() => fileInputRef.current?.click()} className="w-full py-3 rounded-xl border border-slate-700 bg-slate-800 hover:bg-slate-700 text-sm font-bold text-slate-300 transition-colors flex justify-center gap-2">
                  <Upload className="w-4 h-4" /> Upload PDF Document
                </button>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-bold text-slate-400 mb-2">Or Write Markdown</label>
              <textarea rows="6" className="w-full px-4 py-2.5 rounded-lg border border-slate-700/50 bg-slate-900/50 focus:bg-slate-900 focus:border-blue-500/50 outline-none text-white transition-all shadow-inner font-mono text-sm" placeholder="Write lesson content here..." defaultValue={lesson.content} />
            </div>
          </div>
        )}

        {/* Quiz Section */}
        {lesson.type === 'quiz' && (
          <QuizEditor quizData={quizData} setQuizData={setQuizData} />
        )}

        {/* Project Section */}
        {lesson.type === 'project' && (
          <div className="space-y-4">
            <div className="p-4 rounded-xl border border-indigo-500/30 bg-indigo-500/10 flex items-start gap-3">
              <Code className="w-5 h-5 text-indigo-400 mt-0.5 shrink-0" />
              <div>
                <h4 className="text-sm font-bold text-indigo-100">Project Assignment</h4>
                <p className="text-xs text-indigo-300 mt-1">Students will be able to upload a ZIP file, or provide GitHub and Live Demo links to submit this project.</p>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-bold text-slate-400 mb-2">Project Prompt & Requirements (Markdown)</label>
              <textarea rows="8" className="w-full px-4 py-2.5 rounded-lg border border-slate-700/50 bg-slate-900/50 focus:bg-slate-900 focus:indigo-500/50 outline-none text-white transition-all shadow-inner font-mono text-sm" placeholder="Describe what the student needs to build..." defaultValue={lesson.content} />
            </div>
          </div>
        )}
      </div>

      <div className="pt-4 flex justify-end">
        <button onClick={onSave} className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg shadow-[0_0_15px_rgba(37,99,235,0.4)] flex items-center gap-2 transition-all">
          <CheckCircle className="w-4 h-4" /> Save Lesson
        </button>
      </div>
    </GlassCard>
  );
};

export default LessonEditor;
