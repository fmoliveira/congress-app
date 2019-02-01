import { combineReducers } from "redux"

import { membersListStore } from "../components/MembersList/reducers"
import { requestStatusStore } from "./requestStatus"

export default combineReducers({
  membersListStore,
  requestStatusStore
})
