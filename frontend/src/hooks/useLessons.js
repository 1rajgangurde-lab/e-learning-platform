import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { lessonService } from '../services/lessonService';

export const useLessons = (courseId) => {
  return useQuery({
    queryKey: ['lessons', courseId],
    queryFn: () => lessonService.getLessonsByCourse(courseId),
    enabled: !!courseId
  });
};

export const useMarkLessonComplete = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ courseId, lessonId }) => lessonService.markLessonComplete(courseId, lessonId),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries(['lessons', variables.courseId]);
      queryClient.invalidateQueries(['progress', variables.courseId]);
    }
  });
};
