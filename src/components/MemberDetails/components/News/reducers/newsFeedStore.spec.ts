import { ActionTypes } from "../actions"
import { newsFeedStore } from "./index"

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
