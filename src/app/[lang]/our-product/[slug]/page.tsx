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
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Product",
    description: "Our Product",
  },
  robots: {
    index: true,
    follow: true,
  },
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
