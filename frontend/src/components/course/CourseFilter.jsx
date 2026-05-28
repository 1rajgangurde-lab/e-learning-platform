import React from 'react';

const CourseFilter = ({ filters, setFilters }) => {
  const categories = ['Web Development', 'Mobile App', 'Design', 'Data Science', 'Marketing'];
  const levels = ['Beginner', 'Intermediate', 'Advanced'];
  const prices = ['All', 'Free', 'Paid'];

  const handleChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-lg text-slate-900 dark:text-white">Filters</h3>
        <button onClick={() => setFilters({})} className="text-xs text-primary hover:underline">Clear All</button>
      </div>
      
      {/* Categories */}
      <div>
        <h4 className="font-medium text-slate-900 dark:text-white mb-3 text-sm">Category</h4>
        <div className="space-y-2">
          {categories.map(cat => (
            <label key={cat} className="flex items-center gap-3 cursor-pointer">
              <input type="radio" name="category" checked={filters.category === cat} onChange={() => handleChange('category', cat)} className="w-4 h-4 text-primary focus:ring-primary" />
              <span className="text-sm text-slate-600 dark:text-slate-400">{cat}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Level */}
      <div>
        <h4 className="font-medium text-slate-900 dark:text-white mb-3 text-sm">Level</h4>
        <div className="space-y-2">
          {levels.map(level => (
            <label key={level} className="flex items-center gap-3 cursor-pointer">
              <input type="radio" name="level" checked={filters.level === level} onChange={() => handleChange('level', level)} className="w-4 h-4 text-primary focus:ring-primary" />
              <span className="text-sm text-slate-600 dark:text-slate-400">{level}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="font-medium text-slate-900 dark:text-white mb-3 text-sm">Price</h4>
        <div className="space-y-2">
          {prices.map(price => (
            <label key={price} className="flex items-center gap-3 cursor-pointer">
              <input type="radio" name="price" checked={filters.price === price.toLowerCase() || (!filters.price && price === 'All')} onChange={() => handleChange('price', price.toLowerCase())} className="w-4 h-4 text-primary focus:ring-primary" />
              <span className="text-sm text-slate-600 dark:text-slate-400">{price}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseFilter;
