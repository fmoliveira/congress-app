import React, { Fragment } from "react"
import styled, { createGlobalStyle } from "styled-components"

import { Header } from ".."

const GlobalStyle = createGlobalStyle`
  body {
    font-family: sans-serif;
    background-color: #f6f8f9;
  }
`

const Container = styled.div`
  margin: 0 auto;
  padding: 1em;
  width: 1280px;
`

interface IProps {
  children: React.ReactNode
}

export const Layout = ({ children }: IProps) => (
  <Fragment>
    <GlobalStyle />
    <Header />
    <Container>{children}</Container>
  </Fragment>
)
