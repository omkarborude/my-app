const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

// Function to generate random date within the last year
function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

// Function to generate random order items
function generateOrderItems() {
    const itemCount = Math.floor(Math.random() * 5) + 1;
    const items = [];

    for (let i = 0; i < itemCount; i++) {
        items.push({
            name: `Item ${i + 1}`,
            quantity: Math.floor(Math.random() * 10) + 1,
            price: parseFloat((Math.random() * 100).toFixed(2)),
        });
    }
    return items;
}

// Seed function to create 10,000 order records
async function seedOrders() {
    const orders = [];
    const start = new Date();
    start.setFullYear(start.getFullYear() - 1);
    const end = new Date();

    for (let i = 0; i < 10000; i++) {
        const items = generateOrderItems();
        const orderAmount = items.reduce((acc, item) => acc + item.quantity * item.price, 0);

        orders.push({
            id: uuidv4(),
            customerName: `Customer ${i + 1}`,
            orderAmount: parseFloat(orderAmount.toFixed(2)),
            status: ['pending', 'processing', 'completed', 'cancelled'][Math.floor(Math.random() * 4)],
            items,
            createdAt: randomDate(start, end).toISOString(),
        });
    }

    // Write the data to a JSON file
    const filePath = path.join(process.cwd(), 'db', 'orders.json');
    await fs.promises.writeFile(filePath, JSON.stringify(orders, null, 2), 'utf-8');
    console.log("Database seeded with 10,000 orders.");
}

seedOrders();
