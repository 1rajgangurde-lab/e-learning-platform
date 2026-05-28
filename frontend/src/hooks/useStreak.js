import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from '../services/api';
import toast from 'react-hot-toast';

export const useStreak = () => {
  return useQuery({
    queryKey: ['streak'],
    queryFn: async () => {
      const { data } = await api.get('/streak');
      return data;
    },
    staleTime: 5 * 60 * 1000,
  });
};

export const useStreakLeaderboard = () => {
  return useQuery({
    queryKey: ['streakLeaderboard'],
    queryFn: async () => {
      const { data } = await api.get('/streak/leaderboard');
      return data;
    },
    staleTime: 5 * 60 * 1000,
  });
};

export const useFreezeStreak = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      const { data } = await api.post('/streak/freeze');
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['streak'] });
      toast.success('Streak Freeze Activated!');
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message || 'Failed to freeze streak');
    }
  });
};
