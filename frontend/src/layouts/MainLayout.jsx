import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import ThemeLayout from '../components/ui/ThemeLayout';

const MainLayout = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <ThemeLayout>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 w-full relative z-10">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ThemeLayout>
  );
};

export default MainLayout;
