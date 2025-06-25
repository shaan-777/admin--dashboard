import { UsersTable } from "../components/tables/UsersTable";
import { mockUsers } from "../lib/mock-data";

export default function Users() {
  return (
    <div className="flex-1 overflow-hidden">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Users Management</h1>
        </div>
      </header>
      <main className="p-6 overflow-y-auto">
        <UsersTable users={mockUsers} />
      </main>
    </div>
  );
}