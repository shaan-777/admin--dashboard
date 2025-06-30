import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import StatsCards from './StatsCards';
import UsersTable from './UsersTable';
import PaymentsTable from './PaymentsTable';
import ApplicationsTable from './ApplicationsTable';
import { sidebarItems, statsData } from '../data/dashboardData';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // 👈 New state

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen); // 👈 Toggle handler

  const renderContent = () => {
    switch (activeTab) {
      case 'users':
        return <UsersTable />;
      case 'payments':
        return <PaymentsTable />;
      case 'applications':
        return <ApplicationsTable />;
      default:
        return (
          <>
            <StatsCards stats={statsData} />
            <UsersTable />
            <PaymentsTable />
            <ApplicationsTable />
          </>
        );
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Sidebar with responsive props */}
      <Sidebar
        items={sidebarItems}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isOpen={isSidebarOpen}           // 👈 passed to Sidebar
        toggleSidebar={toggleSidebar}    // 👈 passed to Sidebar
      />

      <div className="flex-1 overflow-auto">
        {/* Mobile-only toggle button */}
        <div className="p-4 bg-white shadow-md lg:hidden">
          <button onClick={toggleSidebar} className="text-purple-800 text-2xl">
            ☰
          </button>
        </div>

        <div className="p-8">
          <Header />
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
