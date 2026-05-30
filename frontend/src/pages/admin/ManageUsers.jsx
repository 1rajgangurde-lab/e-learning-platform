import React, { useState } from 'react';
import ThemeLayout from '../../components/ui/ThemeLayout';
import GlassCard from '../../components/ui/GlassCard';
import { Users, Search, MoreVertical, Shield, UserX, UserCheck, Filter } from 'lucide-react';
import { ROLES } from '../../utils/constants';
import UserProfileModal from '../../components/admin/UserProfileModal';

const mockUsers = [
  { id: 'USR-101', name: 'Alice Walker', email: 'alice@example.com', role: ROLES.STUDENT, status: 'Active', joined: 'Oct 12, 2026' },
  { id: 'USR-102', name: 'Marcus Chen', email: 'marcus@example.com', role: ROLES.INSTRUCTOR, status: 'Active', joined: 'Sep 05, 2026' },
  { id: 'USR-103', name: 'Elena Rodriguez', email: 'elena@example.com', role: ROLES.STUDENT, status: 'Suspended', joined: 'Aug 21, 2026' },
  { id: 'USR-104', name: 'System Admin', email: 'admin@elearning.com', role: ROLES.ADMIN, status: 'Active', joined: 'Jan 01, 2026' },
  { id: 'USR-105', name: 'David Smith', email: 'david@example.com', role: ROLES.INSTRUCTOR, status: 'Pending', joined: 'Oct 28, 2026' },
];

const ManageUsers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const getRoleBadge = (role) => {
    switch (role) {
      case ROLES.ADMIN: return <span className="px-2 py-1 bg-rose-500/20 text-rose-400 border border-rose-500/30 rounded text-xs font-bold uppercase">Admin</span>;
      case ROLES.INSTRUCTOR: return <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded text-xs font-bold uppercase">Instructor</span>;
      default: return <span className="px-2 py-1 bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded text-xs font-bold uppercase">Student</span>;
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Active': return <span className="text-emerald-400 flex items-center gap-1"><UserCheck className="w-3 h-3" /> Active</span>;
      case 'Suspended': return <span className="text-rose-400 flex items-center gap-1"><UserX className="w-3 h-3" /> Suspended</span>;
      default: return <span className="text-yellow-400 flex items-center gap-1"><Shield className="w-3 h-3" /> Pending</span>;
    }
  };

  return (
    <ThemeLayout hideParticles={false}>
      <div className="max-w-7xl mx-auto space-y-8 pb-12">
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
              <Users className="w-8 h-8 text-rose-500" /> User Management
            </h1>
            <p className="text-slate-400">View and manage all registered accounts on the platform.</p>
          </div>
          </div>
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg shadow-[0_0_15px_rgba(37,99,235,0.3)] transition-all flex items-center gap-2">
            <Users className="w-4 h-4" /> Add User
          </button>
        </div>

        {/* Quick Filter Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {['All', 'Students', 'Instructors', 'Admins', 'Suspended'].map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`p-4 rounded-xl border transition-all text-center ${
                activeFilter === filter 
                  ? 'bg-blue-500/20 border-blue-500/50 text-blue-400' 
                  : 'bg-slate-900/50 border-white/5 text-slate-400 hover:bg-slate-800'
              }`}
            >
              <div className="text-2xl font-bold mb-1">
                {filter === 'All' ? mockUsers.length : mockUsers.filter(u => {
                  if (filter === 'Students') return u.role === ROLES.STUDENT;
                  if (filter === 'Instructors') return u.role === ROLES.INSTRUCTOR;
                  if (filter === 'Admins') return u.role === ROLES.ADMIN;
                  if (filter === 'Suspended') return u.status === 'Suspended';
                  return true;
                }).length}
              </div>
              <div className="text-xs uppercase tracking-wider">{filter}</div>
            </button>
          ))}
        </div>

        <GlassCard className="p-6 border-slate-700/50">
          <div className="flex gap-4 mb-6">
            <div className="flex-1 relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-rose-400 transition-colors" />
              <input 
                type="text" 
                placeholder="Search users by name, email, or ID..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-700/50 bg-slate-900/50 focus:bg-slate-900 focus:border-blue-500/50 outline-none text-white transition-all shadow-inner placeholder-slate-600"
              />
            </div>
            <button className="px-6 py-3 rounded-xl border border-slate-700/50 bg-slate-900/50 hover:bg-slate-800 text-slate-300 font-bold transition-all flex items-center gap-2">
              <Filter className="w-4 h-4" /> Filter
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900/80 border-b border-slate-700/80">
                  <th className="p-4 text-xs font-bold uppercase text-slate-400 tracking-wider">User</th>
                  <th className="p-4 text-xs font-bold uppercase text-slate-400 tracking-wider">Role</th>
                  <th className="p-4 text-xs font-bold uppercase text-slate-400 tracking-wider">Status</th>
                  <th className="p-4 text-xs font-bold uppercase text-slate-400 tracking-wider">Joined Date</th>
                  <th className="p-4 text-xs font-bold uppercase text-slate-400 tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {mockUsers.filter(u => {
                  if (activeFilter === 'Students') return u.role === ROLES.STUDENT;
                  if (activeFilter === 'Instructors') return u.role === ROLES.INSTRUCTOR;
                  if (activeFilter === 'Admins') return u.role === ROLES.ADMIN;
                  if (activeFilter === 'Suspended') return u.status === 'Suspended';
                  return true;
                }).map((user) => (
                  <tr 
                    key={user.id} 
                    className="hover:bg-slate-800/30 transition-colors group cursor-pointer"
                    onClick={() => setSelectedUser(user)}
                  >
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-blue-400 font-bold border border-slate-700">
                          {user.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-bold text-slate-200 text-sm group-hover:text-blue-300 transition-colors">{user.name}</p>
                          <p className="text-xs text-slate-500">{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">{getRoleBadge(user.role)}</td>
                    <td className="p-4 text-sm font-medium">{getStatusBadge(user.status)}</td>
                    <td className="p-4 text-sm text-slate-400">{user.joined}</td>
                    <td className="p-4 text-right relative">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded hover:bg-blue-500/20 text-xs font-bold" onClick={(e) => e.stopPropagation()}>Edit</button>
                        {user.status !== 'Suspended' ? (
                          <button className="px-3 py-1 bg-amber-500/10 text-amber-400 rounded hover:bg-amber-500/20 text-xs font-bold" onClick={(e) => e.stopPropagation()}>Suspend</button>
                        ) : (
                          <button className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded hover:bg-emerald-500/20 text-xs font-bold" onClick={(e) => e.stopPropagation()}>Restore</button>
                        )}
                        <button className="px-3 py-1 bg-red-500/10 text-red-400 rounded hover:bg-red-500/20 text-xs font-bold" onClick={(e) => e.stopPropagation()}>Delete</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlassCard>
      </div>

      <UserProfileModal 
        user={selectedUser} 
        onClose={() => setSelectedUser(null)} 
      />
    </ThemeLayout>
  );
};

export default ManageUsers;
