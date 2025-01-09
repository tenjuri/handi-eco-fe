import React from "react";
import { Metadata } from "next";
import Blogs from "@/components/blogs";
import axiosInstance from "@/utils/axiosConfig";
import { Blog } from "@/model/blog.model";
import { GetStaticProps } from "next";

interface MyPageProps {
  params: {
    slug: string;
  };
}

export const getStaticProps: GetStaticProps<MyPageProps> = async ({
  params,
}) => {
  // Check if params is undefined or null, and provide default values if necessary
  const slug = typeof params?.slug === "string" ? params.slug : "default-slug";
  const lang = typeof params?.lang === "string" ? params.lang : "en";

  return {
    props: {
      params: {
        slug,
        lang,
      },
    },
  };
};
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;
  const { data } = await axiosInstance.get<Blog>(`/blogs/${slug}`);

  return {
    title: `New - ${data.title}`,
    description: "Handi&Eco - Handmade with Care, Eco for Life",
    openGraph: {
      title: `New - ${data.title}`,
      description: "Handi&Eco - Handmade with Care, Eco for Life",
      url: "https://handi-eco.vn",
      siteName: "Handi&Eco - Blogs",
      images: ["https://handi-eco.vn/logo-lg.jpg"],
      type: "website",
    },
    twitter: {
      title: `New - ${data.title}`,
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
      data.title,
    ],
  };
}

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
export default async function Page({ params }: MyPageProps) {
  const slug = params.slug;
  return <Blogs slug={slug} />;
}
