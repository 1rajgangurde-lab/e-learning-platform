import api from './api';

export const reviewService = {
  getReviewsByCourse: async (courseId) => {
    const response = await api.get(`/ratings/${courseId}`);
    return response.data;
  },
  postReview: async (courseId, reviewData) => {
    const response = await api.post(`/ratings`, { courseId, ...reviewData });
    return response.data;
  }
};
