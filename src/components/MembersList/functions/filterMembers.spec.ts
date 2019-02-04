import { IMemberInfo } from "../types"
import { filterMembers } from "./filterMembers"

const ana: IMemberInfo = {
  firstName: "Ana",
  gender: "F",
  id: "A800",
  lastName: "Nobrega",
  nextElection: "2022",
  office: "800 Center Park",
  party: "R",
  state: "NY"
}
const edward: IMemberInfo = {
  firstName: "Edward",
  gender: "M",
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

  describe("party", () => {
    it("Should filter by all parties", () => {
      const filters: any = {
        party: ""
      }
      const filtered = filterMembers(members, filters)
      expect(filtered).toEqual(members)
    })

    it("Should filter by democrats", () => {
      const filters: any = {
        party: "D"
      }
      const filtered = filterMembers(members, filters)
      expect(filtered).toEqual([])
    })

    it("Should filter by republicans", () => {
      const filters: any = {
        party: "R"
      }
      const filtered = filterMembers(members, filters)
      expect(filtered).toEqual([ana])
    })

    it("Should filter by independents", () => {
      const filters: any = {
        party: "I"
      }
      const filtered = filterMembers(members, filters)
      expect(filtered).toEqual([edward])
    })
  })

  describe("party", () => {
    it("Should filter by all genders", () => {
      const filters: any = {
        gender: ""
      }
      const filtered = filterMembers(members, filters)
      expect(filtered).toEqual(members)
    })

    it("Should filter by females", () => {
      const filters: any = {
        gender: "F"
      }
      const filtered = filterMembers(members, filters)
      expect(filtered).toEqual([ana])
    })

    it("Should filter by males", () => {
      const filters: any = {
        gender: "M"
      }
      const filtered = filterMembers(members, filters)
      expect(filtered).toEqual([edward])
    })
  })
})
