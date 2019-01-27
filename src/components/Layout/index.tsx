import React, { Fragment } from "react";
import { createGlobalStyle } from "styled-components";

import { Container, Header } from "..";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: sans-serif;
    background-color: #f6f8f9;
  }
`;

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => (
  <Fragment>
    <GlobalStyle />
    <Header />
    <Container>{children}</Container>
  </Fragment>
);
