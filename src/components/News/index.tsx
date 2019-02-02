import React from "react"

import { Box } from "../index"
import FeedReader from "./FeedReader"

interface IProps {
  memberId: string
  feedUrl: string
}

export const News = ({ memberId, feedUrl }: IProps) => (
  <Box title="Latest News">
    {!feedUrl && <div>This member has no news feed available.</div>}
    {feedUrl && <FeedReader memberId={memberId} feedUrl={feedUrl} />}
  </Box>
)
