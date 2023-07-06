/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["cdn.sanity.io"],
  },
  trailingSlash: true,
  output: "export",
};

module.exports = nextConfig;
