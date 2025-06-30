/ src/components/Applications/ApplicationCard.jsx
import React from 'react';
import StatusBadge from '../Common/StatusBadge';
import ActionButtons from '../Common/ActionButtons';

const ApplicationCard = ({ application, onAction, onStatusChange }) => {
  return (
    <div className="p-4 border-b border-gray-200 last:border-b-0">
      <div className="space-y-3">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-medium text-gray-900">{application.user}</h3>
            <p className="text-sm text-gray-500 font-mono">{application.applicationId}</p>
          </div>
          <ActionButtons onAction={onAction} />
        </div>
        <div>
          <h4 className="font-medium text-gray-900">{application.businessName}</h4>
          <p className="text-sm text-gray-500">{application.description}</p>
        </div>
        <div className="grid grid-cols-2 gap-2 text-sm text-gray-500">
          <div>Category: {application.category}</div>
          <div>Date: {application.date}</div>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-semibold text-gray-900">{application.fundingAmount}</span>
          <StatusBadge status={application.status} type="application" />
        </div>
        
        {/* Status Change Buttons for Mobile */}
        <div className="flex gap-2 mt-2">
          {application.status !== 'Approved' && (
            <button 
              onClick={() => onStatusChange('Approved')}
              className="px-3 py-1 text-xs bg-green-100 text-green-800 rounded-full hover:bg-green-200"
            >
              Approve
            </button>
          )}
          {application.status !== 'Under Review' && (
            <button 
              onClick={() => onStatusChange('Under Review')}
              className="px-3 py-1 text-xs bg-yellow-100 text-yellow-800 rounded-full hover:bg-yellow-200"
            >
              Review
            </button>
          )}
          {application.status !== 'Rejected' && (
            <button 
              onClick={() => onStatusChange('Rejected')}
              className="px-3 py-1 text-xs bg-red-100 text-red-800 rounded-full hover:bg-red-200"
            >
              Reject
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApplicationCard;
