import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  withCredentials: true,
  timeout: 60000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add interceptors to include token
axiosInstance.interceptors.request.use((config) => {
  // Only access localStorage in browser environment
  const userStore =
    typeof window !== "undefined"
      ? window.localStorage?.getItem("userStore")
      : null;
  const user = userStore ? JSON.parse(userStore) : null;
  const accessToken = user?.state?.accessToken || "";

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

export default axiosInstance;
