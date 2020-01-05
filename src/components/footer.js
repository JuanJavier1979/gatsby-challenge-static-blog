import React from "react"

const Footer = () => (
  <footer className="site-footer bg-gray-300">
    <div className="container mx-auto p-6">
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </div>
  </footer>
)

export default Footer