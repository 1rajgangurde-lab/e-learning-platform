import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import { Mail, Lock, User, Loader2, AlertCircle } from 'lucide-react';
import { ROLES } from '../../utils/constants';
import { useAuthRedirect } from '../../hooks/useAuthRedirect';
import GlassCard from '../ui/GlassCard';
import GlassInput from '../ui/GlassInput';
import GradientButton from '../ui/GradientButton';
import ThemeLayout from '../ui/ThemeLayout';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    password: '',
    role: ROLES.STUDENT 
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setError('');
    setLoading(true);
    try {
      await register({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        role: formData.role
      });
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to create account');
      setLoading(false);
    }
  };

  return (
    <ThemeLayout hideParticles={false}>
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4">
        <GlassCard className="max-w-md w-full p-8" hover={false}>
          <div className="text-center mb-8 relative z-10">
            <h1 className="text-3xl font-bold text-white mb-2">Create Account</h1>
            <p className="text-slate-400">Join our learning platform today</p>
          </div>

          {error && (
          <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-xl flex items-center gap-3 text-red-600 dark:text-red-400">
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <p className="text-sm font-medium">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative z-10">
            <label className="block text-sm font-medium mb-2 text-slate-300">Full Name</label>
            <GlassInput
              icon={User}
              type="text"
              required
              placeholder="John Doe"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div className="relative z-10">
            <label className="block text-sm font-medium mb-2 text-slate-300">Email Address</label>
            <GlassInput
              icon={Mail}
              type="email"
              required
              placeholder="you@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div className="relative z-10">
            <label className="block text-sm font-medium mb-2 text-slate-300">Password</label>
            <GlassInput
              icon={Lock}
              type="password"
              required
              minLength={6}
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>

          <div className="relative z-10">
            <label className="block text-sm font-medium mb-2 text-slate-300">I am a...</label>
            <div className="grid grid-cols-2 gap-4">
              <label className={`cursor-pointer border rounded-xl p-4 text-center transition-all ${formData.role === ROLES.STUDENT ? 'border-blue-500 bg-blue-500/10 text-blue-400' : 'border-slate-700/50 bg-slate-900/30 text-slate-400 hover:border-slate-600'}`}>
                <input 
                  type="radio" 
                  name="role" 
                  value={ROLES.STUDENT} 
                  className="hidden"
                  checked={formData.role === ROLES.STUDENT}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                />
                <span className="font-medium">Student</span>
              </label>
              <label className={`cursor-pointer border rounded-xl p-4 text-center transition-all ${formData.role === ROLES.INSTRUCTOR ? 'border-blue-500 bg-blue-500/10 text-blue-400' : 'border-slate-700/50 bg-slate-900/30 text-slate-400 hover:border-slate-600'}`}>
                <input 
                  type="radio" 
                  name="role" 
                  value={ROLES.INSTRUCTOR} 
                  className="hidden"
                  checked={formData.role === ROLES.INSTRUCTOR}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                />
                <span className="font-medium">Instructor</span>
              </label>
            </div>
          </div>

          <GradientButton type="submit" disabled={loading} className="w-full flex justify-center items-center gap-2 mt-4 relative z-10">
            {loading ? <><Loader2 className="h-5 w-5 animate-spin" /> Creating account...</> : 'Create Account'}
          </GradientButton>
        </form>

        <p className="mt-6 text-center text-slate-400 relative z-10">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-blue-400 hover:text-blue-300 transition-colors">
            Log in
          </Link>
        </p>
        </GlassCard>
      </div>
    </ThemeLayout>
  );
};

export default Register;
