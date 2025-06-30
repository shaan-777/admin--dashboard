import React from 'react';
import { getStatusColor } from '../../utils/statusColors';

const StatusBadge = ({ status, type = 'application' }) => {
  return (
    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(status, type)}`}>
      {status}
    </span>
  );
};

export default StatusBadge;
