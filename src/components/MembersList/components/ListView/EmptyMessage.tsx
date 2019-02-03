import React from "react"
import styled from "styled-components"

import search from "./search.svg"

const MessageWrapper = styled.div`
  margin: 3em;
  text-align: center;
  color: #555555;
`

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 150px;
`

const ErrorImage = styled.img`
  width: 80px;
  height: auto;
`

export const EmptyMessage = () => (
  <MessageWrapper>
    <ImageWrapper>
      <ErrorImage src={search} alt="No members found" />
    </ImageWrapper>
    <h2>It's empty here</h2>
    <p>There's no one with the selected filters.</p>
    <p>Please try modifying or removing some filters.</p>
  </MessageWrapper>
)
