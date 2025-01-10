import React, { useState, useEffect } from "react";
import { message } from "antd";
import { useUserStore } from "@/store/user.store";
import axiosInstance from "@/utils/axiosConfig";
import { useRouter } from "next/navigation";
export default function Login() {
  const router = useRouter();
  const [messageApi, contextHolder] = message.useMessage();
  const [form, setForm] = useState({
    userName: "",
    password: "",
  });

  const { setAccessToken, setRefreshToken, setUser } = useUserStore();
  const isLoggedIn = useUserStore((state) => state.getIsLoggedIn());

  const handleLogin = async () => {
    try {
      const { data } = await axiosInstance.post("/auth/login", form);
      messageApi.success("Login successful");
      setAccessToken(data.accessToken);
      setRefreshToken(data.refreshToken);
      setUser(data.user);
      router.push("/admin");
    } catch (error) {
      console.error("Error logging in:", error);
      messageApi.error("Login failed");
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
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
}
