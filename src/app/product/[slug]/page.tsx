import React from "react";
import Product from "@/components/product/page";
import useProducts from "@/hooks/useProducts";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
  const { products } = useProducts();
  const product = products.find((product) => product.slug === slug);
  return {
    title: `Handi&Eco - ${product?.name}`,
    description: "Handi&Eco - Handmade with Care, Eco for Life",
    openGraph: {
      title: "Handi&Eco - Product",
      description: "Handi&Eco - Handmade with Care, Eco for Life",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Handi&Eco - Product",
      description: `Handi&Eco - ${product?.name}`,
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
  const { products } = useProducts();
  return products.map((product) => ({ slug: product.slug }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  return <Product slug={slug} />;
}
