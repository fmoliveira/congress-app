import { combineReducers } from "redux"

import { membersDetailsStore } from "../components/MemberDetails/reducers"
import { membersListStore } from "../components/MembersList/reducers"
import { requestStatusStore } from "./requestStatus"

export default combineReducers({
  membersDetailsStore,
  membersListStore,
  requestStatusStore
})
