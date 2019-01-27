import React from "react"
import { node } from "prop-types"
import styled, { createGlobalStyle } from "styled-components"

import Header from "../Header"
import Container from "../Container"

const GlobalStyle = createGlobalStyle`
  body {
    font-family: sans-serif;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Layout = ({ children }) => (
  <Wrapper>
    <GlobalStyle />
    <Header />
    <Container>{children}</Container>
  </Wrapper>
)

Layout.propTypes = {
  children: node
}

export default Layout
