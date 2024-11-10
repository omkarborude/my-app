
# Orders Table App

A React-based application to manage orders with sorting, virtual scrolling, and efficient data handling.

---

## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Hooks Usage](#hooks-usage)
- [Performance Optimization](#performance-optimization)
- [Technologies Used](#technologies-used)

---

## Features

- **Order Sorting**: Sort orders by `id`, `customerName`, `orderAmount`, and `status`.
- **TypeScript Support**: Ensures type safety and improves development experience.
- **Virtual Scrolling**: Efficient handling of large datasets with smooth scrolling in Table - 2.
- **Efficient Data Fetching**

---

## Getting Started

To run the project locally, follow these steps:

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Data generation script**:
   Generate mock data for testing by running:
   ```bash
   npm run create-data
   ``  

3. **Run the development server**:
   ```bash
   npm run dev
   ```

`

---

## Project Structure

- **Components**: Core UI components for displaying and interacting with order data.
- **Hooks**: Custom hooks for data fetching, sorting, and performance optimization.
- **Scripts**: Utility scripts for data creation and other backend functions.

---

## Hooks Usage

The app uses the following hooks for efficient data management and UI interactivity:

- **`useEffect`**: Manages side effects, such as fetching data when the component mounts or when dependencies change.
- **`useState`**: Handles the local state for sorting configurations, such as the selected sort key and direction.
- **`useMemo`**: Memoizes derived data like sorted orders to prevent unnecessary re-renders, improving performance.
- **`useCallback`**: Ensures that functions like `requestSort` are not redefined on each render, optimizing component re-renders.
- **`React Query (useQuery)`**: Fetches order data and manages caching, refetching, and updating, ensuring the UI reflects real-time data changes.

---

## Performance Optimization

Several strategies are used to enhance the performance of the Orders Management App:

1. **Memoization with `useMemo`**:
   - The sorted list of orders is memoized to avoid recalculating the sort operation on each render.

2. **Callback Memoization with `useCallback`**:
   - Functions like `requestSort` are wrapped in `useCallback` to ensure they are not recreated on each render, reducing re-renders.

3. **Efficient Data Fetching with React Query**:
   - `React Query` caches data and reduces the need for repeated network requests, improving speed and responsiveness.

4. **Virtual Scrolling**:
   - Handles large lists efficiently by rendering only the visible portion of data, reducing DOM node counts and enhancing scrolling performance.

---

## Technologies Used

- **React** - UI Library for building user interfaces
- **TypeScript** - Type-safe JavaScript for better development experience
- **React Query** - Data fetching and state management library
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Virtual Scrolling Library** - (e.g., `react-window` or `react-virtualized`) for efficient scrolling with large datasets
```
