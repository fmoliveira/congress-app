import "whatwg-fetch"

import { getAbsoluteUrl, normalizeCase } from "./index"

const BASE_URL = "https://api.propublica.org/congress/v1/"

const API_KEY = process.env.REACT_APP_PROPUBLICA_API_KEY || ""

export async function request(url: string) {
  const absoluteUrl = getAbsoluteUrl(url, BASE_URL)
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
    return normalized
  }

  const text = await response.text()
  return text
}
