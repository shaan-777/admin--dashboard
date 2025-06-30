// import React from 'react'
<<<<<<< HEAD
=======

// const Header = () => {
//   return (
//     <h2 className="text-3xl font-bold text-purple-800 mb-8">Admin Dashboard</h2>
//   )
// }

// export default Header



import React from 'react'
>>>>>>> 9432315becf677a42b7d2a4437702ec822022735

// const Header = () => {
//   return (
//     <h2 className="text-3xl font-bold text-purple-800 mb-8">Admin Dashboard</h2>
//   )
// }

// export default Header
import React from 'react'
import { Menu } from 'lucide-react'

const Header = ({ onMenuClick }) => {
  return (
<<<<<<< HEAD
    <div className="flex items-center justify-between mb-6 sm:mb-8">
      {/* Hamburger Icon - Visible only on small screens */}
      <button
        className="md:hidden text-purple-800"
        onClick={onMenuClick}
        aria-label="Open sidebar"
      >
        <Menu className="w-7 h-7" />
      </button>

      {/* Heading Text */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-800">
        Admin Dashboard
      </h2>

      {/* Right side spacer for alignment */}
      <div className="w-7 h-7 md:hidden" />
    </div>
=======
    <h2 className="text-2xl sm:text-3xl font-bold text-purple-800 mb-6 sm:mb-8">
      Admin Dashboard
    </h2>
>>>>>>> 9432315becf677a42b7d2a4437702ec822022735
  )
}

export default Header
