import React from "react";
import Link from "next/link";

const OurProduct: React.FC = () => {
  const products = [
    {
      name: "HOME DECOR & LIVING",
      url: "/home-decor",
    },
    {
      name: "KITCHEN & DINNING",
      url: "/kitchen-dinning",
    },
    {
      name: "OUTDOOR & GARDEN",
      url: "/outdoor-garden",
    },
    {
      name: "GIFT & FASHION ACCESSORIES",
      url: "/gift-fashion",
    },
    {
      name: "BATHROOM & LAUNDRY",
      url: "/bathroom-laundry",
    },
  ];
  return (
    <div className="grid grid-cols-6 bg-[#F5F5F5] mt-10">
      <div className="p-10">
        <h1 className="text-3xl font-bold italic">
          OUR <br />
          PRODUCTS
        </h1>
      </div>
      {products.map((item, index) => (
        <div key={index} className="relative group">
          <div className="w-full h-[700px] overflow-hidden">
            <img
              key={index}
              src={`https://picsum.photos/700/750?v=${index}`}
              alt="Your alt text"
              width={300}
              height={700}
              className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
            />
          </div>

          <div className="absolute bottom-0 w-full p-4">
            <p className="text-white text-3xl font-medium italic leading-[100%]">
              {item.name}
            </p>
            <div className="w-16 h-1 bg-white mt-1"></div>
            <Link
              href={item.url}
              className="bg-[#d5b36f] text-white text-lg py-2 px-4 rounded-md hover:bg-[#d5b36f]/80 cursor-pointer mt-2 inline-block"
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
