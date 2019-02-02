import React, { PureComponent } from "react"
import styled from "styled-components"

import { LinkButton } from "../index"
import bug from "./bug.svg"

interface IProps {
  clearError: () => void
}

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

const ErrorMessage = ({ clearError }: IProps) => (
  <MessageWrapper>
    <ImageWrapper>
      <ErrorImage src={bug} alt="Error" />
    </ImageWrapper>
    <h2>Bugsieesss</h2>
    <p>Pardon sir, there was nothing I could do to prevent this error!</p>
    <p>But someone skilled enough will assist you soon!</p>
    <div>
      <LinkButton to="/" onClick={clearError}>
        Go to start page
      </LinkButton>
    </div>
  </MessageWrapper>
)

export class ErrorBoundary extends PureComponent {
  public state = {
    hasError: false
  }

  public componentDidCatch() {
    this.setState({ hasError: true })
  }

  public render() {
    if (this.state.hasError) {
      return <ErrorMessage clearError={this.clearError} />
    }
    return this.props.children
  }

  private clearError() {
    this.setState({ hasError: false })
  }
}
