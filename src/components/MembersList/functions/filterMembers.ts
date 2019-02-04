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
  const { party: filterParty } = filters

  return members.filter(each => {
    const fullName = lowerCase([each.firstName, each.lastName].join(" "))
    if (filterFullName && !fullName.includes(filterFullName)) {
      return false
    }

    const { party } = each
    if (filterParty && party !== filterParty) {
      return false
    }

    return true
  })
}
