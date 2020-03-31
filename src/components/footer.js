import React from "react"
import { Link } from "gatsby";

const Footer = () => (
  <footer className="site-footer">
    <div className="container mx-auto py-24 px-6 text-center text-xs">
      <nav className="mb-6 text-base font-bold">
        <ul className="flex items-center justify-center">
          <li className="px-3"><Link to="/">Home</Link></li>
          <li className="px-3"><Link to="/about/">About</Link></li>
          <li className="px-3"><a href="https://github.com/JuanJavier1979" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li className="px-3"><a href="https://twitter.com/JuanJavier1979" target="_blank" rel="noopener noreferrer">Twitter</a></li>
        </ul>
      </nav>
      © {new Date().getFullYear()}, Juan Javier Moreno<br />
      Built with <a href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer">Gatsby</a>
    </div>
  </footer>
)

export default Footer