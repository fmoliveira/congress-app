import { getSessionNumbers } from "./getSessionNumbers"

describe("getSessionNumbers", () => {
  it("Should return ranges for senate", () => {
    const chamber = "senate"
    const sessions = getSessionNumbers(chamber)
    expect(sessions).toEqual([
      115,
      114,
      113,
      112,
      111,
      110,
      109,
      108,
      107,
      106,
      105,
      104,
      103,
      102
    ])
  })

  it("Should return ranges for house of representatives", () => {
    const chamber = "house"
    const sessions = getSessionNumbers(chamber)
    expect(sessions).toEqual([
      115,
      114,
      113,
      112,
      111,
      110,
      109,
      108,
      107,
      106,
      105,
      104,
      103,
      102,
      101,
      100,
      99,
      98,
      97,
      96,
      95,
      94,
      93,
      92,
      91,
      90,
      89,
      88,
      87,
      86,
      85,
      84,
      83,
      82,
      81,
      80
    ])
  })
})
