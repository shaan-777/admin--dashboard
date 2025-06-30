import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const Layout = ({ children, activeSection, onSectionChange }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const getPageTitle = () => {
    switch (activeSection) {
      case 'users': return 'Users Management';
      case 'payments': return 'Payments Management';
      case 'applications': return 'Applications Management';
      default: return 'Admin Dashboard';
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Mobile Sidebar Backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <Sidebar 
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        activeSection={activeSection}
        onSectionChange={onSectionChange}
      />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header 
          title={getPageTitle()}
          onMenuClick={() => setSidebarOpen(true)}
        />
        
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
