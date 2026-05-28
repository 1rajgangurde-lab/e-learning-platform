import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Lock, X, LogIn, UserPlus } from 'lucide-react';
import { useAuthRedirect } from '../../hooks/useAuthRedirect';

const AuthRequiredModal = ({ isOpen, onClose, redirectTo = '/courses' }) => {
  const { goToLogin, goToRegister, closeAndGoHome } = useAuthRedirect();

  if (!isOpen) return null;

  const handleClose = () => {
    onClose();
    closeAndGoHome();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden"
        >
          <button 
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="p-8">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 text-primary rounded-2xl flex items-center justify-center mb-6 mx-auto">
              <Lock className="w-8 h-8" />
            </div>
            
            <h2 className="text-2xl font-bold text-center text-slate-900 dark:text-white mb-2">
              Authentication Required
            </h2>
            <p className="text-center text-slate-500 dark:text-slate-400 mb-8">
              Please sign in to explore courses and continue your learning journey.
            </p>

            <div className="space-y-3">
              <button
                onClick={() => {
                  onClose();
                  goToLogin(redirectTo);
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-primary hover:bg-blue-700 text-white rounded-xl font-semibold transition-colors shadow-lg shadow-blue-500/25"
              >
                <LogIn className="w-5 h-5" /> Sign In
              </button>
              
              <button
                onClick={() => {
                  onClose();
                  goToRegister(redirectTo);
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white rounded-xl font-semibold transition-colors"
              >
                <UserPlus className="w-5 h-5" /> Create Account
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default AuthRequiredModal;
