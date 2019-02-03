import React, { PureComponent } from "react"
import { connect } from "react-redux"
import styled from "styled-components"

import { RequestStatusType } from "../../reducers/requestStatus"
import { memberInfoByIdSelector } from "../MembersList/reducers"
import { getMemberDetails } from "./actions"
import { getDetailsStatusSelector, memberDetailsByIdSelector } from "./reducers"

import { Map, News } from "../index"
import { ListItem } from "../MembersList/ListItem"

const Columns = styled.div`
  display: flex;
  flex-direction: row;

  & > * {
    width: 50%:
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 350px;
    overflow: hidden;
  }
`

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
    const {
      details: { rssUrl = null, roles = [] } = {},
      info,
      match: {
        params: { memberId }
      }
    } = this.props
    const [currentRole = {}] = roles
    const { office } = currentRole

    return (
      <div>
        <p>Member Details #{memberId}</p>
        <ListItem {...info} />
        <Columns>
          <News memberId={memberId} feedUrl={rssUrl} />
          <Map address={office} />
        </Columns>
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
