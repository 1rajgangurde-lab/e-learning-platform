import React, { useState, useEffect } from 'react';
import { authService } from '../../services/authService';
import { useNavigate, useLocation } from 'react-router-dom';
import { Loader2, AlertCircle, KeyRound } from 'lucide-react';
import GlassCard from '../ui/GlassCard';
import GradientButton from '../ui/GradientButton';
import ThemeLayout from '../ui/ThemeLayout';

const OTPVerify = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;
  
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!email) {
      navigate('/forgot-password');
    }
  }, [email, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await authService.verifyOTP({ email, otp });
      navigate('/reset-password', { state: { email, otp } });
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid OTP');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemeLayout hideParticles={false}>
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4">
        <GlassCard className="max-w-md w-full p-8" hover={false}>
          <div className="mb-8 text-center relative z-10">
            <div className="w-16 h-16 bg-blue-500/10 border border-blue-500/30 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-400 shadow-[0_0_15px_rgba(37,99,235,0.2)]">
              <KeyRound className="w-8 h-8" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Check your email</h1>
            <p className="text-slate-400">We sent a 6-digit verification code to <br/><span className="font-medium text-slate-200">{email}</span></p>
          </div>

          {error && (
          <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-xl flex items-center gap-3 text-red-600 dark:text-red-400">
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <p className="text-sm font-medium">{error}</p>
          </div>
        )}

          <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
            <div>
              <label className="block text-sm font-medium mb-2 text-slate-300 text-center">Enter 6-digit Code</label>
              <input
                type="text"
                required
                maxLength={6}
                className="block w-full text-center tracking-[0.5em] text-2xl py-3 bg-slate-900/50 backdrop-blur-md border border-slate-700/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all shadow-inner"
                placeholder="••••••"
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/[^0-9]/g, ''))}
              />
            </div>

            <GradientButton
              type="submit"
              disabled={loading || otp.length < 6}
              className="w-full flex items-center justify-center gap-2 mt-4"
            >
              {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : 'Verify Code'}
            </GradientButton>
          </form>
        </GlassCard>
      </div>
    </ThemeLayout>
  );
};

export default OTPVerify;
