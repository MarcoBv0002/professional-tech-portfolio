import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export", // 👈 ESTA ES LA CLAVE
};

export default nextConfig;