import React, { useState } from "react";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";

import "@/app/client/hover-card.css";

const DesktopNav: React.FC = () => {
  const [openProduct, setOpenProduct] = useState(false);
  const [openMaterial, setOpenMaterial] = useState(false);
  const products = [
    {
      name: "Home Decor & Living",
      url: "/category/home-decor",
    },
    {
      name: "Kitchen & Dinning",
      url: "/category/kitchen-dinning",
    },
    {
      name: "Outdoor & Garden",
      url: "/category/outdoor-garden",
    },
    {
      name: "Gift & Fashion Accessories",
      url: "/category/gift-fashion",
    },
    {
      name: "Bathroom & Laundry",
      url: "/category/bathroom-laundry",
    },
  ];

  const materials = [
    {
      name: "Bamboo",
      url: "/material/bamboo",
    },
    {
      name: "Rattan",
      url: "/material/rattan",
    },
    {
      name: "Seagrass",
      url: "/material/seagrass",
    },
    {
      name: "Water Hyacinth",
      url: "/material/water-hyacinth",
    },
    {
      name: "Loofah",
      url: "/material/loofah",
    },
    {
      name: "Wood",
      url: "/material/wood",
    },
  ];
  return (
    <div className="hidden md:flex items-center gap-8">
      <HoverCard
        openDelay={0}
        closeDelay={100}
        open={openProduct}
        onOpenChange={setOpenProduct}
      >
        <HoverCardTrigger asChild>
          <div className="flex items-center gap-1 cursor-pointer">
            <span className="font-medium text-base text-[#FFEBC0]">
              PRODUCT
            </span>
            <ChevronDown
              className={`${
                openProduct ? "-rotate-180" : ""
              } transition-all duration-300 w-5 h-5 text-[#FFEBC0]`}
            />
          </div>
        </HoverCardTrigger>
        <HoverCardContent
          className="HoverCardContent bg-base border-base w-max"
          sideOffset={5}
        >
          <div className="flex flex-col gap-2">
            {products.map((product) => (
              <Link
                href={product.url}
                key={product.name}
                className="cursor-pointer"
              >
                {product.name}
              </Link>
            ))}
          </div>
        </HoverCardContent>
      </HoverCard>
      <HoverCard
        openDelay={0}
        closeDelay={100}
        open={openMaterial}
        onOpenChange={setOpenMaterial}
      >
        <HoverCardTrigger asChild>
          <div className="flex items-center gap-1 cursor-pointer">
            <span className="font-medium text-base text-[#FFEBC0]">
              MATERIALS
            </span>
            <ChevronDown
              className={`${
                openMaterial ? "-rotate-180" : ""
              } transition-all duration-300 w-5 h-5 text-[#FFEBC0]`}
            />
          </div>
        </HoverCardTrigger>
        <HoverCardContent
          className="HoverCardContent bg-base border-base w-max"
          sideOffset={5}
        >
          <div className="flex flex-col gap-2">
            {materials.map((material) => (
              <Link
                href={material.url}
                key={material.name}
                className="cursor-pointer"
                onClick={() => setOpenMaterial(false)}
              >
                {material.name}
              </Link>
            ))}
          </div>
        </HoverCardContent>
      </HoverCard>
      <Link
        href="/products"
        className="font-medium text-base text-[#FFEBC0] cursor-pointer"
      >
        ABOUT US
      </Link>
    </div>
  );
};

export default DesktopNav;
