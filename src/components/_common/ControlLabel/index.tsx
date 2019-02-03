import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  display: inline-block;
`

const LabelDescription = styled.div`
  margin: 0.5em 0;
  font-size: 0.8em;
  color: #858c95;
`

interface IProps {
  description: string
  children: React.ReactNode
}

export const ControlLabel = ({ description, children }: IProps) => (
  <Wrapper>
    <label>
      <LabelDescription>{description}</LabelDescription>
      {children}
    </label>
  </Wrapper>
)
