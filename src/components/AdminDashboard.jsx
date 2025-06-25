// src/components/AdminDashboard.jsx
// ====================
import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import StatsCards from './StatsCards'
import UsersTable from './UsersTable'
import PaymentsTable from './PaymentsTable'
import ApplicationsTable from './ApplicationsTable'
import { sidebarItems, statsData } from '../data/dashboardData'

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard')

  const renderContent = () => {
    switch(activeTab) {
      case 'users':
        return <UsersTable />
      case 'payments':
        return <PaymentsTable />
      case 'applications':
        return <ApplicationsTable />
      default:
        return (
          <>
            <StatsCards stats={statsData} />
            <UsersTable />
            <PaymentsTable />
            <ApplicationsTable />
          </>
        )
    }
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar 
        items={sidebarItems}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <Header />
          {renderContent()}
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard