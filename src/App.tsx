import React from "react"
import { Provider } from "react-redux"

import { Layout, MembersList } from "./components"

import { configureStore } from "./config"
const store = configureStore()

export const App = () => (
  <Provider store={store}>
    <Layout>
      <MembersList />
    </Layout>
  </Provider>
)
