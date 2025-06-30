export const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-IN');
};

export const formatCurrency = (amount) => {
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
