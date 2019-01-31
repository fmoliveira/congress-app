import Redux from "redux"

import { request } from "../../../utils"
import { ActionTypes } from "./index"

export function listMembers(session: number, chamber: string) {
  return async (dispatch: Redux.Dispatch) => {
    dispatch(listMembersRequest(session, chamber))
    try {
      const data: any = await request(`${session}/${chamber}/members.json`)
      dispatch(listMembersSuccess(session, chamber, data.results[0].members, 0))
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
  members: any[],
  numResults: number
) {
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
