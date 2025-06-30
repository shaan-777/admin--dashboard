import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import { Menu } from 'lucide-react';

const Layout = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className={`md:block ${showSidebar ? 'block' : 'hidden'} fixed z-10 bg-white md:relative w-64 border-r`}>
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="p-4 border-b md:hidden flex items-center justify-between">
          <h1 className="text-xl font-bold">Admin Dashboard</h1>
          <Menu className="w-6 h-6 cursor-pointer" onClick={() => setShowSidebar(!showSidebar)} />
        </div>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto p-6 md:ml-64">
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default Layout;
