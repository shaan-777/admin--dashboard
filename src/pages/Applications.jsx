// import { ApplicationsTable } from "../components/tables/ApplicationsTable";
// import { mockApplications } from "../lib/mock-data";

// export default function Applications() {
//   return (
//     <div className="flex-1 overflow-hidden">
//       <header className="bg-white shadow-sm border-b border-gray-200">
//         <div className="px-6 py-4">
//           <h1 className="text-2xl font-bold text-gray-900">Applications</h1>
//         </div>
//       </header>
//       <main className="p-6 overflow-y-auto">
//         <ApplicationsTable applications={mockApplications} />
//       </main>
//     </div>
//   );
// }
<<<<<<< HEAD
import { ApplicationsTable } from "../components/tables/ApplicationsTable";
import { mockApplications } from "../lib/mock-data";
=======
import { ApplicationsTable } from "../components/tables/ApplicationsTable"
import { mockApplications } from "../lib/mock-data"
>>>>>>> 9432315becf677a42b7d2a4437702ec822022735

export default function Applications() {
  return (
    <div className="flex-1 overflow-hidden">
<<<<<<< HEAD
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="px-4 sm:px-6 py-4">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Applications</h1>
=======
      {/* Header Section */}
      <header className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Applications
          </h1>
>>>>>>> 9432315becf677a42b7d2a4437702ec822022735
        </div>
      </header>

      {/* Main Content */}
<<<<<<< HEAD
      <main className="p-4 sm:p-6 overflow-y-auto">
        <ApplicationsTable applications={mockApplications} />
      </main>
    </div>
  );
=======
      <main className="p-6 overflow-y-auto">
        <ApplicationsTable applications={mockApplications} />
      </main>
    </div>
  )
>>>>>>> 9432315becf677a42b7d2a4437702ec822022735
}
