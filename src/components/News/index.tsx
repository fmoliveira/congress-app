import React, { PureComponent } from "react"

import { Box } from "../index"
import { SkeletonNews } from "./SkeletonNews"

interface IProps {
  feed: string
}

export class News extends PureComponent<IProps> {
  public render() {
    return (
      <Box title="Latest News">
        <SkeletonNews />
      </Box>
    )
  }
}
