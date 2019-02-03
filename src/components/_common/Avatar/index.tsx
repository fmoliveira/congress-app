import React, { useState } from "react"
import styled from "styled-components"

import getDefaultImage from "./getDefaultImage"

const RoundImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 100%;
`

interface IProps {
  gender: string
  facebookAccount: string
  twitterAccount: string
}

export const Avatar = ({ gender, facebookAccount, twitterAccount }: IProps) => {
  const [error, setError] = useState(false)
  const raiseError = () => setError(true)

  let src = getDefaultImage(gender)

  if (!error) {
    if (facebookAccount) {
      src = `https://avatars.io/facebook/${facebookAccount}`
    } else if (twitterAccount) {
      src = `https://avatars.io/twitter/${twitterAccount}`
    }
  }

  return <RoundImage src={src} alt="Avatar" onError={raiseError} />
}
