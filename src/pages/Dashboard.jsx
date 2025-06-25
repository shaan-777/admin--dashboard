import { Users, DollarSign, Clock } from "lucide-react";
import { MetricCard } from "../components/dashboard/MetricCard";
import { UsersTable } from "../components/tables/UsersTable";
import { PaymentsTable } from "../components/tables/PaymentsTable";
import { ApplicationsTable } from "../components/tables/ApplicationsTable";
import { mockMetrics, mockUsers, mockPayments, mockApplications } from "../lib/mock-data";

export default function Dashboard() {
  return (
    <div className="flex-1 overflow-hidden">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
        </div>
      </header>
      <main className="p-6 overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <MetricCard title="Total Users" value={mockMetrics.totalUsers} icon={Users} variant="blue" />
          <MetricCard title="Total Payments" value={mockMetrics.totalPayments} icon={DollarSign} variant="green" />
          <MetricCard title="Pending Applications" value={mockMetrics.pendingApplications} icon={Clock} variant="orange" />
        </div>
        <div className="space-y-8">
          <UsersTable users={mockUsers} />
          <PaymentsTable payments={mockPayments} />
          <ApplicationsTable applications={mockApplications} />
        </div>
      </main>
    </div>
  );
}