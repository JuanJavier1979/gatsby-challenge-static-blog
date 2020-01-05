import React, { Fragment } from "react"
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
    <div className="font-serif min-h-screen text-gray-900">
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