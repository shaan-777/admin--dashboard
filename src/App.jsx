import Header from "./components/Layout/Header";
import { StatsCard } from "./components/Dashboard/StatsCard";
import { UsersList } from "./components/Users/UsersList";
import { PaymentsList } from "./components/Payments/PaymentsList";
import { mockMetrics, mockUsers, mockPayments } from "./data/mockData";
import { Users, DollarSign, Clock } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="p-4 flex-1 space-y-8 overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatsCard title="Total Users" value={mockMetrics.totalUsers} icon={Users} variant="blue" />
          <StatsCard title="Total Payments" value={mockMetrics.totalPayments} icon={DollarSign} variant="green" />
          <StatsCard title="Pending Applications" value={mockMetrics.pendingApplications} icon={Clock} variant="orange" />
        </div>
        <UsersList users={mockUsers} />
        <PaymentsList payments={mockPayments} />
      </main>
    </div>
  );
}

export default App;
