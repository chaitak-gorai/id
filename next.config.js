const withImages = require('next-images');
module.exports = withImages({
  eslint: { ignoreDuringBuilds: true },
  reactStrictMode: true,
  images: {
    domains: ['photos.google.com'],
    disableStaticImages: true,
  },
});
