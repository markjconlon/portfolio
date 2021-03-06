import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#25274d`,
      // paddingBottom: `1.45rem`,
      borderBottom: `4px #AAABB8 solid`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        padding: `1.45rem 1.0875rem`,
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>

      <h1 style={{ margin: 0 }}>
        <Link
          to="/blog"
          style={{
            color: 'white',
            textDecoration: 'none',
            border: '1px solid white',
            borderRadius: '5px',
            padding: '0 5px',
          }}
        >
          BLOG
        </Link>
      </h1>
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
