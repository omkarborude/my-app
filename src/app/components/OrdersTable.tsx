import React from "react";
import OrderRow from "./OrderRow";
import { OrdersTableProps, Order } from "@/types/common";



const OrdersTable: React.FC<OrdersTableProps> = ({
  sortedOrders,
  sortConfig,
  requestSort,
}) => {
  return (
    <table className="table-auto w-full text-left border-spacing-1">
      <thead className="sticky top-0 bg-gray-200 text-gray-700">
        <tr>
          {["id", "customerName", "orderAmount", "status"].map((key) => (
            <th
              key={key}
              onClick={() => requestSort(key as keyof Order)}
              className="sticky top-0 px-6 py-3 cursor-pointer bg-gray-200 z-10"
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}{" "}
              {sortConfig.key === key
                ? sortConfig.direction === "ascending"
                  ? "↑"
                  : "↓"
                : ""}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedOrders.map((order) => (
          <OrderRow key={order.id} order={order} />
        ))}
      </tbody>
    </table>
  );
};

export default OrdersTable;
