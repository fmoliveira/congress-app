export interface IFeedItem {
  key: number
  title: string
  link: string
  pubDate: string
}

export interface INewsFeed {
  items: IFeedItem[]
}
