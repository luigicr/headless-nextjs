/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'images.ctfassets.net',
        port: '',
      },
    ],
  },
}

module.exports = nextConfig
