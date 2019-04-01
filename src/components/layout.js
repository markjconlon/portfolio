/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: `100%`,
            padding: `0px 2.9rem 1.45rem`,
            paddingTop: 0,
            backgroundColor: `#25274d`,
            color: `white`,
          }}
        >
          <main>{children}</main>
          <footer
            style={{
              width: `100%`,
              display: `flex`,
              justifyContent: `space-around`,
            }}
          >
            <h5>
            © {new Date().getFullYear()} Mark Conlon
            </h5>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
