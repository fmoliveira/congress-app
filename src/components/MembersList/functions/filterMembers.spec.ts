import { IMemberInfo } from "../types"
import { filterMembers } from "./filterMembers"

const ana: IMemberInfo = {
  firstName: "Ana",
  gender: "female",
  id: "A800",
  lastName: "Nobrega",
  nextElection: "2022",
  office: "800 Center Park",
  party: "R",
  state: "NY"
}
const edward: IMemberInfo = {
  firstName: "Edward",
  gender: "male",
  id: "D320",
  lastName: "Kenway",
  nextElection: "1725",
  office: "500 Seven Seas",
  party: "I",
  state: "BS"
}
const members: IMemberInfo[] = [ana, edward]

describe("filterMembers", () => {
  it("Should not crash", () => {
    const filters: any = {}
    const filtered = filterMembers(members, filters)
    expect(filtered).toEqual(members)
  })

  describe("fullName", () => {
    it("Should filter by first name", () => {
      const filters: any = {
        fullName: "edw"
      }
      const filtered = filterMembers(members, filters)
      expect(filtered).toEqual([edward])
    })

    it("Should filter by last name", () => {
      const filters: any = {
        fullName: "nob"
      }
      const filtered = filterMembers(members, filters)
      expect(filtered).toEqual([ana])
    })

    it("Should filter by full name", () => {
      const filters: any = {
        fullName: "ana nobr"
      }
      const filtered = filterMembers(members, filters)
      expect(filtered).toEqual([ana])
    })
  })
})
