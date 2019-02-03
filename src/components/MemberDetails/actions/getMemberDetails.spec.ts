import fetchMock from "fetch-mock"

import { mockStore } from "../../../config"

import { ActionTypes, getMemberDetails } from "./index"

const store = mockStore()

describe("listMembers", () => {
  afterEach(() => {
    store.clearActions()
    fetchMock.restore()
  })

  it("Should dispatch successful actions", async () => {
    const response = {
      results: [
        {
          firstName: "Edward",
          id: "F550",
          lastName: "Kenway"
        }
      ]
    }
    fetchMock.getOnce(
      `https://api.propublica.org/congress/v1/members/F550.json`,
      response
    )
    await store.dispatch(getMemberDetails("F550") as any)

    const actions = store.getActions()
    expect(actions).toEqual([
      {
        memberId: "F550",
        type: ActionTypes.GET_MEMBER_DETAILS_REQUEST
      },
      {
        details: {
          firstName: "Edward",
          id: "F550",
          lastName: "Kenway"
        },
        memberId: "F550",
        type: ActionTypes.GET_MEMBER_DETAILS_SUCCESS
      }
    ])
  })

  it("Should dispatch failure actions", async () => {
    const err = new Error("You shall not pass!")
    fetchMock.getOnce(
      `https://api.propublica.org/congress/v1/members/F550.json`,
      err
    )
    await store.dispatch(getMemberDetails("F550") as any)

    const actions = store.getActions()
    expect(actions).toEqual([
      {
        memberId: "F550",
        type: ActionTypes.GET_MEMBER_DETAILS_REQUEST
      },
      {
        type: ActionTypes.GET_MEMBER_DETAILS_FAILURE
      }
    ])
  })
})
