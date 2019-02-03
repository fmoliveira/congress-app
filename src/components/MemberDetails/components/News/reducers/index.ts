import { requestStatusSelector } from "../../../../../reducers/requestStatus"
import { IRootStore } from "../../../../../reducers/types"
import { ActionTypes } from "../actions"
import { IFeedItem } from "../types"

export interface INewsFeedStore {
  feeds: {
    [name: string]: IFeedItem[]
  }
}

const defaultState: INewsFeedStore = {
  feeds: {}
}

const getStore = (rootState: IRootStore) => rootState.newsFeedStore || {}

export function newsFeedStore(state = defaultState, action: any) {
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

export const newsFeedsSelector = (state: IRootStore) =>
  getStore(state).feeds || {}

export const newsFeedByMemberIdSelector = (
  state: IRootStore,
  memberId: string
) => newsFeedsSelector(state)[memberId] || []

export const loadNewsFeedStatusSelector = (state: IRootStore) =>
  requestStatusSelector(state, "LOAD_NEWS_FEED")
