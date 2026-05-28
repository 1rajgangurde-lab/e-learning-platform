import React from 'react';
import ThemeLayout from '../../components/ui/ThemeLayout';
import CourseTable from '../../components/instructor/CourseTable';
import { Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ManageCourses = () => {
  const navigate = useNavigate();

  return (
    <ThemeLayout hideParticles={false}>
      <div className="max-w-7xl mx-auto space-y-8 pb-12">
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Manage Courses</h1>
            <p className="text-slate-400">View and edit your published and draft courses.</p>
          </div>
          <button 
            onClick={() => navigate('/instructor/create-course')}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-[0_0_15px_rgba(37,99,235,0.4)] flex items-center gap-2 transition-all"
          >
            <Plus className="w-5 h-5" />
            Create Course
          </button>
        </div>

        {/* Filters and Search could go here in a GlassCard */}
        
        {/* Table */}
        <CourseTable />
      </div>
    </ThemeLayout>
  );
};

export default ManageCourses;
