import React from "react"

import { TextSkeleton } from "../LoadingSkeleton"

const SKELETON_ITEMS_AMOUNT = 5

const items = new Array(SKELETON_ITEMS_AMOUNT).fill(0).map((_, idx) => idx)

export const SkeletonNews = () => (
  <div>
    {items.map(i => (
      <TextSkeleton key={i} fullWidth={true}>
        Loading
      </TextSkeleton>
    ))}
  </div>
)
