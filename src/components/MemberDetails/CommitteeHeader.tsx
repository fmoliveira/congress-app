import React from "react"
import styled from "styled-components"

import { SmallHeader } from "../index"

const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 2fr repeat(3, 1fr);
  align-items: center;
  margin: 0 0.75rem;
  padding: 0 0.5rem;
  padding-top: 0.5em;
`

export const CommitteeHeader = () => (
  <HeaderWrapper>
    <SmallHeader>Code</SmallHeader>
    <SmallHeader>Commmittee</SmallHeader>
    <SmallHeader>Period</SmallHeader>
    <SmallHeader>Title</SmallHeader>
    <SmallHeader>Side</SmallHeader>
    <SmallHeader>Rank in party</SmallHeader>
  </HeaderWrapper>
)
