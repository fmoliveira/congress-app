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
