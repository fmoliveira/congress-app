import "whatwg-fetch"

import { normalizeCase } from "./normalizeCase"

const BASE_URL = "https://api.propublica.org/congress/v1"

const API_KEY = process.env.REACT_APP_PROPUBLICA_API_KEY || ""

export function request(relativeUrl: string) {
  const absoluteUrl = `${BASE_URL}/${relativeUrl}`
  const options = {
    headers: {
      "X-API-Key": API_KEY
    }
  }
  return fetch(absoluteUrl, options)
    .then(deserializeJson)
    .then(normalizeCase)
}

function deserializeJson(input: Response) {
  return input.json()
}
