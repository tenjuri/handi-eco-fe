import React from "react";
import { Metadata } from "next";
import Category from "@/components/category/page";

export const metadata: Metadata = {
  title: "Handi&Eco - Category",
  description: "Handi&Eco - Handmade with Care, Eco for Life",
  openGraph: {
    title: "Handi&Eco - Category",
    description: "Handi&Eco - Handmade with Care, Eco for Life",
    url: "https://handi-eco.vn",
    siteName: "Handi&Eco - Category",
    images: ["https://handi-eco.vn/logo-lg.jpg"],
    type: "website",
  },
  twitter: {
    title: "Handi&Eco",
    card: "summary_large_image",
    images: ["https://handi-eco.vn/logo-lg.jpg"],
    description: "Handi&Eco - Handmade with Care, Eco for Life",
  },
  keywords: [
    "Handmade",
    "Care",
    "Eco",
    "Life",
    "Eco for Life",
    "Handmade with Care",
    "handi eco",
    "handi & eco",
  ],
};

export async function generateStaticParams() {
  return [
    { slug: "home-decor" },
    { slug: "kitchen-dinning" },
    { slug: "outdoor-garden" },
    { slug: "gift-fashion" },
    { slug: "bathroom-laundry" },
    { slug: "bamboo" },
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
