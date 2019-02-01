import React from "react"
import styled from "styled-components"

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

const RetryButton = styled.button`
  margin: 1em;
  padding: 0.75em 1em;
  border-radius: 20px;
  color: #ffffff;
  background-color: #7220d9;
  border: none;
  box-shadow: 1px 1px 10px #b89fd6;
  cursor: pointer;

  &:hover {
    background-color: #8c45e5;
  }

  &:active {
    transform: translate(1px, 1px);
  }
`

export const ErrorMessage = ({ retry }: IProps) => (
  <MessageWrapper>
    <ErrorImage src={plug} alt="Something is off" />
    <h2>Something is off</h2>
    <p>Failed to get information of the congress members.</p>
    <p>Please check your internet connection and try again.</p>
    <div>
      <RetryButton onClick={retry}>Try again</RetryButton>
    </div>
  </MessageWrapper>
)
