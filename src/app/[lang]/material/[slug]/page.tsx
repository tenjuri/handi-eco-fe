import React from "react";
import { Metadata } from "next";
import Material from "@/components/material/page";

export const metadata: Metadata = {
  title: "Handi&Eco - Material",
  description: "Handi&Eco - Handmade with Care, Eco for Life",
  openGraph: {
    title: "Handi&Eco - Material",
    description: "Handi&Eco - Handmade with Care, Eco for Life",
    url: "https://handi-eco.vn",
    siteName: "Handi&Eco",
    images: ["https://handi-eco.vn/logo-lg.jpg"],
    type: "website",
  },
  twitter: {
    title: "Handi&Eco - Material",
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
    { slug: "bamboo" },
    { slug: "rattan" },
    { slug: "seagrass" },
    { slug: "water-hyacinth" },
    { slug: "loofah" },
    { slug: "bamboo" },
  ];
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  return <Material slug={slug} />;
}
