const offlineCache = {}

export function retrieveFromCache(url: string): any {
  const cached = offlineCache[url]
  if (!cached) {
    return null
  }
  try {
    const deserialized = JSON.parse(cached)
    return deserialized
  } catch {
    return null
  }
}

export function storeIntoCache(url: string, response: any, type?: string) {
  const serialized = JSON.stringify(response)
  offlineCache[url] = serialized
}
