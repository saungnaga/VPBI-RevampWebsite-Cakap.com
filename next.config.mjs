/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "s3.ap-southeast-3.amazonaws.com",
      "s3.ap-southeast-1.amazonaws.com",
      "cdn.cursor-trails.com",
    ],
  },
};

export default nextConfig;
