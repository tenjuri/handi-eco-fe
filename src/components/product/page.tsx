import React from "react";
import Link from "next/link";
import useProducts from "@/hooks/useProducts";
import useMaterial from "@/hooks/useMaterial";
import useCategory from "@/hooks/useCategory";

type PropType = {
  slug: string;
};
const Product: React.FC<PropType> = (props) => {
  const { products } = useProducts();
  const { materials } = useMaterial();
  const { categories } = useCategory();
  const { slug } = props;
  const product = products.find((product) => product.slug === slug);
  const material = materials.filter((material) =>
    product?.material.includes(material.slug)
  );
  const category = categories.find(
    (category) => product?.category === category.slug
  );

  return (
    <div className="w-full max-w-[1440px] mx-auto pt-5 lg:pt-10 px-4">
      <div className="text-2xl font-semibold">Product</div>
      <div className="text-lg font-bold">{product?.name}</div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-8">
        <div className="col-span-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="w-full">
              <img
                src={product?.images}
                alt={product?.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full">
              <div className="italic">{product?.description}</div>
              <div className="w-12 h-1 bg-gold-app mt-1 mb-2"></div>
              {material.length > 0 && (
                <li>
                  Material:{" "}
                  {material.map((material) => material.name).join(", ")}
                </li>
              )}
              {category?.name && <li>Category: {category?.name}</li>}
              <li>Color: natural</li>
              <li>Dimensions: customized</li>
              <li>Made in Vietnam</li>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <p className="text-xl font-semibold italic">Browse</p>
          {materials.map((ma) => (
            <Link
              key={ma.slug}
              href={`/material/${ma.slug}`}
              className="block cursor-pointer"
            >
              {ma.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
