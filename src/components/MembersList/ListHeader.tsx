import React from "react"
import styled from "styled-components"

const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr repeat(4, 1fr);
  align-items: center;
  margin: 1rem;
  padding: 0 1rem;
  font-size: 0.7em;
  text-transform: uppercase;
  color: #a6adb4;
`

const HeaderText = styled.div``

export const ListHeader = () => (
  <HeaderWrapper>
    <HeaderText>Senators</HeaderText>
    <HeaderText>Party</HeaderText>
    <HeaderText>State/District</HeaderText>
    <HeaderText>Next Election</HeaderText>
    <HeaderText>Social Networks</HeaderText>
  </HeaderWrapper>
)
