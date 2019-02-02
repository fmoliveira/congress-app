import React, { PureComponent } from "react"
import { connect } from "react-redux"

import { RequestStatusType } from "../../reducers/requestStatus"
import { getMemberDetails } from "./actions"
import { getDetailsStatusSelector, memberDetailsByIdSelector } from "./reducers"

interface IOwnProps {
  match: {
    params: {
      memberId: string
    }
  }
}

interface IStateProps {
  status: RequestStatusType
  details: any
}

interface IDispatchProps {
  getMemberDetails: (memberId: string) => void
}

type Props = IOwnProps & IStateProps & IDispatchProps

class MemberDetails extends PureComponent<Props> {
  public render() {
    return <div>Member Details #{this.props.match.params.memberId}</div>
  }
}

const mapStateToProps = (state: any, props: any): IStateProps => ({
  details: memberDetailsByIdSelector(state, props.match.params.memberId),
  status: getDetailsStatusSelector(state)
})

const mapDispatchToProps: IDispatchProps = {
  getMemberDetails
}

export default connect<IStateProps, IDispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(MemberDetails)
