import Redux from "redux"
import RssParser from "rss-parser"

import { getAbsoluteUrl, getBaseUrl, request } from "../../../../../utils"
import { INewsFeed } from "../types"
import { ActionTypes } from "./index"

export function loadNewsFeed(memberId: string, feedUrl: string) {
  return async (dispatch: Redux.Dispatch) => {
    dispatch(loadNewsFeedRequest(memberId))
    try {
      const parser = new RssParser()
      const crossOriginUrl = `https://cors-anywhere.herokuapp.com/${feedUrl}`
      const xml = await request(crossOriginUrl)
      const feed = (await parser.parseString(xml)) as INewsFeed
      dispatch(loadNewsFeedSuccess(memberId, feedUrl, feed))
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

function loadNewsFeedSuccess(
  memberId: string,
  feedUrl: string,
  feed: INewsFeed
) {
  const baseUrl = getBaseUrl(feedUrl)
  const { items } = feed || []
  const feedWithAbsoluteLinks = items.map((i, idx) => ({
    ...i,
    link: getAbsoluteUrl(i.link, baseUrl)
  }))
  return {
    feed: feedWithAbsoluteLinks,
    memberId,
    type: ActionTypes.LOAD_NEWS_FEED_SUCCESS
  }
}

function loadNewsFeedFailure() {
  return {
    type: ActionTypes.LOAD_NEWS_FEED_FAILURE
  }
}
