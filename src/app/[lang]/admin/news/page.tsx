"use client";
import React from "react";
import ProtectedRoute from "@/components/admin/protected-route";
import { useUserStore } from "@/store/user.store";
import AdminNews from "@/components/admin/news";
import AdminNav from "@/components/admin/nav";

export default function Page() {
  const isLoggedIn = useUserStore((state) => state.getIsLoggedIn());
  return (
    <ProtectedRoute isAuthenticated={isLoggedIn}>
      <AdminNav />
      <AdminNews />
    </ProtectedRoute>
  );
}
