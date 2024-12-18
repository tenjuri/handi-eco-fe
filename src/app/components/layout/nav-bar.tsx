"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/app/components/ui/hover-card";
import Image from "next/image";

import "@/app/client/hover-card.css";

const NavBar: React.FC = () => {
  const [openProduct, setOpenProduct] = useState(false);
  const [openMaterial, setOpenMaterial] = useState(false);
  const [openAbout, setOpenAbout] = useState(false);
  return (
    <nav className="m-auto sticky top-0 z-[999] bg-[#11434C] w-full  border-b border-[#D4A875]">
      <div className="max-w-[1440px] m-auto flex items-center gap-6 h-12 px-5">
        <Link href="/" className="cursor-pointer">
          <Image src="/logo/logo.png" alt="logo" width={150} height={50} />
        </Link>
        <HoverCard
          openDelay={0}
          closeDelay={100}
          open={openProduct}
          onOpenChange={setOpenProduct}
        >
          <HoverCardTrigger asChild>
            <div className="flex items-center gap-1 cursor-pointer">
              <span className="font-medium text-base text-[#FFEBC0]">
                PRODUCTS
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
    </nav>
  );
};

export default NavBar;
