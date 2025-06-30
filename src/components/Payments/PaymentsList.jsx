// export function PaymentsList({ payments }) {
//   return (
//     <div className="bg-white rounded-lg shadow-md overflow-x-auto">
//       <table className="min-w-full text-sm text-gray-700">
//         <thead className="bg-gray-100 text-left font-semibold">
//           <tr>
//             <th className="p-4">Transaction ID</th>
//             <th className="p-4">Amount</th>
//             <th className="p-4">Date</th>
//           </tr>
//         </thead>
//         <tbody>
//           {payments.map((payment, idx) => (
//             <tr key={idx} className="border-t">
//               <td className="p-4">{payment.id}</td>
//               <td className="p-4">{payment.amount}</td>
//               <td className="p-4">{payment.date}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
// src/components/Payments/PaymentsList.jsx
import React, { useState } from 'react';
import { Plus, Download } from 'lucide-react';
import PaymentCard from './PaymentCard';
import PaymentFilters from './PaymentFilters';
import StatusBadge from '../Common/StatusBadge';

const PaymentsList = ({ payments }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredPayments = payments.filter(payment => {
    const matchesSearch = payment.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         payment.transactionId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || payment.status.toLowerCase() === statusFilter.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  const handleDownloadReceipt = (paymentId) => {
    console.log(`Downloading receipt for payment ${paymentId}`);
    // Implement download logic here
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-purple-700">Payments Management</h2>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 flex items-center">
          <Plus className="w-4 h-4 mr-2" />
          Add Payment
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <PaymentFilters 
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
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">USER</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">AMOUNT</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">METHOD</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">TRANSACTION ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">DATE</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">STATUS</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">RECEIPT</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredPayments.map((payment) => (
                <tr key={payment.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{payment.user}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">{payment.amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{payment.paymentMethod}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-mono">{payment.transactionId}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{payment.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <StatusBadge status={payment.status} type="payment" />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {payment.receipt === 'Download' ? (
                      <button 
                        onClick={() => handleDownloadReceipt(payment.id)}
                        className="text-blue-600 hover:text-blue-800 flex items-center"
                      >
                        <Download className="w-4 h-4 mr-1" />
                        Download
                      </button>
                    ) : (
                      <span className="text-red-600">Pending</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden">
          {filteredPayments.map((payment) => (
            <PaymentCard 
              key={payment.id} 
              payment={payment} 
              onDownloadReceipt={() => handleDownloadReceipt(payment.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaymentsList;
