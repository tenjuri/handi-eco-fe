"use client";

import React, { useState, useEffect } from "react";
import axiosInstance from "@/utils/axiosConfig";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { New } from "@/model/new.model";
import Image from "next/image";
import { useUserStore } from "@/store/user.store";
import { Button } from "antd";
import { message, Skeleton } from "antd";
import { getAxiosErrorMessage } from "@/lib/utils";
const AdminNews: React.FC = () => {
  const router = useRouter();
  const [messageApi, contextHolder] = message.useMessage();
  const isRootAdmin = useUserStore((state) => state.getIsRootAdmin());
  const refreshUserToken = useUserStore((state) => state.refreshUserToken);
  const [news, setNews] = useState<New[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingIndex, setLoadingIndex] = useState(0);
  const [loadingNews, setLoadingNews] = useState(false);

  const getNews = async () => {
    try {
      setLoadingNews(true);
      const res = await axiosInstance.get("/blogs/all");
      setNews(res.data);
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        const errorMessage = getAxiosErrorMessage(error);
        messageApi.error(errorMessage);
      }
    } finally {
      setLoadingNews(false);
    }
  };
  useEffect(() => {
    refreshUserToken();
  }, [refreshUserToken]);

  useEffect(() => {
    getNews();
  }, []);

  const togglePublish = async (slug: string) => {
    setLoading(true);
    try {
      await axiosInstance.post(`/blogs/publish/${slug}`);
      getNews();
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        const errorMessage = getAxiosErrorMessage(error);
        messageApi.error(errorMessage);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto mt-6 px-6 xl:px-5">
      {contextHolder}
      <p className="text-2xl font-bold">News</p>
      {loadingNews ? (
        <Skeleton active className="h-[200px] w-full mt-10" />
      ) : (
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
                  onClick={() =>
                    router.push(`/en/admin/blogs?slug=${item.slug}`)
                  }
                  disabled={loading}
                >
                  Edit
                </Button>
              )}
              <Button
                onClick={() => {
                  setLoadingIndex(item.id);
                  togglePublish(item.slug);
                }}
                loading={loadingIndex === item.id && loading}
                disabled={loading}
              >
                {item.isPublished ? "Unpublish" : "Publish"}
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminNews;
