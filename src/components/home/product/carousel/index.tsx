"use client";
import React from "react";
import EmblaCarousel from "./embla-carousel";
import { EmblaOptionsType } from "embla-carousel";

const Feature: React.FC = () => {
  const OPTIONS: EmblaOptionsType = { align: "start", loop: true };
  return (
    <div className="">
      <div className="flex items-center gap-8">
        <div className="flex-1 h-[2px] bg-[#D4A875]"></div>
        <h1 className="text-3xl font-bold italic uppercase text-center">
          featured products
        </h1>
        <div className="flex-1 h-[2px] bg-[#D4A875]"></div>
      </div>
      <EmblaCarousel options={OPTIONS} />
    </div>
  );
};
export default Feature;
