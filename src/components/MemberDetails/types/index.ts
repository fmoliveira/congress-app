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

export interface IMemberDetails {
  memberId: string
  firstName: string
  lastName: string
  currentParty: string
  rssUrl: string
  facebookAccount: string
  twitterAccount: string
  youtubeAccount: string
  roles: IMemberRole[]
}

export interface IMemberRole {
  congress: string
  chamber: string
  state: string
  party: string
  startDate: string
  endDate: string
  office: string
  committees: ICommittee[]
  subcommittees: ICommittee[]
}

export interface ICommittee {
  code: string
  name: string
  side: string
  title: string
  beginDate: string
  endDate: string
}

export interface IMemberDetailsResponse {
  results: [IMemberDetails]
}
