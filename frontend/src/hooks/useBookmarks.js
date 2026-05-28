import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from '../services/api';
import toast from 'react-hot-toast';

export const useLessonBookmarks = (lessonId) => {
  return useQuery({
    queryKey: ['bookmarks', lessonId],
    queryFn: async () => {
      const { data } = await api.get(`/bookmarks/${lessonId}`);
      return data;
    },
    enabled: !!lessonId,
  });
};

export const useAddBookmark = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (bookmarkData) => {
      const { data } = await api.post('/bookmarks/add', bookmarkData);
      return data;
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['bookmarks', variables.lessonId] });
      toast.success('Bookmark saved!');
    }
  });
};
