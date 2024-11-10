import { useInfiniteQuery, UseInfiniteQueryResult } from 'react-query';
import { OrdersResponse } from '../types/order';

/**
 * Custom hook to fetch orders data with infinite scroll support
 * @param limit - Number of records per page
 * @param sort - Field to sort by (default: "createdAt")
 * @param sortDirection - Sorting direction ("asc" or "desc", default: "asc")
 */
export function useOrdersQuery(
  limit: number = 50,
  sort: string = 'createdAt',
  sortDirection: 'asc' | 'desc' = 'asc'
): UseInfiniteQueryResult<OrdersResponse, unknown> {
  return useInfiniteQuery<OrdersResponse>(
    ['orders', { limit, sort, sortDirection }],
    async ({ pageParam = null }) => {
      const response = await fetch(
        `/api/orders?cursor=${pageParam || ''}&limit=${limit}&sort=${sort}&sortDirection=${sortDirection}`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch orders data');
      }

      return response.json();
    },
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor,
      cacheTime: 1000 * 60 * 5, // 5 minutes
      staleTime: 1000 * 60 * 1, // 1 minute
    }
  );
}
