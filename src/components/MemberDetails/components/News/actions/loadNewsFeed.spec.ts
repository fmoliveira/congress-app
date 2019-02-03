import fetchMock from "fetch-mock"

import { mockStore } from "../../../../../config"

import { ActionTypes, loadNewsFeed } from "./index"

const store = mockStore()

describe("listMembers", () => {
  afterEach(() => {
    store.clearActions()
    fetchMock.restore()
  })

  it("Should dispatch successful actions", async () => {
    const response = `
      <?xml version="1.0" encoding="UTF-8"?>
      <rss version="2.0">
        <channel>
          <item>
            <title>Kenway finds the observatory</title>
            <link>/@f550/kenway-finds-observatory</link>
            <pubDate>Fri, 12 Sep 1722 09:35:28 EST</pubDate>
          </item>
        </channel>
      </rss>
    `
    fetchMock.getOnce(
      `https://cors-anywhere.herokuapp.com/https://read.me/@f550/feed.rss`,
      response
    )
    await store.dispatch(loadNewsFeed(
      "F550",
      "https://read.me/@f550/feed.rss"
    ) as any)

    const actions = store.getActions()
    expect(actions).toEqual([
      {
        memberId: "F550",
        type: ActionTypes.LOAD_NEWS_FEED_REQUEST
      },
      {
        feed: [
          {
            isoDate: "1722-09-12T14:35:28.000Z",
            link: "https://read.me/@f550/kenway-finds-observatory",
            pubDate: "Fri, 12 Sep 1722 09:35:28 EST",
            title: "Kenway finds the observatory"
          }
        ],
        memberId: "F550",
        type: ActionTypes.LOAD_NEWS_FEED_SUCCESS
      }
    ])
  })

  it("Should dispatch failure actions", async () => {
    const err = new Error("You shall not pass!")
    fetchMock.getOnce(
      `https://cors-anywhere.herokuapp.com/https://read.me/@f550/feed.rss`,
      err
    )
    await store.dispatch(loadNewsFeed(
      "F550",
      "https://read.me/@f550/feed.rss"
    ) as any)

    const actions = store.getActions()
    expect(actions).toEqual([
      {
        memberId: "F550",
        type: ActionTypes.LOAD_NEWS_FEED_REQUEST
      },
      {
        type: ActionTypes.LOAD_NEWS_FEED_FAILURE
      }
    ])
  })
})
