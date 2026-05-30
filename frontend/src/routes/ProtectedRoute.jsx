import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

import toast from 'react-hot-toast';
import AuthRequiredModal from '../components/auth/AuthRequiredModal';
import ThemeLayout from '../components/ui/ThemeLayout';

const ProtectedRoute = ({ allowedRoles }) => {
  const { user, token, isAuthenticated, loading } = useAuth();
  const [showModal, setShowModal] = React.useState(false);

  React.useEffect(() => {
    if (!loading && !isAuthenticated) {
      toast.error('Please sign in to continue learning', { icon: '⚠️', id: 'auth-required-toast' });
      setShowModal(true);
    }
  }, [loading, isAuthenticated]);

  if (loading) {
    return (
      <ThemeLayout hideParticles={true}>
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </ThemeLayout>
    );
  }

  if (!isAuthenticated) {
    return (
      <ThemeLayout hideParticles={true}>
        <div className="min-h-screen flex items-center justify-center">
          <AuthRequiredModal 
            isOpen={showModal} 
            onClose={() => setShowModal(false)} 
            redirectTo={window.location.pathname} 
          />
        </div>
      </ThemeLayout>
    );
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    // If not allowed, redirect to their respective dashboard
    return <Navigate to={`/dashboard/${user.role}`} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
