import React from 'react';
import GlassCard from '../ui/GlassCard';
import { Edit3, Eye, BarChart2, Copy, Trash2, MoreVertical, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CourseTable = ({ courses = [] }) => {
  const navigate = useNavigate();

  // Mock data if none provided
  const data = courses.length ? courses : [
    { id: 1, title: 'React Hooks Mastery', status: 'Published', students: 1240, revenue: 14500, rating: 4.8, progress: 100, thumbnail: 'https://via.placeholder.com/150x100' },
    { id: 2, title: 'Node.js Microservices', status: 'Published', students: 856, revenue: 9200, rating: 4.6, progress: 100, thumbnail: 'https://via.placeholder.com/150x100' },
    { id: 3, title: 'Advanced GraphQL', status: 'Draft', students: 0, revenue: 0, rating: 0, progress: 65, thumbnail: 'https://via.placeholder.com/150x100' }
  ];

  const getStatusColor = (status) => {
    return status === 'Published' 
      ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' 
      : 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30';
  };

  return (
    <GlassCard className="border-slate-700/50 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-900/80 border-b border-slate-700/80">
              <th className="p-4 text-xs font-bold uppercase text-slate-400 tracking-wider">Course</th>
              <th className="p-4 text-xs font-bold uppercase text-slate-400 tracking-wider">Status</th>
              <th className="p-4 text-xs font-bold uppercase text-slate-400 tracking-wider">Students</th>
              <th className="p-4 text-xs font-bold uppercase text-slate-400 tracking-wider">Revenue</th>
              <th className="p-4 text-xs font-bold uppercase text-slate-400 tracking-wider">Rating</th>
              <th className="p-4 text-xs font-bold uppercase text-slate-400 tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {data.map((course) => (
              <tr key={course.id} className="hover:bg-slate-800/30 transition-colors group">
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <img src={course.thumbnail} alt={course.title} className="w-16 h-10 rounded object-cover border border-slate-700" />
                    <div>
                      <p className="font-bold text-white text-sm group-hover:text-blue-400 transition-colors">{course.title}</p>
                      {course.status === 'Draft' && (
                        <div className="w-24 h-1.5 bg-slate-800 rounded-full mt-1.5 overflow-hidden">
                          <div className="h-full bg-blue-500" style={{ width: `${course.progress}%` }} />
                        </div>
                      )}
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <span className={`px-2 py-1 text-xs font-bold rounded-full border ${getStatusColor(course.status)}`}>
                    {course.status}
                  </span>
                </td>
                <td className="p-4 text-slate-300 font-medium">
                  {course.students.toLocaleString()}
                </td>
                <td className="p-4 text-emerald-400 font-bold drop-shadow-[0_0_5px_rgba(16,185,129,0.3)]">
                  ${course.revenue.toLocaleString()}
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-1 text-yellow-400">
                    <Star className="w-4 h-4 fill-yellow-400" />
                    <span className="font-bold text-sm">{course.rating > 0 ? course.rating : '-'}</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center justify-end gap-2">
                    <button onClick={() => navigate(`/instructor/create-course`)} className="p-2 rounded-lg bg-slate-800 hover:bg-blue-600/20 text-slate-400 hover:text-blue-400 transition-all tooltip-trigger" title="Edit">
                      <Edit3 className="w-4 h-4" />
                    </button>
                    <button className="p-2 rounded-lg bg-slate-800 hover:bg-purple-600/20 text-slate-400 hover:text-purple-400 transition-all tooltip-trigger" title="Preview">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-2 rounded-lg bg-slate-800 hover:bg-emerald-600/20 text-slate-400 hover:text-emerald-400 transition-all tooltip-trigger" title="Analytics">
                      <BarChart2 className="w-4 h-4" />
                    </button>
                    <div className="relative group/menu inline-block">
                      <button className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 transition-all">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                      <div className="absolute right-0 top-full mt-2 w-40 bg-[#0F172A] border border-slate-700 rounded-xl shadow-xl opacity-0 group-hover/menu:opacity-100 pointer-events-none group-hover/menu:pointer-events-auto transition-opacity z-50 overflow-hidden">
                        <button className="w-full text-left px-4 py-2 text-sm text-slate-300 hover:bg-slate-800 flex items-center gap-2">
                          <Copy className="w-4 h-4" /> Duplicate
                        </button>
                        <button className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-red-500/10 flex items-center gap-2">
                          <Trash2 className="w-4 h-4" /> Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </GlassCard>
  );
};

export default CourseTable;
