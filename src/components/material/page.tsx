import React, { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import useProducts from "@/hooks/useProducts";
import useCategory from "@/hooks/useCategory";
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

  const materialName = (product: any) => {
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
    <div className="w-full max-w-[1440px] mx-auto">
      <div>
        <Link href="/" className="cursor-pointer font-medium">
          HOME
        </Link>
        <span> / </span>
        <span>MATERIAL</span>
        <span> / </span>
        <span className="uppercase">{materialHeader}</span>
      </div>
      <div className="flex gap-5 mt-10">
        <div className="">
          <div className="text-lg font-semibold">Material</div>
          <div className="ml-5 flex flex-col border-l border-gold-app">
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
        <div className="grid grid-cols-2 md:grid-cols-3 w-[800px] gap-8 mx-auto">
          {filteredProducts.map((product) => (
            <div key={product.name} className="">
              <Link href={product.url}>
                <Image
                  src={product.images.src}
                  alt={product.name}
                  width={250}
                  height={300}
                  className="w-full h-[300px] object-fit"
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
