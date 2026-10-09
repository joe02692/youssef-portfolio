import type { NextConfig } from "next";

// GitHub Pages serves this site from /youssef-portfolio, so the deploy workflow
// sets NEXT_PUBLIC_BASE_PATH. Locally (and on Vercel) it is unset and the site
// lives at the root.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Static HTML in ./out, which is what GitHub Pages hosts.
  output: "export",
  basePath,
  // No image optimisation server exists on a static host.
  images: { unoptimized: true },
};

export default nextConfig;
