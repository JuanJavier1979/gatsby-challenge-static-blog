/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Gatsby Challenge - Static Blog',
    author: '@JuanJavier1979'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images'
        ]
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
          fonts: [
              {
                  family: `Noto+Serif`,
                  variants: [`400`, `400i`, `700`]
              },
              {
                  family: `Amiri`,
                  variants: [`400`, `700`]
              },
              {
                  family: `Lato`,
                  variants: [`400`, `700`]
              }
          ],
      },
  },
  ]
}
