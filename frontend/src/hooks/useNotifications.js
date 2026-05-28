import { useQuery } from '@tanstack/react-query';
import { dashboardService } from '../services/dashboardService';

export const useNotifications = () => {
  return useQuery({
    queryKey: ['notifications'],
    queryFn: dashboardService.getNotifications
  });
};
