import React from "react"
import styled from "styled-components"

import icons from "./icons"
import { makeUrl } from "./makeUrl"

interface IProps {
  type: string
  handle: string
}

interface IStyle {
  disabled?: boolean
}

const IconStyle = styled.img`
  margin: 0 4px;
  width: 32px;
  height: 32px;
  filter: ${(props: IStyle) => (props.disabled ? "grayscale(100%)" : "none")};
  opacity: ${(props: IStyle) => (props.disabled ? 0.3 : 0.95)};
  cursor: ${(props: IStyle) => (props.disabled ? "not-allowed" : "pointer")};

  &:hover {
    opacity: ${(props: IStyle) => (props.disabled ? 0.3 : 1)};
  }

  &:active {
    transform: translate(1px, 1px);
  }
`

export const SocialIcon = ({ type, handle }: IProps) => {
  const currentIcon = icons[type]

  if (!handle) {
    return <IconStyle disabled={true} src={currentIcon} alt={handle} />
  }

  return (
    <a href={makeUrl(type, handle)} target="_blank" rel="noopener noreferrer">
      <IconStyle src={currentIcon} alt={handle} />
    </a>
  )
}
