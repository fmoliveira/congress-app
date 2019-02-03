import { ActionTypes } from "../actions"
import {
  memberDetailsByIdSelector,
  membersDetailsSelector,
  membersDetailsStore
} from "./index"

describe("membersDetailsStore", () => {
  it("Should define the initial state", () => {
    const state = undefined
    const action: any = {}
    const nextState = membersDetailsStore(state, action)
    expect(nextState).toEqual({
      details: {}
    })
  })

  it("Should store details of a member", () => {
    const state = undefined
    const action = {
      details: { memberId: "A101", firstName: "First" },
      memberId: "A101",
      type: ActionTypes.GET_MEMBER_DETAILS_SUCCESS
    }
    const nextState = membersDetailsStore(state, action)
    expect(nextState).toEqual({
      details: {
        A101: {
          firstName: "First",
          memberId: "A101"
        }
      }
    })
  })

  it("Should store details of another member", () => {
    const state = {
      details: {
        A101: {
          firstName: "First",
          memberId: "A101"
        }
      }
    }
    const action = {
      details: { memberId: "A102", firstName: "Second" },
      memberId: "A102",
      type: ActionTypes.GET_MEMBER_DETAILS_SUCCESS
    }
    const nextState = membersDetailsStore(state, action)
    expect(nextState).toEqual({
      details: {
        A101: {
          firstName: "First",
          memberId: "A101"
        },
        A102: {
          firstName: "Second",
          memberId: "A102"
        }
      }
    })
  })
})

describe("membersDetailsSelector", () => {
  it("Should select the list of members details", () => {
    const state: any = {
      membersDetailsStore: {
        details: {
          J201: { id: "J201", firstName: "James Kidd" },
          M101: { id: "M101", firstName: "Mary Read" }
        }
      }
    }
    const selected = membersDetailsSelector(state)
    expect(selected).toEqual({
      J201: { id: "J201", firstName: "James Kidd" },
      M101: { id: "M101", firstName: "Mary Read" }
    })
  })
})

describe("memberDetailsByIdSelector", () => {
  it("Should select details of a member by id", () => {
    const state: any = {
      membersDetailsStore: {
        details: {
          J201: { id: "J201", firstName: "James Kidd" },
          M101: { id: "M101", firstName: "Mary Read" }
        }
      }
    }
    const selected = memberDetailsByIdSelector(state, "M101")
    expect(selected).toEqual({ id: "M101", firstName: "Mary Read" })
  })

  it("Should select details of an unexisting member by id", () => {
    const state: any = {
      membersDetailsStore: {
        details: {
          J201: { id: "J201", firstName: "James Kidd" },
          M101: { id: "M101", firstName: "Mary Read" }
        }
      }
    }
    const selected = memberDetailsByIdSelector(state, "A101")
    expect(selected).toEqual({})
  })
})
