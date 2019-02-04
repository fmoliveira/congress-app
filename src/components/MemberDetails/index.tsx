import React, { PureComponent } from "react"
import { connect } from "react-redux"

import { noop, size } from "lodash"

import { RequestStatusType } from "../../reducers/requestStatus"
import { memberInfoByIdSelector } from "../MembersList/reducers"
import { getMemberDetails } from "./actions"
import { getDetailsStatusSelector, memberDetailsByIdSelector } from "./reducers"

import { DetailView } from "./components"
import { IMemberDetails, IMemberInfo } from "./types"

interface IOwnProps {
  match: {
    params: {
      memberId: string
      sessionNumber: string
    }
  }
}

interface IStateProps {
  details: IMemberDetails
  info: IMemberInfo
  status: RequestStatusType
}

interface IDispatchProps {
  getMemberDetails: (memberId: string) => void
}

type Props = IOwnProps & IStateProps & IDispatchProps

class MemberDetails extends PureComponent<Props> {
  public static defaultProps = {
    getMemberDetails: noop
  }

  public componentDidMount() {
    this.getMemberDetails()
  }

  public render() {
    const {
      details: { roles = [] } = {},
      match: { params: { sessionNumber = "" } = {} } = {},
      status
    } = this.props
    const currentRole = roles.find(i => i.congress === sessionNumber)
    const { chamber = "", committees = [], subcommittees = [] } =
      currentRole || {}
    const info = this.getListItemInfo()
    const { id: memberId = "", office = "", rssUrl = "" } = info

    return (
      <DetailView
        chamber={chamber}
        committees={committees}
        info={info}
        memberId={memberId}
        office={office}
        rssUrl={rssUrl}
        status={status}
        subcommittees={subcommittees}
      />
    )
  }

  private getListItemInfo = () => {
    const {
      details,
      info,
      match: { params: { sessionNumber = "" } = {} } = {}
    } = this.props

    if (size(info) > 0) {
      return info
    }

    const {
      memberId: id = "",
      firstName = "",
      gender = "",
      lastName = "",
      currentParty: party = "",
      facebookAccount = "",
      rssUrl = "",
      twitterAccount = "",
      youtubeAccount = "",
      roles = []
    } = details || {}
    const currentRole = roles.find(i => i.congress === sessionNumber)
    const { office = "", state = "" } = currentRole || {}

    return {
      facebookAccount,
      firstName,
      gender,
      id,
      lastName,
      nextElection: "",
      office,
      party,
      rssUrl,
      state,
      twitterAccount,
      youtubeAccount
    }
  }

  private getMemberDetails = () => {
    const { match: { params: { memberId = "" } = {} } = {} } = this.props
    this.props.getMemberDetails(memberId)
  }
}

const mapStateToProps = (state: any, props: any): IStateProps => ({
  details: memberDetailsByIdSelector(state, props.match.params.memberId),
  info: memberInfoByIdSelector(state, props.match.params.memberId),
  status: getDetailsStatusSelector(state)
})

const mapDispatchToProps: IDispatchProps = {
  getMemberDetails
}

export { MemberDetails as UnconnectedMemberDetails }

export default connect<IStateProps, IDispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(MemberDetails)
