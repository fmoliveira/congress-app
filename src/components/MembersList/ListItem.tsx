import React from "react"
import styled from "styled-components"

const ItemWrapper = styled.div`
  margin: 1em;
  padding: 1em;
  background-color: #ffffff;
`

interface IProps {
  id: number
  firstName: string
  lastName: string
}

export const ListItem = ({ id, firstName, lastName }: IProps) => (
  <ItemWrapper>
    #{id} - {firstName} {lastName}
  </ItemWrapper>
)
