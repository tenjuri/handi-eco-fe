import React from "react";
import { Metadata } from "next";
import Category from "@/components/category/page";

export const metadata: Metadata = {
  title: "Handi&Eco - Category",
  description: "Handi&Eco - Handmade with Care, Eco for Life",
  openGraph: {
    title: "Handi&Eco - Category",
    description: "Handi&Eco - Handmade with Care, Eco for Life",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Category",
    description: "Category",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    shortcut: "/favicon.ico",
  },
};

export async function generateStaticParams() {
  return [
    { slug: "home-decor" },
    { slug: "kitchen-dinning" },
    { slug: "outdoor-garden" },
    { slug: "gift-fashion" },
    { slug: "bathroom-laundry" },
  ];
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  return <Category slug={slug} />;
}
