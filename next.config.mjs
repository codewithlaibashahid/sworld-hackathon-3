/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{ hostname: "cdn.sanity.io" }]
    },
    eslint: {
        ignoreDuringBuilds: true
    },
    typescript: {
        ignoreBuildErrors: true
    }
};
module.exports = {
  experimental: {
    runtime: 'nodejs',  // Force using Node.js instead of Edge
  },
};
export default nextConfig;
