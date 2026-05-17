import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.pokemondb.net",
      },
      {
        protocol: "https",
        hostname: "**.vercel.app",
      },
    ],
  },
  trailingSlash: true,
};

export default nextConfig;
