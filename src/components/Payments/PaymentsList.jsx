export function PaymentsList({ payments }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-x-auto">
      <table className="min-w-full text-sm text-gray-700">
        <thead className="bg-gray-100 text-left font-semibold">
          <tr>
            <th className="p-4">Transaction ID</th>
            <th className="p-4">Amount</th>
            <th className="p-4">Date</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment, idx) => (
            <tr key={idx} className="border-t">
              <td className="p-4">{payment.id}</td>
              <td className="p-4">{payment.amount}</td>
              <td className="p-4">{payment.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
