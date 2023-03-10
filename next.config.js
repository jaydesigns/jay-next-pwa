const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  scope: '/app',
  sw: 'sw.js',
  skipWaiting: true
  //...
})

module.exports = withPWA({
  // next.js config
})

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/dwupnysam/image/upload/v1673131749/Portfolio/**',
      },
    ],
  },
}