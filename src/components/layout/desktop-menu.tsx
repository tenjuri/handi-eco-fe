import React, { useMemo, useState } from "react";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";

import "@/app/client/hover-card.css";
import { useLangStore } from "@/store/lang.store";

const DesktopMenu: React.FC = () => {
  const [openProduct, setOpenProduct] = useState(false);
  const [openMaterial, setOpenMaterial] = useState(false);
  const { lang } = useLangStore();
  const products = useMemo(() => {
    return [
      {
        name: "Home Decor & Living",
        url: `/${lang}/our-product/home-decor`,
      },
      {
        name: "Kitchen & Dinning",
        url: `/${lang}/our-product/kitchen-dinning`,
      },
      {
        name: "Outdoor & Garden",
        url: `/${lang}/our-product/outdoor-garden`,
      },
      {
        name: "Gift & Fashion Accessories",
        url: `/${lang}/our-product/gift-fashion`,
      },
      {
        name: "Bathroom & Laundry",
        url: `/${lang}/our-product/bathroom-laundry`,
      },
    ];
  }, [lang]);

  const materials = useMemo(() => {
    return [
      {
        name: "Bamboo",
        url: `/${lang}/material/bamboo`,
      },
      {
        name: "Rattan",
        url: `/${lang}/material/rattan`,
      },
      {
        name: "Seagrass",
        url: `/${lang}/material/seagrass`,
      },
      {
        name: "Water Hyacinth",
        url: `/${lang}/material/water-hyacinth`,
      },
      {
        name: "Loofah",
        url: `/${lang}/material/loofah`,
      },
      {
        name: "Wood",
        url: `/${lang}/material/wood`,
      },
    ];
  }, [lang]);
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
                onClick={() => setOpenProduct(false)}
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
        href="/about-us"
        className="font-medium text-base text-[#FFEBC0] cursor-pointer"
      >
        ABOUT US
      </Link>
    </div>
  );
};

export default DesktopMenu;
