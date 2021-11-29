const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => ({
      ...webpackConfig,
      entry: {
        main: [
          env === 'development' && require.resolve('react-dev-utils/webpackHotDevClient'),
          paths.appIndexJs,
        ].filter(Boolean),
        content: './src/index.tsx',
      },
      output: {
        ...webpackConfig.output,
        filename: 'static/js/[name].js',
      },
      optimization: {
        ...webpackConfig.optimization,
        splitChunks: {
          cacheGroups: {
            default: false,
          },
        },
        runtimeChunk: false,
      },
      resolve: {
        ...webpackConfig.resolve,
        alias: {
          services: path.resolve(__dirname, '', 'src/services'),
          features: path.resolve(__dirname, '', 'src/features'),
          shared: path.resolve(__dirname, '', 'src/shared'),
        },
      },
    }),
  },
};
