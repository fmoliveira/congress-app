import React, { Fragment } from "react"
import shortId from "shortid"
import styled from "styled-components"

import { SectionTitle } from "../../../_common"
import { CommitteeHeader } from "./CommitteeHeader"
import { CommitteeItem } from "./CommitteeItem"

const Container = styled.div`
  margin-bottom: 2em;
  color: #999999;
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
        <CommitteeItem key={shortId.generate()} {...i} />
      ))}
    </Container>
  </Fragment>
)
