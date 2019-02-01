import React from "react"
import styled from "styled-components"

import { PartyName } from "../index"
import { SocialNetworkLinks } from "../SocialNetworkLinks"
import { Avatar } from "./Avatar"

const ItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr repeat(4, 1fr);
  align-items: center;
  margin: 1rem;
  padding: 1rem;
  background-color: #ffffff;
`

const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-right: 0.5em;
  }
`

const Text = styled.div`
  font-size: 0.8em;
`

interface IProps {
  firstName: string
  lastName: string
  party: string
  state: string
  nextElection: string
  facebookAccount: string
  twitterAccount: string
  youtubeAccount: string
}

export const ListItem = ({
  firstName,
  lastName,
  party,
  state,
  nextElection,
  twitterAccount,
  facebookAccount,
  youtubeAccount
}: IProps) => (
  <ItemWrapper>
    <AvatarWrapper>
      <Avatar />
      <Text>
        {firstName} {lastName}
      </Text>
    </AvatarWrapper>
    <Text>
      <PartyName id={party} />
    </Text>
    <Text>{state}</Text>
    <Text>{nextElection}</Text>
    <Text>
      <SocialNetworkLinks
        facebookAccount={facebookAccount}
        twitterAccount={twitterAccount}
        youtubeAccount={youtubeAccount}
      />
    </Text>
  </ItemWrapper>
)
