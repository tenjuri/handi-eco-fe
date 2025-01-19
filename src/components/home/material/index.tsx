"use client";
import React, { useMemo, useRef, useEffect } from "react";
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
    return materials
      .filter((ma) => !ma.hide)
      .map((ma) => {
        return {
          ...ma,
          name: dictionary.material[ma.key as keyof typeof dictionary.material],
        };
      });
  }, [materials, dictionary.material]);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const imageRefs: Record<MaterialKeys, React.RefObject<HTMLDivElement>> = {
    bamboo: useRef<HTMLDivElement>(null),
    rattan: useRef<HTMLDivElement>(null),
    seagrass: useRef<HTMLDivElement>(null),
    "water-hyacinth": useRef<HTMLDivElement>(null),
    loofah: useRef<HTMLDivElement>(null),
    wood: useRef<HTMLDivElement>(null),
  };

  const changeNextImage = (material: (typeof langMaterial)[number]) => {
    let index = 0;
    let zIndex = 2;

    const imageDom = document.getElementById(material.slug);
    const images = imageDom?.children;
    const setNextImage = () => {
      if (!intervalRef.current || (images && images?.length > 20)) {
        setDefaultImage(material);
        return;
      }
      if (images) {
        const newImageDom = document.createElement("div");
        newImageDom.classList.add(
          "opacity-0",
          "flex",
          "flex-grow",
          "absolute",
          "inset-0",
          "bg-cover",
          "bg-center",
          "animate-fadeinright"
        );
        newImageDom.style.backgroundImage = `url(https://media.handi-eco.vn/images/material/${
          material.slug
        }/${index + 1}.jpg)`;
        newImageDom.style.zIndex = zIndex.toString();
        imageDom.appendChild(newImageDom);
        setTimeout(() => {
          newImageDom.classList.remove("opacity-0");
        }, 500);

        if (index === material.amount - 2) {
          index = -1;
        } else {
          index += 1;
        }
        zIndex += 1;
      }
    };

    intervalRef.current = setInterval(setNextImage, 1500);
    setNextImage();
  };

  const setDefaultImage = (material: (typeof langMaterial)[number]) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      const imageDom = document.getElementById(material.slug);

      if (imageDom) {
        const imgs = imageDom.children;
        if (imgs) {
          Array.from(imgs).forEach((child, index) => {
            if (index > 0 && child instanceof HTMLElement) {
              imageDom.removeChild(child);
            }
          });
        }
      }
    }
  };

  useEffect(() => {
    setTimeout(() => {
      const imageDom = langMaterial.map((material) => {
        return document.getElementById(material.slug);
      });
      imageDom.forEach((image) => {
        if (image) {
          const imageId = image.id;
          const material = langMaterial.find(
            (ma) => ma.slug === imageId
          ) as (typeof langMaterial)[number];
          image.addEventListener("mouseenter", () => {
            changeNextImage(material);
          });
          image.addEventListener("touchstart", () => {
            changeNextImage(material);
          });
          image.addEventListener("mouseleave", () => {
            setDefaultImage(material);
          });
          image.addEventListener("touchend", () => {
            setDefaultImage(material);
          });
        }
      });
    }, 500);
  }, [langMaterial]);

  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      if (e.target instanceof HTMLImageElement) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

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
            className="flex flex-col justify-center items-center gap-2 w-full relative"
          >
            <div className="w-full h-[120px] max-h-[120px] md:h-[300px] md:max-h-[300px] relative overflow-hidden">
              <div
                id={material.slug}
                ref={imageRefs[material.slug as MaterialKeys]}
                className="w-full h-full flex flex-grow relative"
              >
                {Array.from({ length: 1 }).map((_, index) => (
                  <div
                    key={index + material.slug}
                    className="flex flex-grow absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(https://media.handi-eco.vn/images/material/${material.slug}/${index}.jpg)`,
                    }}
                  ></div>
                ))}
              </div>
            </div>
            <span
              className="text-sm md:text-lg font-semibold cursor-pointer"
              onClick={() => {
                router.push(`/material/${material.slug}`);
              }}
            >
              {material.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Material;
