import { orderBy } from "lodash"

import { requestStatusSelector } from "../../../reducers/requestStatus"
import { IRootStore } from "../../../reducers/types"
import { ActionTypes } from "../actions"
import { IMemberInfo } from "../types"

export interface IMembersListStore {
  chamber: string
  members: IMemberInfo[]
  numResults: number
  session: number
}

const initialState: IMembersListStore = {
  chamber: "",
  members: [],
  numResults: 0,
  session: 0
}

const getStore = (rootState: IRootStore) => rootState.membersListStore || {}

export function membersListStore(state = initialState, action: any) {
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

export const membersListSelector = (state: IRootStore) =>
  getStore(state).members || []

export const listMembersStatusSelector = (state: IRootStore) =>
  requestStatusSelector(state, "LIST_MEMBERS")

export const memberInfoByIdSelector = (state: IRootStore, memberId: string) =>
  membersListSelector(state).find((i: any) => i.id === memberId) || ({} as any)
