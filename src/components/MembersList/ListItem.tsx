import React from "react"
import styled from "styled-components"

import { Avatar, PartyName, SocialNetworkLinks } from "../index"

const ItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr repeat(4, 1fr);
  align-items: center;
  margin: 0.75rem;
  padding: 0.5rem;
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
  gender: string
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
  gender,
  party,
  state,
  nextElection,
  twitterAccount,
  facebookAccount,
  youtubeAccount
}: IProps) => (
  <ItemWrapper>
    <AvatarWrapper>
      <Avatar
        gender={gender}
        facebookAccount={facebookAccount}
        twitterAccount={twitterAccount}
      />
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