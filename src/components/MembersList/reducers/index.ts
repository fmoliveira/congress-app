import { requestStatusSelector } from "../../../reducers/requestStatus"
import { ActionTypes } from "../actions"

const defaultState = {
  chamber: "",
  congress: "",
  members: [],
  numResults: 0
}

interface IAction {
  type: ActionTypes
  chamber: ""
  congress: ""
  members: []
  numResults: 0
}

const getStore = (rootState: any) => rootState.membersListStore

export function membersListStore(state = defaultState, action: IAction) {
  switch (action.type) {
    case ActionTypes.LIST_MEMBERS_SUCCESS:
      return {
        ...state,
        members: action.members
      }
  }
  return defaultState
}

export const membersListSelector = (state: any) => getStore(state).members

export const listMembersStatusSelector = (state: any) =>
  requestStatusSelector(state, "LIST_MEMBERS")
