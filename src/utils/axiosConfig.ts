import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.handi-eco.vn",
  withCredentials: true,
  timeout: 60000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add interceptors to include token
axiosInstance.interceptors.request.use((config) => {
  // Token can be retrieved dynamically
  const token = process.env.API_TOKEN; // Or use a function to retrieve from secure storage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
