// next.config.js
const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')

module.exports = withPlugins([

  [optimizedImages],
], { useFileSystemPublicRoutes: true }, {
  // async redirects () {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/karim',
  //       permanent: true,
  //     },
  //   ]
  // },
  useFileSystemPublicRoutes: true,
  dev: true
})

// module.exports = {
//   withPlugins: withPlugins([[optimizedImages]]),
//
// }

