import { useInfiniteQuery } from "@tanstack/react-query";
import { useRef, useState, useEffect } from "react";
import { sortOrders } from "@/utils/sortingUtils";

const fetchOrders = async ({ pageParam = null }) => {
  const res = await fetch(`/api/orders?cursor=${pageParam}`);
  return res.json();
};

export const useOrders = () => {
  const [sortConfig, setSortConfig] = useState({ key: "id", direction: "ascending" });
  const loadingRef = useRef<HTMLDivElement | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } = useInfiniteQuery({
    queryKey: ["orders"],
    queryFn: fetchOrders,
    getNextPageParam: (lastPage) => lastPage.data.length > 0 ? lastPage.data[lastPage.data.length - 1].id : undefined,
    initialPageParam: null,
  });

  const orders = data?.pages.flatMap((page) => page.data) ?? [];
  const sortedOrders = sortOrders(orders, sortConfig);

  const requestSort = (key: string) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) {
        fetchNextPage();
      }
    };
    observer.current = new IntersectionObserver(observerCallback, { rootMargin: "100px" });
    loadingRef.current && observer.current.observe(loadingRef.current);

    return () => {
      observer.current && loadingRef.current && observer.current.unobserve(loadingRef.current);
    };
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  return { sortedOrders, sortConfig, requestSort, loadingRef, isLoading, hasNextPage, isFetchingNextPage };
};
