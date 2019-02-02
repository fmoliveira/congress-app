import { camelCase } from "lodash"

export function normalizeCase(anything: any): any {
  if (Array.isArray(anything)) {
    return anything.map(normalizeCase)
  }

  if (typeof anything === "object" && anything !== null) {
    return Object.keys(anything).reduce(
      (normalized: any, key) => ({
        ...normalized,
        [camelCase(key)]: normalizeCase(anything[key])
      }),
      {}
    )
  }

  return anything
}
