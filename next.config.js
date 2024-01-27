/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.pngitem.com",
        port: "",
        pathname: "/storage/**",
      },
    ],
  },
};

module.exports = nextConfig;
