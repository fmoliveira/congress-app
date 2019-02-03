import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"

import { routerMiddleware } from "connected-react-router"
import { createBrowserHistory } from "history"

import { createRootReducer } from "../reducers"

export const history = createBrowserHistory()

export function configureStore() {
  const middlewares = [thunk, routerMiddleware(history)]
  const enhancers = composeWithDevTools(applyMiddleware(...middlewares))
  const reducers = createRootReducer(history)
  const store = createStore(reducers, enhancers)
  return store
}
