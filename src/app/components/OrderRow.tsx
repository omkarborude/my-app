import { Order } from "@/types/common";

const OrderRow = ({ order }: { order: Order }) => (
    <tr className="hover:bg-gray-100 cursor-pointer bg-white border-b">
      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{order.id}</td>
      <td className="px-6 py-4">{order.customerName}</td>
      <td className="px-6 py-4">{order.orderAmount}</td>
      <td className="px-6 py-4">{order.status}</td>
    </tr>
  );
  
  export default OrderRow;
  
  