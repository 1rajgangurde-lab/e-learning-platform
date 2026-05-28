import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';
import { Download, Plus, Trash2, Printer, FileText, CheckCircle2 } from 'lucide-react';
import ThemeLayout from '../../components/ui/ThemeLayout';
import GlassCard from '../../components/ui/GlassCard';

const ResumeBuilder = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [resume, setResume] = useState({
    objective: '',
    experience: [],
    education: []
  });

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL || 'http://localhost:5000/api'}/resume`, { withCredentials: true });
        if (res.data.resume) {
          setResume(res.data.resume);
        }
      } catch (error) {
        console.error('Error fetching resume:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchResume();
  }, []);

  const handleSave = async () => {
    setSaving(true);
    try {
      await axios.put(`${import.meta.env.VITE_API_URL || 'http://localhost:5000/api'}/resume`, resume, { withCredentials: true });
      alert('Resume saved successfully!');
    } catch (error) {
      console.error('Error saving resume:', error);
      alert('Failed to save resume.');
    } finally {
      setSaving(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const addExperience = () => setResume(prev => ({ ...prev, experience: [...prev.experience, { title: '', company: '', duration: '', description: '' }] }));
  const removeExperience = (index) => setResume(prev => ({ ...prev, experience: prev.experience.filter((_, i) => i !== index) }));
  const updateExperience = (index, field, value) => {
    const updated = [...resume.experience];
    updated[index][field] = value;
    setResume(prev => ({ ...prev, experience: updated }));
  };

  if (loading) return (
    <ThemeLayout>
      <div className="flex justify-center items-center h-[60vh] text-cyan-400 animate-pulse font-bold">
        Loading Resume Data...
      </div>
    </ThemeLayout>
  );

  return (
    <ThemeLayout hideParticles={false}>
      <div className="space-y-8 max-w-7xl mx-auto pb-20">
        
        {/* CSS for Print View */}
        <style>{`
          @media print {
            body * { visibility: hidden; }
            #printable-resume, #printable-resume * { visibility: visible; }
            #printable-resume {
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
              margin: 0;
              padding: 40px;
              background: white !important;
              color: black !important;
            }
            .no-print { display: none !important; }
            body { background: white; }
          }
        `}</style>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 no-print">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
              <FileText className="w-8 h-8 text-cyan-400" />
              Resume Builder
            </h1>
            <p className="text-slate-400">Generate an ATS-friendly, pristine PDF directly from your profile.</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl text-sm font-bold">
              <CheckCircle2 className="w-4 h-4" /> ATS Optimized
            </div>
            <button 
              onClick={handleSave} 
              disabled={saving} 
              className="px-6 py-2.5 bg-slate-800/80 border border-slate-700 text-white rounded-xl font-bold hover:bg-slate-700 transition-all shadow-lg disabled:opacity-50"
            >
              {saving ? 'Saving...' : 'Save Draft'}
            </button>
            <button 
              onClick={handlePrint} 
              className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-bold hover:opacity-90 transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)]"
            >
              <Printer className="w-4 h-4" /> Export PDF
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 no-print">
          
          {/* Editor Side - Dark UI */}
          <div className="space-y-6">
            <GlassCard className="p-8 border-cyan-900/50">
              <h2 className="text-xl font-bold text-white mb-4">Professional Objective</h2>
              <textarea 
                value={resume.objective || ''} 
                onChange={(e) => setResume(prev => ({ ...prev, objective: e.target.value }))}
                placeholder="A brief summary of your professional goals..." 
                rows={4}
                className="w-full px-5 py-4 rounded-xl bg-slate-950 border border-slate-700 focus:border-cyan-500/50 outline-none text-white transition-all shadow-inner placeholder-slate-600" 
              />
            </GlassCard>

            <GlassCard className="p-8 border-cyan-900/50">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">Experience</h2>
                <button 
                  onClick={addExperience} 
                  className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-lg text-sm font-bold hover:bg-blue-500/20 transition-all"
                >
                  <Plus className="w-4 h-4" /> Add Role
                </button>
              </div>
              
              <div className="space-y-6">
                {resume.experience?.map((exp, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-4 relative group">
                    <button 
                      onClick={() => removeExperience(idx)} 
                      className="absolute top-6 right-6 text-slate-500 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                    <input 
                      type="text" value={exp.title || ''} onChange={(e) => updateExperience(idx, 'title', e.target.value)} 
                      placeholder="Job Title (e.g. Senior Frontend Dev)" 
                      className="w-full pr-12 px-4 py-3 rounded-lg bg-slate-950 border border-slate-700 focus:border-cyan-500/50 outline-none text-white font-bold transition-all shadow-inner placeholder-slate-600" 
                    />
                    <div className="flex gap-4">
                      <input 
                        type="text" value={exp.company || ''} onChange={(e) => updateExperience(idx, 'company', e.target.value)} 
                        placeholder="Company" 
                        className="w-1/2 px-4 py-3 rounded-lg bg-slate-950 border border-slate-700 focus:border-cyan-500/50 outline-none text-white transition-all shadow-inner placeholder-slate-600" 
                      />
                      <input 
                        type="text" value={exp.duration || ''} onChange={(e) => updateExperience(idx, 'duration', e.target.value)} 
                        placeholder="e.g. 2022 - Present" 
                        className="w-1/2 px-4 py-3 rounded-lg bg-slate-950 border border-slate-700 focus:border-cyan-500/50 outline-none text-white transition-all shadow-inner placeholder-slate-600" 
                      />
                    </div>
                    <textarea 
                      value={exp.description || ''} onChange={(e) => updateExperience(idx, 'description', e.target.value)} 
                      placeholder="• Built responsive applications...&#10;• Improved performance by 30%..." 
                      rows={3} 
                      className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-700 focus:border-cyan-500/50 outline-none text-white transition-all shadow-inner placeholder-slate-600 font-mono text-sm leading-relaxed" 
                    />
                  </div>
                ))}
                {(!resume.experience || resume.experience.length === 0) && (
                  <div className="text-center py-10 border border-dashed border-slate-700 rounded-2xl bg-slate-900/50">
                    <p className="text-slate-500 font-medium">No experience added yet.</p>
                  </div>
                )}
              </div>
            </GlassCard>
          </div>

          {/* Live Preview Side (Pure White ATS Format) */}
          <div className="bg-slate-900 rounded-3xl p-6 lg:p-8 flex justify-center border border-slate-800 sticky top-24 h-[calc(100vh-120px)] overflow-y-auto shadow-inner">
            
            {/* THIS DIV IS THE ACTUAL PRINTABLE DOCUMENT */}
            <div id="printable-resume" className="bg-white w-full max-w-[800px] shadow-2xl p-10 lg:p-12 text-black font-sans origin-top h-max">
              <div className="border-b-2 border-black pb-4 mb-6">
                <h1 className="text-4xl font-bold text-black uppercase tracking-tight">{user?.name || 'Your Name'}</h1>
                <div className="text-sm text-gray-700 mt-2 flex flex-wrap gap-x-6 gap-y-1 font-medium">
                  <span>{user?.email || 'email@example.com'}</span>
                  {user?.username && <span>portfolio.com/{user.username}</span>}
                </div>
              </div>
              
              {resume.objective && (
                <div className="mb-6">
                  <h2 className="text-sm font-bold text-black uppercase tracking-widest mb-2 border-b border-gray-300 pb-1">Professional Summary</h2>
                  <p className="text-sm text-gray-800 leading-relaxed">{resume.objective}</p>
                </div>
              )}

              {resume.experience?.length > 0 && (
                <div className="mb-6">
                  <h2 className="text-sm font-bold text-black uppercase tracking-widest mb-3 border-b border-gray-300 pb-1">Experience</h2>
                  <div className="space-y-4">
                    {resume.experience.map((sec, idx) => (
                      <div key={idx}>
                        <div className="flex justify-between items-baseline mb-1">
                          <strong className="text-black text-[15px]">{sec.title || 'Job Title'}</strong>
                          <span className="text-sm font-medium text-gray-600">{sec.duration || 'Duration'}</span>
                        </div>
                        <div className="text-sm font-bold text-gray-700 mb-2">{sec.company || 'Company'}</div>
                        <p className="text-sm text-gray-800 leading-relaxed whitespace-pre-wrap">{sec.description || 'Description of responsibilities.'}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {user?.skills?.length > 0 && (
                <div>
                  <h2 className="text-sm font-bold text-black uppercase tracking-widest mb-2 border-b border-gray-300 pb-1">Skills</h2>
                  <p className="text-sm text-gray-800 leading-relaxed font-medium">
                    {user.skills.join(' • ')}
                  </p>
                </div>
              )}
            </div>
            
          </div>
        </div>
      </div>
    </ThemeLayout>
  );
};

export default ResumeBuilder;
