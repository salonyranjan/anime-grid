/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { 
        protocol: "https", 
        hostname: "i.pinimg.com", 
        pathname: "/**" 
      },
      { 
        protocol: "https", 
        hostname: "cdn.myanimelist.net", 
        pathname: "/images/anime/**" 
      },
      {
        protocol: 'https',
        hostname: 'onepunchman-scans.online',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    serverActions: {
      // Limit actions to your local dev environment for now
      allowedOrigins: ["localhost:3000"], 
    },
  },
};

module.exports = nextConfig;
