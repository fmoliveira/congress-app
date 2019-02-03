import { orderBy, size } from "lodash"
import shortid from "shortid"

const CACHE_INDEX = "cacheIndex"
const CACHE_PREFIX = "cacheItem_"
const MAX_ENTRIES = 100

/**
 * Gets the index of cached entries from local storage, or a new empty index.
 */
const getIndex = () => {
  const index = localStorage.getItem(CACHE_INDEX)
  if (!index) {
    return []
  }
  try {
    return JSON.parse(index)
  } catch {
    return []
  }
}

/**
 * Purges the least recently used entries that exceed the max entries setting.
 * @param index Next index to be stored.
 */
const purgeCache = (index: any) => {
  if (size(index) <= MAX_ENTRIES) {
    return index
  }

  const removedEntries = index.slice(MAX_ENTRIES)
  const removedKeys = removedEntries.map((i: any) => i.key)
  removedKeys.forEach((key: string) => localStorage.removeItem(key))

  const purgedIndex = index.filter((i: any) => !removedKeys.includes(i.key))
  return purgedIndex
}

/**
 * Updates index of cached entries.
 * @param index Index with new entries or updated usage date.
 */
const updateIndex = (index: any) => {
  const sorted = orderBy(index, ["lastUsed"], ["desc"])
  const purged = purgeCache(sorted)
  const serialized = JSON.stringify(purged)
  localStorage.setItem(CACHE_INDEX, serialized)
}

/**
 * Gets a key cache if it exists and update usage date.
 * @param url URL of the resource to be searched in the cache.
 */
const getKey = (url: string) => {
  const index = getIndex()
  const entry = index.find((i: any) => i.url === url)
  if (!entry) {
    return null
  }

  // update usage date to preserve it in the index for longer time
  const newIndex = index.map((i: any) => {
    if (i.key === entry.key) {
      return {
        ...i,
        lastUsed: Date.now()
      }
    }
    return i
  })
  updateIndex(newIndex)

  return entry.key
}

/**
 * Creates a key to store a new resource.
 * @param url URL of the new resource.
 */
const createKey = (url: string) => {
  const id = shortid.generate()
  const newKey = {
    key: `${CACHE_PREFIX}${id}`,
    lastUsed: Date.now(),
    url
  }
  const index = getIndex()
  const newIndex = [...index, newKey]
  updateIndex(newIndex)
  return newKey
}

/**
 * Gets a resource from local cache, if it exists.
 * @param url
 */
export function retrieveFromCache(url: string): any {
  const key = getKey(url)
  const value = localStorage.getItem(key)
  if (!value) {
    return null
  }
  return JSON.parse(value)
}

/**
 * Stores a resource in the local cache.
 * @param url
 * @param response
 */
export function storeIntoCache(url: string, response: any) {
  const item = getKey(url) || createKey(url)
  const serialized = JSON.stringify(response)
  localStorage.setItem(item.key, serialized)
}
