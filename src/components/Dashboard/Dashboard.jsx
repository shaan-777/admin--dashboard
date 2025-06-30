import React from 'react';
import StatsCard from './StatsCard';
import QuickOverview from './QuickOverview';
import { stats } from '../../data/mockData';

const Dashboard = ({ users, payments }) => {
  return (
    <>
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      {/* Quick Overview */}
      <QuickOverview users={users} payments={payments} />
    </>
  );
};

export default Dashboard;
