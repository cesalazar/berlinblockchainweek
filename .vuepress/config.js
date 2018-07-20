module.exports = {
  base: '/berlinblockchainweek/',
  title: 'Berlin Blockchain Week',
  themeConfig: {
    nav: [
      {
        text: 'Events',
        link: '/events/'
      },
      {
        text: 'Calendar',
        link: '/calendar/'
      },
    ]
  },
  // TODO: fix path of assets (not loading)
  // chainWebpack: (config, isServer) => {
  //   config.module
  //       .rule('images')
  //         .test(/\.(png|jpe?g|gif)(\?.*)?$/)
  //         .use('url-loader')
  //           .loader('url-loader')
  //           .options({
  //             limit: 10000,
  //             name: `assets/img/[name].[ext]`
  //           })
  // }
}
