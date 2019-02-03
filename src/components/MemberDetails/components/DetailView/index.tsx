import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

import { RequestStatusType } from "../../../../reducers/requestStatus"

import { Map } from "../../../_common"
import { ICommittee, IMemberInfo } from "../../types"
import { Committee, News } from "../index"
import { ListHeader } from "./ListHeader"
import { MemberInfo } from "./MemberInfo"
import { SkeletonItem } from "./SkeletonItem"

import back from "./back.svg"

export const LinkWrapper = styled(Link)`
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

export const Icon = styled.img`
  width: auto;
  height: 16px;
`

export const LinkText = styled.span`
  margin: 0 1em;
`

export const Columns = styled.div`
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

interface IProps {
  committees: ICommittee[]
  info: IMemberInfo
  memberId: string
  office: string
  rssUrl: string
  status: RequestStatusType
  subcommittees: ICommittee[]
}

const DetailView = ({
  committees,
  info,
  memberId,
  office,
  rssUrl,
  status,
  subcommittees
}: IProps) => (
  <div>
    <header>
      <LinkWrapper to="/">
        <Icon src={back} alt="Go back to members list" />
        <LinkText>Back to members list</LinkText>
      </LinkWrapper>
    </header>

    <ListHeader />
    {status !== RequestStatusType.Success && <SkeletonItem />}
    {status === RequestStatusType.Success && <MemberInfo {...info} />}

    <Columns>
      <News memberId={memberId} feedUrl={rssUrl} />
      <Map address={office} />
    </Columns>

    <Committee title="Committees" items={committees} />
    <Committee title="Sub-committees" items={subcommittees} />
  </div>
)

export default DetailView
