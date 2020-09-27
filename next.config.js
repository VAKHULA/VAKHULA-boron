const withPlugins = require('next-compose-plugins');
const withPWA = require('next-pwa')

const withLess = require('@zeit/next-less')
const withCSS = require('@zeit/next-css')

const { WebpackBundleSizeAnalyzerPlugin } = require('webpack-bundle-size-analyzer');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const { ANALYZE, /* NODE_ENV */ } = process.env;
// const isProd = NODE_ENV === 'production';


module.exports = withPlugins([
  // [withPWA, {
  //   pwa: {
  //     dest: 'public',
  //     runtimeCaching: [
  //       {
  //         urlPattern: /^https?.*/,
  //         handler: 'NetworkFirst',
  //         options: {
  //           cacheName: 'offlineCache',
  //           expiration: {
  //               maxEntries: 200,
  //               maxAgeSeconds: 60 // 365 days
  //           }
  //         }
  //       }
  //     ]
  //   }
  // }],

  [withLess],

  [withCSS],

  [
    withBundleAnalyzer
  ],
],
{
  webpack: (config) => {

    if (ANALYZE) {
      config.plugins.push(new WebpackBundleSizeAnalyzerPlugin('stats.txt'));
    }

    config.module.rules.push(
      {
          test: /\.md$/,
          loader: 'frontmatter-markdown-loader',
          options: { mode: ['react-component'] }
      }
    )

    return config;
  },
  exportPathMap: async function(
    defaultPathMap,
    { dev }
  ) {
    if (dev) {
      return defaultPathMap;
    }

    return defaultPathMap;
  },
}
);
