import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
        <main className="main">{children}</main>
        <footer className="footer">
          <p className="footer--text">Created by <a className="footer--link" href="http://hincka.pl/">Paweł Hincka</a>  © {new Date().getFullYear()}</p>
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
