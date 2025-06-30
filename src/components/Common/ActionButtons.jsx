import React from 'react';
import { Eye, Edit, Trash2 } from 'lucide-react';

const ActionButtons = ({ onView, onEdit, onDelete }) => {
  return (
    <div className="flex space-x-2">
      {onView && (
        <button onClick={onView} className="text-blue-600 hover:text-blue-800">
          <Eye className="w-4 h-4" />
        </button>
      )}
      {onEdit && (
        <button onClick={onEdit} className="text-blue-600 hover:text-blue-800">
          <Edit className="w-4 h-4" />
        </button>
      )}
      {onDelete && (
        <button onClick={onDelete} className="text-red-600 hover:text-red-800">
          <Trash2 className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

export default ActionButtons;
