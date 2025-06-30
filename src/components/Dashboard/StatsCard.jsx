// import { Users, DollarSign, Clock } from "lucide-react";

// export function StatsCard({ title, value, icon: Icon, variant }) {
//   const colorMap = {
//     blue: "bg-blue-100 text-blue-800",
//     green: "bg-green-100 text-green-800",
//     orange: "bg-orange-100 text-orange-800",
//   };

//   return (
//     <div className={`rounded-lg p-4 shadow-sm bg-white border ${colorMap[variant]}`}>
//       <div className="flex items-center space-x-4">
//         <Icon className="h-6 w-6" />
//         <div>
//           <p className="text-sm font-medium">{title}</p>
//           <p className="text-xl font-semibold">{value}</p>
//         </div>
//       </div>
//     </div>
//   );
// }
import React from 'react';

const StatsCard = ({ title, value, color }) => {
  return (
    <div className={`${color} rounded-lg shadow-sm p-6 text-white`}>
      <h3 className="text-sm sm:text-base font-medium mb-2">{title}</h3>
      <p className="text-3xl sm:text-4xl font-bold">{value}</p>
    </div>
  );
};

export default StatsCard;
