"use client";
import { useOrders } from "@/hooks/useOrders";
import OrdersTable from "./components/OrdersTable";
import LoadMoreIndicator from "./components/LoadMoreIndicator";
export default function Orders() {
  const { sortedOrders, sortConfig, requestSort, loadingRef, isLoading, hasNextPage, isFetchingNextPage } = useOrders();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const clickHandler = () => {
    window.location.href = "/ordersPage";
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">
      <strong>Scrolling table with cursor-based pagination</strong>
          <br/>
          <strong>Example :- 1</strong>
          <br/>        
        </h1>
      <div>
      <button className=" mb-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={clickHandler}>
        Go To Table - 2
        </button>  
      </div>  
      <div className="overflow-auto h-full">
        <OrdersTable sortedOrders={sortedOrders} sortConfig={sortConfig} requestSort={requestSort} />
        <LoadMoreIndicator ref={loadingRef} isFetchingNextPage={isFetchingNextPage} hasNextPage={hasNextPage} />
      </div>
    </div>
  );
}
