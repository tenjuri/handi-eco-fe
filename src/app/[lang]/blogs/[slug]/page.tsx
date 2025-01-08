import React from "react";
import { Metadata } from "next";
import Blogs from "@/components/blogs";
import axiosInstance from "@/utils/axiosConfig";
import { Blog } from "@/model/blog.model";

export const metadata: Metadata = {
  title: "Handi&Eco - Blogs",
  description: "Handi&Eco - Handmade with Care, Eco for Life",
  openGraph: {
    title: "Handi&Eco - Blogs",
    description: "Handi&Eco - Handmade with Care, Eco for Life",
    url: "https://handi-eco.vn",
    siteName: "Handi&Eco - Blogs",
    images: ["https://handi-eco.vn/logo-lg.jpg"],
    type: "website",
  },
  twitter: {
    title: "Handi&Eco - Blogs",
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
  try {
    const blogs = await axiosInstance.get<Blog[]>("/blogs");
    return blogs.data.map((blog: Blog) => ({
      slug: blog.slug,
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  return <Blogs slug={slug} />;
}
