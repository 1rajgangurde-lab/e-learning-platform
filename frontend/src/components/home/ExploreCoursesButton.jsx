import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useAuthGuard } from '../../hooks/useAuthGuard';
import AuthRequiredModal from '../auth/AuthRequiredModal';
import { useAuth } from '../../context/AuthContext';

const ExploreCoursesButton = ({ className }) => {
  const navigate = useNavigate();
  const { isModalOpen, requireAuth, closeModal, redirectPath } = useAuthGuard();
  const { isAuthenticated } = useAuth();

  const handleExplore = () => {
    if (isAuthenticated) {
      navigate('/courses');
    } else {
      requireAuth(null, '/courses');
    }
  };

  return (
    <>
      <button 
        onClick={handleExplore} 
        className={className || "px-8 py-4 w-full sm:w-auto bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-xl font-bold text-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors flex items-center justify-center gap-2"}
      >
        Explore Courses
      </button>
      
      <AuthRequiredModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        redirectTo={redirectPath} 
      />
    </>
  );
};

export default ExploreCoursesButton;
