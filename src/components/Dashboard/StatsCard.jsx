import { Users, DollarSign, Clock } from "lucide-react";

export function StatsCard({ title, value, icon: Icon, variant }) {
  const colorMap = {
    blue: "bg-blue-100 text-blue-800",
    green: "bg-green-100 text-green-800",
    orange: "bg-orange-100 text-orange-800",
  };

  return (
    <div className={`rounded-lg p-4 shadow-sm bg-white border ${colorMap[variant]}`}>
      <div className="flex items-center space-x-4">
        <Icon className="h-6 w-6" />
        <div>
          <p className="text-sm font-medium">{title}</p>
          <p className="text-xl font-semibold">{value}</p>
        </div>
      </div>
    </div>
  );
}
