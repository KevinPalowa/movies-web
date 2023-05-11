/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "images5.alphacoders.com",
        port: "",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
