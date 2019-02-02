import React from "react"
import styled from "styled-components"

import { Button } from "../index"
import plug from "./plug.svg"

interface IProps {
  retry: () => void
}

const MessageWrapper = styled.div`
  margin: 3em;
  text-align: center;
  color: #555555;
`

const ErrorImage = styled.img`
  width: 80px;
  height: auto;
`

export const ErrorMessage = ({ retry }: IProps) => (
  <MessageWrapper>
    <ErrorImage src={plug} alt="Something is off" />
    <h2>Something is off</h2>
    <p>Failed to get information of the congress members.</p>
    <p>Please check your internet connection and try again.</p>
    <div>
      <Button onClick={retry}>Try again</Button>
    </div>
  </MessageWrapper>
)
