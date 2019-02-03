import React from "react"

import { RequestStatusType } from "../../../../reducers/requestStatus"

import { ErrorMessage, Paginator } from "../../../_common"
import { IMemberInfo } from "../../types"
import { ListHeader } from "./ListHeader"
import { ListItem } from "./ListItem"
import { SkeletonList } from "./SkeletonList"

interface IProps {
  listMembers: () => void
  members: IMemberInfo[]
  scrollToTop: () => void
  status: RequestStatusType
}

const ListView = ({ listMembers, members, scrollToTop, status }: IProps) => (
  <div>
    {status !== RequestStatusType.Error && <ListHeader />}
    {status === RequestStatusType.Error && <ErrorMessage retry={listMembers} />}
    {status === RequestStatusType.Loading && <SkeletonList />}
    {status === RequestStatusType.Success && (
      <Paginator data={members} onPageChanged={scrollToTop}>
        {i => <ListItem key={i.id} {...i} />}
      </Paginator>
    )}
  </div>
)

export default ListView
