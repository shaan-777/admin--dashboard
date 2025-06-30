// src/components/Payments/PaymentFilters.jsx
import React from 'react';
import SearchBar from '../Common/SearchBar';

const PaymentFilters = ({ searchTerm, setSearchTerm, statusFilter, setStatusFilter }) => {
  const statusOptions = [
    { value: 'all', label: 'All Status' },
    { value: 'completed', label: 'Completed' },
    { value: 'processing', label: 'Processing' },
    { value: 'pending', label: 'Pending' }
  ];

  return (
    <div className="p-4 border-b border-gray-200">
      <div className="flex flex-col sm:flex-row gap-4">
        <SearchBar 
          value={searchTerm}
          onChange={setSearchTerm}
          placeholder="Search payments..."
        />
        <select 
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        >
          {statusOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default PaymentFilters;
