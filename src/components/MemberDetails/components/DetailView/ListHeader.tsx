import React from "react"
import styled from "styled-components"

import { SmallHeader } from "../../../_common"

const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr repeat(4, 1fr);
  align-items: center;
  margin: 0.75rem;
  padding: 0 0.5rem;
  padding-top: 0.5em;
`

export const ListHeader = () => (
  <HeaderWrapper>
    <SmallHeader>Senator</SmallHeader>
    <SmallHeader>Party</SmallHeader>
    <SmallHeader>State/District</SmallHeader>
    <SmallHeader>Next Election</SmallHeader>
    <SmallHeader>Social Networks</SmallHeader>
  </HeaderWrapper>
)
