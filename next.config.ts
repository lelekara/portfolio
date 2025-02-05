import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  assetPrefix: isProd ? "/portfolio/" : "", // Remplace "mon-repo" par le nom de ton dépôt
  images: {
    unoptimized: true, // Désactive l'optimisation des images de Next.js
  },
};

export default nextConfig;