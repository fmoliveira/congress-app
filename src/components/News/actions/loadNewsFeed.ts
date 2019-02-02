import Redux from "redux"
import RssParser from "rss-parser"

import { ActionTypes } from "./index"

export function loadNewsFeed(memberId: string, feedUrl: string) {
  return async (dispatch: Redux.Dispatch) => {
    dispatch(loadNewsFeedRequest(memberId))
    try {
      const parser = new RssParser()
      const crossOriginUrl = `https://cors-anywhere.herokuapp.com/${feedUrl}`
      const feed = await parser.parseURL(crossOriginUrl)
      const items = feed.items || []
      dispatch(loadNewsFeedSuccess(memberId, items))
    } catch {
      dispatch(loadNewsFeedFailure())
    }
  }
}

function loadNewsFeedRequest(memberId: string) {
  return {
    memberId,
    type: ActionTypes.LOAD_NEWS_FEED_REQUEST
  }
}

function loadNewsFeedSuccess(memberId: string, feed: any[]) {
  const keyedFeed = feed.map((i, idx) => ({
    key: idx,
    ...i
  }))
  return {
    feed: keyedFeed,
    memberId,
    type: ActionTypes.LOAD_NEWS_FEED_SUCCESS
  }
}

function loadNewsFeedFailure() {
  return {
    type: ActionTypes.LOAD_NEWS_FEED_FAILURE
  }
}
