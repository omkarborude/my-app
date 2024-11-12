// src/types/order.ts

// src/types/order.ts
export interface Order {
  id: string | number; // Update the type of id to number
  customerName: string;
  orderAmount: number;
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
  items: Array<{
    name: string;
    quantity: number;
    price: number;
  }>;
  createdAt: string;
}

  export interface OrdersResponse {
    data: Order[];
    nextCursor: string | null; // Cursor for pagination; null if there are no more pages
    totalCount: number;        // Total count of orders in the database
  }
  