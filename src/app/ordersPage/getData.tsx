import { ColumnSort, SortingState } from '@tanstack/react-table'
import ordersData from '../../../db/orders.json'
import { Order } from '@/types/order';

//simulates a backend api
export const fetchData = async (
  start: number,
  size: number,
  sorting: SortingState
) => {
  const dbData = ordersData as Array<Order>;
  if (sorting.length) {
    const sort = sorting[0] as ColumnSort
    const { id, desc } = sort as { id: string; desc: boolean }
    dbData.sort((a, b) => {
      if (desc) {
        return a[id as keyof Order] < b[id as keyof Order] ? 1 : -1
      }
      return a[id as keyof Order] > b[id as keyof Order] ? 1 : -1
    })
  }

  //simulate a backend api
  await new Promise(resolve => setTimeout(resolve, 100))

  return {
    data: dbData.slice(start, start + size),
    meta: {
      totalRowCount: dbData.length,
    },
  }
}
