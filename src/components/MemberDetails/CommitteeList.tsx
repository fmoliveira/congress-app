import React from "react"
import styled from "styled-components"

import { CommitteeItem } from "./CommitteeItem"

interface IProps {
  items: any[]
}

const Container = styled.div`
  margin-bottom: 2em;
  color: #999999;
`

export const CommitteeList = ({ items }: IProps) => (
  <Container>
    {items.map(i => (
      <CommitteeItem key={i.code} {...i} />
    ))}
  </Container>
)
