import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import CourseCard from '../../components/course/CourseCard';
import CourseSearch from '../../components/course/CourseSearch';
import CourseFilter from '../../components/course/CourseFilter';
import { useCourses } from '../../hooks/useCourses';
import { BookOpen } from 'lucide-react';
import ThemeLayout from '../../components/ui/ThemeLayout';

const CourseList = () => {
  const [filters, setFilters] = useState({});
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('newest');
  const [page, setPage] = useState(1);

  const { data, isLoading } = useCourses({ ...filters, search, sort, page, limit: 9 });

  return (
    <ThemeLayout hideParticles={false}>
      <div className="py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Explore Courses</h1>
            <p className="text-slate-400">Discover your next skill with our expert-led programs.</p>
          </div>

        <CourseSearch onSearch={(q) => { setSearch(q); setPage(1); }} onSort={(s) => { setSort(s); setPage(1); }} />

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full lg:w-64 shrink-0">
            <CourseFilter filters={filters} setFilters={(f) => { setFilters(f); setPage(1); }} />
          </div>

          {/* Main Grid */}
          <div className="flex-1">
            {isLoading ? (
              <div className="flex justify-center items-center h-64 text-slate-400">Loading courses...</div>
            ) : data?.data?.length === 0 ? (
              <div className="bg-slate-900/50 backdrop-blur-md rounded-2xl p-12 text-center border border-slate-700/50 shadow-xl">
                <BookOpen className="w-12 h-12 text-slate-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">No courses found</h3>
                <p className="text-slate-400">Try adjusting your search or filter criteria.</p>
                <button onClick={() => { setFilters({}); setSearch(''); }} className="mt-6 text-blue-400 hover:text-blue-300 font-medium transition-colors">Clear all filters</button>
              </div>
            ) : (
              <>
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {data?.data?.map(course => (
                    <CourseCard key={course._id || course.id} course={course} />
                  ))}
                </div>

                {/* Pagination */}
                {data?.pages > 1 && (
                  <div className="flex justify-center mt-12 gap-2">
                    {Array.from({ length: data.pages }).map((_, i) => (
                      <button 
                        key={i} 
                        onClick={() => setPage(i + 1)}
                        className={`w-10 h-10 rounded-xl font-bold transition-all duration-300 ${page === i + 1 ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]' : 'bg-slate-900/50 text-slate-400 border border-slate-700/50 hover:bg-slate-800'}`}
                      >
                        {i + 1}
                      </button>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
          </div>
        </div>

      </div>
    </ThemeLayout>
  );
};

export default CourseList;
