"use client";
import { Suspense } from "react";
import React from "react";
import Blogs from "@/components/admin/blogs";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Blogs />
    </Suspense>
  );
}
