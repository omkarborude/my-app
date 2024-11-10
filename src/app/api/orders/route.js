import fs from 'fs/promises';
import path from 'path';
import { NextResponse } from 'next/server';

/**
 * Loads the orders data from the local JSON file (db/orders.json).
 * @returns {Promise<Order[]>} A promise that resolves to an array of orders.
 */
async function loadOrders(cursor = null, limit = 10) {
  try {
    const filePath = path.join(process.cwd(), 'db', 'orders.json');
    const data = await fs.readFile(filePath, 'utf-8');
    const orders = JSON.parse(data);

    // Apply cursor-based pagination
    if (cursor) {
      const startIndex = orders.findIndex(order => order.id === cursor);
      return orders.slice(startIndex + 1, startIndex + 1 + limit);
    }

    // Return the first "limit" orders if no cursor
    return orders.slice(0, limit);
  } catch (error) {
    console.error('Error loading orders data:', error);
    throw new Error('Failed to load orders data');
  }
}

export async function GET(request) {
  const url = new URL(request.url);
  const cursor = url.searchParams.get('cursor');
  try {
    const orders = await loadOrders(cursor);
    return new NextResponse(
      JSON.stringify({ success: true, data: orders }),
      { status: 200 }
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ success: false, error: 'Failed to fetch orders' }),
      { status: 500 }
    );
  }
}
