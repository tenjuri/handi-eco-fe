import React from "react";
import axiosInstance from "@/utils/axiosConfig";
import { useRouter } from "next/navigation";
import { New } from "@/model/new.model";
import Image from "next/image";
import { Skeleton } from "antd";
import { useQuery } from "@tanstack/react-query";

const News: React.FC = () => {
  const router = useRouter();

  // Fetch news data using react-query
  const { data, isFetching } = useQuery({
    queryKey: ["news"],
    queryFn: () =>
      axiosInstance.get("/news/all").then((res) => res.data as New[]),
    staleTime: 1000 * 60 * 5, // 5 minutes
    gcTime: 1000 * 60 * 5, // 5 minutes
  });

  return (
    <div className="w-full max-w-[1440px] mx-auto mt-6 px-6 xl:px-5">
      <p className="text-2xl font-bold">News</p>
      {isFetching ? (
        <Skeleton active className="mt-7" />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-7">
          {data?.map((item) => (
            <div
              key={item.id}
              className="border border-gray-200 rounded-lg p-4 cursor-pointer shadow-md group"
              onClick={() => router.push(`/news/${item.slug}`)}
            >
              <Image
                src={item.banner}
                alt={item.title}
                width={250}
                height={200}
                className="rounded-lg w-full h-auto object-cover group-hover:scale-105 transition-all duration-300"
              />
              <h2 className="text-base md:text-lg font-bold text-ellipsis line-clamp-3 mt-2">
                {item.title}
              </h2>
              <p className="text-sm text-gray-500">
                {item.createdAt
                  ? new Date(item.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                  : "Date not available"}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default News;
