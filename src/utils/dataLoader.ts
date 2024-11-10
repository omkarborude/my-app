import fs from 'fs/promises';
import path from 'path';
import { Order } from '../types/order';

/**
 * Loads the orders data from the local JSON file (db/orders.json).
 * @returns {Promise<Order[]>} A promise that resolves to an array of orders.
 */
export default async function loadOrders(): Promise<Order[]> {
  try {
    const filePath = path.join(process.cwd(), 'db', 'orders.json');
    const data = await fs.readFile(filePath, 'utf-8');
    const orders: Order[] = JSON.parse(data);
    return orders;
  } catch (error) {
    console.error('Error loading orders data:', error);
    throw new Error('Failed to load orders data');
  }
}
