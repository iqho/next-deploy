/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "110.76.128.74",
        port: "8005", // Include the port if necessary
        pathname: "/uploads/**", // Path for product images
      },
      {
        protocol: "http",
        hostname: "110.76.128.74",
        port: "8005",
        pathname: "/images/**", // Path for general images
      },
    ],
  },
};

export default nextConfig;
