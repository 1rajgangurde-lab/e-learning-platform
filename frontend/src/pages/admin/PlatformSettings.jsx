import React, { useState } from 'react';
import ThemeLayout from '../../components/ui/ThemeLayout';
import GlassCard from '../../components/ui/GlassCard';
import { Settings, Server, Shield, Bell, Sparkles, Check } from 'lucide-react';

const Toggle = ({ label, description, enabled, onChange }) => (
  <div className="flex items-center justify-between p-4 bg-slate-900/50 rounded-xl border border-slate-700/50">
    <div>
      <h4 className="font-bold text-white text-sm">{label}</h4>
      <p className="text-xs text-slate-500 mt-1">{description}</p>
    </div>
    <button 
      onClick={onChange}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${enabled ? 'bg-rose-500' : 'bg-slate-700'}`}
    >
      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${enabled ? 'translate-x-6' : 'translate-x-1'}`} />
    </button>
  </div>
);

const PlatformSettings = () => {
  const [settings, setSettings] = useState({
    aiAssistant: true,
    registrations: true,
    maintenanceMode: false,
    quizSystem: true,
    portfolioBuilder: true,
    certificates: true,
    payments: true,
    notifications: true,
  });

  const handleToggle = (key) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <ThemeLayout hideParticles={false}>
      <div className="max-w-7xl mx-auto space-y-8 pb-12">
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
              <Settings className="w-8 h-8 text-rose-500" /> Platform Settings
            </h1>
            <p className="text-slate-400">Configure global platform behavior, features, and maintenance.</p>
          </div>
          <button className="px-6 py-2 bg-rose-600 hover:bg-rose-500 text-white font-bold rounded-lg shadow-[0_0_15px_rgba(225,29,72,0.3)] transition-all flex items-center gap-2">
            <Check className="w-4 h-4" /> Save Changes
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          
          <GlassCard className="p-6 border-slate-700/50 space-y-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
              <Server className="w-5 h-5 text-blue-400" /> Core System
            </h2>
            <Toggle 
              label="Maintenance Mode" 
              description="Disable platform access for all non-admin users. Displays a maintenance screen."
              enabled={settings.maintenanceMode}
              onChange={() => handleToggle('maintenanceMode')}
            />
            <Toggle 
              label="Allow New Registrations" 
              description="Permit new users to create accounts on the platform."
              enabled={settings.registrations}
              onChange={() => handleToggle('registrations')}
            />
            <Toggle 
              label="Payments System" 
              description="Enable Stripe checkout for course enrollments."
              enabled={settings.payments}
              onChange={() => handleToggle('payments')}
            />
            <Toggle 
              label="System Notifications" 
              description="Send automated emails for enrollments and completions."
              enabled={settings.notifications}
              onChange={() => handleToggle('notifications')}
            />
          </GlassCard>

          <GlassCard className="p-6 border-slate-700/50 space-y-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-purple-400" /> Features & Integrations
            </h2>
            <Toggle 
              label="AI Assistant System" 
              description="Enable Antigravity AI chat, roadmaps, and interview prep."
              enabled={settings.aiAssistant}
              onChange={() => handleToggle('aiAssistant')}
            />
            <Toggle 
              label="Quiz System" 
              description="Enable AI-generated knowledge checks."
              enabled={settings.quizSystem}
              onChange={() => handleToggle('quizSystem')}
            />
            <Toggle 
              label="Portfolio Builder" 
              description="Allow students to generate public portfolios."
              enabled={settings.portfolioBuilder}
              onChange={() => handleToggle('portfolioBuilder')}
            />
            <Toggle 
              label="Certificates" 
              description="Automatically generate and award PDF certificates."
              enabled={settings.certificates}
              onChange={() => handleToggle('certificates')}
            />
            
            <div className="pt-4 border-t border-slate-800">
              <label className="block text-sm font-bold text-slate-400 mb-2">OpenAI API Key</label>
              <input 
                type="password" 
                defaultValue="sk-................................"
                className="w-full px-4 py-2.5 rounded-lg border border-slate-700/50 bg-slate-900/50 focus:bg-slate-900 focus:border-rose-500/50 outline-none text-white transition-all shadow-inner font-mono text-sm"
              />
            </div>
          </GlassCard>

        </div>
      </div>
    </ThemeLayout>
  );
};

export default PlatformSettings;
