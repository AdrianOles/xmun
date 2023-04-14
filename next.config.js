/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      "1000logos.net",
      "cdn-icons-png.flaticon.com",
      "i.pinimg.com",
      "upload.wikimedia.org",
      "i.ytimg.com",
      "isp.hcdsb.org",
      "www.ourcommons.ca",
      "www.nti.org",
      "media.socastsrm.com"
    ]
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.pdf$/,
      use: [
        {
          loader: 'file-loader',
        }
      ]
    })
    return config
  },
}
