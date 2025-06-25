import { PaymentsTable } from "../components/tables/PaymentsTable";
import { mockPayments } from "../lib/mock-data";

export default function Payments() {
  return (
    <div className="flex-1 overflow-hidden">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Payments</h1>
        </div>
      </header>
      <main className="p-6 overflow-y-auto">
        <PaymentsTable payments={mockPayments} />
      </main>
    </div>
  );
}