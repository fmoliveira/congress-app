import React from "react"

import { FeedItem } from "./FeedItem"
import { IFeedItem } from "./types"

interface IProps {
  feed: IFeedItem[]
}

export const FeedList = ({ feed = [] }: IProps) => (
  <div>
    {feed.map(i => (
      <FeedItem key={i.key} feed={i} />
    ))}
  </div>
)
