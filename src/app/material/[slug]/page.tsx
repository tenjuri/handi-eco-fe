import React from "react";
import useCategory from "@/hooks/useCategory";
import Material from "@/components/material/page";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
  const { categories } = useCategory();
  const category = categories.find((category) => category.slug === slug);
  return {
    title: `Handi&Eco - ${category?.name}`,
    description: "Handi&Eco - Handmade with Care, Eco for Life",
    openGraph: {
      title: "Handi&Eco - Material",
      description: "Handi&Eco - Handmade with Care, Eco for Life",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Handi&Eco - Material",
      description: `Handi&Eco - ${category?.name}`,
    },
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      shortcut: "/favicon.ico",
    },
  };
}

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
