/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Mark Czernyk Portfolio`,
    description: `Background and Projects`,
    author: `Mark Czernyk`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Abril Fatface', 'Playfair Display', 'Quicksand']
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Mark Czernyk Portfolio',
        short_name: 'MC Portfolio',
        start_url: '/',
        background_color: '#04284a',
        theme_color: '#04284a',
        display: 'standalone',
        icon: 'src/images/icon.png'
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,

  ],
}
