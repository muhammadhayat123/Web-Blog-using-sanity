import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['cdn.sanity.io'], // Add this line to allow Sanity's CDN
  },
  /* config options here */
};

export default nextConfig;
