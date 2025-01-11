"use client";
import React from "react";
import ProtectedRoute from "@/components/admin/protected-route";
import { useUserStore } from "@/store/user.store";
import Users from "@/components/admin/users";
import AdminNav from "@/components/admin/nav";

export default function UsersPage() {
  const isRootAdmin = useUserStore((state) => state.getIsRootAdmin());
  return (
    <ProtectedRoute isAuthenticated={isRootAdmin}>
      <AdminNav />
      <Users />
    </ProtectedRoute>
  );
}
