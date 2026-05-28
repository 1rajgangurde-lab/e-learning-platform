import api from './api';

export const resourceService = {
  getResourcesByCourse: async (courseId) => {
    const response = await api.get(`/courses/${courseId}/resources`);
    return response.data;
  },
  downloadResource: async (resourceId) => {
    // Return blob or redirect depending on how backend handles it
    const response = await api.get(`/resources/${resourceId}/download`, {
      responseType: 'blob'
    });
    return response.data;
  }
};
