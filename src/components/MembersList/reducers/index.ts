import { orderBy } from "lodash"

import { requestStatusSelector } from "../../../reducers/requestStatus"
import { ActionTypes } from "../actions"
import { IMemberInfo } from "../types"

interface IStore {
  chamber: string
  members: IMemberInfo[]
  numResults: number
  session: number
}

const initialState: IStore = {
  chamber: "",
  members: [],
  numResults: 0,
  session: 0
}

interface IAction {
  chamber: string
  members: any[]
  numResults: number
  session: number
  type: ActionTypes
}

const getStore = (rootState: any) => rootState.membersListStore || {}

export function membersListStore(state = initialState, action: IAction) {
  const { type, chamber, session, members, numResults } = action

  switch (type) {
    case ActionTypes.LIST_MEMBERS_SUCCESS:
      return {
        ...state,
        chamber,
        members: orderBy(members, ["firstName", "lastName"]),
        numResults,
        session
      }

    default:
      return state
  }
}

export const membersListSelector = (state: any) => getStore(state).members || []

export const listMembersStatusSelector = (state: any) =>
  requestStatusSelector(state, "LIST_MEMBERS")

export const memberInfoByIdSelector = (state: any, memberId: string) =>
  membersListSelector(state).find((i: any) => i.id === memberId)
