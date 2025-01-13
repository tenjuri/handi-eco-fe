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
import News from "./news";
import { Locale } from "../../../i18n-config";
import { getDictionary } from "../../../get-dictionary";
// import axiosInstance from "@/utils/axiosConfig";

type HomePageProps = {
  lang: Locale;
};
const HomePage: React.FC<HomePageProps> = async ({ lang }) => {
  const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };
  const SLIDE_COUNT = 4;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  const dictionary = await getDictionary(lang);

  // const { data } = await axiosInstance.get("/users/9");
  // console.log(data);

  return (
    <>
      <CarouselSection
        slides={SLIDES}
        options={OPTIONS}
        dictionary={dictionary}
      />
      <img
        src="https://media.handi-eco.vn/videos/scroll-more.gif"
        alt=""
        className="w-full max-w-[1920px] mx-auto"
      />
      <OurProduct dictionary={dictionary} />
      <Social />
      <OurExport dictionary={dictionary} />
      <OurStory dictionary={dictionary} />
      <OurTeam dictionary={dictionary} />
      <Product dictionary={dictionary} />
      <Material dictionary={dictionary} />
      <News dictionary={dictionary} />
    </>
  );
};

export default HomePage;
