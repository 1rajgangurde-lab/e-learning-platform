import React, { useState, useEffect } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';

const CourseSearch = ({ onSearch, onSort }) => {
  const [query, setQuery] = useState('');

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onSearch) onSearch(query);
    }, 500);
    return () => clearTimeout(timer);
  }, [query, onSearch]);

  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-8">
      <div className="relative flex-1">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
        <input 
          type="text" 
          placeholder="Search for anything..." 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-primary outline-none dark:text-white transition-shadow"
        />
      </div>
      <div className="flex gap-2 shrink-0">
        <select 
          onChange={(e) => onSort && onSort(e.target.value)}
          className="px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 outline-none dark:text-white"
        >
          <option value="newest">Newest</option>
          <option value="popular">Most Popular</option>
          <option value="highest-rated">Highest Rated</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
        </select>
        <button className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 lg:hidden">
          <SlidersHorizontal className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default CourseSearch;
