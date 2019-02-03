import {
  requestStatusSelector,
  requestStatusStore,
  RequestStatusType
} from "./index"

describe("requestStatusStore", () => {
  it("Should define the initial state", () => {
    const state = undefined
    const action: any = {}
    const nextState = requestStatusStore(state, action)
    expect(nextState).toEqual({ statuses: {} })
  })

  it("Should store loading state", () => {
    const state = undefined
    const action = {
      type: "ANY_REQUEST"
    }
    const nextState = requestStatusStore(state, action)
    expect(nextState).toEqual({
      statuses: {
        ANY: RequestStatusType.Loading
      }
    })
  })

  it("Should store success state", () => {
    const state = undefined
    const action = {
      type: "ANY_SUCCESS"
    }
    const nextState = requestStatusStore(state, action)
    expect(nextState).toEqual({
      statuses: {
        ANY: RequestStatusType.Success
      }
    })
  })

  it("Should store failure state", () => {
    const state = undefined
    const action = {
      type: "ANY_FAILURE"
    }
    const nextState = requestStatusStore(state, action)
    expect(nextState).toEqual({
      statuses: {
        ANY: RequestStatusType.Error
      }
    })
  })

  it("Should replace loading for success state", () => {
    const state = {
      statuses: {
        ANY: RequestStatusType.Loading
      }
    }
    const action = {
      type: "ANY_SUCCESS"
    }
    const nextState = requestStatusStore(state, action)
    expect(nextState).toEqual({
      statuses: {
        ANY: RequestStatusType.Success
      }
    })
  })

  it("Should replace loading for failure state", () => {
    const state = {
      statuses: {
        ANY: RequestStatusType.Loading
      }
    }
    const action = {
      type: "ANY_FAILURE"
    }
    const nextState = requestStatusStore(state, action)
    expect(nextState).toEqual({
      statuses: {
        ANY: RequestStatusType.Error
      }
    })
  })

  it("Should preserve existing states", () => {
    const state = {
      statuses: {
        ANY: RequestStatusType.Error,
        MANY: RequestStatusType.Success,
        SOME: RequestStatusType.Loading
      }
    }
    const action = {
      type: "STRIKE_MORE_SUCCESS"
    }
    const nextState = requestStatusStore(state, action)
    expect(nextState).toEqual({
      statuses: {
        ANY: RequestStatusType.Error,
        MANY: RequestStatusType.Success,
        SOME: RequestStatusType.Loading,
        STRIKE_MORE: RequestStatusType.Success
      }
    })
  })
})

describe("requestStatusSelector", () => {
  it("Should select a loading status", () => {
    const state: any = {
      requestStatusStore: {
        statuses: {
          ANY: RequestStatusType.Error,
          MANY: RequestStatusType.Success,
          SOME: RequestStatusType.Loading
        }
      }
    }
    const selected = requestStatusSelector(state, "SOME")
    expect(selected).toBe(RequestStatusType.Loading)
  })

  it("Should select a success status", () => {
    const state: any = {
      requestStatusStore: {
        statuses: {
          ANY: RequestStatusType.Error,
          MANY: RequestStatusType.Success,
          SOME: RequestStatusType.Loading
        }
      }
    }
    const selected = requestStatusSelector(state, "MANY")
    expect(selected).toBe(RequestStatusType.Success)
  })

  it("Should select a failure status", () => {
    const state: any = {
      requestStatusStore: {
        statuses: {
          ANY: RequestStatusType.Error,
          MANY: RequestStatusType.Success,
          SOME: RequestStatusType.Loading
        }
      }
    }
    const selected = requestStatusSelector(state, "ANY")
    expect(selected).toBe(RequestStatusType.Error)
  })
})
