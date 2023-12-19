/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    output: 'export',
  poweredByHeader: process.env.NODE_ENV === 'development',
  reactStrictMode: process.env.NODE_ENV === 'development',
    //experimental: {
    // appDir: true,
    //},
  }