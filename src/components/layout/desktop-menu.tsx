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
  const [openAbout, setOpenAbout] = useState(false);
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
            <Link href="/products" className="cursor-pointer">
              Products
            </Link>
            <Link href="/products" className="cursor-pointer">
              Products
            </Link>
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
            <Link href="/products" className="cursor-pointer">
              Products
            </Link>
            <Link href="/products" className="cursor-pointer">
              Products
            </Link>
          </div>
        </HoverCardContent>
      </HoverCard>
      <HoverCard
        openDelay={0}
        closeDelay={100}
        open={openAbout}
        onOpenChange={setOpenAbout}
      >
        <HoverCardTrigger asChild>
          <div className="flex items-center gap-1 cursor-pointer">
            <span className="font-medium text-base text-[#FFEBC0]">
              ABOUT US
            </span>
            <ChevronDown
              className={`${
                openAbout ? "-rotate-180" : ""
              } transition-all duration-300 w-5 h-5 text-[#FFEBC0]`}
            />
          </div>
        </HoverCardTrigger>
        <HoverCardContent
          className="HoverCardContent bg-base border-base w-max"
          sideOffset={5}
        >
          <div className="flex flex-col gap-2">
            <Link href="/products" className="cursor-pointer">
              Products
            </Link>
            <Link href="/products" className="cursor-pointer">
              Products
            </Link>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};

export default DesktopNav;
