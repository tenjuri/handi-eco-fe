"use client";

import React, { useState, useEffect } from "react";
import axiosInstance from "@/utils/axiosConfig";
import { useRouter } from "next/navigation";
import { New } from "@/model/new.model";
import Image from "next/image";
import { useUserStore } from "@/store/user.store";
import { Button } from "antd";
import LogoutBtn from "../logout-btn";

const AdminNews: React.FC = () => {
  const router = useRouter();
  const isRootAdmin = useUserStore((state) => state.getIsRootAdmin());
  const isLoggedIn = useUserStore((state) => state.getIsLoggedIn());
  const refreshUserToken = useUserStore((state) => state.refreshUserToken);
  const [news, setNews] = useState<New[]>([]);

  const getNews = () => {
    axiosInstance.get("/blogs/all").then((res) => setNews(res.data));
  };

  useEffect(() => {
    getNews();
  }, []);

  useEffect(() => {
    refreshUserToken();
  }, [refreshUserToken]);

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/admin");
    }
  }, [isLoggedIn]);

  const togglePublish = (slug: string) => {
    axiosInstance.post(`/blogs/publish/${slug}`).then(() => {
      getNews();
    });
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto mt-6 px-6 xl:px-5">
      <p className="text-2xl font-bold">News</p>
      <LogoutBtn />
      <Button onClick={() => router.push("/en/admin")} className="mt-4">
        Go to Admin Page
      </Button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4 mt-7">
        {news.map((item) => (
          <div
            key={item.id}
            className="border border-gray-200 rounded-lg p-4 cursor-pointer shadow-md group"
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
            {isRootAdmin && (
              <Button
                onClick={() => router.push(`/en/admin/blogs?slug=${item.slug}`)}
              >
                Edit
              </Button>
            )}
            <Button onClick={() => togglePublish(item.slug)}>
              {item.isPublished ? "Unpublish" : "Publish"}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminNews;
