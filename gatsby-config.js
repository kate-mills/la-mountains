module.exports = {
  siteMetadata: {
    title: `Los Angeles Mountains`,
    description: ``,
    author: `@katepycoder`,
  },
  plugins: [
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `los angeles mountains`,
        short_name: `la mountains`,
        start_url: `/`,
        background_color: `#2d1e1f`,
        theme_color: `#2d1e1f`,
        display: `minimal-ui`,
        icon: `src/images/hero-logo.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
