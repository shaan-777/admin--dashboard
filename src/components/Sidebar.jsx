// import React from 'react'

// const Sidebar = ({ items, activeTab, setActiveTab }) => {
//   return (
//     <div className="w-72 bg-purple-800 text-white">
//       <div className="p-6">
//         <h1 className="text-xl font-semibold">Founderoo Admin</h1>
//       </div>
//       <nav className="mt-8">
//         {items.map((item) => (
//           <button
//             key={item.id}
//             onClick={() => setActiveTab(item.id)}
//             className={`w-full text-left px-6 py-3 text-lg hover:bg-purple-700 transition-colors ${
//               activeTab === item.id ? 'bg-purple-700' : ''
//             }`}
//           >
//             {item.label}
//           </button>
//         ))}
//       </nav>
//     </div>
//   )
// }

// export default Sidebar
import React from 'react'
import { X } from 'lucide-react'

const Sidebar = ({ items, activeTab, setActiveTab, isOpen, setIsOpen }) => {
  return (
    <>
      {/* Overlay for mobile */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-40 z-40 transition-opacity md:hidden ${
          isOpen ? 'block' : 'hidden'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar itself */}
      <div
        className={`fixed z-50 top-0 left-0 h-full bg-purple-800 text-white w-64 transform transition-transform duration-300 md:relative md:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Mobile close button */}
        <div className="flex justify-between items-center p-6 md:hidden">
          <h1 className="text-xl font-semibold">Founderoo Admin</h1>
          <button onClick={() => setIsOpen(false)}>
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Desktop heading */}
        <div className="p-6 hidden md:block">
          <h1 className="text-xl font-semibold">Founderoo Admin</h1>
        </div>

        <nav className="mt-4 md:mt-8">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id)
                setIsOpen(false) // Close sidebar on mobile after selecting
              }}
              className={`w-full text-left px-6 py-3 text-base md:text-lg hover:bg-purple-700 transition-colors ${
                activeTab === item.id ? 'bg-purple-700' : ''
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </>
  )
}

export default Sidebar;
