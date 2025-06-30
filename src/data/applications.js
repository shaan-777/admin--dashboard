
// // export const applicationColumns = [
// //   'USER', 
// //   'APPLICATION ID', 
// //   'STATUS', 
// //   'DATE', 
// //   'ACTIONS'
// // ];

// // export const applicationData = [
// //   {
// //     user: 'Aman Singh',
// //     applicationId: 'FND-001',
// //     status: 'Approved',
// //     date: '2024-06-15',
// //     actions: 'View | Edit'
// //   },
// //   {
// //     user: 'Shashank Verma',
// //     applicationId: 'FND-002',
// //     status: 'Under Review',
// //     date: '2024-06-18',
// //     actions: 'View | Approve | Reject'
// //   },
// //   {
// //     user: 'Mridul Awasthi',
// //     applicationId: 'FND-003',
// //     status: 'Pending',


// import React from 'react'
// import { applicationColumns, applicationData } from '../data/applicationsData'

// const ApplicationsTable = () => {
//   return (
//     <div className="mb-12 overflow-x-auto">
//       <h3 className="text-2xl font-bold text-purple-800 mb-6">Applications</h3>
//       <table className="min-w-[700px] sm:min-w-full w-full bg-white shadow rounded-lg overflow-hidden">
//         <thead className="bg-purple-800 text-white">
//           <tr>
//             {applicationColumns.map((col, idx) => (
//               <th key={idx} className="text-left px-6 py-3 text-sm font-semibold uppercase">
//                 {col}
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {applicationData.length === 0 ? (
//             <tr>
//               <td colSpan={applicationColumns.length} className="text-center px-6 py-4">
//                 No applications found
//               </td>
//             </tr>
//           ) : (
//             applicationData.map((item, index) => (
//               <tr key={index} className="border-b hover:bg-gray-50">
//                 <td className="px-6 py-4 whitespace-nowrap">{item.user}</td>
//                 <td className="px-6 py-4 whitespace-nowrap">{item.applicationId}</td>
//                 <td className="px-6 py-4 whitespace-nowrap">{item.status}</td>
//                 <td className="px-6 py-4 whitespace-nowrap">{item.date}</td>
//                 <td className="px-6 py-4 whitespace-nowrap text-blue-600">{item.actions}</td>
//               </tr>
//             ))
//           )}
//         </tbody>
//       </table>
//     </div>
//   )
// }

// export default ApplicationsTable

// //     date: '2024-06-23',
// //     actions: 'View | Approve | Reject'
// //   }
// // ];
export const applications = [
  {
    id: 1,
    user: 'Aman Singh',
    userId: 1,
    applicationId: 'FND-001',
    status: 'Approved',
    date: '2024-06-15',
    businessName: 'TechStart Solutions',
    category: 'Technology',
    fundingAmount: '₹5,00,000',
    description: 'AI-based startup solutions'
  },
  {
    id: 2,
    user: 'Shashank Verma',
    userId: 2,
    applicationId: 'FND-002',
    status: 'Under Review',
    date: '2024-06-18',
    businessName: 'Green Energy Co',
    category: 'Clean Energy',
    fundingAmount: '₹7,50,000',
    description: 'Renewable energy solutions'
  },
  {
    id: 3,
    user: 'Mridul Awasthi',
    userId: 3,
    applicationId: 'FND-003',
    status: 'Pending',
    date: '2024-06-20',
    businessName: 'EduTech Platform',
    category: 'Education',
    fundingAmount: '₹3,00,000',
    description: 'Online learning platform'
  }
];
