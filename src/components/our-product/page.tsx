import React from "react";
import useOurProduct from "@/hooks/useOurProduct";

type PropType = {
  slug: string;
};

const OurProduct: React.FC<PropType> = (props) => {
  const { slug } = props;
  const { ourProducts } = useOurProduct();
  const product = ourProducts.find((product) => product.slug === slug);
  return <div className="w-full max-w-[1440px] mx-auto">{product?.name}</div>;
};

export default OurProduct;
