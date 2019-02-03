import Redux from "redux"

import { request } from "../../../utils"
import { IMemberDetailsResponse } from "../types"
import { ActionTypes } from "./index"

export function getMemberDetails(memberId: string) {
  return async (dispatch: Redux.Dispatch) => {
    dispatch(getMemberDetailsRequest(memberId))
    try {
      const data: IMemberDetailsResponse = await request(
        `members/${memberId}.json`
      )
      dispatch(getMemberDetailsSuccess(memberId, data))
    } catch {
      dispatch(getMemberDetailsFailure())
    }
  }
}

function getMemberDetailsRequest(memberId: string) {
  return {
    memberId,
    type: ActionTypes.GET_MEMBER_DETAILS_REQUEST
  }
}

function getMemberDetailsSuccess(
  memberId: string,
  data: IMemberDetailsResponse
) {
  const { results = [] } = data
  const [details] = results

  return {
    details,
    memberId,
    type: ActionTypes.GET_MEMBER_DETAILS_SUCCESS
  }
}

function getMemberDetailsFailure() {
  return {
    type: ActionTypes.GET_MEMBER_DETAILS_FAILURE
  }
}
