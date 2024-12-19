"use client";
import React, { useMemo } from "react";
import EmblaCarousel from "./carousel/embla-carousel";
import { EmblaOptionsType } from "embla-carousel";
import Link from "next/link";

const Feature: React.FC = () => {
  const OPTIONS: EmblaOptionsType = { align: "start", loop: true };

  const items = [
    {
      name: "VH211201-Vietnam bamboo storage basket suppliers",
      category: "Home Decor & Living",
      url: "/product/home-decor",
    },
    {
      name: "VH211106-Vietnam rattan picture frame suppliers",
      category: "Kitchen & Dinning",
      url: "/product/home-decor",
    },
    {
      name: "VH211103-Vietnam coconut candle suppliers",
      category: "Outdoor & Garden",
      url: "/product/home-decor",
    },
    {
      name: "VH21109-Straw bags made in Vietnam",
      category: "Gift & Fashion Accessories",
      url: "/product/home-decor",
    },
    {
      name: "VH21106- Luxury round serving tray suppliers",
      category: "Bathroom & Laundry",
      url: "/product/home-decor",
    },
    {
      name: "VH22128- Bamboo lamp made in Vietnam",
      category: "Bathroom & Laundry",
      url: "/product/home-decor",
    },
    {
      name: "VH22123- Fireplace Log Baskets made of old tires",
      category: "Bathroom & Laundry",
      url: "/product/home-decor",
    },
    {
      name: "VH22083- Rattan basket manufacturer in Vietnam",
      category: "Home Decor & Living",
      url: "/product/home-decor",
    },
  ];

  const products = useMemo(() => {
    return items.map((item, index) => (
      <div className="embla__slide" key={index + "feature"}>
        <div className="relative group overflow-hidden w-full">
          <img
            className="embla__slide__img rounded-3xl"
            src={`https://picsum.photos/300/300?v=${index}`}
            alt="Your alt text"
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
          <p className="text-[#777777] font-light">{item.category}</p>
          <p className="text-[#334862]">{item.name}</p>
        </Link>
      </div>
    ));
  }, [items]);

  return (
    <div className="">
      <div className="flex items-center gap-8">
        <b className="flex-1 h-[2px] bg-[#D4A875]"></b>
        <h1 className="text-3xl font-bold italic uppercase text-center">
          featured products
        </h1>
        <b className="flex-1 h-[2px] bg-[#D4A875]"></b>
      </div>
      <EmblaCarousel options={OPTIONS} items={products} />
    </div>
  );
};
export default Feature;
