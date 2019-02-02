import React, { PureComponent } from "react"
import { connect } from "react-redux"

import { RequestStatusType } from "../../reducers/requestStatus"
import { listMembers } from "./actions"
import { listMembersStatusSelector, membersListSelector } from "./reducers"

import { ErrorMessage, Paginator } from "../index"
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

  private membersListRef = React.createRef<HTMLDivElement>()

  public componentDidMount() {
    this.listMembers()
  }

  public render() {
    const { members, status } = this.props

    return (
      <div ref={this.membersListRef}>
        {status !== RequestStatusType.Error && <ListHeader />}
        {status === RequestStatusType.Error && (
          <ErrorMessage retry={this.listMembers} />
        )}
        {status === RequestStatusType.Loading && <SkeletonList />}
        {status === RequestStatusType.Success && (
          <Paginator data={members} onPageChanged={this.scrollToTop}>
            {i => <ListItem key={i.id} {...i} />}
          </Paginator>
        )}
      </div>
    )
  }

  private listMembers = () => {
    this.props.listMembers(115, "senate")
  }

  private scrollToTop = () => {
    if (this.membersListRef.current) {
      this.membersListRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
    }
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
