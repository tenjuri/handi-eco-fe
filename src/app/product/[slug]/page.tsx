import React from "react";
import { Metadata } from "next";
import Product from "@/components/product/page";

export const metadata: Metadata = {
  title: "Handi&Eco - Product",
  description: "Handi&Eco - Handmade with Care, Eco for Life",
  openGraph: {
    title: "Handi&Eco - Product",
    description: "Handi&Eco - Handmade with Care, Eco for Life",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Product",
    description: "Product",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export function generateStaticParams() {
  return [{ slug: "vietnam-bamboo-lampshade" }];
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  return <Product slug={slug} />;
}
