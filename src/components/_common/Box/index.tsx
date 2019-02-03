import React from "react"
import styled from "styled-components"

import { SmallHeader } from "../index"

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 0.5em;
`

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 0.5em;
  padding: 0.5em;
  background-color: #ffffff;
  overflow-y: auto;
`

interface IProps {
  title: string
  children: React.ReactNode
}

export const Box = ({ title, children }: IProps) => (
  <Wrapper>
    <SmallHeader>{title}</SmallHeader>
    <Container>{children}</Container>
  </Wrapper>
)
