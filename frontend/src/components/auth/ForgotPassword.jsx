import React, { useState } from 'react';
import { authService } from '../../services/authService';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Loader2, AlertCircle, ArrowLeft, CheckCircle2 } from 'lucide-react';
import GlassCard from '../ui/GlassCard';
import GlassInput from '../ui/GlassInput';
import GradientButton from '../ui/GradientButton';
import ThemeLayout from '../ui/ThemeLayout';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);
    try {
      await authService.forgotPassword({ email });
      setSuccess('OTP has been sent to your email.');
      setTimeout(() => {
        navigate('/verify-otp', { state: { email } });
      }, 2000);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to send OTP');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemeLayout hideParticles={false}>
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4">
        <GlassCard className="max-w-md w-full p-8" hover={false}>
          <div className="relative z-10">
            <Link to="/login" className="inline-flex items-center text-sm font-medium text-slate-400 hover:text-slate-300 mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-1" /> Back to login
            </Link>
            
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">Forgot Password</h1>
              <p className="text-slate-400">Enter your email and we'll send you an OTP to reset your password.</p>
            </div>
          </div>

          {error && (
          <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-xl flex items-center gap-3 text-red-600 dark:text-red-400">
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <p className="text-sm font-medium">{error}</p>
          </div>
        )}

        {success && (
          <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-xl flex items-center gap-3 text-green-600 dark:text-green-400">
            <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
            <p className="text-sm font-medium">{success}</p>
          </div>
        )}

          <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
            <div>
              <label className="block text-sm font-medium mb-2 text-slate-300">Email Address</label>
              <GlassInput
                icon={Mail}
                type="email"
                required
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <GradientButton
              type="submit"
              disabled={loading || !!success}
              className="w-full flex items-center justify-center gap-2 mt-4"
            >
              {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : 'Send OTP'}
            </GradientButton>
          </form>
        </GlassCard>
      </div>
    </ThemeLayout>
  );
};

export default ForgotPassword;
