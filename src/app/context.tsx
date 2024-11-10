"use client";

import { createContext, ReactNode, useContext } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const QueryClientContext = createContext<QueryClient | null>(null);

export const useQueryClientContext = () => {
  const context = useContext(QueryClientContext);
  if (!context) {
    throw new Error("useQueryClientContext must be used within a QueryClientProvider");
  }
  return context;
};

export const QueryClientWrapper = ({ children }: { children: ReactNode }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <QueryClientContext.Provider value={queryClient}>
        {children}
      </QueryClientContext.Provider>
    </QueryClientProvider>
  );
};
