import { ActionTypes } from "../actions"
import { membersListStore } from "./index"

describe("membersListStore", () => {
  it("Should define the initial state", () => {
    const state = undefined
    const action: any = {}
    const nextState = membersListStore(state, action)
    expect(nextState).toEqual({
      chamber: "",
      members: [],
      numResults: 0,
      session: 0
    })
  })

  it("Should store the members list sorted by name", () => {
    const state = undefined
    const action = {
      chamber: "sparta",
      members: [
        { id: "S101", firstName: "Leonidas" },
        { id: "S102", firstName: "Brasidas" },
        { id: "S103", firstName: "Teleutias" }
      ],
      numResults: 3,
      session: 300,
      type: ActionTypes.LIST_MEMBERS_SUCCESS
    }
    const nextState = membersListStore(state, action)
    expect(nextState).toEqual({
      chamber: "sparta",
      members: [
        { id: "S102", firstName: "Brasidas" },
        { id: "S101", firstName: "Leonidas" },
        { id: "S103", firstName: "Teleutias" }
      ],
      numResults: 3,
      session: 300
    })
  })

  it("Should replace the members list", () => {
    const state = {
      chamber: "sparta",
      members: [
        { id: "S102", firstName: "Brasidas" },
        { id: "S101", firstName: "Leonidas" },
        { id: "S103", firstName: "Teleutias" }
      ],
      numResults: 3,
      session: 300
    }
    const action = {
      chamber: "athens",
      members: [
        { id: "A101", firstName: "Olympias" },
        { id: "A102", firstName: "Salaminia" },
        { id: "A103", firstName: "Paralus" }
      ],
      numResults: 3500,
      session: 780,
      type: ActionTypes.LIST_MEMBERS_SUCCESS
    }
    const nextState = membersListStore(state, action)
    expect(nextState).toEqual({
      chamber: "athens",
      members: [
        { id: "A101", firstName: "Olympias" },
        { id: "A103", firstName: "Paralus" },
        { id: "A102", firstName: "Salaminia" }
      ],
      numResults: 3500,
      session: 780
    })
  })
})
