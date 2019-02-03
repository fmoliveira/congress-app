import React from "react"
import styled from "styled-components"

import { Date } from "../_common"

const ItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 2fr repeat(3, 1fr);
  height: 32px;
  align-items: center;
  margin: 0.75rem;
  padding: 0.5rem;
  background-color: #ffffff;
  color: inherit;
`

const Text = styled.div`
  font-size: 0.8em;
`

interface IProps {
  code: string
  name: string
  side: string
  title: string
  rankInParty: string
  beginDate: string
  endDate: string
}

export const CommitteeItem = ({
  code,
  name,
  side,
  title,
  rankInParty,
  beginDate,
  endDate
}: IProps) => (
  <ItemWrapper>
    <Text>{code}</Text>
    <Text>{name}</Text>
    <Text>
      {beginDate && !endDate && "from "}
      <Date value={beginDate} displayFormat="MM/DD/YYYY" />
      {beginDate && endDate && " to "}
      {!beginDate && endDate && "until "}
      <Date value={endDate} displayFormat="MM/DD/YYYY" />
    </Text>
    <Text>{title}</Text>
    <Text>{side}</Text>
    <Text>{rankInParty}</Text>
  </ItemWrapper>
)
