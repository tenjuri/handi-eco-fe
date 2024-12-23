"use client";
import React, { useMemo } from "react";
import EmblaCarousel from "./carousel/embla-carousel";
import { EmblaOptionsType } from "embla-carousel";
import Link from "next/link";
import Image from "next/image";

import useProducts from "@/hooks/useProducts";
import useCategory from "@/hooks/useCategory";

const Feature: React.FC = () => {
  const OPTIONS: EmblaOptionsType = { align: "start", loop: true };

  const { products } = useProducts();
  const { categories } = useCategory();

  const filteredProducts = useMemo(() => {
    return products.filter((product) => !!product.featured);
  }, [products]);

  const featureProducts = useMemo(() => {
    return filteredProducts.map((item, index) => (
      <div className="embla__slide" key={index + "feature"}>
        <div className="relative group overflow-hidden w-full">
          <Image
            className="embla__slide__img rounded-3xl"
            src={item.images.src}
            alt={item.name}
            width={300}
            height={300}
          />
          <div className="absolute -bottom-11 translate-x-[6%] group-hover:bottom-0 transition-all left-0 w-[88%]">
            <Link
              href={item.url}
              className="w-full text-center bg-[#d5b36f] text-white text-lg py-2 rounded-md cursor-pointer mt-2 inline-block"
            >
              QUICK VIEW
            </Link>
          </div>
        </div>
        <Link href={item.url} className="cursor-pointer">
          <p className="text-[#777777] font-light">
            {
              categories.find((category) => category.slug === item.category)
                ?.name
            }
          </p>
          <p className="text-[#334862]">{item.name}</p>
        </Link>
      </div>
    ));
  }, [filteredProducts, categories]);

  return (
    <div className="">
      <div className="flex items-center gap-8">
        <b className="flex-1 h-[2px] bg-[#D4A875]"></b>
        <h1 className="text-3xl font-bold italic uppercase text-center">
          featured products
        </h1>
        <b className="flex-1 h-[2px] bg-[#D4A875]"></b>
      </div>
      <EmblaCarousel options={OPTIONS} items={featureProducts} />
    </div>
  );
};
export default Feature;
