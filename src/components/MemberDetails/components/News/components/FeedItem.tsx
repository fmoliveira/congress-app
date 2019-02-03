import React from "react"
import styled from "styled-components"

import { Badge, Date } from "../../../../_common"
import { IFeedItem } from "../types"

const ItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  align-items: center;
  margin: 0.5em 0;
  color: #888888;
`

const Link = styled.a`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.9em;
  color: #999999;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

interface IProps {
  feed: IFeedItem
}

export const FeedItem = ({ feed }: IProps) => (
  <ItemWrapper>
    <Badge>
      <Date value={feed.pubDate} displayFormat="MMM D, YYYY" />
    </Badge>
    <Link href={feed.link} target="_blank" rel="noopener noreferrer">
      {feed.title}
    </Link>
  </ItemWrapper>
)
