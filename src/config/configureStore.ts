import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"

import reducers from "../reducers"

export function configureStore() {
  const middlewares = [thunk]
  const enhancers = composeWithDevTools(applyMiddleware(...middlewares))
  const store = createStore(reducers, enhancers)
  return store
}
