/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "pbs.twimg.com",
      "img.lemde.fr",
      "images.theconversation.com",
      "prd-rteditorial.s3.us-west-2.amazonaws.com",
      "isp.hcdsb.org",
      "lh3.googleusercontent.com"
    ]
  }
}

module.exports = nextConfig
