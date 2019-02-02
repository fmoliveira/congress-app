import React from "react"

interface IProps {
  feed: any[]
}

export const FeedList = ({ feed = [] }: IProps) => (
  <div>{feed.length} items</div>
)
