import React from 'react';
import { useWishlist } from '../../hooks/useWishlist';
import CourseCard from '../../components/course/CourseCard';
import { Heart } from 'lucide-react';

const Wishlist = () => {
  const { data: wishlistData, isLoading } = useWishlist();

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">My Wishlist</h1>
        <p className="text-slate-500">Courses you have saved for later.</p>
      </div>

      {isLoading ? (
        <div className="flex justify-center py-20 text-slate-500">Loading wishlist...</div>
      ) : wishlistData?.data?.length === 0 ? (
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-12 text-center border border-slate-200 dark:border-slate-800">
          <Heart className="w-12 h-12 text-slate-300 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Your wishlist is empty</h3>
          <p className="text-slate-500">Start exploring and save courses you are interested in.</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlistData?.data?.map(item => (
            <CourseCard key={item._id} course={item.course} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
