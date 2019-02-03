import React from "react"

import { size } from "lodash"
import shortId from "shortid"

import { IFeedItem } from "../types"
import { FeedItem } from "./index"

interface IProps {
  feed: IFeedItem[]
}

const FeedList = ({ feed = [] }: IProps) => (
  <div>
    {size(feed) === 0 && <div>No news shared recently.</div>}
    {feed.map(i => (
      <FeedItem key={shortId.generate()} feed={i} />
    ))}
  </div>
)

export default FeedList
