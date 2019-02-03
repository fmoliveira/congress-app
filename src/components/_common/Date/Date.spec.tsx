import React from "react"
import { cleanup, render } from "react-testing-library"

import { Date } from "./index"

const setup = (props?: any) => render(<Date {...props} />)

const SAMPLE_DATE = "Mon, 4 Feb 2019 15:16:17 EST"

describe("Date", () => {
  afterEach(() => {
    cleanup()
  })

  it("Should not render without a value", () => {
    const { container } = setup()
    expect(container.firstChild).toBeNull()
    expect(container).toMatchSnapshot()
  })

  it("Should render with a value", () => {
    const props = { value: SAMPLE_DATE }
    const { container, getByText } = setup(props)
    expect(container.firstChild).toBeTruthy()
    expect(getByText("2019-02-04")).toBeTruthy()
    expect(container).toMatchSnapshot()
  })

  it("Should render with a custom format", () => {
    const props = { value: SAMPLE_DATE, displayFormat: "MM/DD/YYYY" }
    const { container, getByText } = setup(props)
    expect(container.firstChild).toBeTruthy()
    expect(getByText("02/04/2019")).toBeTruthy()
    expect(container).toMatchSnapshot()
  })

  it("Should render with a time format", () => {
    const props = { value: SAMPLE_DATE, displayFormat: "MM/DD/YYYY h:mm A" }
    const { container, getByText } = setup(props)
    expect(container.firstChild).toBeTruthy()
    expect(getByText("02/04/2019 8:16 PM")).toBeTruthy()
    expect(container).toMatchSnapshot()
  })
})
