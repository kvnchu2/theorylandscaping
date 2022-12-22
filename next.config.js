/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['csimg.nyc3.digitaloceanspaces.com']
  }
};

module.exports = nextConfig;
