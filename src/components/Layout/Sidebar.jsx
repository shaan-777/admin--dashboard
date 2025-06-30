import React from 'react';
import { X, Home, Users, CreditCard, FileText } from 'lucide-react';

const iconMap = {
  Home,
  Users,
  CreditCard,
  FileText
};

const Sidebar = ({ isOpen, onClose, activeSection, onSectionChange }) => {
  const sidebarItems = [
    { icon: 'Home', label: 'Dashboard', key: 'dashboard' },
    { icon: 'Users', label: 'Users', key: 'users' },
    { icon: 'CreditCard', label: 'Payments', key: 'payments' },
    { icon: 'FileText', label: 'Applications', key: 'applications' },
  ];

  const handleClick = (key) => {
    onSectionChange(key);
    onClose();
  };

  return (
    <div className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-purple-700 shadow-lg transform transition-transform duration-300 ease-in-out ${
      isOpen ? 'translate-x-0' : '-translate-x-full'
    } lg:translate-x-0`}>
      <div className="flex items-center justify-between h-16 px-6">
        <h1 className="text-xl font-bold text-white">Founderoo Admin</h1>
        <button
          onClick={onClose}
          className="lg:hidden p-2 rounded-md hover:bg-purple-600 text-white"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
      
      <nav className="mt-6 px-4">
        {sidebarItems.map((item, index) => {
          const IconComponent = iconMap[item.icon];
          return (
            <button
              key={index}
              onClick={() => handleClick(item.key)}
              className={`w-full flex items-center px-4 py-3 mt-2 text-sm font-medium rounded-lg transition-colors text-left ${
                activeSection === item.key
                  ? 'bg-purple-600 text-white'
                  : 'text-purple-200 hover:bg-purple-600 hover:text-white'
              }`}
            >
              <IconComponent className="w-5 h-5 mr-3" />
              {item.label}
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
