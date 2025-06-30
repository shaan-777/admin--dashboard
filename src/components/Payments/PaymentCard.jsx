// src/components/Payments/PaymentCard.jsx
import React from 'react';
import { Download } from 'lucide-react';
import StatusBadge from '../Common/StatusBadge';

const PaymentCard = ({ payment, onDownloadReceipt }) => {
  return (
    <div className="p-4 border-b border-gray-200 last:border-b-0">
      <div className="space-y-3">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-medium text-gray-900">{payment.user}</h3>
            <p className="text-lg font-semibold text-gray-900">{payment.amount}</p>
          </div>
          <StatusBadge status={payment.status} type="payment" />
        </div>
        <div className="grid grid-cols-2 gap-2 text-sm text-gray-500">
          <div>Method: {payment.paymentMethod}</div>
          <div>Date: {payment.date}</div>
        </div>
        <div className="text-xs font-mono text-gray-500">
          ID: {payment.transactionId}
        </div>
        <div className="flex justify-end">
          {payment.receipt === 'Download' ? (
            <button 
              onClick={onDownloadReceipt}
              className="text-blue-600 hover:text-blue-800 flex items-center text-sm"
            >
              <Download className="w-4 h-4 mr-1" />
              Download Receipt
            </button>
          ) : (
            <span className="text-red-600 text-sm">Receipt Pending</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentCard;
