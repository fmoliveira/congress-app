export interface IMemberInfo {
  id: string
  firstName: string
  lastName?: string
  gender?: string
  party?: string
  state?: string
  district?: string
  office?: string
  nextElection?: string
  rssUrl?: string
  facebookAccount?: string
  twitterAccount?: string
  youtubeAccount?: string
}

export interface IMembersListResponse {
  results: [
    {
      congress: string
      chamber: string
      numResults: number
      members: [IMemberInfo]
    }
  ]
}
