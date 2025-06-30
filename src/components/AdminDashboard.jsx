<<<<<<< HEAD
// // // // src/components/AdminDashboard.jsx
// // // // ====================
// // // import React, { useState } from 'react'
// // // import Sidebar from './Sidebar'
// // // import Header from './Header'
// // // import StatsCards from './StatsCards'
// // // import UsersTable from './UsersTable'
// // // import PaymentsTable from './PaymentsTable'
// // // import ApplicationsTable from './ApplicationsTable'
// // // import { sidebarItems, statsData } from '../data/dashboardData'

// // // const AdminDashboard = () => {
// // //   const [activeTab, setActiveTab] = useState('dashboard')

// // //   const renderContent = () => {
// // //     switch(activeTab) {
// // //       case 'users':
// // //         return <UsersTable />
// // //       case 'payments':
// // //         return <PaymentsTable />
// // //       case 'applications':
// // //         return <ApplicationsTable />
// // //       default:
// // //         return (
// // //           <>
// // //             <StatsCards stats={statsData} />
// // //             <UsersTable />
// // //             <PaymentsTable />
// // //             <ApplicationsTable />
// // //           </>
// // //         )
// // //     }
// // //   }

// // //   return (
// // //     <div className="flex h-screen bg-gray-100">
// // //       <Sidebar 
// // //         items={sidebarItems}
// // //         activeTab={activeTab}
// // //         setActiveTab={setActiveTab}
// // //       />
// // //       <div className="flex-1 overflow-auto">
// // //         <div className="p-8">
// // //           <Header />
// // //           {renderContent()}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   )
// // // }

// // // export default AdminDashboard
// // import React, { useState } from 'react'
// // import Sidebar from './Sidebar'
// // import Header from './Header'
// // import StatsCards from './StatsCards'
// // import UsersTable from './UsersTable'
// // import PaymentsTable from './PaymentsTable'
// // import ApplicationsTable from './ApplicationsTable'
// // import { sidebarItems, statsData } from '../data/dashboardData'

// // const AdminDashboard = () => {
// //   const [activeTab, setActiveTab] = useState('dashboard')
// //   const [sidebarOpen, setSidebarOpen] = useState(false)

// //   const renderContent = () => {
// //     switch (activeTab) {
// //       case 'users':
// //         return <UsersTable />
// //       case 'payments':
// //         return <PaymentsTable />
// //       case 'applications':
// //         return <ApplicationsTable />
// //       default:
// //         return (
// //           <>
// //             <StatsCards stats={statsData} />
// //             <UsersTable />
// //             <PaymentsTable />
// //             <ApplicationsTable />
// //           </>
// //         )
// //     }
// //   }

// //   return (
// //     <div className="flex flex-col md:flex-row h-screen max-h-screen bg-gray-100 overflow-hidden">
// //       <Sidebar 
// //         items={sidebarItems}
// //         activeTab={activeTab}
// //         setActiveTab={setActiveTab}
// //         isOpen={sidebarOpen}
// //         setIsOpen={setSidebarOpen}
// //       />
// //       <div className="flex-1 overflow-auto">
// //         <div className="p-4 sm:p-6 md:p-8">
// //           <Header onMenuClick={() => setSidebarOpen(true)} />
// //           {renderContent()}
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// // export default AdminDashboard
// import React, { useState } from 'react'
// import Sidebar from './Sidebar'
// import Header from './Header'
// import StatsCards from './StatsCards'
// import UsersTable from './UsersTable'
// import PaymentsTable from './PaymentsTable'
// import ApplicationsTable from './ApplicationsTable'
// import { sidebarItems, statsData } from '../data/dashboardData'

// const AdminDashboard = () => {
//   const [activeTab, setActiveTab] = useState('dashboard')
//   const [sidebarOpen, setSidebarOpen] = useState(false)

//   const renderContent = () => {
//     switch (activeTab) {
//       case 'users':
//         return <UsersTable />
//       case 'payments':
//         return <PaymentsTable />
//       case 'applications':
//         return <ApplicationsTable />
//       default:
//         return (
//           <>
//             <StatsCards stats={statsData} />
//             <UsersTable />
//             <PaymentsTable />
//             <ApplicationsTable />
//           </>
//         )
//     }
//   }

//   return (
//     <div className="flex flex-col md:flex-row h-screen max-h-screen bg-gray-100 overflow-hidden">
//       <Sidebar 
//         items={sidebarItems}
//         activeTab={activeTab}
//         setActiveTab={setActiveTab}
//         isOpen={sidebarOpen}
//         setIsOpen={setSidebarOpen}
//       />

//       {/* 👇 Overlay for mobile */}
//       {sidebarOpen && (
//         <div
//           className="fixed inset-0 z-30 bg-black bg-opacity-40 transition-opacity md:hidden"
//           onClick={() => setSidebarOpen(false)}
//         />
//       )}

//       <div className="flex-1 overflow-auto">
//         <div className="p-4 sm:p-6 md:p-8">
//           <Header onMenuClick={() => setSidebarOpen(true)} />
//           {renderContent()}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default AdminDashboard
// import React, { useState } from 'react'
// import Sidebar from './Sidebar'
// import Header from './Header'
// import StatsCards from './StatsCards'
// import UsersTable from './UsersTable'
// import PaymentsTable from './PaymentsTable'
// import ApplicationsTable from './ApplicationsTable'
// import { sidebarItems, statsData } from '../data/dashboardData'

// const AdminDashboard = () => {
//   const [activeTab, setActiveTab] = useState('dashboard')
//   const [sidebarOpen, setSidebarOpen] = useState(false)

//   const renderContent = () => {
//     switch (activeTab) {
//       case 'users':
//         return <UsersTable />
//       case 'payments':
//         return <PaymentsTable />
//       case 'applications':
//         return <ApplicationsTable />
//       default:
//         return (
//           <>
//             <StatsCards stats={statsData} />
//             <UsersTable />
//             <PaymentsTable />
//             <ApplicationsTable />
//           </>
//         )
//     }
//   }

//   return (
//     <div className="h-screen flex flex-col md:flex-row overflow-hidden relative">
//       {/* Sidebar */}
//       <div className={`fixed md:static z-40 transition-transform transform duration-300 ease-in-out 
//         ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
//         md:translate-x-0 w-64 bg-white border-r`}>
//         <Sidebar
//           items={sidebarItems}
//           activeTab={activeTab}
//           setActiveTab={setActiveTab}
//           isOpen={sidebarOpen}
//           setIsOpen={setSidebarOpen}
//         />
//       </div>

//       {/* Overlay on mobile */}
//       {sidebarOpen && (
//         <div
//           className="fixed inset-0 z-30 bg-black bg-opacity-40 md:hidden"
//           onClick={() => setSidebarOpen(false)}
//         />
//       )}

//       {/* Main content */}
//       <div className="flex-1 overflow-y-auto z-10">
//         <div className="p-4 sm:p-6 md:p-8">
//           <Header onMenuClick={() => setSidebarOpen(true)} />
//           {renderContent()}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default AdminDashboard
import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import StatsCards from './StatsCards'
import UsersTable from './UsersTable'
import PaymentsTable from './PaymentsTable'
import ApplicationsTable from './ApplicationsTable'
import { sidebarItems, statsData } from '../data/dashboardData'

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [sidebarOpen, setSidebarOpen] = useState(false)
=======
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import StatsCards from './StatsCards';
import UsersTable from './UsersTable';
import PaymentsTable from './PaymentsTable';
import ApplicationsTable from './ApplicationsTable';
import { sidebarItems, statsData } from '../data/dashboardData';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // 👈 New state

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen); // 👈 Toggle handler
>>>>>>> 9432315becf677a42b7d2a4437702ec822022735

  const renderContent = () => {
    switch (activeTab) {
      case 'users':
        return <UsersTable />;
      case 'payments':
        return <PaymentsTable />;
      case 'applications':
        return <ApplicationsTable />;
      default:
        return (
          <>
            <StatsCards stats={statsData} />
            <UsersTable />
            <PaymentsTable />
            <ApplicationsTable />
          </>
        );
    }
  };

  return (
<<<<<<< HEAD
    <div className="h-screen flex flex-col md:flex-row overflow-hidden relative bg-gray-100">
      
      {/* Sidebar */}
      <div className={`fixed md:static z-40 transition-transform transform duration-300 ease-in-out 
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0 w-64 bg-white text-black border-r h-full`}>
        <Sidebar
          items={sidebarItems}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          isOpen={sidebarOpen}
          setIsOpen={setSidebarOpen}
        />
      </div>

      {/* Overlay on mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-transparent backdrop-blur-sm md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <div className="flex-1 overflow-y-auto z-10">
        <div className="p-4 sm:p-6 md:p-8">
          <Header onMenuClick={() => setSidebarOpen(true)} />
=======
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Sidebar with responsive props */}
      <Sidebar
        items={sidebarItems}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isOpen={isSidebarOpen}           // 👈 passed to Sidebar
        toggleSidebar={toggleSidebar}    // 👈 passed to Sidebar
      />

      <div className="flex-1 overflow-auto">
        {/* Mobile-only toggle button */}
        <div className="p-4 bg-white shadow-md lg:hidden">
          <button onClick={toggleSidebar} className="text-purple-800 text-2xl">
            ☰
          </button>
        </div>

        <div className="p-8">
          <Header />
>>>>>>> 9432315becf677a42b7d2a4437702ec822022735
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default AdminDashboard
=======
export default AdminDashboard;
>>>>>>> 9432315becf677a42b7d2a4437702ec822022735
