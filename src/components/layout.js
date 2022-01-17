import React from "react"
import PropTypes from "prop-types"

import "./bootstrap.min.css"
import "./layout.css"

import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <>
      {children}
      <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
