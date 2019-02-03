import { ActionTypes } from "../actions"
import {
  newsFeedByMemberIdSelector,
  newsFeedsSelector,
  newsFeedStore
} from "./index"

describe("newsFeedStore", () => {
  it("Should define the initial state", () => {
    const state = undefined
    const action: any = {}
    const nextState = newsFeedStore(state, action)
    expect(nextState).toEqual({
      feeds: {}
    })
  })

  it("Should store the news feed of a member", () => {
    const state = undefined
    const action = {
      feed: [
        {
          key: 100,
          link: "https://asdf",
          pubDate: "2019-02-02",
          title: "Asdfipsum"
        }
      ],
      memberId: "A101",
      type: ActionTypes.LOAD_NEWS_FEED_SUCCESS
    }
    const nextState = newsFeedStore(state, action)
    expect(nextState).toEqual({
      feeds: {
        A101: [
          {
            key: 100,
            link: "https://asdf",
            pubDate: "2019-02-02",
            title: "Asdfipsum"
          }
        ]
      }
    })
  })

  it("Should store the news feed of another member", () => {
    const state = {
      feeds: {
        A101: [
          {
            key: 100,
            link: "https://asdf",
            pubDate: "2019-02-02",
            title: "Asdfipsum"
          }
        ]
      }
    }
    const action = {
      feed: [
        {
          key: 200,
          link: "https://qwer.ty",
          pubDate: "2019-02-03",
          title: "Thank you Qwer!"
        }
      ],
      memberId: "A102",
      type: ActionTypes.LOAD_NEWS_FEED_SUCCESS
    }
    const nextState = newsFeedStore(state, action)
    expect(nextState).toEqual({
      feeds: {
        A101: [
          {
            key: 100,
            link: "https://asdf",
            pubDate: "2019-02-02",
            title: "Asdfipsum"
          }
        ],
        A102: [
          {
            key: 200,
            link: "https://qwer.ty",
            pubDate: "2019-02-03",
            title: "Thank you Qwer!"
          }
        ]
      }
    })
  })
})

describe("newsFeedsSelector", () => {
  it("Should select all members feeds", () => {
    const state: any = {
      newsFeedStore: {
        feeds: {
          J201: [
            {
              link: "https://jameskidd.jm/everything-permitted",
              title: "Nothing is true, everything is permitted"
            }
          ],
          M101: [
            {
              link: "https://maryread.bs/nassau-pirate-republic",
              title: "Nassau, a safe republic for pirates"
            }
          ]
        }
      }
    }
    const selected = newsFeedsSelector(state)
    expect(selected).toEqual({
      J201: [
        {
          link: "https://jameskidd.jm/everything-permitted",
          title: "Nothing is true, everything is permitted"
        }
      ],
      M101: [
        {
          link: "https://maryread.bs/nassau-pirate-republic",
          title: "Nassau, a safe republic for pirates"
        }
      ]
    })
  })
})

describe("newsFeedByMemberIdSelector", () => {
  it("Should select news feed by member id", () => {
    const state: any = {
      newsFeedStore: {
        feeds: {
          J201: [
            {
              link: "https://jameskidd.jm/everything-permitted",
              title: "Nothing is true, everything is permitted"
            }
          ],
          M101: [
            {
              link: "https://maryread.bs/nassau-pirate-republic",
              title: "Nassau, a safe republic for pirates"
            }
          ]
        }
      }
    }
    const selected = newsFeedByMemberIdSelector(state, "J201")
    expect(selected).toEqual([
      {
        link: "https://jameskidd.jm/everything-permitted",
        title: "Nothing is true, everything is permitted"
      }
    ])
  })

  it("Should select news feed by inexisting member id", () => {
    const state: any = {
      newsFeedStore: {
        feeds: {
          J201: [
            {
              link: "https://jameskidd.jm/everything-permitted",
              title: "Nothing is true, everything is permitted"
            }
          ],
          M101: [
            {
              link: "https://maryread.bs/nassau-pirate-republic",
              title: "Nassau, a safe republic for pirates"
            }
          ]
        }
      }
    }
    const selected = newsFeedByMemberIdSelector(state, "A123")
    expect(selected).toEqual([])
  })
})
