// export const mockMetrics = {
//   totalUsers: "1,204",
//   totalPayments: "$32,040",
//   pendingApplications: "87",
// };

// export const mockUsers = [
//   { name: "John Doe", email: "john@example.com", status: "Active" },
//   { name: "Jane Smith", email: "jane@example.com", status: "Pending" },
// ];

// export const mockPayments = [
//   { id: "TXN1234", amount: "$200", date: "2025-06-01" },
//   { id: "TXN1235", amount: "$450", date: "2025-06-02" },
// ];
export const stats = [
  { title: 'Total Users', value: '3', color: 'bg-blue-500' },
  { title: 'Total Payments', value: '2', color: 'bg-green-500' },
  { title: 'Pending Applications', value: '1', color: 'bg-yellow-500' },
];

export const sidebarItems = [
  { icon: 'Home', label: 'Dashboard', key: 'dashboard' },
  { icon: 'Users', label: 'Users', key: 'users' },
  { icon: 'CreditCard', label: 'Payments', key: 'payments' },
  { icon: 'FileText', label: 'Applications', key: 'applications' },
];
