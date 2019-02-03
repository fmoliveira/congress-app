import Redux from "redux"

import { request } from "../../../utils"
import { IMembersListResponse } from "../types"
import { ActionTypes } from "./index"

export function listMembers(session: number, chamber: string) {
  return async (dispatch: Redux.Dispatch) => {
    dispatch(listMembersRequest(session, chamber))
    try {
      const data: IMembersListResponse = await request(
        `${session}/${chamber}/members.json`
      )
      dispatch(listMembersSuccess(session, chamber, data))
    } catch {
      dispatch(listMembersFailure())
    }
  }
}

function listMembersRequest(session: number, chamber: string) {
  return {
    chamber,
    session,
    type: ActionTypes.LIST_MEMBERS_REQUEST
  }
}

function listMembersSuccess(
  session: number,
  chamber: string,
  data: IMembersListResponse
) {
  const { results = [] } = data
  const [firstResult] = results
  const { members, numResults } = firstResult

  return {
    chamber,
    members,
    numResults,
    session,
    type: ActionTypes.LIST_MEMBERS_SUCCESS
  }
}

function listMembersFailure() {
  return {
    type: ActionTypes.LIST_MEMBERS_FAILURE
  }
}
