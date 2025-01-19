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
import { type getDictionary } from "../../../get-dictionary";

interface NavBarProps {
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
}
const DesktopMenu: React.FC<NavBarProps> = ({ dictionary }) => {
  const [openProduct, setOpenProduct] = useState(false);
  const [openMaterial, setOpenMaterial] = useState(false);
  const { lang } = useLangStore();
  const products = useMemo(() => {
    return [
      {
        name: dictionary.products.menu.homeDecorliving,
        url: `/${lang}/our-product/home-decor`,
      },
      {
        name: dictionary.products.menu.kitchenDinning,
        url: `/${lang}/our-product/kitchen-dinning`,
      },
      {
        name: dictionary.products.menu.outdoorGarden,
        url: `/${lang}/our-product/outdoor-garden`,
      },
      {
        name: dictionary.products.menu.giftFashionAccessories,
        url: `/${lang}/our-product/gift-fashion`,
      },
      {
        name: dictionary.products.menu.bathroomLaundry,
        url: `/${lang}/our-product/bathroom-laundry`,
      },
    ];
  }, [lang]);

  const materials = useMemo(() => {
    return [
      {
        name: dictionary.material.bamboo,
        url: `/${lang}/material/bamboo`,
      },
      {
        name: dictionary.material.rattan,
        url: `/${lang}/material/rattan`,
      },
      {
        name: dictionary.material.seagrass,
        url: `/${lang}/material/seagrass`,
      },
      {
        name: dictionary.material.waterHyacinth,
        url: `/${lang}/material/water-hyacinth`,
      },
      {
        name: dictionary.material.loofah,
        url: `/${lang}/material/loofah`,
      },
      {
        name: dictionary.material.jute,
        url: `/${lang}/material/jute`,
      },
      {
        name: dictionary.material.wood,
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
              {dictionary.products.title}
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
              {dictionary.material.title}
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
        href={`/${lang}/about-us`}
        className="font-medium text-base text-[#FFEBC0] cursor-pointer"
      >
        {dictionary.aboutUs.title}
      </Link>

      <Link
        href={`/${lang}/news`}
        className="font-medium text-base text-[#FFEBC0] cursor-pointer"
      >
        {dictionary.news.title}
      </Link>
    </div>
  );
};

export default DesktopMenu;
