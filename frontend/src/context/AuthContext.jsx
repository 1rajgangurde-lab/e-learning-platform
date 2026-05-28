import React, { createContext, useState, useEffect, useContext } from 'react';
import { authService } from '../services/authService';
import api from '../services/authService';

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('accessToken') || null);
  const [loading, setLoading] = useState(true);

  // Sync token changes from Axios interceptors
  useEffect(() => {
    const handleStorageChange = () => {
      const storedToken = localStorage.getItem('accessToken');
      if (storedToken !== token) {
        setToken(storedToken);
      }
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [token]);

  useEffect(() => {
    if (token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      fetchProfile();
    } else {
      setLoading(false);
    }
  }, [token]);

  const fetchProfile = async () => {
    try {
      const data = await authService.getProfile();
      setUser(data);
    } catch (error) {
      console.error('Failed to fetch profile', error);
      setUser(null);
      setToken(null);
      localStorage.removeItem('accessToken');
    } finally {
      setLoading(false);
    }
  };

  const login = async (credentials) => {
    const data = await authService.login(credentials);
    const { accessToken, ...userData } = data;
    setToken(accessToken);
    setUser(userData);
    localStorage.setItem('accessToken', accessToken);
    api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
  };

  const register = async (userInfo) => {
    const data = await authService.register(userInfo);
    const { accessToken, ...userData } = data;
    setToken(accessToken);
    setUser(userData);
    localStorage.setItem('accessToken', accessToken);
    api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
  };

  const logout = async () => {
    try {
      await authService.logout();
    } catch (e) {
      console.error(e);
    }
    setToken(null);
    setUser(null);
    localStorage.removeItem('accessToken');
    delete api.defaults.headers.common['Authorization'];
  };

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        token, 
        role: user?.role, 
        xp: user?.xp, 
        streak: user?.learningStreak, 
        badges: [], // Future ready
        notifications: [], // Future ready
        login, 
        register, 
        logout, 
        loading 
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};
