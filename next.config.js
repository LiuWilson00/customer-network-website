/** @type {import('next').NextConfig} */
console.log(process.env.NEXT_PUBLIC_API_HOST);
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
};

module.exports = nextConfig;
