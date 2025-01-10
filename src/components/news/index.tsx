"use client";

import React, { useState, useEffect } from "react";
import axiosInstance from "@/utils/axiosConfig";
import { useRouter } from "next/navigation";
import { New } from "@/model/new.model";

const News: React.FC = () => {
  const router = useRouter();
  const [news, setNews] = useState<New[]>([]);

  useEffect(() => {
    axiosInstance.get("/news/all").then((res) => setNews(res.data));
  }, []);

  return (
    <div className="w-full max-w-[1440px] mx-auto mt-6">
      <p className="text-2xl font-bold">News</p>
      <div className="grid grid-cols-4 gap-4 mt-7">
        {news.map((item) => (
          <div
            key={item.id}
            className="border border-gray-200 rounded-lg p-4 cursor-pointer"
            onClick={() => router.push(`/news/${item.slug}`)}
          >
            <h2>{item.title}</h2>
            <p>
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
    </div>
  );
};

export default News;
