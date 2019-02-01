import React from "react"

import { SocialIcon } from "./SocialIcon"

interface IProps {
  facebookAccount: string
  twitterAccount: string
  youtubeAccount: string
}

export const SocialNetworkLinks = ({
  facebookAccount,
  twitterAccount,
  youtubeAccount
}: IProps) => (
  <div>
    <SocialIcon type="facebook" handle={facebookAccount} />
    <SocialIcon type="twitter" handle={twitterAccount} />
    <SocialIcon type="youtube" handle={youtubeAccount} />
  </div>
)
