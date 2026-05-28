import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Sidebar from '../components/common/Sidebar';
import ThemeLayout from '../components/ui/ThemeLayout';

const DashboardLayout = () => {
  return (
    <ThemeLayout hideParticles={true}>
      <div className="min-h-screen flex flex-col overflow-x-hidden relative z-10">
        <Navbar />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <main className="flex-1 p-4 md:p-8 overflow-y-auto w-full max-w-7xl mx-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </ThemeLayout>
  );
};

export default DashboardLayout;
