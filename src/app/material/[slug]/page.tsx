import React from "react";
import { Metadata } from "next";
import Material from "@/components/material/page";

export const metadata: Metadata = {
  title: "Handi&Eco - Material",
  description: "Handi&Eco - Handmade with Care, Eco for Life",
  openGraph: {
    title: "Handi&Eco - Material",
    description: "Handi&Eco - Handmade with Care, Eco for Life",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Material",
    description: "Material",
  },
  robots: {
    index: true,
    follow: true,
  },
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
