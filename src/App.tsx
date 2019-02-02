import React from "react"
import { Provider } from "react-redux"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import { Layout, MemberDetails, MembersList, NotFound } from "./components"

import { configureStore } from "./config"
const store = configureStore()

export const App = () => (
  <Provider store={store}>
    <Router>
      <Layout>
        <Switch>
          <Route exact={true} path="/" component={MembersList} />
          <Route path="/list" component={MembersList} />
          <Route path="/members/:memberId" component={MemberDetails} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  </Provider>
)
