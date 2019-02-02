import React from "react"

import { SkeletonItem } from "./SkeletonItem"

const SKELETON_ITEMS_AMOUNT = 15

const items = new Array(SKELETON_ITEMS_AMOUNT).fill(0).map((_, idx) => idx)

export const SkeletonList = () => (
  <div>
    {items.map(i => (
      <SkeletonItem key={i} />
    ))}
  </div>
)
