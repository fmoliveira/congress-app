import React from "react"
import styled from "styled-components"

import { CircleSkeleton, TextSkeleton } from "../index"

const ItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr repeat(4, 1fr);
  align-items: center;
  margin: 0.75rem;
  padding: 0.5rem;
  background-color: #ffffff;
`

const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;

  * {
    margin-right: 0.5em;
  }
`

const SocialNetworksWrapper = styled.div`
  * {
    margin: 0 4px;
  }
`

export const SkeletonItem = () => (
  <ItemWrapper>
    <AvatarWrapper>
      <CircleSkeleton />
      <TextSkeleton>Member Name</TextSkeleton>
    </AvatarWrapper>
    <div>
      <TextSkeleton>Party Name</TextSkeleton>
    </div>
    <div>
      <TextSkeleton>CA</TextSkeleton>
    </div>
    <div>
      <TextSkeleton>Year</TextSkeleton>
    </div>
    <SocialNetworksWrapper>
      <CircleSkeleton />
      <CircleSkeleton />
      <CircleSkeleton />
    </SocialNetworksWrapper>
  </ItemWrapper>
)
