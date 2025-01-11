"use client";
import { Suspense } from "react";
import React from "react";
import ProtectedRoute from "@/components/admin/protected-route";
import Blogs from "@/components/admin/blogs";
import AdminNav from "@/components/admin/nav";
import { useUserStore } from "@/store/user.store";

export default function Page() {
  const isRootAdmin = useUserStore((state) => state.getIsRootAdmin());
  return (
    <ProtectedRoute isAuthenticated={isRootAdmin}>
      <AdminNav />
      <Suspense fallback={<div>Loading...</div>}>
        <Blogs />
      </Suspense>
    </ProtectedRoute>
  );
}
