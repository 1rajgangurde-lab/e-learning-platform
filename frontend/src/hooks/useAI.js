import { useMutation } from '@tanstack/react-query';
import api from '../services/api';
import toast from 'react-hot-toast';

export const useAI = () => {
  const chatMutation = useMutation({
    mutationFn: async ({ topic, message }) => {
      const { data } = await api.post('/ai/chat', { topic, message });
      return data.data;
    },
    onError: (err) => {
      toast.error(err.response?.data?.message || 'Chat generation failed');
    }
  });

  const notesMutation = useMutation({
    mutationFn: async ({ topic }) => {
      const { data } = await api.post('/ai/notes', { topic });
      return data.data;
    },
    onError: (err) => toast.error(err.response?.data?.message || 'Notes generation failed')
  });

  const summaryMutation = useMutation({
    mutationFn: async ({ text }) => {
      const { data } = await api.post('/ai/summary', { text });
      return data.data;
    },
    onError: (err) => toast.error(err.response?.data?.message || 'Summary failed')
  });

  const mcqMutation = useMutation({
    mutationFn: async ({ topic, difficulty }) => {
      const { data } = await api.post('/ai/mcq', { topic, difficulty });
      return data.data;
    },
    onError: (err) => toast.error(err.response?.data?.message || 'MCQ generation failed')
  });

  const roadmapMutation = useMutation({
    mutationFn: async ({ skill }) => {
      const { data } = await api.post('/ai/roadmap', { skill });
      return data.data;
    },
    onError: (err) => toast.error(err.response?.data?.message || 'Roadmap generation failed')
  });

  const interviewMutation = useMutation({
    mutationFn: async ({ skill, difficulty }) => {
      const { data } = await api.post('/ai/interview', { skill, difficulty });
      return data.data;
    },
    onError: (err) => toast.error(err.response?.data?.message || 'Interview generation failed')
  });

  return {
    generateChat: chatMutation.mutateAsync,
    isChatting: chatMutation.isPending,
    
    generateNotes: notesMutation.mutateAsync,
    isGeneratingNotes: notesMutation.isPending,
    
    generateSummary: summaryMutation.mutateAsync,
    isGeneratingSummary: summaryMutation.isPending,
    
    generateMCQs: mcqMutation.mutateAsync,
    isGeneratingMCQs: mcqMutation.isPending,
    
    generateRoadmap: roadmapMutation.mutateAsync,
    isGeneratingRoadmap: roadmapMutation.isPending,
    
    generateInterviewPrep: interviewMutation.mutateAsync,
    isGeneratingInterview: interviewMutation.isPending,
  };
};
