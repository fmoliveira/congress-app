export function getBaseUrl(url: string): string {
  const anchor = document.createElement("a")
  anchor.href = url
  return anchor.origin
}
