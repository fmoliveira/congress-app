import { combineReducers } from "redux"

import { membersDetailsStore } from "../components/MemberDetails/reducers"
import { membersListStore } from "../components/MembersList/reducers"
import { newsFeedStore } from "../components/News/reducers"
import { requestStatusStore } from "./requestStatus"

export default combineReducers({
  membersDetailsStore,
  membersListStore,
  newsFeedStore,
  requestStatusStore
})
