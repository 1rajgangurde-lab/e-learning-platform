import api from './api';

export const authService = {
  register: (data) => api.post('/auth/register', data).then(res => res.data),
  login: (data) => api.post('/auth/login', data).then(res => res.data),
  logout: () => api.post('/auth/logout').then(res => res.data),
  forgotPassword: (data) => api.post('/auth/forgot', data).then(res => res.data),
  verifyOTP: (data) => api.post('/auth/verify-otp', data).then(res => res.data),
  resetPassword: (data) => api.post('/auth/reset', data).then(res => res.data),
  getProfile: () => api.get('/auth/profile').then(res => res.data),
};

export default api;
