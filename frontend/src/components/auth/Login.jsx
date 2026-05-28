import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import { Mail, Lock, Loader2, AlertCircle } from 'lucide-react';
import { useAuthRedirect } from '../../hooks/useAuthRedirect';
import GlassCard from '../ui/GlassCard';
import GlassInput from '../ui/GlassInput';
import GradientButton from '../ui/GradientButton';
import ThemeLayout from '../ui/ThemeLayout';

const Login = () => {
  const { login } = useAuth();
  const { redirectAfterAuth } = useAuthRedirect();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(formData);
      redirectAfterAuth();
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemeLayout hideParticles={false}>
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4">
        <GlassCard className="max-w-md w-full p-8" hover={false}>
          <div className="text-center mb-8 relative z-10">
            <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
            <p className="text-slate-400">Log in to your account to continue</p>
          </div>

          {error && (
          <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-xl flex items-center gap-3 text-red-600 dark:text-red-400">
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <p className="text-sm font-medium">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
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
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-medium text-slate-300">Password</label>
              <Link to="/forgot-password" className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors">
                Forgot password?
              </Link>
            </div>
            <GlassInput
              icon={Lock}
              type="password"
              required
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>

          <GradientButton type="submit" disabled={loading} className="w-full flex justify-center items-center gap-2 mt-4">
            {loading ? <><Loader2 className="h-5 w-5 animate-spin" /> Signing in...</> : 'Log In'}
          </GradientButton>
        </form>

        <p className="mt-6 text-center text-slate-400 relative z-10">
          Don't have an account?{' '}
          <Link to="/register" className="font-medium text-blue-400 hover:text-blue-300 transition-colors">
            Sign up
          </Link>
        </p>
        </GlassCard>
      </div>
    </ThemeLayout>
  );
};

export default Login;
