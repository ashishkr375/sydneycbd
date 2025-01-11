/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['sydneycbd.repair'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sydneycbd.repair',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',
        pathname: '/**',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig 