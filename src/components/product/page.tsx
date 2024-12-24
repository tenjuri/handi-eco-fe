import React from "react";
import useProducts from "@/hooks/useProducts";

type PropType = {
  slug: string;
};
const Product: React.FC<PropType> = (props) => {
  const { products } = useProducts();
  const { slug } = props;
  const product = products.find((product) => product.slug === slug);
  return (
    <div className="w-full max-w-[1440px] mx-auto pt-5 lg:pt-10">
      {product?.name}
    </div>
  );
};

export default Product;
