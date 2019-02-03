const offlineCache = {}

export function retrieveFromCache(url: string): any {
  return offlineCache[url]
}

export function storeIntoCache(url: string, response: any) {
  offlineCache[url] = response
}
