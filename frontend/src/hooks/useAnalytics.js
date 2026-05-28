import { useQuery } from '@tanstack/react-query';
import { dashboardService } from '../services/dashboardService';

export const useAnalytics = (role) => {
  return useQuery({
    queryKey: ['analytics', role],
    queryFn: () => dashboardService.getAnalytics(role)
  });
};
