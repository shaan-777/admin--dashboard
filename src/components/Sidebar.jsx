import React from 'react';

const Sidebar = ({ items, activeTab, setActiveTab, isOpen, toggleSidebar }) => {
  return (
    <>
      {/* Backdrop for mobile when sidebar is open */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity duration-300 ${
          isOpen ? 'block' : 'hidden'
        }`}
        onClick={toggleSidebar}
      />

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-full w-64 bg-purple-800 text-white z-50 
          transform transition-transform duration-300
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 lg:static lg:block
        `}
      >
        <div className="p-6">
          <h1 className="text-xl font-semibold">Founderoo Admin</h1>
        </div>
        <nav className="mt-8">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                toggleSidebar(); // close sidebar on mobile
              }}
              className={`w-full text-left px-6 py-3 text-lg hover:bg-purple-700 transition-colors ${
                activeTab === item.id ? 'bg-purple-700' : ''
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
