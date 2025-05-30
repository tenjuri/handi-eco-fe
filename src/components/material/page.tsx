import React, { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import useProducts, { type ProductType } from "@/hooks/useProducts";
import useMaterial from "@/hooks/useMaterial";

type PropType = {
  slug: string;
};

const Material: React.FC<PropType> = ({ slug }) => {
  const { products } = useProducts();
  const { materials } = useMaterial();

  const filteredProducts = products.filter((product) =>
    product.material.includes(slug)
  );

  const materialName = (product: ProductType) => {
    const material = materials.find((material) =>
      product.material.includes(material.slug)
    );
    return material?.name;
  };

  const materialHeader = useMemo(() => {
    const material = materials.find((material) => material.slug === slug);
    return material?.name;
  }, [slug, materials]);

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 pb-10">
      <div>
        <Link href="/" className="cursor-pointer font-medium">
          HOME
        </Link>
        <span> / </span>
        <span>MATERIAL</span>
        <span> / </span>
        <span className="uppercase">{materialHeader}</span>
      </div>
      <div className="block md:flex gap-5 mt-10">
        <div className="">
          <div className="text-lg font-semibold">Material</div>
          <div className="ml-5  flex flex-col border-l border-gold-app">
            {materials.map((material) => (
              <Link
                key={material.slug}
                href={`/material/${material.slug}`}
                className="cursor-pointer pl-2"
              >
                {material.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-10 md:mt-0 grid grid-cols-1 md:grid-cols-3 w-full md:w-[800px] gap-8 mx-auto">
          {filteredProducts.map((product) => (
            <div key={product.name} className="w-full">
              <Link href={product.url} className="cursor-pointer">
                <Image
                  src={product.images}
                  alt={product.name}
                  width={250}
                  height={300}
                  className="w-full h-[400px] md:h-[200px] lg:h-[280px] object-fit"
                />
                <p className="mt-1 text-[#777777]">{materialName(product)}</p>
                <p className="line-clamp-2">{product.name}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Material;
