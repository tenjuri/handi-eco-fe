"use client";
import React from "react";
import News from "@/components/news";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export default function NewsPage() {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: false,
            staleTime: 1000 * 60 * 5, // 5 minutes
          },
        },
      })
  );
  return (
    <QueryClientProvider client={queryClient}>
      <News />
    </QueryClientProvider>
  );
}
