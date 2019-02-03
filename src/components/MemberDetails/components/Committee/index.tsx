import React, { Fragment } from "react"
import styled from "styled-components"

import { CommitteeHeader } from "./CommitteeHeader"
import { CommitteeItem } from "./CommitteeItem"

interface IProps {
  title: string
  items: any[]
}

const Container = styled.div`
  margin-bottom: 2em;
  color: #999999;
`

const SectionTitle = styled.div`
  margin: 0 1em;
  color: #555555;
`

export const Committee = ({ title, items }: IProps) => (
  <Fragment>
    <SectionTitle>{title}</SectionTitle>
    <CommitteeHeader />
    <Container>
      {items.map(i => (
        <CommitteeItem key={i.code} {...i} />
      ))}
    </Container>
  </Fragment>
)
