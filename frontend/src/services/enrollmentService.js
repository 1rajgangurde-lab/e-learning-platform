import api from './api';

export const enrollCourse = async (courseId) => {
  return await api.post('/enroll', { courseId });
};

export const getMyCourses = async () => {
  return await api.get('/enroll/mycourses');
};

export const getEnrollmentHistory = async () => {
  return await api.get('/enroll/history');
};

export const archiveEnrollment = async (id, reason) => {
  return await api.put(`/enroll/archive/${id}`, { reason });
};

export const generateCertificate = async (courseId) => {
  return await api.post('/certificates/generate', { courseId });
};
