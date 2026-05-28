import api from './api';

export const progressService = {
  getCourseProgress: async (courseId) => {
    const response = await api.get(`/progress/courses/${courseId}`);
    return response.data;
  },
  updateVideoProgress: async (courseId, lessonId, timestamp, completed = false) => {
    const response = await api.put(`/progress/courses/${courseId}/lessons/${lessonId}`, {
      timestamp,
      completed
    });
    return response.data;
  }
};
