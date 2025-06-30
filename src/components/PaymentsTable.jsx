// import React from 'react'
// import Table from './common/Table'
// import { paymentColumns, paymentData } from '../data/paymentsData'

// const PaymentsTable = () => {
//   return (
//     <div className="mb-12">
//       <h3 className="text-2xl font-bold text-purple-800 mb-6">Payments</h3>
//       <Table 
//         columns={paymentColumns}
//         data={paymentData}
//         emptyMessage="No payments found"
//       />
//     </div>
//   )
// }

// export default PaymentsTable
import React from 'react'
import Table from './common/Table'
import { paymentColumns, paymentData } from '../data/paymentsData'

const PaymentsTable = () => {
  return (
    <div className="mb-8 sm:mb-12">
      <h3 className="text-xl sm:text-2xl font-bold text-purple-800 mb-4 sm:mb-6">
        Payments
      </h3>
      
      <div className="overflow-x-auto w-full">
        <Table 
          columns={paymentColumns}
          data={paymentData}
          emptyMessage="No payments found"
        />
      </div>
    </div>
  )
}

export default PaymentsTable
