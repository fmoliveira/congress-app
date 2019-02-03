import React, { PureComponent } from "react"
import { connect } from "react-redux"

import { noop } from "lodash"

import { RequestStatusType } from "../../reducers/requestStatus"
import { listMembers } from "./actions"
import { listMembersStatusSelector, membersListSelector } from "./reducers"

import { Filters, ListView } from "./components"

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
    listMembers: noop,
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
        <Filters />
        <ListView
          listMembers={this.listMembers}
          members={members}
          scrollToTop={this.scrollToTop}
          status={status}
        />
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

export { MembersList as UnconnectedMembersList }

export default connect<IStateProps, IDispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(MembersList)
