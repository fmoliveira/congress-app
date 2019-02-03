export interface IMemberInfo {
  id: string
  firstName: string
  lastName: string
  party: string
  state: string
  district?: string
  nextElection: string
  facebookAccount: string
  twitterAccount: string
  youtubeAccount: string
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
