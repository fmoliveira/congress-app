import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

import { Avatar, PartyName, SocialNetworkLinks } from "../index"

const ItemLink = styled(Link)`
  display: grid;
  grid-template-columns: 2fr repeat(4, 1fr);
  align-items: center;
  margin: 0.75rem;
  padding: 0.5rem;
  background-color: #ffffff;
  color: inherit;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    background-color: #e7e9ef;
  }

  &:active {
    background-color: #e2e5ef;

    & > * {
      transform: translate(1px, 1px);
    }
  }
`

const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;

  * {
    margin-right: 0.5em;
  }
`

const Text = styled.div`
  font-size: 0.8em;
`

interface IProps {
  isLoading?: boolean
  id: string
  firstName: string
  lastName: string
  gender: string
  party: string
  state: string
  nextElection: string
  facebookAccount: string
  twitterAccount: string
  youtubeAccount: string
  history: any
}

export const ListItem = ({
  id,
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
  <ItemLink to={`members/${id}`}>
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
  </ItemLink>
)
