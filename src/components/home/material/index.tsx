"use client";
import React, { useMemo } from "react";
import { useRouter } from "next/navigation";
import useMaterial from "@/hooks/useMaterial";

type MaterialDictionary = {
  title: string;
  bamboo: string;
  rattan: string;
  seagrass: string;
  waterHyacinth: string;
  loofah: string;
  wood: string;
};

type Props = {
  dictionary: {
    material: MaterialDictionary;
  };
};

const Material: React.FC<Props> = ({ dictionary }) => {
  const { materials } = useMaterial();
  const router = useRouter();
  const langMaterial = useMemo(() => {
    return materials.map((ma) => {
      return {
        ...ma,
        name: dictionary.material[ma.key as keyof typeof dictionary.material],
      };
    });
  }, [materials, dictionary.material]);
  return (
    <div className="text-black w-full max-w-[1440px] mx-auto mt-10 mb-10">
      <div className="flex items-center gap-8">
        <div className="flex-1 h-[2px] bg-[#D4A875]"></div>
        <h1 className="text-3xl font-bold italic uppercase text-center">
          {dictionary.material.title}
        </h1>
        <div className="flex-1 h-[2px] bg-[#D4A875]"></div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mx-auto mt-10 p-10">
        {langMaterial.map((material) => (
          <div
            key={material.name}
            className="flex flex-col justify-center items-center gap-2 cursor-pointer"
            onClick={() => {
              router.push(`/material/${material.slug}`);
            }}
          >
            <img
              src={material.image.src}
              alt={material.name}
              width={300}
              height={300}
              className="w-full h-full object-fill"
            />
            <span className="text-lg font-semibold">{material.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Material;
