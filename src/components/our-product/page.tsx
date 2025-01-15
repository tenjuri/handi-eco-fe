import React from "react";
import useOurProduct from "@/hooks/useOurProduct";
import Link from "next/link";
import Button from "../ui/button";
import { Locale } from "../../../i18n-config";
import { getDictionary } from "../../../get-dictionary";

type PropType = {
  slug: string;
  lang: Locale;
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
};

const OurProduct: React.FC<PropType> = (props) => {
  const { slug, dictionary } = props;
  const { ourProducts } = useOurProduct();
  const product = ourProducts.find((product) => product.slug === slug);

  const getDes = (key: keyof typeof dictionary.products) => {
    return dictionary.products[key] as string[];
  };

  const getName = (key: keyof typeof dictionary.products.menu) => {
    return dictionary.products.menu[key] as string;
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto p-10">
      <h2 className="text-5xl font-bold text-center text-[#11434C] italic">
        {getName(product?.nameKey as keyof typeof dictionary.products.menu)}
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
              {getDes(
                item.description as keyof typeof dictionary.products
              )?.map((des, index) => (
                <p key={index} className="">
                  {des}
                </p>
              ))}
            </div>
            <Link href={item.link} target="_blank">
              <Button className="w-max bg-gold-app">{item.btnLabel}</Button>
            </Link>
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
