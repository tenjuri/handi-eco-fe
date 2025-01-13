"use client";

import React, { useState, useEffect } from "react";
import axiosInstance from "@/utils/axiosConfig";
import Image from "next/image";
import Carousel from "./carousel";
import { type getDictionary } from "../../../../get-dictionary";
import { New } from "@/model/new.model";
import { useRouter } from "next/navigation";
type Props = {
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
};

const News: React.FC<Props> = ({ dictionary }) => {
  const router = useRouter();
  const [news, setNews] = useState<New[]>([]);
  useEffect(() => {
    axiosInstance.get("/news/latest").then((res) => setNews(res.data));
  }, []);

  const handleNewsClick = (slug: string) => {
    router.push(`/news/${slug}`);
  };

  return (
    <div className="w-full bg-white pb-10">
      <div className="max-w-[1440px] mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4">
          <div className="col-span-1">
            <span className="text-3xl font-bold italic uppercase text-center">
              {dictionary.news.title}
            </span>
          </div>
          <div className="col-span-3">
            <Carousel
              options={{ align: "start", loop: true }}
              items={news.map((item) => (
                <div
                  className="embla__slide cursor-pointer"
                  key={item.id}
                  onClick={() => handleNewsClick(item.slug)}
                >
                  <div className="relative group overflow-hidden w-full">
                    <div className="absolute top-4 left-0 p-2 bg-gold-app text-green-app">
                      {item.createdAt ? (
                        <>
                          <p className="text-xl font-bold">
                            {new Date(item.createdAt).toLocaleDateString(
                              "en-US",
                              {
                                day: "numeric",
                              }
                            )}
                          </p>
                          <p className="text-sm">
                            {new Date(item.createdAt).toLocaleDateString(
                              "en-US",
                              {
                                month: "short",
                              }
                            )}
                          </p>
                        </>
                      ) : null}
                    </div>
                    <Image
                      src={item.banner}
                      alt={item.title}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="font-bold mt-4 line-clamp-2">{item.title}</p>
                  <p className="mt-1 text-sm line-clamp-2">
                    {item.description}
                  </p>
                </div>
              ))}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
