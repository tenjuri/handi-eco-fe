import React from "react";
import Link from "next/link";
import Image from "next/image";
import useProducts, { type ProductType } from "@/hooks/useProducts";
import useCategory from "@/hooks/useCategory";

type PropType = {
  slug: string;
};

const Category: React.FC<PropType> = ({ slug }) => {
  const { products } = useProducts();
  const { categories } = useCategory();

  const filteredProducts = products.filter((product) =>
    product.material.includes(slug)
  );

  const categoryName = (product: ProductType) => {
    const category = categories.find((category) =>
      product.material.includes(category.slug)
    );
    return category?.name;
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto">
      <div>
        <Link href="/" className="cursor-pointer font-medium">
          HOME
        </Link>
        <span> / </span>
        <span>MATERIAL</span>
        <span> / </span>
        <span>BAMBOO</span>
      </div>
      <div className="mx-auto mt-10">
        <div className="grid grid-cols-2 md:grid-cols-3 w-[800px] gap-8 mx-auto">
          {filteredProducts.map((product) => (
            <div key={product.name} className="">
              <Link href={product.url}>
                <Image
                  src={product.images}
                  alt={product.name}
                  width={250}
                  height={300}
                  className="w-full h-[300px] object-cover"
                />
                <p className="mt-1 text-[#777777]">{categoryName(product)}</p>
                <p className="line-clamp-2">{product.name}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
