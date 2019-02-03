import React from "react"
import { cleanup, render } from "react-testing-library"

import FeedList from "./components/FeedList"
import SkeletonNews from "./components/SkeletonNews"
import { UnconnectedFeedReader as FeedReader } from "./FeedReader"

jest.mock("./components/FeedList", () => jest.fn(() => <div>FeedList</div>))
jest.mock("./components/SkeletonNews", () =>
  jest.fn(() => <div>SkeletonNews</div>)
)

const setup = (props?: any) => render(<FeedReader {...props} />)

describe("FeedReader", () => {
  afterEach(() => {
    cleanup()
    jest.clearAllMocks()
  })

  it("Should render without crashing", () => {
    const { container } = setup()
    expect(container.firstChild).toBeTruthy()
    expect(container).toMatchSnapshot()
  })

  it("Should call action to load news feed", () => {
    const loadNewsFeed = jest.fn()
    const props = {
      feedUrl: "https://read.me/@a250/feed.rss",
      loadNewsFeed,
      memberId: "A250"
    }
    setup(props)

    expect(loadNewsFeed).toHaveBeenCalledTimes(1)
    expect(loadNewsFeed).toHaveBeenCalledWith(
      "A250",
      "https://read.me/@a250/feed.rss"
    )
  })

  it("Should render feed list", () => {
    const props = {
      feed: [
        { link: "https://read.me/@a250/first-story", title: "First Story" }
      ],
      status: "SUCCESS"
    }
    setup(props)

    expect(SkeletonNews).not.toHaveBeenCalled()
    expect(FeedList).toHaveBeenCalledTimes(1)
    expect(FeedList).toHaveBeenCalledWith(
      {
        feed: [
          { link: "https://read.me/@a250/first-story", title: "First Story" }
        ]
      },
      {}
    )
  })

  it("Should render skeleton while loading", () => {
    const props = {
      status: "REQUEST"
    }
    setup(props)

    expect(FeedList).not.toHaveBeenCalled()
    expect(SkeletonNews).toHaveBeenCalledTimes(1)
  })
})
