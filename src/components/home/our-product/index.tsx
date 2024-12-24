import React from "react";
import Link from "next/link";

const OurProduct: React.FC = () => {
  const products = [
    {
      name: "HOME DECOR & LIVING",
      url: "/home-decor",
      banner: "https://media.handi-eco.vn/images/home-decor.jpg",
    },
    {
      name: "KITCHEN & DINNING",
      url: "/kitchen-dinning",
      banner: "https://media.handi-eco.vn/images/kitchen.jpg",
    },
    {
      name: "OUTDOOR & GARDEN",
      url: "/outdoor-garden",
      banner: "https://media.handi-eco.vn/images/outdoor.jpg",
    },
    {
      name: "GIFT & FASHION ACCESSORIES",
      url: "/gift-fashion",
      banner: "https://media.handi-eco.vn/images/gift.jpg",
    },
    {
      name: "BATHROOM & LAUNDRY",
      url: "/bathroom-laundry",
      banner: "https://media.handi-eco.vn/images/bathroom.jpg",
    },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 bg-[#F5F5F5] mt-10">
      <div className="p-10">
        <h1 className="text-base xl:text-3xl font-bold italic">
          OUR <br />
          PRODUCTS
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
              href={`/category/${item.url}`}
              className="bg-[#d5b36f] text-white text-base md:text-lg py-1 md:py-2 px-4 rounded-md hover:bg-[#d5b36f]/80 cursor-pointer mt-2 inline-block"
            >
              READ MORE
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OurProduct;
