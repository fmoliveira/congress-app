import React, { Fragment } from "react"
import { node } from "prop-types"

import Header from "../Header"

const Layout = ({ children }) => (
  <Fragment>
    <Header />
    <main>{children}</main>
  </Fragment>
)

Layout.propTypes = {
  children: node
}

export default Layout
