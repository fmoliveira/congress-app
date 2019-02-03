import React from "react"
import { MemoryRouter } from "react-router"
import { cleanup, render } from "react-testing-library"

import DetailView from "./components/DetailView"
import { UnconnectedMemberDetails as MemberDetails } from "./index"

jest.mock("./components/DetailView", () => jest.fn(() => <div>DetailView</div>))

const setup = (props?: any) =>
  render(
    <MemoryRouter>
      <MemberDetails {...props} />
    </MemoryRouter>
  )

describe("MemberDetails", () => {
  afterEach(() => {
    cleanup()
    jest.clearAllMocks()
  })

  it("Should render without crashing", () => {
    const { container } = setup()
    expect(container.firstChild).toBeTruthy()
    expect(container).toMatchSnapshot()
  })

  it("Should call action to get member details", () => {
    const getMemberDetails = jest.fn()
    const match = { params: { memberId: "M123" } }
    const props = { getMemberDetails, match }
    setup(props)

    expect(getMemberDetails).toHaveBeenCalledTimes(1)
    expect(getMemberDetails).toHaveBeenCalledWith("M123")
  })

  it("Should render detail view", () => {
    const props = {
      details: {
        currentParty: "I",
        facebookAccount: "",
        firstName: "Jack",
        gender: "male",
        lastName: "Sparrow",
        memberId: "M125", // we want the id to be taken from here, not from match param below
        roles: [
          {},
          {
            committees: [{ code: "COM1", name: "Committee One" }],
            office: "116 Fancy Skyscrapper",
            state: "XYZ",
            subcommittees: [{ code: "SCM2", name: "Sub-committee Two" }]
          }
        ],
        rssUrl: "https://loremipsum.com/news.rss",
        twitterAccount: "DangerousPirate",
        youtubeAccount: "MaroonedInNassau"
      },
      info: {},
      match: { params: { memberId: "M123" } }, // must differ from memberId above
      status: "SUCCESS"
    }
    setup(props)

    expect(DetailView).toHaveBeenCalledTimes(1)
    expect(DetailView).toBeCalledWith(
      {
        committees: [{ code: "COM1", name: "Committee One" }],
        info: {
          facebookAccount: "",
          firstName: "Jack",
          gender: "male",
          id: "M125",
          lastName: "Sparrow",
          nextElection: "",
          office: "116 Fancy Skyscrapper",
          party: "I",
          rssUrl: "https://loremipsum.com/news.rss",
          state: "XYZ",
          twitterAccount: "DangerousPirate",
          youtubeAccount: "MaroonedInNassau"
        },
        memberId: "M125",
        office: "116 Fancy Skyscrapper",
        rssUrl: "https://loremipsum.com/news.rss",
        status: "SUCCESS",
        subcommittees: [{ code: "SCM2", name: "Sub-committee Two" }]
      },
      {}
    )
  })

  it("Should supply current data from list view while loading", () => {
    const props = {
      info: {
        facebookAccount: "",
        firstName: "Jack",
        gender: "male",
        id: "M125", // we want the id to be taken from here, not from match param below
        lastName: "Sparrow",
        nextElection: "2045",
        office: "116 Fancy Skyscrapper",
        party: "I",
        rssUrl: "https://loremipsum.com/news.rss",
        state: "XYZ",
        twitterAccount: "DangerousPirate",
        youtubeAccount: "MaroonedInNassau"
      },
      match: { params: { memberId: "M123" } }, // must differ from id above
      status: "LOADING"
    }
    setup(props)

    expect(DetailView).toHaveBeenCalledTimes(1)
    expect(DetailView).toBeCalledWith(
      {
        committees: [],
        info: {
          facebookAccount: "",
          firstName: "Jack",
          gender: "male",
          id: "M125",
          lastName: "Sparrow",
          nextElection: "2045",
          office: "116 Fancy Skyscrapper",
          party: "I",
          rssUrl: "https://loremipsum.com/news.rss",
          state: "XYZ",
          twitterAccount: "DangerousPirate",
          youtubeAccount: "MaroonedInNassau"
        },
        memberId: "M125",
        office: "116 Fancy Skyscrapper",
        rssUrl: "https://loremipsum.com/news.rss",
        status: "LOADING",
        subcommittees: []
      },
      {}
    )
  })
})
