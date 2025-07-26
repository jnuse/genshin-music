/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  // 重点：添加下面的 images 配置块来禁用图片优化
  images: {
    unoptimized: true,
  },

  reactStrictMode: false,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    esmExternals: 'loose'
  },
  webpack: (config, { isServer, dev }) => {
    config.experiments = {
      asyncWebAssembly: true,
      layers: true,
      topLevelAwait: true
    }
    config.output.publicPath = '/_next/'
    return config
  },
}

export default nextConfig;
