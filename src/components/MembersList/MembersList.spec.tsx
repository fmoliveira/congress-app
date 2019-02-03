import React from "react"
import { cleanup, render } from "react-testing-library"

import Filters from "./components/Filters"
import ListView from "./components/ListView"
import { UnconnectedMembersList as MembersList } from "./index"

jest.mock("./components/Filters", () => jest.fn(() => <div>Filters</div>))
jest.mock("./components/ListView", () => jest.fn(() => <div>ListView</div>))

const setup = (props?: any) => render(<MembersList {...props} />)

describe("MembersList", () => {
  afterEach(() => {
    cleanup()
    jest.clearAllMocks()
  })

  it("Should render without crashing", () => {
    const { container } = setup()
    expect(container.firstChild).toBeTruthy()
    expect(container).toMatchSnapshot()
  })

  it("Should call action to list members", () => {
    const listMembers = jest.fn()
    const props = { listMembers }
    setup(props)

    expect(listMembers).toHaveBeenCalledTimes(1)
    expect(listMembers).toHaveBeenCalledWith(115, "senate")
  })

  it("Should render filters", () => {
    setup()
    expect(Filters).toHaveBeenCalledTimes(1)
  })

  it("Should render list view", () => {
    const props = {
      members: [
        { id: "S100", name: "Edward Thatch" },
        { id: "S101", name: "Anne Bonny" }
      ],
      status: "SUCCESS"
    }
    setup(props)

    expect(ListView).toHaveBeenCalledTimes(1)

    const mockedComponent = ListView as jest.Mock
    const [call] = mockedComponent.mock.calls
    const [passedProps] = call
    expect(passedProps.members).toEqual([
      { id: "S100", name: "Edward Thatch" },
      { id: "S101", name: "Anne Bonny" }
    ])
    expect(passedProps.status).toBe("SUCCESS")
  })

  it("Should allow list view to call list members action", () => {
    const listMembers = jest.fn()
    const props = { listMembers }
    setup(props)

    expect(listMembers).toHaveBeenCalledTimes(1)
    expect(listMembers).toHaveBeenNthCalledWith(1, 115, "senate")

    const mockedComponent = ListView as jest.Mock
    const [call] = mockedComponent.mock.calls
    const [passedProps] = call
    const { listMembers: listMembersProp } = passedProps

    listMembersProp()
    expect(listMembers).toHaveBeenCalledTimes(2)
    expect(listMembers).toHaveBeenNthCalledWith(2, 115, "senate")
  })
})
