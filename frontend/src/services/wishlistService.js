import api from './api';

export const wishlistService = {
  getWishlist: async () => {
    const response = await api.get('/wishlist');
    return response.data;
  },
  addToWishlist: async (courseId) => {
    const response = await api.post('/wishlist/add', { courseId });
    return response.data;
  },
  removeFromWishlist: async (courseId) => {
    const response = await api.delete(`/wishlist/remove/${courseId}`);
    return response.data;
  },
  getWishlistCount: async () => {
    const response = await api.get('/wishlist/count');
    return response.data;
  }
};
