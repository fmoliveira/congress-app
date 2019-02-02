function isAbsoluteUrl(url: string) {
  const regex = /^http?s:\/\/.*$/
  return regex.test(url)
}

export function getAbsoluteUrl(url: string, baseUrl: string) {
  if (isAbsoluteUrl(url)) {
    return url
  }
  const absoluteUrl = `${baseUrl}${url}`
  return absoluteUrl
}
