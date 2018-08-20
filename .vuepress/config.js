module.exports = {
  // Use the name of the repo if the content is served from GitHub Pages
  // base: '/berlinblockchainweek/',
  // Leave the base as '/' if serving the content from a custom domain
  base: '/',
  title: 'Berlin Blockchain Week',
  head: [
    ['link', { rel: 'manifest', href: 'manifest.json' }],
    ['link', { rel: 'icon', href: 'logo.png' }],
    ['meta', { name: 'viewport', content: `width=device-width,initial-scale=1,
      minimum-scale=1,maximum-scale=1,user-scalable=no` }]
  ],
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
      {
        text: 'Submit an Event',
        link: 'https://github.com/cesalazar/berlinblockchainweek/issues/new'
      }
    ],
    logo: 'logo.png',
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
    editLinks: true
    // custom text for edit link. Defaults to "Edit this page"
    // editLinkText: 'Help us improve this page!'
  }
}
