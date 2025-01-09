import React from "react";
import Blogs from "@/components/blogs";
import axiosInstance from "@/utils/axiosConfig";
import { Blog } from "@/model/blog.model";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const slug = (await params).slug;
    const blog = await axiosInstance.get<Blog>(`/blogs/${slug}`);

    return {
      title: `${blog.data.title} - Handi&Eco News`,
      description: "Handi&Eco - Handmade with Care, Eco for Life",
      openGraph: {
        title: `${blog.data.title} - Handi&Eco News`,
        description: "Handi&Eco - Handmade with Care, Eco for Life",
        url: "https://handi-eco.vn",
        siteName: "Handi&Eco - News",
        images: ["https://handi-eco.vn/logo-lg.jpg"],
        type: "website",
      },
      twitter: {
        title: `${blog.data.title} - Handi&Eco News`,
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
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Handi&Eco - News",
      description: "Handi&Eco - Handmade with Care, Eco for Life",
      openGraph: {
        title: "Handi&Eco - News",
        description: "Handi&Eco - Handmade with Care, Eco for Life",
        url: "https://handi-eco.vn",
        siteName: "Handi&Eco - News",
        images: ["https://handi-eco.vn/logo-lg.jpg"],
        type: "website",
      },
      twitter: {
        title: "Handi&Eco - News",
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
  }
}

export async function generateStaticParams() {
  try {
    const blogs = await axiosInstance.get<Blog[]>("/blogs");
    const params = blogs.data.map((blog: Blog) => ({
      slug: blog.slug,
    }));
    return params;
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

export default async function Page({ params }: Props) {
  const slug = (await params).slug;
  return <Blogs slug={slug} />;
}
