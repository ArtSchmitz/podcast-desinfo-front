/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_KEY: 'https://podcast-desinfo-api-production.up.railway.app/api'
  },
}

module.exports = nextConfig
