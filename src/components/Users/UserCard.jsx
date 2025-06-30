import React from 'react';
import StatusBadge from '../Common/StatusBadge';
import ActionButtons from '../Common/ActionButtons';

const UserCard = ({ user, onAction }) => {
  return (
    <div className="p-4 border-b border-gray-200 last:border-b-0">
      <div className="space-y-3">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-medium text-gray-900">{user.name}</h3>
            <p className="text-sm text-gray-500">{user.email}</p>
            <p className="text-sm text-gray-500">{user.phone}</p>
          </div>
          <ActionButtons onAction={onAction} />
        </div>
        <div className="flex flex-wrap gap-2">
          <StatusBadge status={user.applicationStatus} type="application" prefix="App: " />
          <StatusBadge status={user.paymentStatus} type="payment" prefix="Pay: " />
        </div>
        <p className="text-sm text-gray-500">Joined: {user.joinDate}</p>
      </div>
    </div>
  );
};

export default UserCard;
