import React from "react"
import shortId from "shortid"

import { IFeedItem } from "../types"
import { FeedItem } from "./index"

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
