import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby";
import { useTheme } from "../utils/themeContext"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  const { theme } = useTheme()
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className={`content-transition duration-200 main-layout flex flex-col min-h-screen ${theme}`}>
      <Header siteTitle={site.siteMetadata.title} />
      <main className="flex flex-1 flex-col">{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout