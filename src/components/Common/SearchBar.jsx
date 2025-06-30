import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ placeholder = "Search...", onSearch }) => {
  return (
    <div className="flex-1 relative">
      <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => onSearch && onSearch(e.target.value)}
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
      />
    </div>
  );
};

export default SearchBar;
