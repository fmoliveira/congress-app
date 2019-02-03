import React from "react"
import shortId from "shortid"

import { FeedItem } from "./FeedItem"
import { IFeedItem } from "./types"

interface IProps {
  feed: IFeedItem[]
}

export const FeedList = ({ feed = [] }: IProps) => (
  <div>
    {feed.map(i => (
      <FeedItem key={shortId.generate()} feed={i} />
    ))}
  </div>
)
