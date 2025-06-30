import React from 'react';
import { Menu } from 'lucide-react';

const Header = ({ title, onMenuClick }) => {
  return (
    <header className="bg-white shadow-sm">
      <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 mr-3"
          >
            <Menu className="w-5 h-5" />
          </button>
          <h2 className="text-xl sm:text-2xl font-bold text-purple-700">{title}</h2>
        </div>
      </div>
    </header>
  );
};

export default Header;
