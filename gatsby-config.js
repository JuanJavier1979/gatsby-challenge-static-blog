/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'JuanJavier.Blog',
    description: 'Home of Juan Javier thoughts.',
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
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/blog/`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 800,
            }
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: "language-",
              showLineNumbers: false,
            }
          }
        ]
      }
    },
    '@pauliescanlon/gatsby-mdx-embed',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: "JuanJavier.Blog",
        short_name: "JJ.Blog",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#6b37bf",
        display: "standalone",
        icon: "static/logo-icon.png",
      }
    },
    'gatsby-plugin-offline',
  ]
}
