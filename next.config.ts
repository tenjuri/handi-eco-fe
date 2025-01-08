import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "media.handi-eco.vn",
      },
    ],
  },
};

export default nextConfig;
