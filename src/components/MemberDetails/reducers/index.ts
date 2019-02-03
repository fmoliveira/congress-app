import { requestStatusSelector } from "../../../reducers/requestStatus"
import { IRootStore } from "../../../reducers/types"
import { ActionTypes } from "../actions"
import { IMemberDetails } from "../types"

export * from "../components/News/reducers"

export interface IMemberDetailsStore {
  details: {
    [name: string]: IMemberDetails
  }
}

const initialState: IMemberDetailsStore = {
  details: {}
}

const getStore = (rootState: IRootStore) => rootState.membersDetailsStore || {}

export function membersDetailsStore(state = initialState, action: any) {
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

export const membersDetailsSelector = (state: IRootStore) =>
  getStore(state).details || {}

export const memberDetailsByIdSelector = (
  state: IRootStore,
  memberId: string
) => membersDetailsSelector(state)[memberId] || ({} as any)

export const getDetailsStatusSelector = (state: IRootStore) =>
  requestStatusSelector(state, "GET_MEMBER_DETAILS")
