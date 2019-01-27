import React from "react"
import styled from "styled-components"
import { map } from "ramda"

import { ListItem } from "./components"

const mockData = [
  { id: 1, name: "Alexander" },
  { id: 2, name: "Graham" },
  { id: 3, name: "Bell" },
  { id: 4, name: "Steve" },
  { id: 5, name: "Jobs" }
]

const toListItem = props => <ListItem key={props.id} {...props} />
const listMembers = map(toListItem)

const ListWrapper = styled.div``

export const MembersList = () => (
  <ListWrapper>{listMembers(mockData)}</ListWrapper>
)
