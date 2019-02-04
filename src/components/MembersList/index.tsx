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
      gender: "",
      party: "",
      session: 115
    }
  }

  private membersListRef = React.createRef<HTMLDivElement>()

  public componentDidMount() {
    this.listMembers()
  }

  public render() {
    const { status } = this.props
    const {
      filters: { chamber }
    } = this.state
    const members = this.getFilteredMembers()

    return (
      <div ref={this.membersListRef}>
        <Filters chamber={chamber} onChange={this.updateFilters} />
        <ListView
          chamber={chamber}
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
    const {
      filters: { chamber, session }
    } = this.state
    this.props.listMembers(session, chamber)
  }

  private updateFilters = (filters: IFilters) => {
    const changedList =
      this.state.filters.chamber !== filters.chamber ||
      this.state.filters.session !== filters.session

    this.setState({ filters }, () => {
      if (changedList) {
        this.listMembers()
      }
    })
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
