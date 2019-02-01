import React, { PureComponent } from "react"
import { connect } from "react-redux"

import { RequestStatusType } from "../../reducers/requestStatus"
import { listMembers } from "./actions"
import { listMembersStatusSelector, membersListSelector } from "./reducers"

import { ErrorMessage } from "../index"
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
    this.listMembers()
  }

  public render() {
    const { status } = this.props

    return (
      <div>
        {status !== RequestStatusType.Error && <ListHeader />}
        {status === RequestStatusType.Error && (
          <ErrorMessage retry={this.listMembers} />
        )}
        {status === RequestStatusType.Loading && <SkeletonList />}
        {status === RequestStatusType.Success && this.renderList()}
      </div>
    )
  }

  private listMembers = () => {
    this.props.listMembers(115, "senate")
  }

  private renderList() {
    const { members } = this.props
    return members.map((i: any) => <ListItem key={i.id} {...i} />)
  }
}

const mapStateToProps = (state: any): IStateProps => ({
  members: membersListSelector(state),
  status: listMembersStatusSelector(state)
})

const mapDispatchToProps: IDispatchProps = {
  listMembers
}

export default connect<IStateProps, IDispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(MembersList)
