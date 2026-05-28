import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Briefcase, Code, Link as LinkIcon, Mail, GitBranch, MessageCircle, Globe, Award, FileText } from 'lucide-react';
import ThemeLayout from '../../components/ui/ThemeLayout';
import GlassCard from '../../components/ui/GlassCard';

const PublicProfile = () => {
  const { username } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL || 'http://localhost:5000/api'}/portfolio/public/${username}`);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching portfolio:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchPortfolio();
  }, [username]);

  if (loading) return <ThemeLayout hideParticles={true}><div className="min-h-screen flex items-center justify-center text-slate-400">Loading Portfolio...</div></ThemeLayout>;
  if (!data || !data.portfolio) return <ThemeLayout hideParticles={true}><div className="min-h-screen flex items-center justify-center text-slate-400">Portfolio not found or user has not set it up yet.</div></ThemeLayout>;

  const { portfolio, user } = data;

  return (
    <ThemeLayout hideParticles={false}>
      <div className="py-12 relative z-10">
      <div className="max-w-4xl mx-auto px-6 space-y-12">
        
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <div className="w-32 h-32 mx-auto rounded-full bg-slate-900/50 mb-4 overflow-hidden shadow-[0_0_20px_rgba(37,99,235,0.3)] border-2 border-blue-500/30">
            <img src={user.avatar || 'https://via.placeholder.com/150'} alt="Avatar" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-4xl font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">{user.name}</h1>
          <p className="text-lg text-slate-400">{portfolio.title || user.bio || 'Continuous Learner'}</p>
          
          {portfolio.about && (
            <p className="max-w-2xl mx-auto text-slate-300">{portfolio.about}</p>
          )}

          <div className="flex justify-center gap-4">
            {portfolio.socialLinks?.github && <a href={portfolio.socialLinks.github} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center text-slate-400 hover:text-white transition-colors border border-slate-700/50 hover:bg-slate-800/50 bg-slate-900/50"><GitBranch className="w-5 h-5" /></a>}
            {portfolio.socialLinks?.linkedin && <a href={portfolio.socialLinks.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center text-slate-400 hover:text-white transition-colors border border-slate-700/50 hover:bg-slate-800/50 bg-slate-900/50"><Briefcase className="w-5 h-5" /></a>}
            {portfolio.socialLinks?.website && <a href={portfolio.socialLinks.website} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center text-slate-400 hover:text-white transition-colors border border-slate-700/50 hover:bg-slate-800/50 bg-slate-900/50"><Globe className="w-5 h-5" /></a>}
            <a href={`mailto:${user.email}`} className="w-10 h-10 rounded-full flex items-center justify-center text-slate-400 hover:text-white transition-colors border border-slate-700/50 hover:bg-slate-800/50 bg-slate-900/50"><Mail className="w-5 h-5" /></a>
          </div>
        </div>

        {/* Skills */}
        {(portfolio.skills?.length > 0 || user.skills?.length > 0) && (
          <GlassCard className="p-8">
            <h3 className="font-bold text-xl mb-6 text-white">Skills & Expertise</h3>
            <div className="flex flex-wrap gap-2">
              {(portfolio.skills?.length > 0 ? portfolio.skills : user.skills).map(skill => (
                <span key={skill} className="px-4 py-2 rounded-lg text-sm font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  {skill}
                </span>
              ))}
            </div>
          </GlassCard>
        )}

        {/* Projects */}
        {portfolio.projects?.length > 0 && (
          <div className="space-y-6">
            <h3 className="font-bold text-2xl text-white mb-6 flex items-center gap-2"><Briefcase className="w-6 h-6 text-blue-400" /> Featured Projects</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {portfolio.projects.map((project, idx) => (
                <GlassCard key={idx} className="p-6 flex flex-col h-full">
                  {project.image && <img src={project.image} alt={project.name} className="w-full h-40 object-cover rounded-xl mb-4" />}
                  <h4 className="font-bold text-lg mb-2 text-white">{project.name}</h4>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-300 hover:underline mt-auto flex items-center gap-1 text-sm font-medium">
                      <LinkIcon className="w-4 h-4" /> View Project
                    </a>
                  )}
                </GlassCard>
              ))}
            </div>
          </div>
        )}

      </div>
      </div>
    </ThemeLayout>
  );
};

export default PublicProfile;
