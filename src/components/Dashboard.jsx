import React from 'react';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-500 text-white p-6 rounded-lg shadow">Total Users: 3</div>
        <div className="bg-green-500 text-white p-6 rounded-lg shadow">Total Payments: 2</div>
        <div className="bg-yellow-500 text-white p-6 rounded-lg shadow">Pending Applications: 1</div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mt-8 mb-2">Recent Users</h3>
        <ul className="bg-white rounded shadow divide-y">
          <li className="p-4 flex justify-between">
            <span>Aman Singh</span>
            <span className="text-green-600 font-semibold">Approved</span>
          </li>
          <li className="p-4 flex justify-between">
            <span>Shashank Verma</span>
            <span className="text-yellow-600 font-semibold">Under Review</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
