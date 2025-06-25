import React from 'react'

const Sidebar = ({ items, activeTab, setActiveTab }) => {
  return (
    <div className="w-72 bg-purple-800 text-white">
      <div className="p-6">
        <h1 className="text-xl font-semibold">Founderoo Admin</h1>
      </div>
      <nav className="mt-8">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full text-left px-6 py-3 text-lg hover:bg-purple-700 transition-colors ${
              activeTab === item.id ? 'bg-purple-700' : ''
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  )
}

export default Sidebar