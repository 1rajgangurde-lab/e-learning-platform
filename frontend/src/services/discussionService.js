import api from './api';

export const discussionService = {
  getComments: async (courseId) => {
    const response = await api.get(`/comments/${courseId}`);
    return response.data;
  },
  postComment: async (courseId, content) => {
    const response = await api.post(`/comments`, { courseId, content });
    return response.data;
  },
  postReply: async (commentId, content) => {
    const response = await api.post(`/comments/reply`, { commentId, content });
    return response.data;
  }
};
