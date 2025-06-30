export const truncateText = (text, maxLength = 50) => {
  return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
};

export const generateId = () => {
  return Math.random().toString(36).substr(2, 9);
};
