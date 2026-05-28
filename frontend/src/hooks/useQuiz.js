import { useQuery, useMutation } from '@tanstack/react-query';
import api from '../services/api';
import toast from 'react-hot-toast';

export const useQuiz = (quizId) => {
  return useQuery({
    queryKey: ['quiz', quizId],
    queryFn: async () => {
      const { data } = await api.get(`/quizzes/${quizId}`);
      return data.data;
    },
    enabled: !!quizId
  });
};

export const useQuizResult = (attemptId) => {
  return useQuery({
    queryKey: ['quizResult', attemptId],
    queryFn: async () => {
      const { data } = await api.get(`/quizzes/result/${attemptId}`);
      return data.data;
    },
    enabled: !!attemptId
  });
};

export const useQuizLeaderboard = (quizId) => {
  return useQuery({
    queryKey: ['quizLeaderboard', quizId],
    queryFn: async () => {
      const { data } = await api.get(`/quizzes/${quizId}/leaderboard`);
      return data.data;
    },
    enabled: !!quizId
  });
};

export const useQuizMutations = () => {
  const submitQuiz = useMutation({
    mutationFn: async ({ quizId, payload }) => {
      const { data } = await api.post(`/quizzes/${quizId}/submit`, payload);
      return data.data;
    },
    onSuccess: () => {
      toast.success('Quiz submitted successfully!');
    },
    onError: (err) => {
      toast.error(err.response?.data?.message || 'Failed to submit quiz');
    }
  });

  return { 
    submitQuiz: submitQuiz.mutateAsync, 
    isSubmitting: submitQuiz.isPending 
  };
};
