import React from "react"
import styled from "styled-components"

const ItemWrapper = styled.div`
  margin: 1em;
  padding: 1em;
  background-color: #ffffff;
`

export const ListItem = ({ id, name }) => (
  <ItemWrapper>
    #{id} - {name}
  </ItemWrapper>
)
