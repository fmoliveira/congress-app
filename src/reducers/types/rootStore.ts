import { INewsFeedStore } from "../../components/MemberDetails/components/News/reducers"
import { IMemberDetailsStore } from "../../components/MemberDetails/reducers"
import { IMembersListStore } from "../../components/MembersList/reducers"
import { IRequestStatusStore } from "../requestStatus"

export interface IRootStore {
  membersDetailsStore: IMemberDetailsStore
  membersListStore: IMembersListStore
  newsFeedStore: INewsFeedStore
  requestStatusStore: IRequestStatusStore
}
