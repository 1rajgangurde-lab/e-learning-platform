import api from './api';
import { dashboardMock } from '../mock/dashboardMock';

// Set to true to use mock data instead of real API calls during UI development
const USE_MOCK = true;

const delay = (ms) => new Promise(res => setTimeout(res, ms));

export const dashboardService = {
  getStudentStats: async () => {
    if (USE_MOCK) {
      await delay(500);
      return dashboardMock.studentStats;
    }
    const response = await api.get('/dashboard/student/stats');
    return response.data;
  },

  getInstructorStats: async () => {
    if (USE_MOCK) {
      await delay(500);
      return dashboardMock.instructorStats;
    }
    const response = await api.get('/dashboard/instructor/stats');
    return response.data;
  },

  getAdminStats: async () => {
    if (USE_MOCK) {
      await delay(500);
      return dashboardMock.adminStats;
    }
    const response = await api.get('/dashboard/admin/stats');
    return response.data;
  },

  getNotifications: async () => {
    if (USE_MOCK) {
      await delay(300);
      return dashboardMock.notifications;
    }
    const response = await api.get('/notifications');
    return response.data;
  },

  getAnalytics: async (role) => {
    if (USE_MOCK) {
      await delay(600);
      if (role === 'instructor') return { revenueChart: dashboardMock.revenueChart };
      if (role === 'student') return { courseProgress: dashboardMock.courseProgress, leaderboard: dashboardMock.leaderboard, recentActivity: dashboardMock.recentActivity };
      return { revenueChart: dashboardMock.revenueChart };
    }
    const response = await api.get(`/dashboard/${role}/analytics`);
    return response.data;
  }
};
