import { useNavigate } from 'react-router-dom';

export const useAuthRedirect = () => {
  const navigate = useNavigate();

  const goToLogin = (redirectPath = '/courses') => {
    localStorage.setItem('redirectAfterLogin', redirectPath);
    navigate('/login');
  };

  const goToRegister = (redirectPath = '/courses') => {
    localStorage.setItem('redirectAfterLogin', redirectPath);
    navigate('/register');
  };

  const redirectAfterAuth = (defaultPath = '/dashboard') => {
    const redirect = localStorage.getItem('redirectAfterLogin');
    if (redirect) {
      localStorage.removeItem('redirectAfterLogin');
      navigate(redirect);
    } else {
      navigate(defaultPath);
    }
  };

  const closeAndGoHome = () => {
    navigate('/');
  };

  return { goToLogin, goToRegister, redirectAfterAuth, closeAndGoHome };
};
