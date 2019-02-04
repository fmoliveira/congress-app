import React, { PureComponent } from "react"
import { connect } from "react-redux"

import { noop } from "lodash"

import { RequestStatusType } from "../../reducers/requestStatus"
import { listMembers } from "./actions"
import { listMembersStatusSelector, membersListSelector } from "./reducers"

import { Filters, ListView } from "./components"
import { IFilters } from "./components/Filters"
import { filterMembers } from "./functions"
import { IMemberInfo } from "./types"

interface IOwnState {
  filters: IFilters
}

interface IStateProps {
  status: RequestStatusType
  members: IMemberInfo[]
}

interface IDispatchProps {
  listMembers: (session: number, chamber: string) => void
}

type Props = IStateProps & IDispatchProps

class MembersList extends PureComponent<Props, IOwnState> {
  public static defaultProps = {
    listMembers: noop,
    members: []
  }

  public state = {
    filters: {
      chamber: "senate",
      fullName: "",
      party: ""
    }
  }

  private membersListRef = React.createRef<HTMLDivElement>()

  public componentDidMount() {
    this.listMembers()
  }

  public render() {
    const { status } = this.props
    const members = this.getFilteredMembers()

    return (
      <div ref={this.membersListRef}>
        <Filters onChange={this.updateFilters} />
        <ListView
          listMembers={this.listMembers}
          members={members}
          scrollToTop={this.scrollToTop}
          status={status}
        />
      </div>
    )
  }

  private getFilteredMembers = () =>
    filterMembers(this.props.members, this.state.filters)

  private listMembers = () => {
    this.props.listMembers(115, "senate")
  }

  private updateFilters = (filters: IFilters) => {
    this.setState({ filters })

    if (this.state.filters.chamber !== filters.chamber) {
      this.props.listMembers(115, filters.chamber)
    }
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
