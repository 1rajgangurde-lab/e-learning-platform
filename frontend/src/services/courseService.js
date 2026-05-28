import api from './api';

export const courseService = {
  getCourses: async (params) => {
    const response = await api.get('/courses', { params });
    return response.data;
  },
  getCourseById: async (id) => {
    const response = await api.get(`/courses/${id}`);
    return response.data;
  },
  getCourseAnalytics: async (id) => {
    const response = await api.get(`/courses/${id}/analytics`);
    return response.data;
  }
};
