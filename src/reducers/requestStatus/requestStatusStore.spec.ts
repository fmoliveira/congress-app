import { requestStatusStore, RequestStatusType } from "./index"

describe("requestStatusStore", () => {
  it("Should define the initial state", () => {
    const state = undefined
    const action: any = {}
    const nextState = requestStatusStore(state, action)
    expect(nextState).toEqual({})
  })

  it("Should store loading state", () => {
    const state = undefined
    const action = {
      type: "ANY_REQUEST"
    }
    const nextState = requestStatusStore(state, action)
    expect(nextState).toEqual({
      ANY: RequestStatusType.Loading
    })
  })

  it("Should store success state", () => {
    const state = undefined
    const action = {
      type: "ANY_SUCCESS"
    }
    const nextState = requestStatusStore(state, action)
    expect(nextState).toEqual({
      ANY: RequestStatusType.Success
    })
  })

  it("Should store failure state", () => {
    const state = undefined
    const action = {
      type: "ANY_FAILURE"
    }
    const nextState = requestStatusStore(state, action)
    expect(nextState).toEqual({
      ANY: RequestStatusType.Error
    })
  })

  it("Should replace loading for success state", () => {
    const state = {
      ANY: RequestStatusType.Loading
    }
    const action = {
      type: "ANY_SUCCESS"
    }
    const nextState = requestStatusStore(state, action)
    expect(nextState).toEqual({
      ANY: RequestStatusType.Success
    })
  })

  it("Should replace loading for failure state", () => {
    const state = {
      ANY: RequestStatusType.Loading
    }
    const action = {
      type: "ANY_FAILURE"
    }
    const nextState = requestStatusStore(state, action)
    expect(nextState).toEqual({
      ANY: RequestStatusType.Error
    })
  })

  it("Should preserve existing states", () => {
    const state = {
      ANY: RequestStatusType.Error,
      MANY: RequestStatusType.Success,
      SOME: RequestStatusType.Loading
    }
    const action = {
      type: "STRIKE_MORE_SUCCESS"
    }
    const nextState = requestStatusStore(state, action)
    expect(nextState).toEqual({
      ANY: RequestStatusType.Error,
      MANY: RequestStatusType.Success,
      SOME: RequestStatusType.Loading,
      STRIKE_MORE: RequestStatusType.Success
    })
  })
})
