import React from "react"
import { cleanup, render } from "react-testing-library"

import FeedItem from "./FeedItem"
import FeedList from "./FeedList"

jest.mock("./FeedItem", () => jest.fn(() => <div>FeedItem</div>))

const setup = (props?: any) => render(<FeedList {...props} />)

describe("FeedList", () => {
  afterEach(() => {
    cleanup()
    jest.clearAllMocks()
  })

  it("Should render without crashing", () => {
    const { container } = setup()
    expect(container.firstChild).toBeTruthy()
    expect(container).toMatchSnapshot()
  })

  it("Should not render FeedItem instances for empty feed", () => {
    setup()
    expect(FeedItem).not.toHaveBeenCalled()
  })

  it("Should render a FeedItem instance", () => {
    const props = { feed: [{ foo: "bar" }] }
    setup(props)

    expect(FeedItem).toHaveBeenCalledTimes(1)
    expect(FeedItem).toHaveBeenCalledWith({ feed: { foo: "bar" } }, {})
  })

  it("Should render multilple FeedItem instances", () => {
    const props = {
      feed: [{ foo: "bar" }, { baz: "inga" }, { trust: "more" }]
    }
    setup(props)

    expect(FeedItem).toHaveBeenCalledTimes(3)
    expect(FeedItem).toHaveBeenNthCalledWith(1, { feed: { foo: "bar" } }, {})
    expect(FeedItem).toHaveBeenNthCalledWith(2, { feed: { baz: "inga" } }, {})
    expect(FeedItem).toHaveBeenNthCalledWith(3, { feed: { trust: "more" } }, {})
  })
})
