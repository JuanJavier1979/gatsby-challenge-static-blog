import React from "react"

const Footer = () => (
  <footer className="site-footer">
    <div className="container">
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer">Gatsby</a>
    </div>
  </footer>
)

export default Footer