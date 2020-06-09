/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Mark Czernyk Portfolio`,
    description: `I'm Mark, a Software Engineer & Cryptocurrency Enthusiast with prior professional experience in Trading, Consulting, Sales, Operations & Law.
    I'm passionate about building stylish, intuitive products that solve problems & provide a pleasant user experience -- click to learn more about me.`,
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
