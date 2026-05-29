/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Static export for GitHub Pages (served at the user-pages root, so no basePath).
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error"] } : false,
  },
};

export default nextConfig;
