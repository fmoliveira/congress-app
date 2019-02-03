interface IStore {
  [name: string]: RequestStatusType
}

const defaultState: IStore = {}

export enum RequestStatusType {
  Loading = "REQUEST",
  Success = "SUCCESS",
  Error = "FAILURE"
}

interface IAction {
  type: string
}

const getStore = (rootState: any) => rootState.requestStatusStore

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
    [requestName]: requestStatus
  }
}

export function requestStatusSelector(state: object, request: string) {
  const store = getStore(state)
  return store[request]
}
