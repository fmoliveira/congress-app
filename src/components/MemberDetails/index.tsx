import React, { PureComponent } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import styled from "styled-components"

import { RequestStatusType } from "../../reducers/requestStatus"
import { memberInfoByIdSelector } from "../MembersList/reducers"
import { getMemberDetails } from "./actions"
import { getDetailsStatusSelector, memberDetailsByIdSelector } from "./reducers"

import { Map, News } from "../index"
import { ListHeader } from "../MembersList/ListHeader"
import { ListItem } from "../MembersList/ListItem"
import { SkeletonItem } from "../MembersList/SkeletonItem"
import { CommitteeHeader } from "./CommitteeHeader"
import { CommitteeList } from "./CommitteeList"
import { SectionTitle } from "./SectionTitle"

import back from "./back.svg"

const LinkWrapper = styled(Link)`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  padding: 0 1em;
  text-decoration: none;
  color: #999999;

  &:hover {
    color: #555555;
  }
`

const Icon = styled.img`
  width: auto;
  height: 16px;
`

const LinkText = styled.span`
  margin: 0 1em;
`

const Columns = styled.div`
  margin: 1em 0;
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
      status,
      match: {
        params: { memberId }
      }
    } = this.props
    const [, currentRole = {}] = roles
    const { office, committees = [], subcommittees = [] } = currentRole
    const info = this.getListItemInfo()

    return (
      <div>
        <header>
          <LinkWrapper to="/">
            <Icon src={back} alt="Go back to members list" />
            <LinkText>Back to members list</LinkText>
          </LinkWrapper>
        </header>

        <ListHeader />
        {status !== RequestStatusType.Success && <SkeletonItem />}
        {status === RequestStatusType.Success && <ListItem {...info} />}

        <Columns>
          <News memberId={memberId} feedUrl={rssUrl} />
          <Map address={office} />
        </Columns>

        <SectionTitle>Committees</SectionTitle>
        <CommitteeHeader />
        <CommitteeList items={committees} />

        <SectionTitle>Sub-commitees</SectionTitle>
        <CommitteeHeader />
        <CommitteeList items={subcommittees} />
      </div>
    )
  }

  private getListItemInfo = () => {
    const { details = {}, info } = this.props

    if (info) {
      return info
    }

    const { currentParty: party, roles = [] } = details
    const [currentRole = {}] = roles
    const { state } = currentRole

    return {
      ...details,
      party,
      state
    }
  }

  private getMemberDetails = () => {
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
