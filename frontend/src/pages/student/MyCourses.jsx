import React, { useState } from 'react';
import { useMyCourses, useEnrollmentHistory } from '../../hooks/useEnrollment';
import EnrollmentCard from '../../components/course/EnrollmentCard';
import ContinueLearningCard from '../../components/dashboard/ContinueLearningCard';
import { BookOpen } from 'lucide-react';

import ThemeLayout from '../../components/ui/ThemeLayout';

const TABS = ['All', 'In Progress', 'Completed', 'Archived'];

const MyCourses = () => {
  const [activeTab, setActiveTab] = useState('All');
  
  const { data: activeCoursesData, isLoading: isLoadingActive } = useMyCourses();
  const { data: archivedCoursesData, isLoading: isLoadingArchived } = useEnrollmentHistory();

  const activeCourses = activeCoursesData?.data || [];
  const archivedCourses = archivedCoursesData?.data || [];
  
  let displayedCourses = [];
  
  if (activeTab === 'All') {
    displayedCourses = [...activeCourses, ...archivedCourses];
  } else if (activeTab === 'In Progress') {
    displayedCourses = activeCourses.filter(c => c.status === 'active' && c.progressPercent < 100);
  } else if (activeTab === 'Completed') {
    displayedCourses = activeCourses.filter(c => c.status === 'completed' || c.progressPercent === 100);
  } else if (activeTab === 'Archived') {
    displayedCourses = archivedCourses;
  }

  const isLoading = isLoadingActive || isLoadingArchived;

  return (
    <ThemeLayout hideParticles={false}>
    <div className="max-w-7xl mx-auto space-y-8 pb-12">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">My Learning</h1>
        <p className="text-slate-400">Track your progress and manage your enrolled courses.</p>
      </div>

      {activeCourses.length > 0 && activeTab !== 'Archived' && activeTab !== 'Completed' && (
        <div className="mb-8">
          <ContinueLearningCard />
        </div>
      )}

      {/* Tabs */}
      <div className="flex gap-4 border-b border-slate-800 pb-4 overflow-x-auto scrollbar-hide">
        {TABS.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2.5 rounded-full font-bold text-sm whitespace-nowrap transition-all duration-300 ${
              activeTab === tab 
                ? 'bg-blue-600/20 text-blue-400 border border-blue-500/50 shadow-[0_0_15px_rgba(37,99,235,0.3)]' 
                : 'bg-slate-900 text-slate-400 border border-slate-800 hover:bg-slate-800 hover:text-white'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Grid */}
      {isLoading ? (
        <div className="flex justify-center py-20 text-slate-500">Loading courses...</div>
      ) : displayedCourses.length === 0 ? (
        <div className="bg-slate-900/50 backdrop-blur-xl rounded-2xl p-12 text-center border border-slate-800/50 shadow-inner">
          <div className="w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
             <BookOpen className="w-10 h-10 text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">No courses found</h3>
          <p className="text-slate-400 mb-6">You don't have any courses in this category yet. Explore new skills!</p>
          <button className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-all">
             Explore Courses
          </button>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {displayedCourses.map(enrollment => (
            <EnrollmentCard key={enrollment._id} enrollment={enrollment} />
          ))}
        </div>
      )}
    </div>
    </ThemeLayout>
  );
};

export default MyCourses;
