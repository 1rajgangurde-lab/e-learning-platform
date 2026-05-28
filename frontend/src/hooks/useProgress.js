import { useMutation, useQueryClient } from '@tanstack/react-query';
import api from '../services/api';

export const useUpdateProgress = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (progressData) => {
      const { data } = await api.put('/progress/update', progressData);
      return data;
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['course', variables.courseId] });
      queryClient.invalidateQueries({ queryKey: ['myCourses'] });
      queryClient.invalidateQueries({ queryKey: ['streak'] });
    }
  });
};
