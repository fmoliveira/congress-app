import "whatwg-fetch"

import {
  getAbsoluteUrl,
  normalizeCase,
  retrieveFromCache,
  storeIntoCache
} from "./index"

const BASE_URL = "https://api.propublica.org/congress/v1/"

const API_KEY = process.env.REACT_APP_PROPUBLICA_API_KEY || ""

export async function request(url: string) {
  const absoluteUrl = getAbsoluteUrl(url, BASE_URL)

  const cached = retrieveFromCache(url)
  if (cached) {
    return cached
  }

  const options = {
    headers: {
      "X-API-Key": API_KEY
    }
  }
  const response = await fetch(absoluteUrl, options)
  const contentType = response.headers.get("Content-Type") || ""

  if (contentType.startsWith("application/json")) {
    const json = await response.json()
    const normalized = normalizeCase(json)
    storeIntoCache(url, normalized)
    return normalized
  }

  const text = await response.text()
  storeIntoCache(url, text)
  return text
}
