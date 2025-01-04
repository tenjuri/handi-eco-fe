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
    let index = 0;
    let zIndex = 2;

    const setNextImage = () => {
      const images =
        imageRefs[material.slug as MaterialKeys].current?.querySelectorAll(
          "img"
        );
      if (images) {
        const newImage = document.createElement("img");
        newImage.src = `https://media.handi-eco.vn/images/material/${
          material.slug
        }/${index + 1}.jpg`;
        newImage.classList.add(
          "opacity-0",
          "absolute",
          "inset-0",
          "w-full",
          "h-[120px]",
          "max-h-[120px]",
          "md:h-[300px]",
          "md:max-h-[300px]",
          "object-cover",
          "animate-fadeinright"
        );
        newImage.style.zIndex = zIndex.toString();
        imageRefs[material.slug as MaterialKeys].current?.appendChild(newImage);
        setTimeout(() => {
          newImage.classList.remove("opacity-0");
        }, 500);

        if (index === material.amount - 2) {
          index = -1;
        } else {
          index += 1;
        }
        zIndex += 1;
      }
    };

    setNextImage();

    intervalRef.current = setInterval(setNextImage, 1500);
  };

  const setDefaultImage = (material: (typeof langMaterial)[number]) => {
    clearInterval(intervalRef.current!);
    intervalRef.current = null;
    const images = imageRefs[material.slug as MaterialKeys].current;

    if (images) {
      Array.from(images.children).forEach((child, index) => {
        if (index > 0) {
          images.removeChild(child);
        }
      });
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
            className="flex flex-col justify-center items-center gap-2 cursor-pointer w-full relative"
            onClick={() => {
              router.push(`/material/${material.slug}`);
            }}
            onMouseLeave={() => setDefaultImage(material)}
            onTouchEnd={() => setDefaultImage(material)}
          >
            <div
              className="w-full h-[120px] max-h-[120px] md:h-[300px] md:max-h-[300px] relative overflow-hidden"
              onMouseEnter={() => changeNextImage(material)}
              onMouseLeave={() => setDefaultImage(material)}
              onTouchStart={() => changeNextImage(material)}
              onTouchEnd={() => setDefaultImage(material)}
            >
              <div
                ref={imageRefs[material.slug as MaterialKeys]}
                className="w-full h-full relative"
              >
                {Array.from({ length: 1 }).map((_, index) => (
                  <img
                    key={index + material.slug}
                    src={`https://media.handi-eco.vn/images/material/${material.slug}/${index}.jpg`}
                    alt={material.name}
                    width={200}
                    height={200}
                    className="absolute inset-0 w-full h-[120px] max-h-[120px] md:h-[300px] md:max-h-[300px] object-cover"
                    style={{ zIndex: 1 }}
                    onError={(e) => {
                      e.currentTarget.src = "/logo-lg.jpg";
                    }}
                  />
                ))}
              </div>
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
