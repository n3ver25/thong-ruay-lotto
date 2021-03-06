// gatsby-config.js file

module.exports = {
  siteMetadata: {
    title: 'Thong Ruay Lotto',
    description: 'Tong ruay ทองรวย แทงหวยออนไลน์ ✓ หวยรัฐบาล ครบทุกหวย หวยรัฐบาล หวยหุ้น หวยลาว หวยฮานอย และหวยยี่กี ยอดนิยม ฝาก-ถอนเร็ว สะสมแต้ม รับฟรีเครดิต VIP.',
  },
  plugins: [
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: "thong-ruay-lotto",
        schemas: {
          homepage: require('./custom_types/homepage.json'),
          navigation: require('./custom_types/navigation.json'),
          page: require('./custom_types/page.json'),
          announcepage: require('./custom_types/announcepage.json'),
          announce: require('./custom_types/announce.json'),
          contact: require('./custom_types/contact.json'),
          promotion_main: require('./custom_types/promotion_main.json'),
          promotion_sup: require('./custom_types/promotion_sup.json'),
          rules: require('./custom_types/rules.json'),
          about: require('./custom_types/about.json'),
          manual_user: require('./custom_types/manual_user.json'),
        },
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/thonglottologo-logo.png',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [`Lato\:400,400,700,700i,900`, `Amiri\:400,400,700,700i`],
      },
    },
  ],
}
