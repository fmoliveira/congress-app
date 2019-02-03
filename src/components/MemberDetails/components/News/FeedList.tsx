import React from "react"

import { FeedItem } from "./FeedItem"

interface IProps {
  feed: any[]
}

export const FeedList = ({ feed = [] }: IProps) => (
  <div>
    {feed.map(i => (
      <FeedItem key={i.key} feed={i} />
    ))}
  </div>
)
