import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby";

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
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
    <div className="main-layout">
      <Header siteTitle={site.siteMetadata.title} />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout