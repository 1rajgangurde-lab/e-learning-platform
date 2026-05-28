import { useQuery } from '@tanstack/react-query';
import { courseService } from '../services/courseService';

export const useCourse = (courseId) => {
  return useQuery({
    queryKey: ['course', courseId],
    queryFn: () => courseService.getCourseById(courseId),
    enabled: !!courseId
  });
};
