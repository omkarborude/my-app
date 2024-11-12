export type Order = {
    id: string | number;
    customerName: string;
    orderAmount: number;
    status: string;
  };
  
  export type SortConfig = {
    key: string;
    direction: string;
  };
  
  export type OrdersTableProps = {
    sortedOrders: Order[];
    sortConfig: SortConfig;
    requestSort: (key: keyof Order) => void;
  };