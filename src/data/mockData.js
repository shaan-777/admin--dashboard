export const users = [
  {
    id: 1,
    name: 'Aman Singh',
    email: 'aman.singh@founderoo.com',
    phone: '+91 98765 43210',
    applicationStatus: 'Approved',
    paymentStatus: 'Paid',
    joinDate: '2024-06-10',
    lastLogin: '2024-06-25'
  },
  // ... more users
];

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
  // ... more payments
];

export const applications = [
  {
    id: 1,
    user: 'Aman Singh',
    userId: 1,
    applicationId: 'FND-001',
    status: 'Approved',
    date: '2024-06-15',
    businessName: 'TechStart Solutions',
    category: 'Technology',
    fundingAmount: '₹5,00,000',
    description: 'AI-based startup solutions'
  },
  // ... more applications
];
