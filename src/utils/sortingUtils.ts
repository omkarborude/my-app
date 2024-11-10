const statusOrder = ["completed", "processing", "pending", "cancelled"];

export const sortOrders = (orders: any[], sortConfig: { key: any; direction: any; }) => {
  return [...orders].sort((a, b) => {
    if (sortConfig.key === "status") {
      const aIndex = statusOrder.indexOf(a.status);
      const bIndex = statusOrder.indexOf(b.status);
      return sortConfig.direction === "ascending" ? aIndex - bIndex : bIndex - aIndex;
    } else {
      if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === "ascending" ? -1 : 1;
      if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === "ascending" ? 1 : -1;
      return 0;
    }
  });
};
