import React, { useState, useEffect } from "react";
import { message } from "antd";
import { useUserStore } from "@/store/user.store";
import axiosInstance from "@/utils/axiosConfig";
import { useRouter } from "next/navigation";
import { Button } from "antd";
import { getAxiosErrorMessage } from "@/lib/utils";
import { AxiosError } from "axios";

export default function Login() {
  const router = useRouter();
  const [messageApi, contextHolder] = message.useMessage();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    userName: "",
    password: "",
  });

  const { setAccessToken, setRefreshToken, setUser } = useUserStore();
  const isLoggedIn = useUserStore((state) => state.getIsLoggedIn());

  const handleLogin = async () => {
    try {
      setLoading(true);
      const { data } = await axiosInstance.post("/auth/login", form);
      messageApi.success("Login successful");
      setAccessToken(data.accessToken);
      setRefreshToken(data.refreshToken);
      setUser(data.user);
      router.push("/admin");
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        const errorMessage = getAxiosErrorMessage(error);
        messageApi.error(errorMessage);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      router.push("/admin");
    }
  }, [isLoggedIn]);

  return (
    <div className="w-full max-w-[1440px] mx-auto mt-10">
      {contextHolder}
      <p className="text-2xl font-bold">Login</p>
      <p className="text-base font-bold mt-2">Username</p>
      <input
        type="text"
        value={form.userName}
        placeholder="Enter username"
        className="w-full border border-gray-300 rounded-md p-2 focus-visible:outline-none mt-2"
        onChange={(e) => setForm({ ...form, userName: e.target.value })}
      />
      <p className="text-base font-bold mt-2">Password</p>
      <input
        type="password"
        value={form.password}
        placeholder="Enter password"
        className="w-full border border-gray-300 rounded-md p-2 focus-visible:outline-none mt-2"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <Button
        className="bg-blue-500 text-white mt-2"
        onClick={handleLogin}
        loading={loading}
        disabled={loading}
      >
        Login
      </Button>
    </div>
  );
}
