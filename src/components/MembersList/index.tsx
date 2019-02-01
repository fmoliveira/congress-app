import React, { PureComponent } from "react"
import { connect } from "react-redux"

import { RequestStatusType } from "../../reducers/requestStatus"
import { listMembers } from "./actions"
import { membersListStatusSelector } from "./reducers"

import { ListHeader } from "./ListHeader"
import { ListItem } from "./ListItem"
import { SkeletonList } from "./SkeletonList"

interface IStateProps {
  status: RequestStatusType
  members: any[]
}

interface IDispatchProps {
  listMembers: (session: number, chamber: string) => void
}

type Props = IStateProps & IDispatchProps

class MembersList extends PureComponent<Props> {
  public static defaultProps = {
    members: []
  }

  public componentDidMount() {
    this.props.listMembers(115, "senate")
  }

  public render() {
    const { status, members } = this.props

    return (
      <div>
        <ListHeader />
        {status === RequestStatusType.Loading && <SkeletonList />}
        {status === RequestStatusType.Success &&
          members.map((i: any) => <ListItem key={i.id} {...i} />)}
      </div>
    )
  }
}

const mapStateToProps = (state: any): IStateProps => ({
  members: state.membersListStore.members,
  status: membersListStatusSelector(state)
})

const mapDispatchToProps: IDispatchProps = {
  listMembers
}

export default connect<IStateProps, IDispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(MembersList)
