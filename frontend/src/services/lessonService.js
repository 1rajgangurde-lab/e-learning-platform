import api from './api';

export const lessonService = {
  getLessonsByCourse: async (courseId) => {
    const response = await api.get(`/courses/${courseId}/lessons`);
    return response.data;
  },
  getLessonById: async (courseId, lessonId) => {
    const response = await api.get(`/courses/${courseId}/lessons/${lessonId}`);
    return response.data;
  },
  markLessonComplete: async (courseId, lessonId) => {
    const response = await api.post(`/courses/${courseId}/lessons/${lessonId}/complete`);
    return response.data;
  }
};
