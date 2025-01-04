"use client";
import React, { useMemo, useRef } from "react";
import { useRouter } from "next/navigation";
import useMaterial from "@/hooks/useMaterial";

type MaterialKeys =
  | "bamboo"
  | "rattan"
  | "seagrass"
  | "water-hyacinth"
  | "loofah"
  | "wood";

type Props = {
  dictionary: {
    material: {
      [key: string]: string;
      title: string;
    };
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

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const imageRefs: Record<
    MaterialKeys,
    React.RefObject<HTMLImageElement | null>
  > = {
    bamboo: useRef<HTMLImageElement>(null),
    rattan: useRef<HTMLImageElement>(null),
    seagrass: useRef<HTMLImageElement>(null),
    "water-hyacinth": useRef<HTMLImageElement>(null),
    loofah: useRef<HTMLImageElement>(null),
    wood: useRef<HTMLImageElement>(null),
  };

  const changeNextImage = (material: (typeof langMaterial)[number]) => {
    const setNextImage = () => {
      const image = imageRefs[material.slug as MaterialKeys].current;
      const imageId = Number(image?.id?.split("-")[0]);
      const nextImageId = imageId >= material.amount - 1 ? 0 : imageId + 1;
      if (image) {
        image.setAttribute(
          "src",
          `https://media.handi-eco.vn/images/material/${material.slug}/${nextImageId}.jpg`
        );
        image.setAttribute("id", `${nextImageId}-${material.slug}`);
      }
    };

    setNextImage();

    intervalRef.current = setInterval(setNextImage, 1500);
  };

  const setDefaultImage = (material: (typeof langMaterial)[number]) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    const image = imageRefs[material.slug as MaterialKeys].current;
    if (image) {
      image.setAttribute(
        "src",
        `https://media.handi-eco.vn/images/material/${material.slug}/0.jpg`
      );
      image.setAttribute("id", `0-${material.slug}`);
    }
  };

  return (
    <div className="text-black w-full max-w-[1440px] mx-auto mt-10 mb-10">
      <div className="flex items-center gap-8">
        <div className="flex-1 h-[2px] bg-[#D4A875]"></div>
        <h1 className="text-3xl font-bold italic uppercase text-center">
          {dictionary.material.title}
        </h1>
        <div className="flex-1 h-[2px] bg-[#D4A875]"></div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-8 mx-auto mt-10 p-10">
        {langMaterial.map((material) => (
          <div
            key={material.name}
            className="flex flex-col justify-center items-center gap-2 cursor-pointer w-full"
            onClick={() => {
              router.push(`/material/${material.slug}`);
            }}
          >
            <div
              className="w-full overflow-hidden"
              onMouseEnter={() => changeNextImage(material)}
              onMouseLeave={() => setDefaultImage(material)}
              onTouchStart={() => changeNextImage(material)}
              onTouchEnd={() => setDefaultImage(material)}
            >
              <img
                id={`0-${material.slug}`}
                ref={imageRefs[material.slug as MaterialKeys]}
                src={`https://media.handi-eco.vn/images/material/${material.slug}/0.jpg`}
                alt={material.name}
                width={200}
                height={200}
                className="w-full h-full max-h-[120px] md:max-h-[300px] object-cover"
                onError={(e) => {
                  e.currentTarget.src = "/logo-lg.jpg";
                }}
              />
            </div>
            <span className="text-sm md:text-lg font-semibold">
              {material.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Material;
