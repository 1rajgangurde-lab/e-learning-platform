import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';
import { Save, Eye, Plus, Trash2, Globe, LayoutTemplate, Briefcase, Zap } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ThemeLayout from '../../components/ui/ThemeLayout';
import GlassCard from '../../components/ui/GlassCard';

// Helper component for 3D Tilt Effect on Project Cards
const TiltCard = ({ children, onRemove }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    cardRef.current.style.boxShadow = '0 20px 40px rgba(6,182,212,0.2)';
    cardRef.current.style.borderColor = 'rgba(6,182,212,0.5)';
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    cardRef.current.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
    cardRef.current.style.borderColor = 'rgba(30,41,59,0.5)';
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="p-6 rounded-2xl border border-slate-700 bg-slate-900/80 backdrop-blur-md transition-all duration-300 relative group"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <button onClick={onRemove} className="absolute top-4 right-4 text-slate-500 hover:text-red-400 z-10 transition-colors">
        <Trash2 className="w-5 h-5" />
      </button>
      <div style={{ transform: 'translateZ(30px)' }}>
        {children}
      </div>
    </div>
  );
};

const PortfolioBuilder = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [portfolio, setPortfolio] = useState({
    title: '',
    about: '',
    theme: 'modern',
    skills: [],
    projects: [],
    socialLinks: { github: '', linkedin: '', twitter: '', website: '' }
  });

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL || 'http://localhost:5000/api'}/portfolio`, { withCredentials: true });
        if (res.data.portfolio) {
          setPortfolio(res.data.portfolio);
        }
      } catch (error) {
        console.error('Error fetching portfolio:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchPortfolio();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPortfolio(prev => ({ ...prev, [name]: value }));
  };

  const handleSocialChange = (e) => {
    const { name, value } = e.target;
    setPortfolio(prev => ({ ...prev, socialLinks: { ...prev.socialLinks, [name]: value } }));
  };

  const handleAddProject = () => {
    setPortfolio(prev => ({
      ...prev,
      projects: [...prev.projects, { name: '', link: '', image: '' }]
    }));
  };

  const handleProjectChange = (index, field, value) => {
    const updated = [...portfolio.projects];
    updated[index][field] = value;
    setPortfolio(prev => ({ ...prev, projects: updated }));
  };

  const handleRemoveProject = (index) => {
    const updated = portfolio.projects.filter((_, i) => i !== index);
    setPortfolio(prev => ({ ...prev, projects: updated }));
  };

  const handleSkillsChange = (e) => {
    const skills = e.target.value.split(',').map(s => s.trim()).filter(s => s);
    setPortfolio(prev => ({ ...prev, skills }));
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      await axios.put(`${import.meta.env.VITE_API_URL || 'http://localhost:5000/api'}/portfolio`, portfolio, { withCredentials: true });
      alert('Portfolio saved successfully!');
    } catch (error) {
      console.error('Error saving portfolio:', error);
      alert('Failed to save portfolio.');
    } finally {
      setSaving(false);
    }
  };

  if (loading) return (
    <ThemeLayout>
      <div className="flex justify-center items-center h-[60vh] text-cyan-400 animate-pulse font-bold">
        Initializing Builder...
      </div>
    </ThemeLayout>
  );

  return (
    <ThemeLayout hideParticles={false}>
      <div className="space-y-8 max-w-6xl mx-auto pb-20">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
              <LayoutTemplate className="w-8 h-8 text-cyan-400" />
              Portfolio Builder
            </h1>
            <p className="text-slate-400">Design your public developer presence.</p>
          </div>
          <div className="flex items-center gap-3">
            <Link to={`/user/${user?.username}`} target="_blank" className="flex items-center gap-2 px-6 py-2.5 bg-slate-800/80 border border-slate-700 text-white rounded-xl font-bold hover:bg-slate-700 hover:border-slate-500 transition-all shadow-lg">
              <Eye className="w-4 h-4" /> Live Preview
            </Link>
            <button 
              onClick={handleSave} 
              disabled={saving} 
              className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-bold hover:opacity-90 transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] disabled:opacity-50"
            >
              <Save className="w-4 h-4" /> {saving ? 'Deploying...' : 'Save & Publish'}
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            
            {/* Basic Details */}
            <GlassCard className="p-8 border-cyan-900/50">
              <h3 className="font-bold text-xl text-white mb-6 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-blue-400" /> Professional Identity
              </h3>
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-slate-300 mb-2">Professional Title</label>
                  <input 
                    type="text" name="title" value={portfolio.title || ''} onChange={handleChange} 
                    placeholder="e.g. Full Stack AI Developer" 
                    className="w-full px-5 py-3 rounded-xl bg-slate-950 border border-slate-700 focus:border-cyan-500/50 outline-none text-white transition-all shadow-inner placeholder-slate-600" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-300 mb-2">About Me</label>
                  <textarea 
                    name="about" value={portfolio.about || ''} onChange={handleChange} 
                    placeholder="Write a compelling bio..." rows={4} 
                    className="w-full px-5 py-3 rounded-xl bg-slate-950 border border-slate-700 focus:border-cyan-500/50 outline-none text-white transition-all shadow-inner placeholder-slate-600" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-300 mb-2 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-amber-400" /> Skills (comma separated)
                  </label>
                  <input 
                    type="text" value={portfolio.skills?.join(', ') || ''} onChange={handleSkillsChange} 
                    placeholder="React, Next.js, TensorFlow, WebGL" 
                    className="w-full px-5 py-3 rounded-xl bg-slate-950 border border-slate-700 focus:border-cyan-500/50 outline-none text-white transition-all shadow-inner placeholder-slate-600" 
                  />
                </div>
              </div>
            </GlassCard>

            {/* Featured Projects with 3D Tilt */}
            <GlassCard className="p-8 border-cyan-900/50">
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-bold text-xl text-white">Featured Projects</h3>
                <button 
                  onClick={handleAddProject} 
                  className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-lg text-sm font-bold hover:bg-blue-500/20 transition-all"
                >
                  <Plus className="w-4 h-4" /> Add Project
                </button>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {portfolio.projects?.map((project, idx) => (
                  <TiltCard key={idx} onRemove={() => handleRemoveProject(idx)}>
                    <div className="space-y-4">
                      <input 
                        type="text" value={project.name || ''} onChange={(e) => handleProjectChange(idx, 'name', e.target.value)} 
                        placeholder="Project Name" 
                        className="w-full px-4 py-2 rounded-lg bg-slate-950 border border-slate-700 focus:border-cyan-500/50 outline-none text-white text-sm font-bold transition-all shadow-inner placeholder-slate-600" 
                      />
                      <input 
                        type="text" value={project.link || ''} onChange={(e) => handleProjectChange(idx, 'link', e.target.value)} 
                        placeholder="Live URL / Repo" 
                        className="w-full px-4 py-2 rounded-lg bg-slate-950 border border-slate-700 focus:border-cyan-500/50 outline-none text-white text-sm transition-all shadow-inner placeholder-slate-600" 
                      />
                      <input 
                        type="text" value={project.image || ''} onChange={(e) => handleProjectChange(idx, 'image', e.target.value)} 
                        placeholder="Preview Image URL" 
                        className="w-full px-4 py-2 rounded-lg bg-slate-950 border border-slate-700 focus:border-cyan-500/50 outline-none text-white text-sm transition-all shadow-inner placeholder-slate-600" 
                      />
                    </div>
                  </TiltCard>
                ))}
                {(!portfolio.projects || portfolio.projects.length === 0) && (
                  <div className="sm:col-span-2 text-center py-8 border border-dashed border-slate-700 rounded-2xl bg-slate-900/50">
                    <p className="text-slate-500 font-medium">Showcase your best work. Click Add Project to start.</p>
                  </div>
                )}
              </div>
            </GlassCard>
          </div>

          <div className="space-y-8">
            {/* Social Links */}
            <GlassCard className="p-8 border-cyan-900/50 sticky top-8">
              <h3 className="font-bold text-xl text-white mb-6">Social Links</h3>
              <div className="space-y-5">
                <div>
                  <label className="flex items-center gap-2 text-xs font-bold text-slate-400 mb-2">
                    <FaGithub className="w-4 h-4 text-white" /> GitHub URL
                  </label>
                  <input 
                    type="url" name="github" value={portfolio.socialLinks?.github || ''} onChange={handleSocialChange} 
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 focus:border-cyan-500/50 outline-none text-sm text-white transition-all" 
                  />
                </div>
                <div>
                  <label className="flex items-center gap-2 text-xs font-bold text-slate-400 mb-2">
                    <FaLinkedin className="w-4 h-4 text-blue-400" /> LinkedIn URL
                  </label>
                  <input 
                    type="url" name="linkedin" value={portfolio.socialLinks?.linkedin || ''} onChange={handleSocialChange} 
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 focus:border-cyan-500/50 outline-none text-sm text-white transition-all" 
                  />
                </div>
                <div>
                  <label className="flex items-center gap-2 text-xs font-bold text-slate-400 mb-2">
                    <Globe className="w-4 h-4 text-emerald-400" /> Personal Website
                  </label>
                  <input 
                    type="url" name="website" value={portfolio.socialLinks?.website || ''} onChange={handleSocialChange} 
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 focus:border-cyan-500/50 outline-none text-sm text-white transition-all" 
                  />
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </ThemeLayout>
  );
};

export default PortfolioBuilder;
