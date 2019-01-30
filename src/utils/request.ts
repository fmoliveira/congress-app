import "whatwg-fetch";

const BASE_URL = "https://api.propublica.org/congress/v1";

export function request(relativeUrl: string) {
  const absoluteUrl = `${BASE_URL}/${relativeUrl}`;
  return fetch(absoluteUrl);
}
