import Redux from "redux"
import RssParser from "rss-parser"

import { getAbsoluteUrl, getBaseUrl } from "../../../utils"
import { ActionTypes } from "./index"

export function loadNewsFeed(memberId: string, feedUrl: string) {
  return async (dispatch: Redux.Dispatch) => {
    dispatch(loadNewsFeedRequest(memberId))
    try {
      const parser = new RssParser()
      const crossOriginUrl = `https://cors-anywhere.herokuapp.com/${feedUrl}`
      const feed = await parser.parseURL(crossOriginUrl)
      const items = feed.items || []
      dispatch(loadNewsFeedSuccess(memberId, feedUrl, items))
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

function loadNewsFeedSuccess(memberId: string, feedUrl: string, feed: any[]) {
  const baseUrl = getBaseUrl(feedUrl)
  const keyedFeed = feed.map((i, idx) => ({
    key: idx,
    ...i,
    link: getAbsoluteUrl(i.link, baseUrl)
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
