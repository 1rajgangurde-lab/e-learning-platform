import { useQuery } from '@tanstack/react-query';
import { dashboardService } from '../services/dashboardService';

export const useStudentDashboard = () => {
  return useQuery({
    queryKey: ['dashboard', 'student'],
    queryFn: dashboardService.getStudentStats
  });
};

export const useInstructorDashboard = () => {
  return useQuery({
    queryKey: ['dashboard', 'instructor'],
    queryFn: dashboardService.getInstructorStats
  });
};

export const useAdminDashboard = () => {
  return useQuery({
    queryKey: ['dashboard', 'admin'],
    queryFn: dashboardService.getAdminStats
  });
};
