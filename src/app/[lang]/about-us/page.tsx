import React from "react";
import { Metadata } from "next";
import AboutUs from "@/components/about-us/page";

export const metadata: Metadata = {
  title: "Handi&Eco - About Us",
  description: "Handi&Eco - Handmade with Care, Eco for Life",
  openGraph: {
    title: "Handi&Eco - About Us",
    description: "Handi&Eco - Handmade with Care, Eco for Life",
    url: "https://handi-eco.vn",
    siteName: "Handi&Eco - About Us",
    images: ["https://handi-eco.vn/logo-lg.jpg"],
    type: "website",
  },
  twitter: {
    title: "Handi&Eco - About Us",
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

export default async function Page() {
  return <AboutUs />;
}
