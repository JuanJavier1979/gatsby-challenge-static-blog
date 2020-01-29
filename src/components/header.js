import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby";

import jjLogo from "../../static/logo.svg";

const Header = ({ siteTitle }) => (
  <header className="site-header">
    <div className="container">
      <div className="logo">
        <Link to="/" className="inline-block">
          <span className="font-bold text-xl tracking-tight">
            <img alt={siteTitle} src={jjLogo} />
          </span>
        </Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header