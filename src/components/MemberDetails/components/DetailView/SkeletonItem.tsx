import React from "react"
import styled from "styled-components"

import { CircleSkeleton, TextSkeleton } from "../../../_common"

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

const ColumnSkeleton = ({ children }: { children: React.ReactNode }) => (
  <div>
    <TextSkeleton>{children}</TextSkeleton>
  </div>
)

export const SkeletonItem = () => (
  <ItemWrapper>
    <AvatarWrapper>
      <CircleSkeleton />
      <TextSkeleton>Member Name</TextSkeleton>
    </AvatarWrapper>
    <ColumnSkeleton>Party Name</ColumnSkeleton>
    <ColumnSkeleton>CA</ColumnSkeleton>
    <ColumnSkeleton>Year</ColumnSkeleton>
    <SocialNetworksWrapper>
      <CircleSkeleton />
      <CircleSkeleton />
      <CircleSkeleton />
    </SocialNetworksWrapper>
  </ItemWrapper>
)
