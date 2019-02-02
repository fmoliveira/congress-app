import { requestStatusSelector } from "../../../reducers/requestStatus"
import { ActionTypes } from "../actions"

const defaultState = {
  feeds: {}
}

interface IAction {
  type: ActionTypes
  memberId: string
  feed: any[]
}

const getStore = (rootState: any) => rootState.newsFeedStore || {}

export function newsFeedStore(state = defaultState, action: IAction) {
  const { type, memberId, feed } = action

  switch (type) {
    case ActionTypes.LOAD_NEWS_FEED_SUCCESS:
      return {
        ...state,
        feeds: {
          ...state.feeds,
          [memberId]: feed
        }
      }

    default:
      return state
  }
}

export const newsFeedsSelector = (state: any) => getStore(state).feeds || []

export const newsFeedByMemberIdSelector = (state: any, memberId: string) =>
  newsFeedsSelector(state)[memberId]

export const loadNewsFeedStatusSelector = (state: any) =>
  requestStatusSelector(state, "LOAD_NEWS_FEED")
