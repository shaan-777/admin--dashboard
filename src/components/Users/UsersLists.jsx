export function UsersList({ users }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-x-auto">
      <table className="min-w-full text-sm text-gray-700">
        <thead className="bg-gray-100 text-left font-semibold">
          <tr>
            <th className="p-4">Name</th>
            <th className="p-4">Email</th>
            <th className="p-4">Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, idx) => (
            <tr key={idx} className="border-t">
              <td className="p-4">{user.name}</td>
              <td className="p-4">{user.email}</td>
              <td className="p-4">{user.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
