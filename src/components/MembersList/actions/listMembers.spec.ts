import fetchMock from "fetch-mock"

import { mockStore } from "../../../config"

import { ActionTypes, listMembers } from "./index"

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
          members: [{ id: "F1", name: "Help" }],
          numResults: 1
        }
      ]
    }
    fetchMock.getOnce(
      `https://api.propublica.org/congress/v1/123/foobar/members.json`,
      response
    )
    await store.dispatch(listMembers(123, "foobar") as any)

    const actions = store.getActions()
    expect(actions).toEqual([
      {
        chamber: "foobar",
        session: 123,
        type: ActionTypes.LIST_MEMBERS_REQUEST
      },
      {
        chamber: "foobar",
        members: [{ id: "F1", name: "Help" }],
        numResults: 1,
        session: 123,
        type: ActionTypes.LIST_MEMBERS_SUCCESS
      }
    ])
  })

  it("Should dispatch failure actions", async () => {
    const err = new Error("You shall not pass!")
    fetchMock.getOnce(
      `https://api.propublica.org/congress/v1/123/foobar/members.json`,
      err
    )
    await store.dispatch(listMembers(123, "foobar") as any)

    const actions = store.getActions()
    expect(actions).toEqual([
      {
        chamber: "foobar",
        session: 123,
        type: ActionTypes.LIST_MEMBERS_REQUEST
      },
      {
        type: ActionTypes.LIST_MEMBERS_FAILURE
      }
    ])
  })
})
