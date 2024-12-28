import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import CarouselSection from "./carousel";
import Social from "./social";
import OurProduct from "./our-product";
import OurExport from "./our-export";
import Product from "./product";
import OurStory from "./our-story";
import OurTeam from "./our-team";
import Material from "./material";

const HomePage: React.FC = () => {
  const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };
  const SLIDE_COUNT = 4;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <>
      <CarouselSection slides={SLIDES} options={OPTIONS} />
      <img
        src="https://media.handi-eco.vn/videos/scroll.gif"
        alt=""
        className="w-full max-w-[1920px] mx-auto"
      />
      <OurProduct />
      <Social />
      <OurExport />
      <OurStory />
      <OurTeam />
      <Product />
      <Material />
    </>
  );
};

export default HomePage;
