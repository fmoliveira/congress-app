import { IRootStore } from "../types"

export interface IRequestStatusStore {
  statuses: { [name: string]: RequestStatusType }
}

const defaultState: IRequestStatusStore = {
  statuses: {}
}

export enum RequestStatusType {
  Loading = "REQUEST",
  Success = "SUCCESS",
  Error = "FAILURE"
}

interface IAction {
  type: string
}

const getStore = (rootState: IRootStore) => rootState.requestStatusStore || {}

export function requestStatusStore(state = defaultState, action: IAction) {
  const { type } = action
  const match = /(.*)_(REQUEST|SUCCESS|FAILURE)$/.exec(type)

  // ignore non async/thunk action types
  if (!match) {
    return state
  }

  const [, requestName, requestStatus] = match
  return {
    ...state,
    statuses: {
      ...state.statuses,
      [requestName]: requestStatus as RequestStatusType
    }
  }
}

export function requestStatusSelector(state: IRootStore, request: string) {
  const store = getStore(state)
  return store.statuses[request]
}
