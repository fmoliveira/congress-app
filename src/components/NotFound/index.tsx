import React from "react"
import styled from "styled-components"

import { LinkButton } from "../index"
import map from "./map.svg"

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

export const NotFound = () => (
  <MessageWrapper>
    <ImageWrapper>
      <ErrorImage src={map} alt="Page Not Found" />
    </ImageWrapper>
    <h2>Are you lost?</h2>
    <p>Uh oh, that's embarrassing. I can't find the page you're looking for.</p>
    <p>How about going straight to the start page?</p>
    <div>
      <LinkButton to="/">Go to start page</LinkButton>
    </div>
  </MessageWrapper>
)
