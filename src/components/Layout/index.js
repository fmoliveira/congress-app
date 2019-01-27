import React, { Fragment } from "react"
import { node } from "prop-types"
import { createGlobalStyle } from "styled-components"

import { Container, Header } from ".."

const GlobalStyle = createGlobalStyle`
  body {
    font-family: sans-serif;
    background-color: #f6f8f9;
  }
`

export const Layout = ({ children }) => (
  <Fragment>
    <GlobalStyle />
    <Header />
    <Container>{children}</Container>
  </Fragment>
)

Layout.propTypes = {
  children: node
}
