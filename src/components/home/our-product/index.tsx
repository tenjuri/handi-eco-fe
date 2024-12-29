import React from "react";
import Link from "next/link";
import { getDictionary } from "../../../../get-dictionary";

type Props = {
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
};

const OurProduct: React.FC<Props> = ({ dictionary }) => {
  const products = [
    {
      name: dictionary.products.homeDecorliving,
      url: "/home-decor",
      banner: "https://media.handi-eco.vn/images/home-decor.jpg",
    },
    {
      name: dictionary.products.kitchenDinning,
      url: "/kitchen-dinning",
      banner: "https://media.handi-eco.vn/images/kitchen.jpg",
    },
    {
      name: dictionary.products.outdoorGarden,
      url: "/outdoor-garden",
      banner: "https://media.handi-eco.vn/images/outdoor.jpg",
    },
    {
      name: dictionary.products.giftFashionAccessories,
      url: "/gift-fashion",
      banner: "https://media.handi-eco.vn/images/gift.jpg",
    },
    {
      name: dictionary.products.bathroomLaundry,
      url: "/bathroom-laundry",
      banner: "https://media.handi-eco.vn/images/bathroom.jpg",
    },
  ];
  return (
    <div className="w-full max-w-[1920px] mx-auto bg-[#F5F5F5]">
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 ">
        <div className="p-10">
          <h1 className="text-base xl:text-3xl font-bold italic uppercase whitespace-break-spaces">
            {dictionary.products.ourProducts}
          </h1>
        </div>
        {products.map((item, index) => (
          <div key={index} className="relative group">
            <div className="w-full h-[300px] md:h-[400px] xl:h-[700px] overflow-hidden">
              <img
                key={index + "img"}
                src={item.banner}
                alt={item.name}
                width={300}
                height={700}
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
              />
            </div>

            <div className="absolute bottom-0 w-full p-4">
              <p className="text-white text-base md:text-3xl font-medium italic leading-[100%]">
                {item.name}
              </p>
              <div className="w-16 h-1 bg-white mt-1"></div>
              <Link
                href={`/our-product/${item.url}`}
                className="bg-[#d5b36f] text-white text-base md:text-lg py-1 md:py-2 px-4 rounded-md hover:bg-[#d5b36f]/80 cursor-pointer mt-2 inline-block"
              >
                {dictionary.readMore}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProduct;
