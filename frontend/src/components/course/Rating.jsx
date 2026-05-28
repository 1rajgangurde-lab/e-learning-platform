import React from 'react';
import { Star } from 'lucide-react';
import { cn } from '../../utils/cn';

const Rating = ({ rating = 0, max = 5, size = "w-4 h-4", readOnly = true, onChange }) => {
  return (
    <div className="flex items-center gap-1">
      {[...Array(max)].map((_, index) => {
        const starValue = index + 1;
        const isFilled = starValue <= Math.round(rating);
        return (
          <button
            key={index}
            type="button"
            disabled={readOnly}
            onClick={() => !readOnly && onChange?.(starValue)}
            className={cn(
              "transition-all",
              readOnly ? "cursor-default" : "cursor-pointer hover:scale-110",
              isFilled ? "text-yellow-400" : "text-slate-300 dark:text-slate-600"
            )}
          >
            <Star className={size} fill={isFilled ? "currentColor" : "none"} />
          </button>
        );
      })}
    </div>
  );
};

export default Rating;
