import React, { Fragment } from "react";
import { createGlobalStyle } from "styled-components";

import { Container, Header } from "..";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: sans-serif;
    background-color: #f6f8f9;
  }
`;

interface IProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: IProps) => (
  <Fragment>
    <GlobalStyle />
    <Header />
    <Container>{children}</Container>
  </Fragment>
);
