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

  return members.filter(each => {
    const fullName = lowerCase([each.firstName, each.lastName].join(" "))
    if (!fullName.includes(filterFullName)) {
      return false
    }

    return true
  })
}
