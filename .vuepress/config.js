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
    ],
    logo: 'logo_berlinblockchainweek.png',
    // Assumes GitHub. Can also be a full GitLab url.
    repo: 'cesalazar/berlinblockchainweek',
    // Customising the header label
    // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    // repoLabel: 'Contribute!',
    // Optional options for generating "Edit this page" link
    // if your docs are in a different repo from your main project:
    // docsRepo: 'vuejs/vuepress',
    // if your docs are not at the root of the repo:
    // docsDir: 'docs',
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: 'master',
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    // editLinkText: 'Help us improve this page!'
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
