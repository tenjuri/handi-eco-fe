import React from "react";
import { Metadata } from "next";
import AboutUs from "@/components/about-us/page";

export const metadata: Metadata = {
  title: "Handi&Eco - About Us",
  description: "Handi&Eco - Handmade with Care, Eco for Life",
  openGraph: {
    title: "Handi&Eco - About Us",
    description: "Handi&Eco - Handmade with Care, Eco for Life",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us",
    description: "About Us",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    shortcut: "/favicon.ico",
  },
};

export default async function Page() {
  return <AboutUs />;
}
