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
    <div className="flex flex-col min-h-screen text-gray-900">
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