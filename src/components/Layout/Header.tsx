import React from "react"
import styled from "styled-components"

const HeaderContainer = styled.header`
  background-color: #222;
  padding: 20px;
  color: white;
  text-align: center;
`

const Title = styled.h1`
  font-size: 1.5em;
`

export const Header = () => (
  <HeaderContainer>
    <Title>Congress App</Title>
  </HeaderContainer>
)
