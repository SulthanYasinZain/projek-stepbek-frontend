import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "project-stepbek-backend-production.up.railway.app",
        port: "",
        pathname: "/storage/**",
      },
    ],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
