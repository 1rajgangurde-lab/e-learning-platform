import { useQuery } from '@tanstack/react-query';
import { resourceService } from '../services/resourceService';

export const useResources = (courseId) => {
  return useQuery({
    queryKey: ['resources', courseId],
    queryFn: () => resourceService.getResourcesByCourse(courseId),
    enabled: !!courseId
  });
};
