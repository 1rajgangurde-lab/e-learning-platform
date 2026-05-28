import { useQuery } from '@tanstack/react-query';
import { courseService } from '../services/courseService';

export const useCourses = (filters) => {
  return useQuery({
    queryKey: ['courses', filters],
    queryFn: () => courseService.getCourses(filters),
  });
};

export const useCourseById = (id) => {
  return useQuery({
    queryKey: ['course', id],
    queryFn: () => courseService.getCourseById(id),
    enabled: !!id
  });
};
