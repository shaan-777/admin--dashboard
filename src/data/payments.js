
// // export const paymentColumns = [
// //   'USER', 
// //   'AMOUNT', 
// //   'DATE', 
// //   'STATUS', 
// //   'RECEIPT'
// // ];

// // export const paymentData = [
// //   {
// //     user: 'Aman Singh',
// //     amount: '₹5,000',
// //     date: '2024-06-20',
// //     status: 'Completed',
// //     receipt: 'Download'
// //   },
// //   {
// //     user: 'Shashank Verma',
// //     amount: '₹7,500',
// //     date: '2024-06-22',
// //     status: 'Completed',
// //     receipt: 'Download'
// //   },
// //   {
// //     user: 'Mridul Awasthi',
// //     amount: '₹3,000',
// //     date: '2024-06-25',
// //     status: 'Processing',
// //     receipt: 'Pending'
// //   }
// // ];
// // Columns to display in Payments Table
// export const paymentColumns = [
//   'USER', 
//   'AMOUNT', 
//   'DATE', 
//   'STATUS', 
//   'RECEIPT'
// ]

// // Data for each payment entry
// export const paymentData = [
//   {
//     user: 'Aman Singh',
//     amount: '₹5,000',
//     date: '2024-06-20',
//     status: 'Completed',
//     receipt: 'Download'
//   },
//   {
//     user: 'Shashank Verma',
//     amount: '₹7,500',
//     date: '2024-06-22',
//     status: 'Completed',
//     receipt: 'Download'
//   },
//   {
//     user: 'Mridul Awasthi',
//     amount: '₹3,000',
//     date: '2024-06-25',
//     status: 'Processing',
//     receipt: 'Pending'
//   }
// ]
export const payments = [
  {
    id: 1,
    user: 'Aman Singh',
    userId: 1,
    amount: '₹5,000',
    date: '2024-06-20',
    status: 'Completed',
    paymentMethod: 'UPI',
    transactionId: 'TXN001234567',
    receipt: 'Download'
  },
  {
    id: 2,
    user: 'Shashank Verma',
    userId: 2,
    amount: '₹7,500',
    date: '2024-06-22',
    status: 'Completed',
    paymentMethod: 'Bank Transfer',
    transactionId: 'TXN001234568',
    receipt: 'Download'
  },
  {
    id: 3,
    user: 'Mridul Awasthi',
    userId: 3,
    amount: '₹3,000',
    date: '2024-06-25',
    status: 'Processing',
    paymentMethod: 'Credit Card',
    transactionId: 'TXN001234569',
    receipt: 'Pending'
  }
];
