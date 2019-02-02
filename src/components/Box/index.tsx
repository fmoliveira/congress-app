import React from "react"
import styled from "styled-components"

import { SmallHeader } from "../index"

interface IProps {
  title: string
  children: React.ReactNode
}

const Wrapper = styled.div`
  margin: 0.5em;
`

const Container = styled.div`
  margin-top: 0.5em;
  padding: 0.5em;
  background-color: #ffffff;
`

export const Box = ({ title, children }: IProps) => (
  <Wrapper>
    <SmallHeader>{title}</SmallHeader>
    <Container>{children}</Container>
  </Wrapper>
)
