// src/components/Applications/ApplicationsList.jsx
import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import ApplicationCard from './ApplicationCard';
import ApplicationFilters from './ApplicationFilters';
import StatusBadge from '../Common/StatusBadge';
import ActionButtons from '../Common/ActionButtons';

const ApplicationsList = ({ applications }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredApplications = applications.filter(app => {
    const matchesSearch = app.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.businessName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.applicationId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || app.status.toLowerCase() === statusFilter.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  const handleAction = (action, applicationId) => {
    console.log(`${action} action for application ${applicationId}`);
    // Implement your action logic here
  };

  const handleStatusChange = (applicationId, newStatus) => {
    console.log(`Changing status of application ${applicationId} to ${newStatus}`);
    // Implement status change logic here
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-purple-700">Applications Management</h2>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 flex items-center">
          <Plus className="w-4 h-4 mr-2" />
          New Application
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <ApplicationFilters 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
        />

        {/* Desktop Table */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">APPLICANT</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">APPLICATION ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">BUSINESS</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CATEGORY</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">FUNDING</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">STATUS</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">DATE</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredApplications.map((app) => (
                <tr key={app.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{app.user}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-mono">{app.applicationId}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{app.businessName}</div>
                      <div className="text-sm text-gray-500 truncate max-w-xs">{app.description}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{app.category}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">{app.fundingAmount}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <StatusBadge status={app.status} type="application" />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{app.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <ActionButtons onAction={(action) => handleAction(action, app.id)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden">
          {filteredApplications.map((app) => (
            <ApplicationCard 
              key={app.id} 
              application={app} 
              onAction={(action) => handleAction(action, app.id)}
              onStatusChange={(newStatus) => handleStatusChange(app.id, newStatus)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApplicationsList;
