/** @type {import('next').NextConfig} */
// const nextConfig = {
//     compress: true,
// };

// export default nextConfig;

const nextConfig = {
  compress: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'admin.ig-smart.com',
      },
    ],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization.minimize = true;
    }
    return config;
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=311536000' , 
          },
        ],
      },
    ];
  },
};

export default nextConfig;
