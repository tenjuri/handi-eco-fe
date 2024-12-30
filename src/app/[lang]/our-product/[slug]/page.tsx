import React from "react";
import { Metadata } from "next";
import { Locale } from "../../../../../i18n-config";
import { getDictionary } from "../../../../../get-dictionary";
import OurProduct from "@/components/our-product/page";

export const metadata: Metadata = {
  title: "Handi&Eco - Our Product",
  description: "Handi&Eco - Handmade with Care, Eco for Life",
  openGraph: {
    title: "Handi&Eco - Our Product",
    description: "Handi&Eco - Handmade with Care, Eco for Life",
    url: "https://handi-eco.vn",
    siteName: "Handi&Eco - Our Product",
    images: ["https://handi-eco.vn/logo-lg.jpg"],
    type: "website",
  },
  twitter: {
    title: "Handi&Eco - Our Product",
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
  params: Promise<{ slug: string; lang: Locale }>;
}) {
  const slug = (await params).slug;
  const lang = (await params).lang;
  const dictionary = await getDictionary(lang);
  return <OurProduct slug={slug} lang={lang} dictionary={dictionary} />;
}
