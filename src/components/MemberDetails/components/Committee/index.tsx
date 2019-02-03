import React, { Fragment } from "react"
import styled from "styled-components"

import { CommitteeHeader } from "./CommitteeHeader"
import { CommitteeItem } from "./CommitteeItem"

const Container = styled.div`
  margin-bottom: 2em;
  color: #999999;
`

const SectionTitle = styled.div`
  margin: 0 1em;
  color: #555555;
`

interface IProps {
  title: string
  items: any[]
}

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
