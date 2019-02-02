import React, { PureComponent } from "react"
import { connect } from "react-redux"

import { RequestStatusType } from "../../reducers/requestStatus"
import { memberInfoByIdSelector } from "../MembersList/reducers"
import { getMemberDetails } from "./actions"
import { getDetailsStatusSelector, memberDetailsByIdSelector } from "./reducers"

import { News } from "../index"
import { ListItem } from "../MembersList/ListItem"

interface IOwnProps {
  match: {
    params: {
      memberId: string
    }
  }
}

interface IStateProps {
  details: any
  info: any
  status: RequestStatusType
}

interface IDispatchProps {
  getMemberDetails: (memberId: string) => void
}

type Props = IOwnProps & IStateProps & IDispatchProps

class MemberDetails extends PureComponent<Props> {
  public componentDidMount() {
    this.getMemberDetails()
  }

  public render() {
    const { details = {}, info } = this.props

    return (
      <div>
        <p>Member Details #{this.props.match.params.memberId}</p>
        <ListItem {...info} />
        <div>
          <News feed={details.rssUrl} />
        </div>
      </div>
    )
  }

  private getMemberDetails() {
    const {
      match: {
        params: { memberId }
      }
    } = this.props
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

export default connect<IStateProps, IDispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(MemberDetails)
