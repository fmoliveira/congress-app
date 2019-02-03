import React, { Fragment } from "react"

import { size } from "lodash"
import shortId from "shortid"
import styled from "styled-components"

import { SectionTitle } from "../../../_common"
import { CommitteeHeader } from "./CommitteeHeader"
import { CommitteeItem } from "./CommitteeItem"

const Container = styled.div`
  margin-bottom: 2em;
  color: #999999;
`

const EmptyMessage = styled.div`
  margin: 1em;
  font-size: 0.9em;
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
      {size(items) === 0 && (
        <EmptyMessage>
          No roles for this{" "}
          {title === "Committees" ? "committee" : "sub-commitee"}.
        </EmptyMessage>
      )}
      {items.map(i => (
        <CommitteeItem key={shortId.generate()} {...i} />
      ))}
    </Container>
  </Fragment>
)
