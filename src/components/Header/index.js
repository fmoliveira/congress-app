import React from "react"
import styled from "styled-components"

import { Logo } from ".."

const HeaderContainer = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
  text-align: center;
`

const Title = styled.h1`
  font-size: 1.5em;
`

export const Header = () => (
  <HeaderContainer>
    <Logo />
    <Title>React Programming Exercise</Title>
  </HeaderContainer>
)
