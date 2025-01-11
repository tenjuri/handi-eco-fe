import React from "react";
import Image from "next/image";

const Artisans: React.FC = () => {
  const items = Array.from({ length: 2 }, (_, i) => i + 1);
  return (
    <div className="">
      <h1 className="text-lg md:text-2xl font-bold mt-8 w-max title-underlined">
        Artistry Backed by Generations of Skill
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <div>
          <p className="mt-4">
            The artisans behind Handi&Eco’s creations are the heart of our
            brand. Many of them hail from renowned craft villages, bringing 5-10
            years of experience and a deep understanding of their craft. This
            expertise shines through in every detail, making our products both
            beautiful and durable.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <Image
              src={`https://media.handi-eco.vn/images/about-us/artisans/1.png`}
              alt="Artisan 1"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
            <Image
              src={`https://media.handi-eco.vn/images/about-us/artisans/2.png`}
              alt="Artisan 2"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
            <Image
              src={`https://media.handi-eco.vn/images/about-us/artisans/3.png`}
              alt="Artisan 3"
              width={10000}
              height={100}
              className="w-full h-full object-cover"
            />
            <Image
              src={`https://media.handi-eco.vn/images/about-us/artisans/4.png`}
              alt="Artisan 4"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((item) => (
            <Image
              key={item}
              src={`https://media.handi-eco.vn/images/about-us/artisans/${
                item + 4
              }.png`}
              alt={item.toString()}
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Artisans;
