import React from "react"

import { TextSkeleton } from "../../../../_common"

const SKELETON_ITEMS_AMOUNT = 5

const items = new Array(SKELETON_ITEMS_AMOUNT).fill(0).map((_, idx) => idx)

const SkeletonNews = () => (
  <div>
    {items.map(i => (
      <TextSkeleton key={i} fullWidth={true}>
        Loading
      </TextSkeleton>
    ))}
  </div>
)

export default SkeletonNews
