/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['csimg.nyc3.digitaloceanspaces.com', 'images.ctfassets.net']
  }
};

module.exports = nextConfig;
