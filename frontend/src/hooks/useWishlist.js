import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { wishlistService } from '../services/wishlistService';
import toast from 'react-hot-toast';

export const useWishlist = () => {
  return useQuery({
    queryKey: ['wishlist'],
    queryFn: wishlistService.getWishlist
  });
};

export const useWishlistMutations = () => {
  const queryClient = useQueryClient();

  const addMutation = useMutation({
    mutationFn: wishlistService.addToWishlist,
    onSuccess: () => {
      queryClient.invalidateQueries(['wishlist']);
      toast.success('Added to Wishlist');
    },
    onError: (err) => toast.error(err.response?.data?.message || 'Error adding to wishlist')
  });

  const removeMutation = useMutation({
    mutationFn: wishlistService.removeFromWishlist,
    onSuccess: () => {
      queryClient.invalidateQueries(['wishlist']);
      toast.success('Removed from Wishlist');
    },
    onError: (err) => toast.error(err.response?.data?.message || 'Error removing from wishlist')
  });

  return { 
    addToWishlist: addMutation.mutate, 
    removeFromWishlist: removeMutation.mutate,
    isLoading: addMutation.isPending || removeMutation.isPending
  };
};
