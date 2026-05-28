import api from './api';

export const quizService = {
  getQuizzesByCourse: async (courseId) => {
    const response = await api.get(`/courses/${courseId}/quizzes`);
    return response.data;
  },
  getQuizById: async (quizId) => {
    const response = await api.get(`/quizzes/${quizId}`);
    return response.data;
  },
  submitQuizAttempt: async (quizId, answers) => {
    const response = await api.post(`/quizzes/${quizId}/attempt`, { answers });
    return response.data;
  }
};
