import { combineReducers } from "redux"

import { connectRouter } from "connected-react-router"

import { membersDetailsStore } from "../components/MemberDetails/reducers"
import { membersListStore } from "../components/MembersList/reducers"
import { newsFeedStore } from "../components/News/reducers"
import { requestStatusStore } from "./requestStatus"

export function createRootReducer(history: any) {
  const router = connectRouter(history)
  return combineReducers({
    membersDetailsStore,
    membersListStore,
    newsFeedStore,
    requestStatusStore,
    router
  })
}
