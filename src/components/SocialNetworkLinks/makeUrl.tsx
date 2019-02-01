export function makeUrl(type: string, handle: string) {
  switch (type) {
    case "facebook":
      return `https://www.facebook.com/${handle}`

    case "twitter":
      return `https://twitter.com/${handle}`

    case "youtube":
      return `https://www.youtube.com/user/${handle}`

    default:
      return ""
  }
}
