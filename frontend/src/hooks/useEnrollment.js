import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { 
  enrollCourse, 
  getMyCourses, 
  getEnrollmentHistory, 
  archiveEnrollment,
  generateCertificate 
} from '../services/enrollmentService';
import toast from 'react-hot-toast';

export const useMyCourses = () => {
  return useQuery({
    queryKey: ['myCourses'],
    queryFn: getMyCourses,
    staleTime: 5 * 60 * 1000,
  });
};

export const useEnrollmentHistory = () => {
  return useQuery({
    queryKey: ['enrollmentHistory'],
    queryFn: getEnrollmentHistory,
    staleTime: 5 * 60 * 1000,
  });
};

export const useEnrollmentMutations = () => {
  const queryClient = useQueryClient();

  const enroll = useMutation({
    mutationFn: (courseId) => enrollCourse(courseId),
    onSuccess: (res) => {
      queryClient.invalidateQueries({ queryKey: ['myCourses'] });
      queryClient.invalidateQueries({ queryKey: ['wishlist'] });
      toast.success('Successfully enrolled!');
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message || 'Failed to enroll');
    }
  });

  const archive = useMutation({
    mutationFn: ({ id, reason }) => archiveEnrollment(id, reason),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['myCourses'] });
      queryClient.invalidateQueries({ queryKey: ['enrollmentHistory'] });
      toast.success('Course archived successfully');
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message || 'Failed to archive course');
    }
  });

  const generateCert = useMutation({
    mutationFn: (courseId) => generateCertificate(courseId),
    onSuccess: () => {
      toast.success('Certificate Generated Successfully!');
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message || 'Failed to generate certificate');
    }
  });

  return { 
    enroll: enroll.mutate, 
    isEnrolling: enroll.isPending,
    archive: archive.mutate,
    isArchiving: archive.isPending,
    generateCert: generateCert.mutate,
    isGeneratingCert: generateCert.isPending
  };
};
