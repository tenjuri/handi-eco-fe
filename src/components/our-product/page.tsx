import React from "react";
import useOurProduct from "@/hooks/useOurProduct";
import Button from "../ui/button";

type PropType = {
  slug: string;
};

const OurProduct: React.FC<PropType> = (props) => {
  const { slug } = props;
  const { ourProducts } = useOurProduct();
  const product = ourProducts.find((product) => product.slug === slug);

  return (
    <div className="w-full max-w-[1200px] mx-auto p-10">
      <h2 className="text-5xl font-bold text-center text-[#11434C] italic">
        {product?.name}
      </h2>
      {product?.content.map((item, index) => (
        <div
          key={index}
          className="mt-6 md:mt-24 w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-24"
        >
          <div
            className={`${
              index % 2 === 0 ? "" : "md:order-2"
            } flex flex-col justify-between`}
          >
            <div>
              <h3 className="text-4xl font-bold text-[#11434C]">
                {item.title}
              </h3>
              <p className="mt-5">{item.description}</p>
            </div>
            <Button className="w-max bg-gold-app">{item.btnLabel}</Button>
          </div>
          <div>
            <img
              src={item.banner}
              alt={item.title}
              className="w-full max-h-[400px]"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default OurProduct;
