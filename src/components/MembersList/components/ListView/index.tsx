import React from "react"

import { size } from "lodash"

import { RequestStatusType } from "../../../../reducers/requestStatus"

import { ErrorMessage, Paginator } from "../../../_common"
import { IMemberInfo } from "../../types"
import { EmptyMessage } from "./EmptyMessage"
import { ListHeader } from "./ListHeader"
import { ListItem } from "./ListItem"
import { SkeletonList } from "./SkeletonList"

interface IProps {
  chamber: string
  listMembers: () => void
  members: IMemberInfo[]
  scrollToTop: () => void
  session: number
  status: RequestStatusType
}

const ListView = ({
  chamber,
  listMembers,
  members,
  scrollToTop,
  session,
  status
}: IProps) => (
  <div>
    {status !== RequestStatusType.Error && <ListHeader chamber={chamber} />}
    {status === RequestStatusType.Error && <ErrorMessage retry={listMembers} />}
    {status === RequestStatusType.Loading && <SkeletonList />}
    {status === RequestStatusType.Success && size(members) === 0 && (
      <EmptyMessage />
    )}
    {status === RequestStatusType.Success && size(members) > 0 && (
      <Paginator data={members} onPageChanged={scrollToTop}>
        {i => <ListItem key={i.id} session={session} {...i} />}
      </Paginator>
    )}
  </div>
)

export default ListView
