// import { Order } from "@/types/common";
import { Order } from "@/types/order";

const statusOrder = ["completed", "processing", "pending", "cancelled"];


export const sortOrders = (orders: Order[], sortConfig: { key: any; direction: any; }) => {
  return [...orders].sort((a, b) => {
    if (sortConfig.key === "status") {
      const aIndex = statusOrder.indexOf(a.status);
      const bIndex = statusOrder.indexOf(b.status);
      return sortConfig.direction === "ascending" ? aIndex - bIndex : bIndex - aIndex;
    } else {
      if ((a as any)[sortConfig.key] < (b as any)[sortConfig.key]) return sortConfig.direction === "ascending" ? -1 : 1;
      if ((a as any)[sortConfig.key] > (b as any)[sortConfig.key]) return sortConfig.direction === "ascending" ? 1 : -1;
      return 0;
    }
  });
};
