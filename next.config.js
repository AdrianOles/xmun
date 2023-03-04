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
      "www.ourcommons.ca"
    ]
  },
   webpack: (config) => {
    config.module.rules.push({
      test: /\.pdf$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
    });
    return config;
  }
}
