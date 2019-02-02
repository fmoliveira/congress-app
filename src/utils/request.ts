import "whatwg-fetch"

import { normalizeCase } from "./normalizeCase"

const BASE_URL = "https://api.propublica.org/congress/v1"

const API_KEY = process.env.REACT_APP_PROPUBLICA_API_KEY || ""

function isAbsoluteUrl(url: string) {
  const regex = /^http?s:\/\/.*$/
  return regex.test(url)
}

function getAbsoluteUrl(url: string) {
  if (isAbsoluteUrl(url)) {
    return url
  }
  const absoluteUrl = `${BASE_URL}/${url}`
  return absoluteUrl
}

export async function request(url: string) {
  const absoluteUrl = getAbsoluteUrl(url)
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
