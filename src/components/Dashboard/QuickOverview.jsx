import React from 'react';
import StatusBadge from '../Common/StatusBadge';

const QuickOverview = ({ users, payments }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-purple-700 mb-4">Recent Users</h3>
        {users.slice(0, 3).map((user, index) => (
          <div key={index} className="flex items-center justify-between py-2 border-b last:border-b-0">
            <div>
              <p className="font-medium">{user.name}</p>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>
            <StatusBadge status={user.applicationStatus} type="application" />
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-purple-700 mb-4">Recent Payments</h3>
        {payments.slice(0, 3).map((payment, index) => (
          <div key={index} className="flex items-center justify-between py-2 border-b last:border-b-0">
            <div>
              <p className="font-medium">{payment.user}</p>
              <p className="text-sm text-gray-500">{payment.date}</p>
            </div>
            <div className="text-right">
              <p className="font-semibold">{payment.amount}</p>
              <StatusBadge status={payment.status} type="payment" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickOverview;
