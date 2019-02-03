import { requestStatusSelector } from "../../../reducers/requestStatus"
import { ActionTypes } from "../actions"
import { IMemberDetails } from "../types"

export * from "../components/News/reducers"

interface IStore {
  details: {
    [name: string]: IMemberDetails
  }
}

const initialState: IStore = {
  details: {}
}

interface IAction {
  details: IMemberDetails
  memberId: string
  type: ActionTypes
}

const getStore = (rootState: any) => rootState.membersDetailsStore || {}

export function membersDetailsStore(state = initialState, action: IAction) {
  const { type, memberId, details } = action

  switch (type) {
    case ActionTypes.GET_MEMBER_DETAILS_SUCCESS:
      return {
        ...state,
        details: {
          ...state.details,
          [memberId]: details
        }
      }

    default:
      return state
  }
}

export const membersDetailsSelector = (state: any) =>
  getStore(state).details || {}

export const memberDetailsByIdSelector = (state: any, memberId: string) =>
  membersDetailsSelector(state)[memberId]

export const getDetailsStatusSelector = (state: any) =>
  requestStatusSelector(state, "GET_MEMBER_DETAILS")
