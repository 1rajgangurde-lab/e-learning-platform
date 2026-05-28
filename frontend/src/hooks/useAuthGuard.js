import { useState, useCallback } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';

export const useAuthGuard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [redirectPath, setRedirectPath] = useState(null);

  const requireAuth = useCallback((callback, path = null) => {
    if (user) {
      if (typeof callback === 'function') callback();
    } else {
      setRedirectPath(path || location.pathname);
      setIsModalOpen(true);
    }
  }, [user, location.pathname]);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setRedirectPath(null);
  }, []);

  return {
    isModalOpen,
    requireAuth,
    closeModal,
    redirectPath
  };
};
