import { lowerCase } from "lodash"

import { IFilters } from "../components"
import { IMemberInfo } from "../types"

export function filterMembers(
  members: IMemberInfo[],
  filters: IFilters
): IMemberInfo[] {
  if (!filters) {
    return members
  }

  const filterFullName = lowerCase(filters.fullName)
  const { party: filterParty, gender: filterGender } = filters

  return members.filter(each => {
    const fullName = lowerCase([each.firstName, each.lastName].join(" "))
    const { party, gender } = each

    if (filterFullName && !fullName.includes(filterFullName)) {
      return false
    }

    if (filterParty && party !== filterParty) {
      return false
    }

    if (filterGender && gender !== filterGender) {
      return false
    }

    return true
  })
}
