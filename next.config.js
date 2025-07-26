/** @type {import('next').NextConfig} */
const nextConfig = {
  // 重点：添加下面这两行来启用静态导出
  output: 'export',
  basePath: '/genshin-music',

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
    // 注意：在 'export' 模式下，这个 publicPath 不再是必需的，但保留也无妨
    config.output.publicPath = '/_next/'
    return config
  },
}
export default nextConfig;
