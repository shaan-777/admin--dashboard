// import { UsersTable } from "../components/tables/UsersTable";
// import { mockUsers } from "../lib/mock-data";

// export default function Users() {
//   return (
//     <div className="flex-1 overflow-hidden">
//       <header className="bg-white shadow-sm border-b border-gray-200">
//         <div className="px-6 py-4">
//           <h1 className="text-2xl font-bold text-gray-900">Users Management</h1>
//         </div>
//       </header>
//       <main className="p-6 overflow-y-auto">
//         <UsersTable users={mockUsers} />
//       </main>
//     </div>
//   );
// }
import { UsersTable } from "../components/tables/UsersTable";
import { mockUsers } from "../lib/mock-data";

export default function Users() {
  return (
<<<<<<< HEAD
    <div className="flex-1 flex flex-col overflow-hidden">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="px-4 py-4 sm:px-6">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
=======
    <div className="flex-1 flex flex-col overflow-hidden bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="px-4 sm:px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
>>>>>>> 9432315becf677a42b7d2a4437702ec822022735
            Users Management
          </h1>
        </div>
      </header>
<<<<<<< HEAD
      <main className="flex-1 overflow-y-auto p-4 sm:p-6">
=======
      <main className="flex-1 p-4 sm:p-6 overflow-y-auto">
>>>>>>> 9432315becf677a42b7d2a4437702ec822022735
        <UsersTable users={mockUsers} />
      </main>
    </div>
  );
}
